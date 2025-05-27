const eventContainer = document.querySelector('#events');

function renderEvent(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.textContent = `${event.name} - ${event.date}`;
    eventContainer.appendChild(card);
}

const events = [
    {name: "Music Festival", date: "2025-06-20"},
    {name: "Art Workshop", date: "2025-07-20"}
];

events.forEach(renderEvent);
