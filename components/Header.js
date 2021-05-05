import React from 'react';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {useRef} from 'react';
import { XIcon } from '@heroicons/react/outline';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    return (
        <header className="">
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
                onClick={()=>searchInputRef.current.value =""}/>
                
            </form>
        </header>
    );
}

export default Header;
