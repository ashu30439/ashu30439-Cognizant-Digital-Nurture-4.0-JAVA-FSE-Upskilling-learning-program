// 1. JavaScript Basics & Setup
console.log("Welcome to the Community Portal");

window.addEventListener('load', () => {
  alert("Page is fully loaded");
  // Load saved event type from localStorage
  const eventType = localStorage.getItem('eventType');
  if (eventType) {
    const select = document.getElementById('eventTypeSelect');
    if (select) select.value = eventType;
  }
});

// 2. Syntax, Data Types, and Operators
const eventName = "Community Music Fest";
const eventDate = "2025-06-15";
let seatsAvailable = 100;

const eventInfo = `Event: ${eventName}, Date: ${eventDate}, Seats Left: ${seatsAvailable}`;
console.log(eventInfo);

// 3. Conditionals, Loops, and Error Handling

const events = [
  { name: "Music Fest", date: "2025-06-15", seats: 10, category: "music" },
  { name: "Food Carnival", date: "2024-12-20", seats: 0, category: "food" }, // past or full event
  { name: "Tech Talk", date: "2025-07-01", seats: 25, category: "tech" },
];

// Filter upcoming events with seats
function displayValidEvents() {
  const now = new Date();
  events.forEach(event => {
    const eventDate = new Date(event.date);
    if (eventDate < now || event.seats <= 0) {
      console.log(`Event ${event.name} is either past or full.`);
    } else {
      console.log(`Upcoming event: ${event.name} on ${event.date} with ${event.seats} seats.`);
    }
  });
}

displayValidEvents();

function registerSeat(eventName) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log(`Registered for ${eventName}. Seats left: ${event.seats}`);
  } catch (error) {
    console.error(error.message);
  }
}

// 4. Functions, Scope, Closures, Higher-Order Functions

function addEvent(newEvent) {
  events.push(newEvent);
}

function registerUser(eventName, user) {
  try {
    const event = events.find(e => e.name === eventName);
    if (!event) throw new Error("Event not found");
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    totalRegistrations[event.category] = (totalRegistrations[event.category] || 0) + 1;
    console.log(`${user} registered for ${eventName}.`);
  } catch (err) {
    console.error(err.message);
  }
}

// Closure to track total registrations by category
const totalRegistrations = (() => {
  const registrations = {};
  return {
    increment: (category) => {
      registrations[category] = (registrations[category] || 0) + 1;
      return registrations[category];
    },
    get: (category) => registrations[category] || 0,
  };
})();

function filterEventsByCategory(category, callback) {
  const filtered = events.filter(event => event.category === category);
  callback(filtered);
}

// 5. Objects and Prototypes

class Event {
  constructor(name, date, seats, category) {
   
