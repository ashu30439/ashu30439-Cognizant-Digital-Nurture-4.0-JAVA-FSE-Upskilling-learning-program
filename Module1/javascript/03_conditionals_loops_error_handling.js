const events = [
    { name: "Cleanup", date: "2025-06-15", seats: 5 },
    { name: "Food Drive", date: "2024-12-01", seats: 0 },
];

events.forEach(event => {
    const now = new Date();
    const eventDate = new Date(event.date);
    if(eventDate < now || event.seats <= 0) {
        console.log(`Skipping event: ${event.name}`);
    } else {
        console.log(`Upcoming event: ${event.name}`);
    }
});

function register(event) {
    try {
        if(event.seats <= 0) throw new Error("No seats available");
        event.seats--;
        console.log(`Registered to ${event.name}. Seats left: ${event.seats}`);
    } catch(err) {
        console.error(err.message);
    }
}
register(events[0]);
register(events[1]);
