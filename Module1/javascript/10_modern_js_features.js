const events = [
    {name: "Music Festival", category: "Music"},
    {name: "Tech Talk", category: "Education"}
];

function displayEvents(eventsList = []) {
    eventsList.forEach(({name, category}) => {
        console.log(`Event: ${name}, Category: ${category}`);
    });
}

const clonedEvents = [...events];
displayEvents(clonedEvents);
