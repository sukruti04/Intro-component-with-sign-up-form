const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const firstName = form['first-name'].value;
  const lastName = form['last-name'].value;
  const email = form['email'].value;
  const password = form['password'].value;

  if (firstName === '') {
    addErrorTo('first-name', 'First Name cannot be empty');
  } else {
    removeErrorFrom('first-name');
  }
  if (lastName === '') {
    addErrorTo('last-name', 'Last Name cannot be empty');
  } else {
    removeErrorFrom('last-name');
  }
  if (email === '') {
    document.getElementById("email").placeholder = "email@example/com";
    addErrorTo('email', 'Email cannot be empty');
  } else if (!isValid(email)) {
    addErrorTo('email', 'Looks like this is not an email');
  } else {
    removeErrorFrom('email');
  }
  if (password === '') {
    addErrorTo('password', 'Password cannot be empty');
  } else {
    removeErrorFrom('password');
  }
});

function addErrorTo(field, message) {
  const formControl = form[field].parentNode
  formControl.classList.add('error')
  const small = formControl.querySelector('small');
  small.innerText = message;
}


function removeErrorFrom(field) {
  const formControl = form[field].parentNode
  formControl.classList.remove('error')
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());

}
