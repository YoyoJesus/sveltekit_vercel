// EmailJS Configuration
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
declare const emailjs: any;

export function initEmailForm() {
  // Initialize EmailJS
  if (typeof emailjs !== 'undefined') {
    emailjs.init(publicKey);
  }

  // DOM Elements
  const modal = document.getElementById('contact-modal') as HTMLElement;
  const form = document.getElementById('contact-form') as HTMLFormElement;
  const closeBtn = document.getElementById('close-modal') as HTMLButtonElement;
  const openBtn = document.getElementById('open-contact-form') as HTMLAnchorElement;
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
  const toast = document.getElementById('toast') as HTMLElement;
  const toastMessage = document.getElementById('toast-message') as HTMLElement;

  if (!modal || !form || !closeBtn || !openBtn || !submitBtn || !toast || !toastMessage) {
    console.warn('Email form elements not found');
    return;
  }

  function showToast(message: string, isError = false) {
    toastMessage.textContent = message;
    toast.className = `toast active ${isError ? 'error' : 'success'}`;
    
    setTimeout(() => {
      toast.classList.remove('active');
    }, 5000);
  }

  // Open modal
  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    form.reset();
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await emailjs.sendForm(serviceId, templateId, form, publicKey);
      
      console.log('EmailJS Response:', response);
      showToast("Message sent successfully! I'll get back to you soon.", false);
      closeModal();
    } catch (error) {
      console.error('EmailJS Error:', error);
      showToast('Failed to send message. Please try again.', true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  });
}
