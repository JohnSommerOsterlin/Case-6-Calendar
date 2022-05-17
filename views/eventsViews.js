export default {
    allEvents: (events) =>
    events.map(event => ` ${event.date}: '${event.title}'`).join('\n')
    }