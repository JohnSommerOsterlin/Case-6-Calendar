import readline from 'readline';
import express from "express";
import eventsViews from "../views/eventsViews.js";
import eventsModel from "../models/eventsModel.js";

export default {

    createEvent: (req, res) => {
        console.log(req.body);
        const description = req.body.description;
        const date = req.body.date;

        console.log(date, description);
    //  Controller Method for creating new event
        const isOK = eventsModel.addEvent(date, description);

        // Check if something went wrong
        if (!isOK) {
            // res.render("error", { message: "Could not save event" });
            // return;
        }

        res.render("calendar", {
            events: eventsModel.getEvents()
        });

    },

    getAllEvents: (req, res) => {
        res.render("calendar", { 
            events: eventsModel.getEvents() });
    },
    removeEvent: (req, res) => {
        const id = Number(req.params.id);

        if (id < 0) {
            // console.log(eventsViews.errorInvalidId);
            return;
        }

        const eventToBeRemoved = eventsModel.getEvent(id);
        const isOK = eventsModel.removeEvent(eventToBeRemoved.id);

        if (!isOK) {
            // console.log(eventsViews.errorEventNotRemoved);
            return;
        }

        // console.log(eventsViews.eventRemoved(eventToBeRemoved));

        res.redirect('/calendar');
    },
//     updateEvent: (req, res) => {
//         const id = Number(req.params.id);
//         const description = req.body.description;
//         const author = req.body.date;
        
//         if (id < 0) {
//             console.log(quoteViews.errorInvalidId);
//             return;
//         }

//         if (!description || !date) {
//             console.log("description and date is not defined", description, date);
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