import fs from 'fs';

// Shortcut "Path"
const dbPath = "./calendardb.json"

export default {
    // Function to get Date and Time -----------------------------
    getDateTime: function () {
        console.log("funkar bra!");
        // Convert JSON file to javascript and be able to read it -------------

        return JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    },
    addEvent: function (dateTime, author) {

        // Method to write new date and time quote into database
        
        // Create new dateTime object
        const newDateTime = {
            dateTime,
        
            author
        }



    }
}