'use strict';

const container = document.createElement('div');
container.className = 'main-container';

const headContainer = document.createElement('header');
headContainer.className = 'header';

const h1Container = document.createElement('h1');
h1Container.textContent = 'CREATE AN ACCOUNT';

const pContainer = document.createElement('p');
pContainer.textContent = 'We always keep your name and email address private.';

const formContainer = document.createElement('form'); 
formContainer.className = 'form-container';

const inputWrapper = document.createElement('div');
inputWrapper.className = 'input-wrapper';

const inputContainer1 = document.createElement('div');
inputContainer1.className = 'input-container';

const inputContainer2 = document.createElement('div');
inputContainer2.className = 'input-container';

const textInputFirstName = document.createElement('input'); 
textInputFirstName.type = 'text';
textInputFirstName.placeholder = 'First name'; 
textInputFirstName.required = true;
textInputFirstName.dataset.field = 'firstName';
textInputFirstName.addEventListener('input', checkForm);

const textInputLastName = document.createElement('input'); 
textInputLastName.type = 'text';
textInputLastName.placeholder = 'Last Name';
textInputLastName.dataset.field = 'lastName';

const textInputDisplayName = document.createElement('input');
textInputDisplayName.type = 'text';
textInputDisplayName.placeholder = 'Display Name'; 
textInputDisplayName.dataset.field = 'displayName';

const textInputEmailAddress = document.createElement('input'); 
textInputEmailAddress.type = 'text';
textInputEmailAddress.placeholder = 'Email Address';
textInputEmailAddress.dataset.field = 'emailAddress';
textInputEmailAddress.id = 'email';
textInputEmailAddress.addEventListener('input', checkForm);

const textInputPassword = document.createElement('input'); 
textInputPassword.type = 'password'; 
textInputPassword.placeholder = 'Password';
textInputPassword.required = true;
textInputPassword.dataset.field = 'password';
textInputPassword.id = 'password';
textInputPassword.addEventListener('input', checkForm);

const textInputPasswordConfirmation = document.createElement('input'); 
textInputPasswordConfirmation.type = 'password'; 
textInputPasswordConfirmation.placeholder = 'Password Confirmation';
textInputPasswordConfirmation.dataset.field = 'passwordConfirmation';
textInputPasswordConfirmation.id = 'passwordConfirmation';
textInputPasswordConfirmation.addEventListener('input', checkForm);

const radioContainer = document.createElement('div');
radioContainer.className = 'radio-container';

const radioGroup = document.createElement('div');
radioGroup.className = 'radio-group';

const radio = document.createElement('input'); 
radio.name = 'role';
radio.id = 'role-buyer';
radio.type = 'radio';
radio.checked = true;

const radioOuter = document.createElement('label'); 
radioOuter.className = 'radio-outer';
radioOuter.htmlFor = 'role-buyer';

const radioInner = document.createElement('span');
radioInner.className = 'radio-inner';

const radioTitle = document.createElement('span');
radioTitle.className = 'radio-title';
radioTitle.textContent = 'Join As a Buyer';

const radioText = document.createElement('span');
radioText.className = 'radio-text';
radioText.textContent = 'I am looking for a Name, Logo or Tagline for my business, brand or product.';

const radioGroupCreative = document.createElement('div');
radioGroupCreative.className = 'radio-group';

const radioCreative = document.createElement('input');
radioCreative.type = 'radio';
radioCreative.name = 'role';          
radioCreative.id = 'role-creative';

const labelCreative = document.createElement('label');
labelCreative.className = 'radio-outer';
labelCreative.htmlFor = 'role-creative'; 

const innerCreative = document.createElement('span');
innerCreative.className = 'radio-inner';

const titleCreative = document.createElement('span');
titleCreative.className = 'radio-title';
titleCreative.textContent = 'Join As a Creative or Marketplace Seller';

const textCreative = document.createElement('span');
textCreative.className = 'radio-text';
textCreative.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';

const checkboxContainer = document.createElement('div');
checkboxContainer.className = 'checkbox-container';

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'marketing';

const labelCheckbox = document.createElement('label');
labelCheckbox.htmlFor = 'marketing'; 
labelCheckbox.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';

const buttonContainer = document.createElement('div');
buttonContainer.className = 'button-container';

