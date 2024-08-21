const db = require("../db/dbConfig");

const getAllEvents = async () => {
  const events = await db.any("SELECT * FROM events");
return events;
};


module.exports = {
  getAllEvents,
};