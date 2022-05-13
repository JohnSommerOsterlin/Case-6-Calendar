import readline from 'readline';
import express from "express";
import eventsViews from "../views/eventsViews.js";
import eventsModel from "../models/eventsModel.js";

export default {
    // printUsage: function() {
    //     console.log(quoteViews.usage);
    // },
    // createEvent: (req, res) => {
    //     const quote = req.body.quote;
    //     const author = req.body.author;

    //     console.log(quote, author);
    //     // Controller Method for creating new quote
    //     const isOK = eventsModel.addEvent(event, author);

    //     // Check if something went wrong
    //     if (!isOK) {
    //         res.render("error", { message: "Could not save quote" });
    //         return;
    //     }

        // res.render("quotes", { quotes: quoteModel.getQuotes() });
    // }
    getAllEvents: (req, res) => {
        res.render("calendar", { events: eventsModel.getEvents() });
    },
//     removeQuote: (req, res) => {
//         const id = Number(req.params.id);

//         if (id < 0) {
//             console.log(quoteViews.errorInvalidId);
//             return;
//         }

//         const quoteToBeRemoved = quoteModel.getQuote(id);
//         const isOK = quoteModel.removeQuote(quoteToBeRemoved.id);

//         if (!isOK) {
//             console.log(quoteViews.errorQuoteNotRemoved);
//             return;
//         }

//         console.log(quoteViews.quoteRemoved(quoteToBeRemoved));

//         res.redirect('/');
//     },
//     updateQuote: (req, res) => {
//         const id = Number(req.params.id);
//         const quote = req.body.quote;
//         const author = req.body.author;
        
//         if (id < 0) {
//             console.log(quoteViews.errorInvalidId);
//             return;
//         }

//         if (!quote || !author) {
//             console.log("Quote and Author is not defined", quote, author);
//             return;
//         }

//         const isOK = quoteModel.updateQuote(id, quote, author);

//         if (!isOK) {
//             console.log("Quote not Updated");
//             return;
//         }

//         console.log("Quote Updated");

//         res.redirect('/');
//     },
//     searchQuote: (req, res) => {
//         const searchStr = req.query.searchStr;
        
//         const matches = quoteModel.searchQuotes(searchStr);

//         // TODO show different view if no matches found
//         res.render("quotes", { quotes: matches });
//     }
//     // searchQuote: function() {
//     //      // Start a read line interface to ask user for parameters
//     //      const rl = readline.createInterface({
//     //         input: process.stdin,
//     //         output: process.stdout
//     //     });

//     //     rl.question(quoteViews.questionSearchString, (searchString) => {
//     //         const matches = quoteModel.searchQuotes(searchString);

//     //         if (matches.length <= 0) {
//     //             console.log(quoteViews.noSearchMatches(searchString));
//     //             rl.close();
//     //             return;
//     //         }

//     //         const view = quoteViews.allQuotes(matches);

//     //         console.log(quoteViews.matchesFound(searchString));
//     //         console.log(view);
//     //         rl.close();
//     //     })
        
//     // }
}