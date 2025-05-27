// Use console.log to trace the steps
console.log('Form submission started');

const form = document.querySelector('#registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Submit event caught');

    const userData = {
        name: form.elements['name'].value,
        email: form.elements['email'].value,
        event: form.elements['event'].value,
    };

    console.log('User data:', userData);

    fetch('https://mockapi.io/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    .then(response => {
        console.log('Response received', response);
        return response.json();
    })
    .then(data => {
        console.log('Parsed data:', data);
        alert('Registration successful!');
    })
    .catch(error => {
        console.error('Error during registration:', error);
    });
});
