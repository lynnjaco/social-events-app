import { useState, useEffect } from 'react';
import Event from '../../Components/Event/Event';

export default function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${apiUrl}/events`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="Home">
      <h1>Locally</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
