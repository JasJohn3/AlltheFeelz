async function newFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('input[name="post-title"]').value;
    const message = document.querySelector('input[name="message"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'post',
      body: JSON.stringify({
        title,
        message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    }
    else {
      alert(response.statusText)
    }
  }
  
  document.querySelector('.postBox__postButton').addEventListener('submit', newFormHandler)