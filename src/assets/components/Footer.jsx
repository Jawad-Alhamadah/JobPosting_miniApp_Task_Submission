import React from 'react'
import { GiArtificialHive } from "react-icons/gi";

function Footer() {
    return (
        <div className='flex justify-between p-9'>
            <div><GiArtificialHive className='text-primary size-10' /></div>
            <div className='text-primary flex items-center'>© {(new Date().getFullYear())} Job Listing App</div>
            <div className='text-primary max-sm:hidden flex items-center'>Terms of service</div>

        </div>
    )
}

export default Footer
