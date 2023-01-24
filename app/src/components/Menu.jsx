import React from 'react'
import MediaQuery from 'react-responsive'
import logo from '../assets/logo2.png'

export const Menu = ({setMenuVisible, menuVisible}) => (
    menuVisible?<button
            className="flex flex-row items-center justify-start cursor-pointer border border-blue-900 rounded-md p-2 bg-blue-600 text-white"
            onClick={() => setMenuVisible(!menuVisible)}
        >
            <img src={logo} alt="logo" className="h-6 w-6" />
            <MediaQuery minWidth={450}>
                <span className='text-sm ml-1'>
                    Adminstrator Admin
                </span>
            </MediaQuery>
        </button>
    : <button
            className="flex flex-row items-center justify-start cursor-pointer border border-blue-900 rounded-md p-2"
            onClick={() => setMenuVisible(!menuVisible)}
        >
            <img src={logo} alt="logo" className="h-6 w-6" />
            <MediaQuery minWidth={450}>
                <span className='text-sm ml-1'>
                    Adminstrator Admin
                </span>
            </MediaQuery>
        </button>
)
