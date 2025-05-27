const form = document.querySelector('#registrationForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const selectedEvent = form.elements['event'].value;

    if(!name || !email || !selectedEvent) {
        alert('Please fill all fields');
        return;
    }

    console.log(`User: ${name}, Email: ${email}, Event: ${selectedEvent}`);
});
