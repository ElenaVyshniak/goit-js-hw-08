// Отримати елемент форми
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  const jsonString = JSON.stringify(formData);

  localStorage.setItem('feedback-form-state', jsonString);
};

form.addEventListener('input', saveFormData);

const populateFormFields = () => {
  const jsonString = localStorage.getItem('feedback-form-state');

  if (jsonString) {
    const formData = JSON.parse(jsonString);

    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

document.addEventListener('DOMContentLoaded', populateFormFields);

const handleSubmit = event => {
  event.preventDefault();

  const jsonString = localStorage.getItem('feedback-form-state');

  if (jsonString) {
    const formData = JSON.parse(jsonString);
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
};
form.addEventListener('submit', handleSubmit);
import throttle from 'lodash.throttle';
const savedFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  const jsonString = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', jsonString);
};
const throttledSaveFormData = throttle(savedFormData, 500);
form.addEventListener('input', throttledSaveFormData);
