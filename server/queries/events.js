const db = require("../db/dbConfig");

const getAllEvents = async () => {
  const events = await db.any("SELECT * FROM events");
return events;
};

const showOneEvent = async (id) => {
  const event = await db.one("SELECT * FROM events WHERE id = $1", id);
  return event;
};


const showEventAttendees = async (eventId) => {
    const eventAttendees = await db.any(`SELECT 
         ea.user_id,
         u.name AS user_name,
         ea.status,
         ea.created_at AS registration_date
       FROM 
         EventAttendees ea
       JOIN 
         Users u ON ea.user_id = u.id
       WHERE 
         ea.event_id = $1`, eventId); // Use eventId as the parameter
    return eventAttendees;
}
// const createEvent = async (name, description, image_url, date, time, location, capacity, organizer_name, organizer_phone) => {
//     const newEvent = await db.one("INSERT INTO events (name, description, image_url, date, time, location, capacity, organizer_name, organizer_phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *", [name, description, image_url, date, time, location, capacity, organizer_name, organizer_phone]
//     );
//      return newEvent;
// };


module.exports = {
  getAllEvents, showOneEvent, showEventAttendees
};