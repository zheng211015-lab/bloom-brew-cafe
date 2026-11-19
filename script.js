const form = document.querySelector('.contact-form');
const preview = document.querySelector('#preview');
const button = document.querySelector('#preview-button');

function showPreview() {
  if (!form.reportValidity()) return;
  preview.textContent = [
    'Message preview',
    'From: ' + form.elements.name.value.trim(),
    'Reply to: ' + form.elements.email.value.trim(),
    form.elements.message.value.trim()
  ].join('\n');
}

button.addEventListener('click', showPreview);
form.addEventListener('submit', event => {
  event.preventDefault();
  showPreview();
});
form.addEventListener('input', () => { preview.textContent = ''; });
