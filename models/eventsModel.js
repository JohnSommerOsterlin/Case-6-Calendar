import fs from "fs";

const dbPath = "./calendardb.json";

const eventsModel = {
    getEvents: function () {
    return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
},
//   getQuote: function (id) {
//     return this.getQuotes().find((quote) => quote.id === id);
//   },
//   saveQuotes: function (quotes) {
//     return fs.writeFileSync(dbPath, JSON.stringify(quotes));
//   },
//   addQuote: function (quote, author) {
//     // Model Method to write new quote into database
//     const allQuotes = this.getQuotes();

//     // if quotes are not defined we return false
//     // to signal that something went wrong
//     if (!allQuotes) {
//       console.log("allQuotes not defined");
//       return false;
//     }

//     // if quote or author is not defined then exit early
//     if (!quote || !author) {
//       console.log("quote or author is not defined");
//       return false;
//     }

//     const lastQuote = allQuotes[allQuotes.length - 1];
//     const newId = (lastQuote?.id || 0) + 1;

//     // Create new quote object
//     const newQuote = { id: newId, quote, author };

//     // Update Javascript array with new quote
//     allQuotes.push(newQuote);

//     // Write new state to DB
//     this.saveQuotes(allQuotes);

//     return true;
//   },
//   removeQuote: function (id) {
//     // Get all quotes
//     const allQuotes = this.getQuotes();

//     // if quotes are not defined we return false
//     // to signal that something went wrong
//     if (!allQuotes) {
//       return false;
//     }

//     // Remove quote specified by id
//     const filteredQuotes = allQuotes.filter((quote) => quote.id !== id);

//     // Write new state to db
//     this.saveQuotes(filteredQuotes);

//     return true;
//   },
//   updateQuote: function (id, newQuote, newAuthor) {
//     // Get all quotes
//     const allQuotes = this.getQuotes();

//     // if quotes are not defined we return false
//     // to signal that something went wrong
//     if (!allQuotes) {
//       return false;
//     }

//     // Update quote specified by id
//     const idx = allQuotes.findIndex((quote) => quote.id === id);

//     if (idx < 0) {
//       return false;
//     }

//     allQuotes[idx].quote = newQuote;
//     allQuotes[idx].author = newAuthor;

//     // Write new state to db
//     this.saveQuotes(allQuotes);

//     return true;
//   },
//   searchQuotes: function (searchString) {
//     // Get all quotes
//     const allQuotes = this.getQuotes();

//     // Filter quotes for search string matches
//     const matches = allQuotes.filter((quote) =>
//       quote.author.toLowerCase().includes(searchString.toLowerCase()) ||
//       quote.quote.toLowerCase().includes(searchString.toLowerCase()) 
//     );

//     // Return matches
//     return matches;
//   },
};

export default eventsModel;