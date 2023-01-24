import React from 'react'

export const MenuDropDownList = ({setMenuVisible, menuVisible}) => (
    <div className="fixed -top-4 right-8 h-screen w-screen flex items-start justify-end my-20">
        <div className="bg-gray-300 rounded-lg p-4">
            <a
                className="block px-4 py-2 text-lg font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
                href="#"
                onClick={
                    () => setMenuVisible(!menuVisible)
                }
            >
                My Account
            </a>
            <a
                className="block px-4 py-2 text-lg font-medium text-gray-700 lg:text-lg hover:bg-gray-100"
                href="#"
                onClick={
                    () => setMenuVisible(!menuVisible)
                }
            >
                Settings
            </a>
            <a
                className="block px-4 py-2 text-lg font-medium text-red-700 lg:text-lg hover:bg-gray-100"
                href="#"
                onClick={
                    () => setMenuVisible(!menuVisible)
                }
            >
                Log Out
            </a>
        </div>
    </div>
)