const submitButtonContainer = document.createElement('button');
submitButtonContainer.type = 'submit';
submitButtonContainer.textContent = 'Create account';
submitButtonContainer.disabled = true;

headContainer.appendChild(h1Container);
headContainer.appendChild(pContainer);

inputContainer1.appendChild(textInputFirstName);
inputContainer1.appendChild(textInputDisplayName);
inputContainer1.appendChild(textInputPassword);

inputContainer2.appendChild(textInputLastName);
inputContainer2.appendChild(textInputEmailAddress);
inputContainer2.appendChild(textInputPasswordConfirmation);

inputWrapper.appendChild(inputContainer1);
inputWrapper.appendChild(inputContainer2);

radioInner.appendChild(radioTitle);
radioInner.appendChild(radioText);
radioOuter.appendChild(radio);      
radioOuter.appendChild(radioInner); 
radioGroup.appendChild(radioOuter);

innerCreative.appendChild(titleCreative);
innerCreative.appendChild(textCreative);
labelCreative.appendChild(radioCreative);
labelCreative.appendChild(innerCreative);
radioGroupCreative.appendChild(labelCreative);

radioContainer.appendChild(radioGroup);
radioContainer.appendChild(radioGroupCreative); 

checkboxContainer.appendChild(checkbox);
checkboxContainer.appendChild(labelCheckbox);

buttonContainer.appendChild(submitButtonContainer);

formContainer.appendChild(inputWrapper);
formContainer.appendChild(radioContainer);
formContainer.appendChild(checkboxContainer);
formContainer.appendChild(buttonContainer);

container.appendChild(headContainer);
container.appendChild(formContainer); 

document.body.appendChild(container);

class Person {
  constructor(...args) {
   args.forEach(({name, value}) => this[name] = value);
  }
}

formContainer.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!validationEmail(email.value)) {
    showError();
    return; 
  }

  const fields = [...formContainer.querySelectorAll('input[data-field]')]
    .map(input => ({ name: input.dataset.field, value: input.value }));
 
  const person = new Person(...fields);
  localStorage.setItem(person.lastName, JSON.stringify(person));
  
});

function validationEmail(email) {
  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return reg.test(String(email).toLowerCase());
}

const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

const emailError = document.createElement('span');
emailError.className = 'error';
textInputEmailAddress.insertAdjacentElement('afterend', emailError);

const passwordError = document.createElement('span');
passwordError.className = 'error';
textInputPassword.insertAdjacentElement('afterend', passwordError);

const passwordConfirmationError = document.createElement('span');
passwordConfirmationError.className = 'error';
textInputPasswordConfirmation.insertAdjacentElement('afterend', passwordConfirmationError); // ← було passwordConfirmation (інпут)

email.addEventListener('input', function () {
  if (email.value === '') {
    emailError.textContent = 'You need to enter an e-mail address (example@gmail.com)';
    emailError.className = 'error active';
  } else if (!validationEmail(email.value)) {
    emailError.textContent = 'Entered value needs to be an e-mail address (example@gmail.com).';
    emailError.className = 'error active';
  } else {
    emailError.textContent = '';
    emailError.className = 'error';
  }
});

function checkPasswords() {
  if (password.value && passwordConfirmation.value && password.value !== passwordConfirmation.value) {
    passwordError.textContent = 'Passwords do not match';
    passwordError.className = 'error active';
    passwordConfirmationError.textContent = 'Passwords do not match';
    passwordConfirmationError.className = 'error active';
  } else {
    passwordError.textContent = '';
    passwordError.className = 'error';
    passwordConfirmationError.textContent = '';
    passwordConfirmationError.className = 'error';
  }
  checkForm();
}

password.addEventListener('input', checkPasswords);
passwordConfirmation.addEventListener('input', checkPasswords);

function checkForm() {
  const firstNameFilled = textInputFirstName.value.trim() !== '';
  const passwordFilled = textInputPassword.value.trim() !== '';
  const passwordMatch = password.value === passwordConfirmation.value;
  const emailValid = validationEmail(textInputEmailAddress.value);

  submitButtonContainer.disabled = !(firstNameFilled && passwordFilled && passwordMatch && emailValid);
}

textInputFirstName.addEventListener('input', checkForm);
email.addEventListener('input', checkForm);


