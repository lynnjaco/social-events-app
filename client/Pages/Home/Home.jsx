import { useState, useEffect } from 'react';
import blLocallyLogo from '../../src/assets/bllocally.png';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Event from '../../Components/Event/Event';

export default function Home() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${apiUrl}/events`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
        setFilteredEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [apiUrl]);

  useEffect(() => {
    const filtered = filterEvents(events, searchQuery);
    setFilteredEvents(filtered);
  }, [searchQuery, events]);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  function filterEvents(events, searchQuery) {
    return events.filter((event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="Home">
      {/* <img
        src={blLocallyLogo}
        alt="blLocally Logo"
        className="w-100 h-20 mx-auto my-auto block"
      /> */}
      <div className="m-2.5">
        <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
