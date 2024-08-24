import { useState, useEffect } from 'react';    
import { useParams, Link } from "react-router-dom";

function UserProfile() {

    const { id } = useParams();
    const [currentUser, setCurrentUser] = useState({});
    const [usersFriends, setUsersFriends] = useState([]);
    const [usersEvents, setUsersEvents] = useState([]);
    const API = import.meta.env.VITE_API_URL;

    useEffect(() => {
        fetch(`${API}/users/${id}`)
       .then(res => res.json())
       .then(data => setCurrentUser(data))  
    }, [id])

    useEffect(() => {
        fetch(`${API}/users/${id}/friends`)
       .then(res => res.json())
       .then(data => setUsersFriends(data))
    }, [id]);  

    useEffect(() => {
        fetch(`${API}/users/${id}/events`)
       .then(res => res.json())
       .then(data => setUsersEvents(data))
    }, [id]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getFirstName = (name) => {
        return name?.split(' ')[0];
    };

    return (
        <div className="UserProfile">


            <h2>{ getFirstName(currentUser?.name) }'s Events</h2>
            <div className="carousel w-full">
                {usersEvents.map(event => (
                    <div className="carousel-item min-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={ event.image_url } alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{ event.event_name }</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ formatDate(event.date) }</p>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ event.location }</p>
                                <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    More Details
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </Link>
                            </div>       
                    </div>
                ))}
           </div>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {usersEvents.map(event => (
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg" src={ event.image_url } alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{ event.event_name }</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ formatDate(event.date) }</p>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{ event.location }</p>
                            <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                More Details
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div> */}

            <h2>{ getFirstName(currentUser?.name) }'s Friends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {usersFriends.map(user => (
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div class="flex justify-end px-4 pt-4">
                            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span class="sr-only">Open dropdown</span>
                                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                </svg>
                            </button>
                            <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                <ul class="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                                </li>
                                <li>
                                    <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div class="flex flex-col items-center pb-10">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={ user.friend_image_url } alt="Bonnie image"/>
                            <h5 class="mb-2 text-xl font-medium text-gray-900 dark:text-white">{ user.friend_name }</h5>
                            <span class="text-sm text-gray-500 dark:text-gray-400">{ user.friend_age}, { user.friend_zip_code }</span>
                            <div class="flex mt-4 md:mt-6">
                                <Link to={`/users/${user.friend_id}`} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Profile</Link>
                                <a href="#" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Remove Friend</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserProfile;