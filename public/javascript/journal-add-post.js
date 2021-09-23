async function newFormHandler(event) {
    event.preventDefault();
    
    const title = document.querySelector('#title').value;
    const message = document.querySelector('#message').value;
    console.log(title, message);
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
      console.log('post successful!')
      // document.location.replace('/');
    }
    else {
      alert(response.statusText)
    }
  }
  
  document.querySelector('#post').addEventListener('click', newFormHandler)