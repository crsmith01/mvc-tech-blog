const deletePost = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        // alert(response.statusText);
        console.log(response.statusText);
        swal('Oops!', 'There seems to be an error. Please try again.', 'error');
      }; 
};

document.querySelector('.delete-post-btn').addEventListener('click', deletePost);