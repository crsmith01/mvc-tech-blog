const newPost = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      // Redirect to the dashboard if the post is successfully added
      document.location.replace('/dashboard');
    } else {
      // alert(response.statusText);
      console.log(response.statusText);
      swal('Oops!', 'There seems to be an error. Please try again.', 'error');
    };
};
  
document.querySelector('.new-post-form').addEventListener('submit', newPost);