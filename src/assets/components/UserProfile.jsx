import React from 'react'
import { HiMiniUserCircle } from "react-icons/hi2";
import SearchBar from './SearchBar';
function UserProfile(props) {
    return (
        <div className="w-[35%] bg-white rounded-lg  space-2 max-h-[500px] sticky top-5 mt-2 ring-1 ring-pink-100">
            <div className="border-b border-b-gray-300 flex pb-3 bg-primary py-4 px-6 rounded-t-lg">
                <HiMiniUserCircle className="size-14 text-white" />
                <div>
                    <div className="text-2xl text-white">{props.name}</div>
                    <div className="text-gray-100">{props.title}</div>
                </div>


            </div>

            <div className="text-lg p-2 ">Skills
                <div className="flex gap-1 ">

                    {props.skills.map((skill, i) => <div key={i} className=" capitalize bg-blue-50 text-blue-500 rounded-lg ring-1 ring-blue-600 text-sm  py-1 px-2 ">{skill}</div>)}
                </div>


            </div>

            <div className="text-lg p-4">Education
                <div className="flex gap-2 text-lg text-gray-500">
                    <div className="pl-2">{props.education}</div>

                </div>
            </div>


        </div>

    )
}

export default UserProfile
