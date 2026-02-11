document.getElementById('year').textContent = new Date().getFullYear();

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.target.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Thanks! We will contact you soon.';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    event.target.reset();
  }, 2500);
});
