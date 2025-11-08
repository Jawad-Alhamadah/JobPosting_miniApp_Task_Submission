import React from 'react'
import { HiMiniUserCircle } from "react-icons/hi2";
function UserProfile() {
 return (
        <div className="w-[35%] ml-5 bg-white p-4 rounded-lg  space-2 max-h-[500px] sticky top-5 mt-2 ">
            <div className="border-b border-b-gray-300 flex pb-3">
                <HiMiniUserCircle className="size-14 " />
                <div>
                    <div className="text-lg">Full Name</div>
                    <div className="text-gray-400">Job Title</div>
                </div>


            </div>

            <div className="text-lg">Skills
                <div className="flex gap-2">
                    <div className=" capitalize bg-amber-50 text-amber-500 rounded-lg ring-1 ring-amber-600 text-sm  py-1 px-2 ">Javascript</div>
                    <div className=" capitalize bg-blue-50 text-blue-500 rounded-lg ring-1 ring-blue-600 text-sm  py-1 px-2 ">React</div>
                    <div className=" capitalize bg-green-50 text-green-500 rounded-lg ring-1 ring-green-600 text-sm  py-1 px-2 ">nodeJs</div>
                    <div className=" capitalize bg-purple-50 text-purple-500 rounded-lg ring-1 ring-purple-600 text-sm  py-1 px-2 ">Vue</div>
                </div>

            </div>


        </div>

    )
}

export default UserProfile
