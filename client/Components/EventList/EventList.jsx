import React from 'react';

export default function EventList({ events }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map((event) => (
        <div
          key={event.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={event.image_url}
            alt={event.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
            <p className="text-gray-600 mb-2">{event.description}</p>
            <p className="text-sm text-gray-500">
              {new Date(event.date).toLocaleDateString()} at {event.time}
            </p>
            <p className="text-sm text-gray-500">{event.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
