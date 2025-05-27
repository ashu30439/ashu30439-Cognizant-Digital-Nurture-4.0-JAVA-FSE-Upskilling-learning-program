function Event(name, date, seats) {
    this.name = name;
    this.date = date;
    this.seats = seats;
}

Event.prototype.checkAvailability = function() {
    return this.seats > 0;
};

const e1 = new Event("Art Workshop", "2025-07-20", 20);

console.log(e1.checkAvailability()); // true

console.log(Object.entries(e1));
