import { Link } from 'react-router-dom';

export default function Event({ event }) {
  // Function to format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-[100px]">
      {' '}
      {/* Set height to 100px */}
      <img
        className="rounded-t-lg w-full h-48 object-cover"
        src={event.image_url}
        alt={event.title}
      />
      <div className="p-5 flex flex-col flex-grow justify-between h-full">
        {' '}
        {/* Added h-full to ensure full height usage */}
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {event.name}
          </h5>
          <h4 className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {formatDate(event.date)}
          </h4>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {event.description}
          </p>
        </div>
        <div>
          <Link
            to={`/events/${event.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
