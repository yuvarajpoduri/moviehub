// src/Logout.js
import { useEffect, useState } from 'react';

const Logout = () => {
  const [logoutCompleted, setLogoutCompleted] = useState(false);

  useEffect(() => {
    if (!logoutCompleted) {
      // Clear localStorage when logging out
      localStorage.removeItem('authToken');
      localStorage.removeItem('username');

      // Set a timer to redirect to the home page after 1 second (1000 ms)
      const timer = setTimeout(() => {
        window.location.href = "/"; // Redirect to the home page after 1 second
        setLogoutCompleted(true); // Mark the logout as completed
      }, 1000);

      // Clear the timer if the component unmounts before the timer finishes
      return () => clearTimeout(timer);
    }
  }, [logoutCompleted]); // Depend on logoutCompleted to ensure effect only runs once

  return null; // Nothing to render on the logout page
};

export default Logout;
