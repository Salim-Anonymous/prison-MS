import React, { useState } from 'react';

const UserProfileOptionsMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div className="relative right-4 lg:left-10 xl:top-4">
      <button
        className="flex flex-row items-center justify-center px-8 py-2 text-3xl font-medium text-blue-800 rounded-lg xl:border xl:border-blue-900 xl:p-1 lg:px-1 lg:py-0 md:px-2 md:py-1 hover:outline outline-1 outline-blue-800 hover:bg-blue-300 hover:cursor-pointer"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <img className="w-32 h-32 rounded-full md:h-16 md:w-16 lg:h-12 lg:w-12 xl:w-8 xl:h-8" src="https://scontent.fpbh1-1.fna.fbcdn.net/v/t39.30808-1/307773031_101328909418186_6024367239630506673_n.jpg?stp=cp0_dst-jpg_p40x40&amp;_nc_cat=110&amp;ccb=1-7&amp;_nc_sid=7206a8&amp;_nc_ohc=QK9C_g8hgxYAX-nNg5M&amp;tn=Bi8kR0SKS8qDsbUB&amp;_nc_ht=scontent.fpbh1-1.fna&amp;oh=00_AfACzA399G8plC6EpKfrOrFQHaRW4Bk6Z4T0IhOGXfEJLg&amp;oe=63B0A1B5" alt="Your avatar" />
        <div className="invisible w-0 h-0 lg:visible lg:w-64 lg:h-16 xl:h-8">
          <div className="flex flex-row items-center justify-center px-2 py-5 xl:py-2">
            <p className="w-0 h-0 ml-2 lg:w-full lg:h-10 lg:text-lg xl:text-sm">Adminstrator Admin</p>
            <p className="w-0 h-0 ml-2 lg:w-4 lg:h-10 lg:text-lg xl:text-sm">&#9662;</p>
          </div>
        </div>

      </button>
      {menuVisible && (
        <div className="absolute right-0 z-0 w-64 px-4 py-6 mt-4 bg-white rounded-lg shadow-2xl">
          <a className="block px-4 py-2 text-2xl font-medium text-gray-700 lg:text-lg hover:bg-gray-100" href="#">My Account</a>
          <a className="block px-4 py-2 text-2xl font-medium text-gray-700 lg:text-lg hover:bg-gray-100" href="#">Settings</a>
          <a className="block px-4 py-2 text-2xl font-medium text-gray-700 lg:text-lg hover:bg-gray-100" href="#">Log Out</a>
        </div>
      )}
    </div>
  );
};

export default UserProfileOptionsMenu;