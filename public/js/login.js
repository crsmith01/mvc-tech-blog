// const swal = require('sweetalert');

const loginForm = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page (aka the dashboard)
      document.location.replace('/dashboard');
    } else {
      // alert(response.statusText);
      console.log(response.statusText);
      console.log('what is happening');
      swal('Oops!', 'There seems to be an error. Please try again.', 'error');
    }
  }
};


document
  // .querySelector('.login-form').addEventListener('submit', loginForm);
  .querySelector('#login-form').addEventListener('submit', loginForm);