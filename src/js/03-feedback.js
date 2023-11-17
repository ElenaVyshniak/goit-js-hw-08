import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

const stateOfStorage = JSON.parse(localStorage.getItem(localStorageKey) || {});
messageInput.value = stateOfStorage.message || '';
emailInput.value = stateOfStorage.email || '';

form.addEventListener('input', function () {
  saveToLocalStorage();
});

const handleSubmit = event => {
  event.preventDefault();

  console.log('Email: ' + emailInput.value);
  console.log('Message: ' + messageInput.value);

  localStorage.removeItem(localStorageKey);

  form.reset();
};

form.addEventListener('submit', handleSubmit);

const saveToLocalStorage = throttle(() => {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}, 500);
