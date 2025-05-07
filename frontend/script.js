document.getElementById('getMessage').addEventListener('click', function() {
    fetch('http://localhost:5000')
      .then(response => response.json())
      .then(data => {
        document.getElementById('message').innerText = data.message;
      })
      .catch(error => console.error('Error:', error));
  });
  