const form = document.querySelector('#registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userData = {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        event: form.elements['event'].value,
    };

    fetch('https://mockapi.io/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Registration successful!');
    })
    .catch(error => {
        alert('Registration failed!');
    });
});
