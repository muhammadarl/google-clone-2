import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useRef} from 'react';
import { XIcon } from '@heroicons/react/outline';
import {MicrophoneIcon, SearchIcon} from '@heroicons/react/solid';
import Avatar from '../components/Avatar';
import HeaderOptions from '../components/HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = e=> {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if(!term)return;
        router.push(`/search?term=${term}`);
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image className="cursor-pointer"  
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                width={120}
                height={40}
                onClick={()=>router.push(`/`)}
                />
                <form className="flex px-6 py-3 ml-10 mr-5 broder border-gray-200 
                    rounded-full flex-grow shadow-lg max-w-3xl items-center">
                    <input ref={searchInputRef} className="flex flex-grow w-full focus:outline-none" type="text" />
                    <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer hover:text-gray-800 transition 
                    duration-100 transform hover:scale-125"
                    onClick={()=>searchInputRef.current.value =""}
                    />
                    <MicrophoneIcon className="h-6 mr-3 text-blue-500 hidden sm:inline-flex 
                    border-l-2 pl-4 border-gray-300"
                    />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
                    <button hidden type="submit" onClick={search}>Search
                    </button>
                </form>
                <Avatar className="ml-auto" url="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
            </div>
            <HeaderOptions />
        </header>
    );
}

export default Header;
