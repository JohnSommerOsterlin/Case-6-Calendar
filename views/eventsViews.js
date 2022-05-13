export default {
    allEvents: (events) =>
    events.map(event => ` ${event.date}: '${event.description}'`).join('\n')
    }