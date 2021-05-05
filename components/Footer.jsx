import React from 'react'
import {GlobeIcon} from '@heroicons/react/solid';
function Footer() {
    return <footer className="grid w-full divide-y-[-1px] divide-gray-300 bg-gray-100 text-sm text-gray-500 ">
        <div className="px-8 py-3">
            <p>Indonesia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4  grid-flow-row-dense">
            <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <GlobeIcon className="h-5 mr-1 text-green-700"/> Muhammad Arul Since 2001
            </div>
            <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                <p>Portofolio</p>
                <p>CV</p>
                <p>LinkedIn</p>
            </div>
            <div className="flex justify-center space-x-8 md:ml-auto">
                <p>Privacy</p>
                <p>Term</p>
                <p>Settings</p>
            </div>
        </div>
    </footer>;
    
}

export default Footer
