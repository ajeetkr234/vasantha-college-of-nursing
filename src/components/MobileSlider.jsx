import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * MobileSlider
 * On mobile screens (<= breakpoint), renders children as a touch-swipeable one-by-one slide carousel.
 * On desktop screens (> breakpoint), renders children in their standard grid (desktopClassName).
 */
export default function MobileSlider({
  children,
  desktopClassName = '',
  className = '',
  breakpoint = 768,
  showArrows = true,
  showDots = true,
  showCounter = true,
  autoPlay = false,
  interval = 4500,
  loop = true,
  ariaLabel = 'Content slider'
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchDeltaX, setTouchDeltaX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const timerRef = useRef(null);

  // Flatten and filter valid children
  const items = React.Children.toArray(children).filter(Boolean);
  const total = items.length;

  // Responsive listener
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  // Keep currentIndex in bounds if items change
  useEffect(() => {
    if (currentIndex >= total && total > 0) {
      setCurrentIndex(0);
    }
  }, [total, currentIndex]);

  // Next and Prev handlers
  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex(prev => {
      if (prev < total - 1) return prev + 1;
      return loop ? 0 : prev;
    });
  }, [total, loop]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex(prev => {
      if (prev > 0) return prev - 1;
      return loop ? total - 1 : prev;
    });
  }, [total, loop]);

  const goToSlide = (idx) => {
    if (idx >= 0 && idx < total) {
      setCurrentIndex(idx);
    }
  };

  // Auto-play timer
  useEffect(() => {
    if (!isMobile || !autoPlay || total <= 1) return;
    timerRef.current = setInterval(() => {
      handleNext();
    }, interval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isMobile, autoPlay, interval, handleNext, total]);

  // Pause on user interaction
  const pauseAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    pauseAutoPlay();
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
    setIsSwiping(true);
  };

  const onTouchMove = (e) => {
    if (!isSwiping) return;
    const currentX = e.touches[0].clientX;
    setTouchDeltaX(currentX - touchStartX);
  };

  const onTouchEnd = () => {
    if (!isSwiping) return;
    setIsSwiping(false);
    const threshold = 45; // Min px to trigger slide
    if (touchDeltaX < -threshold) {
      handleNext();
    } else if (touchDeltaX > threshold) {
      handlePrev();
    }
    setTouchDeltaX(0);
  };

  // If on desktop, render the standard desktop grid
  if (!isMobile) {
    return <div className={desktopClassName}>{children}</div>;
  }

  // If mobile with 0 or 1 item, render directly
  if (total <= 1) {
    return <div className={`mobile-slider-single ${className}`}>{children}</div>;
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  return (
    <div
      className={`mobile-slider-wrapper ${className}`}
      aria-label={ariaLabel}
      role="region"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Slider Header Bar (Counter + Prev/Next Controls) */}
      {(showCounter || showArrows) && (
        <div className="mobile-slider-top-bar">
          {showCounter && (
            <div className="mobile-slider-counter">
              <span className="current-num">{currentIndex + 1}</span>
              <span className="divider">/</span>
              <span className="total-num">{total}</span>
              <span className="slide-tag">Swipe ‹ ›</span>
            </div>
          )}

          {showArrows && (
            <div className="mobile-slider-arrows">
              <button
                type="button"
                className="mobile-arrow-btn prev"
                onClick={handlePrev}
                aria-label="Previous slide"
                disabled={!loop && currentIndex === 0}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className="mobile-arrow-btn next"
                onClick={handleNext}
                aria-label="Next slide"
                disabled={!loop && currentIndex === total - 1}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Slide Viewport & Track */}
      <div className="mobile-slider-viewport">
        <div
          className="mobile-slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isSwiping && Math.abs(touchDeltaX) > 0 ? 'none' : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`mobile-slide-item ${idx === currentIndex ? 'active-slide' : ''}`}
              aria-hidden={idx !== currentIndex}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pagination Dots */}
      {showDots && total > 1 && (
        <div className="mobile-slider-dots-row" role="tablist">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`mobile-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              role="tab"
              aria-selected={idx === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
