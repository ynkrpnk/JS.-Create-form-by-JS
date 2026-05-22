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

const textInputLastName = document.createElement('input'); 
textInputLastName.type = 'text';
textInputLastName.placeholder = 'Last Name';

const textInputDisplayName = document.createElement('input');
textInputDisplayName.type = 'text';
textInputDisplayName.placeholder = 'Display Name'; 

const textInputEmailAddress = document.createElement('input'); 
textInputEmailAddress.type = 'email'; 
textInputEmailAddress.placeholder = 'Email Address';

const textInputPassword = document.createElement('input'); 
textInputPassword.type = 'password'; 
textInputPassword.placeholder = 'Password';

const textInputPasswordConfirmation = document.createElement('input'); 
textInputPasswordConfirmation.type = 'password'; 
textInputPasswordConfirmation.placeholder = 'Password Confirmation';

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