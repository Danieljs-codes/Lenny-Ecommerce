import './style.css';

const password = document.getElementById('input-password');
const showPassword = document.getElementById('show-password');

let hidePassword = true;

password.addEventListener('click', function (e) {});

showPassword.addEventListener('click', (e) => {
  e.preventDefault();
  if (!hidePassword) {
    password.type = 'text';
    hidePassword = !hidePassword;
  } else {
    password.type = 'password';
    hidePassword = !hidePassword;
  }
});

const showForm = document.getElementById('show-form');
const form = document.getElementById('form');

showForm.addEventListener('click', function () {
  form.classList.toggle('hidden')
  form.classList.toggle('flex')
});
