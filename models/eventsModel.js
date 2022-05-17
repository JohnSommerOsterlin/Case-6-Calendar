import fs from "fs";

const dbPath = "./calendardb.json";

const eventsModel = {
    getEvents: function () {
        return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
    },
    getEvent: function (id) {
        return this.getEvents().find((event) => event.id === id);
    },
    saveEvent: function (events) {
        return fs.writeFileSync(dbPath, JSON.stringify(events));
    },
    addEvent: function (date, title) {
        // Model Method to write new quote into database
        const allEvents = this.getEvents();

        //     // if quotes are not defined we return false
        //     // to signal that something went wrong
        if (!allEvents) {
            console.log("allEvents not defined");
            return false;
        }

        //     // if description or date is not defined then exit early
        if (!date || !title) {
            return false;
        }

        const lastEvent = allEvents[allEvents.length - 1];
        const newId = (lastEvent?.id || 0) + 1;

        // Create new event object
        const newEvent = {
            id: newId,
            title,
            date
        };

        // Update Javascript array with new event
        allEvents.push(newEvent);

        // Write new state to DB
        this.saveEvent(allEvents);

        return true;
    },

    removeEvent: function (id) {

        // Get all events
        const allEvents = this.getEvents();

        // if events are not defined we return false
        // to signal that something went wrong
        if (!allEvents) {
            return false;
        }

        // Remove event specified by id
        const filteredEvents = allEvents.filter((event) => event.id !== id);

        // Write new state to db
        this.saveEvent(filteredEvents);

        return true;
    },


    updateEvent: function (id, newTitle, newDate) {
        // Get all events
        const allEvents = this.getEvents();

        // if evetns are not defined we return false
        // to signal that something went wrong
        if (!allEvents) {
            return false;
        }

        // Update event specified by id
        const idx = allEvents.findIndex((event) => event.id === id);

        if (idx < 0) {
            return false;
        }

        allEvents[idx].title = newTitle;
        allEvents[idx].date = newDate;

        // Write new state to db
        this.saveEvent(allEvents);

        return true;
    },
    //   searchEvents: function (searchString) {
    //     // Get all events
    //     const allEvents = this.getEvents();

    //     // Filter evetns for search string matches
    //     const matches = allEvents.filter((event) =>
    //       quote.author.toLowerCase().includes(searchString.toLowerCase()) ||
    //       quote.quote.toLowerCase().includes(searchString.toLowerCase()) 
    //     );

    //     // Return matches
    //     return matches;
    // };
};

export default eventsModel;