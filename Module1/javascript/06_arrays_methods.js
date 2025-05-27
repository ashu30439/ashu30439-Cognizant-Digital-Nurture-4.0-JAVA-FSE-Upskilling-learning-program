const events = [
    {name: "Music Festival", category: "Music"},
    {name: "Tech Talk", category: "Education"}
];

// Add new event
events.push({name: "Jazz Night", category: "Music"});

// Filter only music events
const musicEvents = events.filter(e => e.category === "Music");
console.log(musicEvents);

// Map to display strings
const displayCards = events.map(e => `Event: ${e.name}`);
console.log(displayCards);
