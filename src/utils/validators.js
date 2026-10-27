/**
 * Form Validation Utilities for VASANTHA GROUP OF EDUCATION
 * Provides strict, user-friendly field-level validation and real-time guidance.
 */

// Validate Candidate / Guardian Full Name
export function validateName(name, fieldLabel = 'Full Name', isRequired = true) {
  const trimmed = (name || '').trim();

  if (!trimmed) {
    return isRequired
      ? { isValid: false, error: `${fieldLabel} is required.` }
      : { isValid: true, error: '' };
  }

  // 1. Starting letter cannot be a digit
  if (/^\d/.test(trimmed)) {
    return {
      isValid: false,
      error: `${fieldLabel} cannot start with a number. Please start with a letter.`
    };
  }

  // 2. Starting letter must be an alphabet
  if (!/^[a-zA-Z]/.test(trimmed)) {
    return {
      isValid: false,
      error: `${fieldLabel} must begin with an alphabet letter.`
    };
  }

  // 3. Name cannot contain numbers anywhere
  if (/\d/.test(trimmed)) {
    return {
      isValid: false,
      error: `${fieldLabel} cannot contain numbers. Only letters and spaces are allowed.`
    };
  }

  // 4. Only letters, spaces, dots, hyphens, and apostrophes allowed
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
    return {
      isValid: false,
      error: `${fieldLabel} can only contain letters, spaces, and punctuation like dots or hyphens.`
    };
  }

  // 5. Minimum length
  if (trimmed.length < 3) {
    return {
      isValid: false,
      error: `${fieldLabel} must be at least 3 characters long.`
    };
  }

  // 6. Maximum length
  if (trimmed.length > 60) {
    return {
      isValid: false,
      error: `${fieldLabel} cannot exceed 60 characters.`
    };
  }

  // 7. Must contain at least two letters
  const letterCount = (trimmed.match(/[a-zA-Z]/g) || []).length;
  if (letterCount < 2) {
    return {
      isValid: false,
      error: `Please enter a valid ${fieldLabel.toLowerCase()}.`
    };
  }

  return { isValid: true, error: '' };
}

// Validate Mobile Number (Indian 10-digit mobile starting with 6, 7, 8, or 9)
export function validatePhone(phone, isRequired = true) {
  const raw = (phone || '').trim();

  if (!raw) {
    return isRequired
      ? { isValid: false, error: 'Mobile number is required.' }
      : { isValid: true, error: '' };
  }

  // Strip standard prefixes, hyphens, spaces
  let cleaned = raw.replace(/[\s-]/g, '');
  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    cleaned = cleaned.slice(1);
  }

  // Check if non-digits remain
  if (/[^\d]/.test(cleaned)) {
    return {
      isValid: false,
      error: 'Mobile number must contain digits only.'
    };
  }

  // Check starting digit
  if (cleaned.length > 0 && !/^[6-9]/.test(cleaned)) {
    return {
      isValid: false,
      error: 'Mobile number must start with 6, 7, 8, or 9.'
    };
  }

  // Check exact length
  if (cleaned.length !== 10) {
    return {
      isValid: false,
      error: `Please enter a complete 10-digit mobile number (${cleaned.length}/10 entered).`
    };
  }

  // Check repetitive dummy numbers like 0000000000, 1111111111, ..., 9999999999
  if (/^(\d)\1{9}$/.test(cleaned)) {
    return {
      isValid: false,
      error: 'Please enter a valid, active mobile number.'
    };
  }

  return { isValid: true, error: '', cleaned };
}

// Validate Email Address
export function validateEmail(email, isRequired = false) {
  const trimmed = (email || '').trim();

  if (!trimmed) {
    return isRequired
      ? { isValid: false, error: 'Email address is required.' }
      : { isValid: true, error: '' };
  }

  // Comprehensive RFC-compliant regex with valid TLD requirement
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address (e.g. student@gmail.com).'
    };
  }

  // Check TLD length
  const parts = trimmed.split('.');
  const tld = parts[parts.length - 1];
  if (!tld || tld.length < 2) {
    return {
      isValid: false,
      error: 'Please enter a valid email domain (e.g. .com, .in, .edu).'
    };
  }

  return { isValid: true, error: '' };
}

// Validate 12th / PUC PCB Marks
export function validatePcbScore(score, isRequired = true) {
  const trimmed = (score || '').trim();

  if (!trimmed) {
    return isRequired
      ? { isValid: false, error: '12th / PUC PCB Marks are required.' }
      : { isValid: true, error: '' };
  }

  // Allow "Result Awaited" or "Appearing"
  const awaitedRegex = /^(result\s*awaited|appearing|awaiting|pending)/i;
  if (awaitedRegex.test(trimmed)) {
    return { isValid: true, error: '' };
  }

  // If numeric percentage
  const numMatch = trimmed.match(/^(\d{1,3}(?:\.\d{1,2})?)\s*%?$/);
  if (numMatch) {
    const val = parseFloat(numMatch[1]);
    if (val < 35) {
      return {
        isValid: false,
        error: 'Minimum eligibility for nursing admission requires at least 35% in PCB.'
      };
    }
    if (val > 100) {
      return {
        isValid: false,
        error: 'PCB Marks percentage cannot exceed 100%.'
      };
    }
    return { isValid: true, error: '' };
  }

  // Text like "72% in PCB"
  const extractNum = trimmed.match(/(\d{1,3}(?:\.\d{1,2})?)/);
  if (extractNum) {
    const val = parseFloat(extractNum[1]);
    if (val < 35) {
      return {
        isValid: false,
        error: 'Minimum eligibility requires at least 35% in PCB.'
      };
    }
    if (val > 100) {
      return {
        isValid: false,
        error: 'PCB Marks percentage cannot exceed 100%.'
      };
    }
    return { isValid: true, error: '' };
  }

  return {
    isValid: false,
    error: "Please enter your PCB percentage (e.g. 70% or 72) or 'Result Awaited'."
  };
}

// Validate City & State
export function validateCityState(cityState, isRequired = true) {
  const trimmed = (cityState || '').trim();

  if (!trimmed) {
    return isRequired
      ? { isValid: false, error: 'Permanent City & State is required.' }
      : { isValid: true, error: '' };
  }

  if (/^\d/.test(trimmed)) {
    return {
      isValid: false,
      error: 'City & State cannot start with a number.'
    };
  }

  if (!/^[a-zA-Z]/.test(trimmed)) {
    return {
      isValid: false,
      error: 'City & State must start with an alphabet letter.'
    };
  }

  if (trimmed.length < 3) {
    return {
      isValid: false,
      error: 'Please enter a valid City & State (e.g. Bidar, Karnataka).'
    };
  }

  return { isValid: true, error: '' };
}

// Validate Message / Query
export function validateMessage(message, isRequired = false, minLength = 10) {
  const trimmed = (message || '').trim();

  if (!trimmed) {
    return isRequired
      ? { isValid: false, error: 'Your query or message is required.' }
      : { isValid: true, error: '' };
  }

  if (trimmed.length < minLength) {
    return {
      isValid: false,
      error: `Message must be at least ${minLength} characters describing your query.`
    };
  }

  return { isValid: true, error: '' };
}
