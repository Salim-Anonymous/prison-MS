import React, { useState } from 'react';

const UserProfileOptionsMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  let buttonStyle = "flex px-5 py-2 items-center rounded-md text-md font-medium text-blue-800 hover:outline outline-1 ";
  let activeStyle = "bg-blue-100 hover:bg-blue-200";
  return (
    <div className="relative">
      <button
        className={buttonStyle}
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <img className="w-6 h-6 rounded-full" src="https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-1/307773031_101328909418186_6024367239630506673_n.jpg?stp=cp0_dst-jpg_p40x40&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=QK9C_g8hgxYAX-nNg5M&amp;tn=Bi8kR0SKS8qDsbUB&amp;_nc_ht=scontent.fpbh1-1.fna&amp;oh=00_AfACzA399G8plC6EpKfrOrFQHaRW4Bk6Z4T0IhOGXfEJLg&amp;oe=63B0A1B5" alt="Your avatar" />
        <span className="ml-2">Adminstrator Admin</span>
        <span className="ml-3 mr-3">&#9662;</span>
    </button>
      {menuVisible && (
        <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg">
          <a className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100" href="#">My Account</a>
          <a className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100" href="#">Settings</a>
          <a className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100" href="#">Log Out</a>
        </div>
      )}
    </div>
    );
};

export default UserProfileOptionsMenu;