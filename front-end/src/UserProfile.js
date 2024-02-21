import React from "react";

const UserProfile = () => {
  // Dummy user data for demonstration
  const user = {
    username: "example_user",
    email: "user@example.com",
    avatar: "https://via.placeholder.com/150", // Placeholder image URL
    // Additional user data...
  };

  return (
    <div className="user-profile">
      <img src={user.avatar} alt="User Avatar" />
      <div className="user-details">
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        {/* Additional user details can be added here */}
      </div>
      <div className="user-actions">
        {/* Add buttons for user actions, such as logout, settings, etc. */}
        <button>Settings</button>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
