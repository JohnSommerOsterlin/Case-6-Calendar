import readline from 'readline';
import express from "express";
import eventsViews from "../views/eventsViews.js";
import eventsModel from "../models/eventsModel.js";

export default {

    createEvent: (req, res) => {
        console.log(req.body);
        const title = req.body.title;
        const date = req.body.date;

        console.log(date, title);
        //  Controller Method for creating new event
        const isOK = eventsModel.addEvent(date, title);

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
            events: eventsModel.getEvents()
        });
    },
    getAllEventsApi: (req, res) => {
        let result = {
            events: eventsModel.getEvents()
        }
        res.json(result)
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
    updateEvent: (req, res) => {
        const id = Number(req.params.id);
        const title = req.body.title;
        const date = req.body.date;

        if (id < 0) {
            console.log(eventsViews.errorInvalidId);
            return;
        }

        if (!title || !date) {
            console.log("title and date is not defined", title, date);
            return;
        }

        const isOK = eventsModel.updateEvent(id, title, date);

        if (!isOK) {
            console.log("Event not Updated");
            return;
        }

        console.log("Event Updated");

        res.redirect('/calendar');
    },
}