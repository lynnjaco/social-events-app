import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./EventDetails.scss";

function EventDetails() {
  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const [event, setEvent] = useState([]);
  const [eventAttendees, setEventAttendees] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${apiUrl}/events/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [id]);

  useEffect(() => {
    fetch(`${apiUrl}/events/${id}/attendees`)
      .then((response) => response.json())
      .then((data) => setEventAttendees(data))
      .catch((error) => console.error('Error:', error));
  }, [id]);

  return (
    <div className="EventDetails">
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {event.name}
            </h2>
            <p className="mb-4">{event.description}</p>
            <p>{formatDate(event.date)}</p>
            <p>{event.location}</p>
            <p>Event Host: {event.organizer_name}</p>
            <p>Host Contact : {event.organizer_phone}</p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={event.image_url}
              alt="Event-picture"
            />
          </div>
        </div>
      </section>
      <div className="attendees">
        {eventAttendees.slice(0, 5).map((attendee) => (
          <div key={attendee.user_id} className="attendee">
            <div className="container">
              <Link to={`/users/${attendee.user_id}`}>
                <img
                  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src={attendee.user_image_url}
                  alt={`${attendee.user_name}'s Photo`}
                />
              </Link>
              <p>{attendee.user_name}</p>
            </div>
          </div>
        ))}
        <p>+{eventAttendees.length - 5}</p>
      </div>
    </div>
  );
}

export default EventDetails;
