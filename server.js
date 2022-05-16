// dependencies
import express from 'express';
import ejs from 'ejs';
import eventsController from './controllers/eventsController.js';

// "app" environment
const app = express();

// variables
const port = 3000;

// set template engine to ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// listen to requests
app.get('/calendar', eventsController.getAllEvents);
app.post('/calendar', eventsController.createEvent);


// app.get('/search', calendarController.searchEvent);
// app.post('/calendar', calendarController.createEvent);
// app.put('/calendar/:id', calendarController.updateEvent);
// app.delete('/calendar/:id', calendarController.removeEvent);

// use route modules
import routeStart from './routes/start.js';
app.use('/start', routeStart);
app.use('/', routeStart);

import routeCalendar from './routes/calendar.js';
app.use('/calendar', routeCalendar);

// serve static files
app.use(express.static('public'));

// handle errors

// 404 not found
app.get('*', (req, res, next) => {
    res.render('404');
});

// server error 500...
// leading fourth argument is default an error...
// app.use((err, req, res, next) => {

//     // log error to file...

//     // show response
//     return res.status(500).send("Server error, please return later");
// });

// start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});