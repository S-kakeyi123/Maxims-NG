
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('enquiryForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const recipient = 'YOUR-COMPANY-EMAIL@example.com'; // Replace before launch.
    const subject = encodeURIComponent(`MAXIMS website enquiry: ${data.get('subject')}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\nEnquiry: ${data.get('subject')}\n\n${data.get('message')}`
    );
    const status = document.getElementById('formStatus');
    if (status) status.textContent = 'Your email application will open. The company email must be configured before launch.';
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
