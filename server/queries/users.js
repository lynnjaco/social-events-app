const db = require("../db/dbConfig");

const getAllUsers = async () => {
    const users = await db.any("SELECT * FROM users");
    return users;
};

const showOneUser = async (id) => {
    const user = await db.one("SELECT * FROM users WHERE id = $1", id);
    return user;
};

const showUserEvents = async (userId) => {
    const userEvents = await db.any(
        `SELECT 
           ea.event_id,
           e.name AS event_name,
           e.image_url,
           ea.status,
           e.date,
           e.location
         FROM 
           EventAttendees ea
         JOIN 
           Events e ON ea.event_id = e.id
         WHERE 
           ea.user_id = $1`, [userId]
      );
    return userEvents;
}

const showUserFriends = async(userId) => {
    const userFriends = await db.any(`
        SELECT 
            CASE 
                WHEN f.user_id1 = $1 THEN u2.id
                ELSE u1.id
            END AS friend_id,
            CASE 
                WHEN f.user_id1 = $1 THEN u2.name
                ELSE u1.name
            END AS friend_name,
            CASE 
                WHEN f.user_id1 = $1 THEN u2.age
                ELSE u1.age
            END AS friend_age,
            CASE 
                WHEN f.user_id1 = $1 THEN u2.zip_code
                ELSE u1.zip_code
            END AS friend_zip_code,
            CASE 
                WHEN f.user_id1 = $1 THEN u2.image_url
                ELSE u1.image_url
            END AS friend_image_url,
            f.status AS friendship_status,
            f.created_at AS friendship_created_at
        FROM 
            Friendships f
        JOIN 
            Users u1 ON f.user_id1 = u1.id
        JOIN 
            Users u2 ON f.user_id2 = u2.id
        WHERE 
            f.user_id1 = $1 OR f.user_id2 = $1`, userId);
    return userFriends;
}

module.exports = {
    getAllUsers, showOneUser, showUserFriends, showUserEvents
};