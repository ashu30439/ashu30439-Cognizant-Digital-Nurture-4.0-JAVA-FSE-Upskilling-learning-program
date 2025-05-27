function addEvent(eventList, event) {
    eventList.push(event);
}

function registerUser(event) {
    if(event.seats > 0) {
        event.seats--;
        console.log(`User registered for ${event.name}`);
    } else {
        console.log(`No seats left for ${event.name}`);
    }
}

function filterEventsByCategory(events, category, callback) {
    const filtered = events.filter(e => e.category === category);
    callback(filtered);
}

function registrationCounter(category) {
    let count = 0;
    return function() {
        count++;
        console.log(`${count} users registered for ${category}`);
    };
}

const totalRegistrationsForMusic = registrationCounter('Music');

const events = [
    {name: "Jazz Night", category: "Music", seats: 10},
    {name: "Cooking Class", category: "Food", seats: 5}
];

filterEventsByCategory(events, 'Music', (filtered) => {
    filtered.forEach(event => console.log(event.name));
    totalRegistrationsForMusic();
});
