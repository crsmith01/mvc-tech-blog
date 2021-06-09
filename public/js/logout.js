const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    // Redirects browser to homepage when user logs out
    document.location.replace('/');
  } else {
    // alert(response.statusText);
    console.log(response.statusText);
    swal('Oops!', 'There seems to be an error. Please try again.', 'error');
  }
};

document.querySelector('#logout').addEventListener('submit', logout);