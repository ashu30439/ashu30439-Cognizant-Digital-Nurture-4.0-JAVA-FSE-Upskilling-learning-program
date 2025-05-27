function fetchEvents() {
    fetch('https://mockapi.io/events')
    .then(response => response.json())
    .then(data => {
        console.log('Events:', data);
    })
    .catch(err => console.error('Error:', err));
}

async function fetchEventsAsync() {
    try {
        const response = await fetch('https://mockapi.io/events');
        const data = await response.json();
        console.log('Async Events:', data);
    } catch(err) {
        console.error('Async Error:', err);
    }
}

fetchEvents();
fetchEventsAsync();
