/**
 * Lead Notification & Routing Utility
 * Handles:
 * 1. Instant WhatsApp Lead Forwarding to 9512592211
 * 2. Email Notifications via Web3Forms API to admissions@vasanthagroup.edu.in
 * 3. Local Lead Storage (backup in browser localStorage)
 */

export const COLLEGE_CONTACT = {
  whatsappNumber: '919512592211', // Indian country code 91 + 10-digit number
  displayPhone: '+91 9512592211',
  alternatePhone: '+91 8154968596',
  admissionsEmail: 'admissions@vasanthagroup.edu.in',
  infoEmail: 'info@vasanthagroup.edu.in',
  // Free Web3Forms Access Key for admissions@vasanthagroup.edu.in
  // If an account key is provided, emails arrive in inbox automatically.
  // A default public key can be set here.
  web3formsKey: '7c6a0b98-0c66-41dc-908f-e18e803c73ce' 
};

/**
 * Format WhatsApp lead message for Admission Applications
 */
export function formatAdmissionWhatsAppMessage(data) {
  const dateStr = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  let msg = `🎓 *NEW ADMISSION APPLICATION (2026–27)*\n`;
  msg += `*VASANTHA GROUP OF EDUCATION, Bidar*\n`;
  msg += `------------------------------------\n`;
  msg += `👤 *Candidate Name:* ${data.fullName || data.full_name || 'N/A'}\n`;

  if (data.guardianName || data.guardian_name) {
    msg += `👨‍👧 *Father/Guardian:* ${data.guardianName || data.guardian_name}\n`;
  }

  msg += `📚 *Program:* ${data.course || 'B.Sc. Nursing'}\n`;
  msg += `📱 *Mobile Number:* ${data.phone || 'N/A'}\n`;

  if (data.email) {
    msg += `✉️ *Email:* ${data.email}\n`;
  }

  if (data.gender) {
    msg += `⚧ *Gender:* ${data.gender}\n`;
  }

  if (data.pcbScore || data.pcb_score) {
    msg += `📊 *12th / PUC PCB Marks:* ${data.pcbScore || data.pcb_score}\n`;
  }

  if (data.hostelNeeded || data.hostel_needed) {
    msg += `🏠 *Hostel Required:* ${data.hostelNeeded || data.hostel_needed}\n`;
  }

  if (data.cityState || data.city_state) {
    msg += `📍 *City & State:* ${data.cityState || data.city_state}\n`;
  }

  if (data.message) {
    msg += `💬 *Query / Notes:* ${data.message}\n`;
  }

  msg += `------------------------------------\n`;
  msg += `⏰ *Submitted:* ${dateStr}\n`;
  msg += `🌐 *Source:* College Official Website`;

  return msg;
}

/**
 * Format WhatsApp lead message for Contact & General Enquiries
 */
export function formatContactWhatsAppMessage(data) {
  const dateStr = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  let msg = `📩 *NEW CAMPUS ENQUIRY / MESSAGE*\n`;
  msg += `*VASANTHA GROUP OF EDUCATION, Bidar*\n`;
  msg += `------------------------------------\n`;
  msg += `👤 *Name:* ${data.name || data.fullName || 'N/A'}\n`;
  msg += `📱 *Mobile Number:* ${data.phone || 'N/A'}\n`;

  if (data.email) {
    msg += `✉️ *Email:* ${data.email}\n`;
  }

  msg += `📚 *Interested Course:* ${data.course || 'General Enquiry'}\n`;

  if (data.message) {
    msg += `💬 *Enquiry Details:*\n"${data.message}"\n`;
  }

  msg += `------------------------------------\n`;
  msg += `⏰ *Submitted:* ${dateStr}\n`;
  msg += `🌐 *Source:* College Contact Portal`;

  return msg;
}

/**
 * Open WhatsApp directly with formatted message to 9512592211
 */
export function openWhatsAppChat(message, phoneNumber = COLLEGE_CONTACT.whatsappNumber) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedMsg}`;

  // Try opening in a new window/tab
  try {
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      // Pop-up blocked fallback: direct location change after small delay
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 500);
    }
  } catch (err) {
    console.error('Error opening WhatsApp:', err);
    window.location.href = whatsappUrl;
  }
}

/**
 * Send Email Notification via Web3Forms API
 */
export async function sendEmailNotification(subject, data) {
  try {
    const payload = {
      access_key: COLLEGE_CONTACT.web3formsKey,
      subject: subject || 'New Admission Application - VASANTHA GROUP OF EDUCATION',
      from_name: 'VASANTHA GROUP OF EDUCATION Admissions Portal',
      to: COLLEGE_CONTACT.admissionsEmail,
      ...data
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.warn('Email notification dispatch notice:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Backup lead to browser localStorage so records are never lost
 */
export function saveLeadLocally(type, data) {
  try {
    const storageKey = 'vasantha_college_leads';
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const newEntry = {
      id: 'lead_' + Date.now(),
      type,
      data,
      timestamp: new Date().toISOString()
    };
    existing.unshift(newEntry);
    // Keep last 100 leads
    localStorage.setItem(storageKey, JSON.stringify(existing.slice(0, 100)));
  } catch (e) {
    console.warn('LocalStorage lead backup notice:', e);
  }
}

/**
 * Unified Submission Handler:
 * 1. Saves lead locally
 * 2. Fires email notification in background
 * 3. Triggers direct WhatsApp forwarding
 */
export function processFormSubmission({ type = 'admission', data }) {
  // 1. Save backup locally
  saveLeadLocally(type, data);

  // 2. Email Notification
  const subject = type === 'contact'
    ? `Campus Enquiry from ${data.name || 'Visitor'} - ${data.course || 'Admissions'}`
    : `New Admission Application: ${data.fullName || data.full_name} (${data.course || 'B.Sc. Nursing'})`;

  sendEmailNotification(subject, data);

  // 3. Format WhatsApp Message
  const waMsg = type === 'contact'
    ? formatContactWhatsAppMessage(data)
    : formatAdmissionWhatsAppMessage(data);

  // 4. Open WhatsApp
  openWhatsAppChat(waMsg, COLLEGE_CONTACT.whatsappNumber);
}
