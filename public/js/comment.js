const addComment = async (event) => {
    event.preventDefault();
  
    
    const content = document.querySelector('textarea[name="comment-body"]').value.trim();
   //  const commentContent = document.querySelector('#comment-content').value.trim();

   // get the post id for the post associated with this comment (-1 because array = user would think of first comment as 1, not 0)
    const post_id = window.location.toString().split('/')[
       window.location.toString().split('/').length -1
    ];
  
    console.log(content, post_id);
  
    if (content) {
       const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
             post_id,
             content
            //  commentContent
          }),
          headers: {
             'Content-Type': 'application/json'
          }
       });
  
       if (response.ok) {
         //  reload the same page with the content added
          document.location.reload();
       } else {
         //  alert(response.statusText);
         console.log(response.statusText);
         swal('Oops!', 'There seems to be an error. Please try again.', 'error');
      }
    };
  };
  
//   document.querySelector('.comment-form').addEventListener('click', addComment);
  document.querySelector('#comment-form').addEventListener('click', addComment);