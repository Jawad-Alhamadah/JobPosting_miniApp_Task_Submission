import React from 'react'
import { GiArtificialHive } from "react-icons/gi";

function Footer() {
    return (
        <div className='flex justify-between p-9'>
            <div><GiArtificialHive className='text-pink-800 size-10' /></div>
            <div className='text-pink-800 flex items-center'>© {(new Date().getFullYear())} JobApp</div>
            <div className='text-pink-800 max-sm:hidden flex items-center'>Terms of service</div>

        </div>
    )
}

export default Footer
