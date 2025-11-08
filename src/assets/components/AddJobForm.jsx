import React from 'react'
import { isAddFormOpenContext } from './IsAddJobFormOpenContext'
import { useContext } from 'react'
import { generateUID } from "./helperFunctions"
import { ScreenWidthContext } from '../components/ScreenWidthContext'
import { GiArtificialHive } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
function AddJobForm(props) {
    let formContext = useContext(isAddFormOpenContext)
    const width = React.useContext(ScreenWidthContext);
    let inputFieldsStyle = 'border border-gray-200 bg-gray-50 rounded-md pl-2'

    let [formInputs, setFormInputs] = React.useState({

        location: "",
        salary: "",
        description: "",
        title: "",
        company: ""
    })
    let [showMissingErrorsObject, setShowMissingErrorsObject] = React.useState({
        location: false,
        salary: false,
        description: false,
        title: false,
        company: false
    })
    function onChangeInputField(e) {
        let { name, value } = e.target

        setFormInputs(prev => ({ ...prev, [name]: value }))


    }

    function postJob(e) {
        console.log(generateUID())
        e.preventDefault()
        let noErrors = true
        let errorsObject = {}
        Object.keys(formInputs).forEach(key => {

            if (!formInputs[key].trim()) {
                noErrors = false
                errorsObject = { ...errorsObject, [key]: true }
            }


        })
        setShowMissingErrorsObject(errorsObject)

        if (noErrors) {

            formContext.setIsDisplayAddForm(false)
            props.setJobData(prev => ([...prev, { src: "/logos/default.svg", id: generateUID(), ...formInputs }]));
        }

    }


    // Mobile =----------------------------------------------------------
    if (width < 800) {
        return (
            <div>
                <div onClick={() => formContext.setIsDisplayAddForm(false)} className='z-1 w-full h-full fixed top-0 left-0 bg-[#2a3447] opacity-60'>


                </div>

                <div className='z-10 bg-white w-[80%]  fixed left-[10%] top-[5%]  rounded-md '>
                    <div className='text-center text-pink-800 text-lg '>
                        <div className='flex justify-between'>
                            <GiArtificialHive className='text-pink-800 size-10 p-1' />
                            <RxCross2 className='mt-1 text-red-600' onClick={() => formContext.setIsDisplayAddForm(false)}></RxCross2>
                        </div>

                        Post Job Form

                    </div>
                    <form className='grid gap-2 p-3 w-full'>


                        <div className='flex justify-between items-center'>
                            <label className="font-medium text-[0.9em]">Title</label>
                            {showMissingErrorsObject.title && (
                                <span className='text-red-600 text-[0.7em]'>Missing field</span>
                            )}
                        </div>
                        <input
                            value={formInputs.title}
                            onChange={onChangeInputField}
                            name="title"
                            className=" border border-gray-200 bg-gray-50 rounded-md pl-2"
                            type="text"
                            onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, title: false }))}
                        />

                        <div className='flex justify-between items-center'>
                            <label className="font-medium text-[0.9em]">Salary</label>
                            {showMissingErrorsObject.salary && (
                                <span className='text-red-600 text-[0.7em]'>Missing field</span>
                            )}
                        </div>
                        <input
                            value={formInputs.salary}
                            onChange={onChangeInputField}
                            name="salary"
                            className={inputFieldsStyle}
                            type="number"
                            onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, salary: false }))}
                        />

                        <div className='flex justify-between items-center'>
                            <label className="font-medium text-[0.9em]">Company</label>
                            {showMissingErrorsObject.company && (
                                <span className='text-red-600 text-[0.7em]'>Missing field</span>
                            )}
                        </div>
                        <input
                            value={formInputs.company}
                            onChange={onChangeInputField}
                            name="company"
                            className={inputFieldsStyle}
                            type="text"
                            onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, company: false }))}
                        />

                        <div className='flex justify-between items-center'>
                            <label className="font-medium text-[0.9em]">Location</label>
                            {showMissingErrorsObject.location && (
                                <span className='text-red-600 text-[0.7em]'>Missing field</span>
                            )}
                        </div>
                        <input
                            value={formInputs.location}
                            onChange={onChangeInputField}
                            name="location"
                            className={inputFieldsStyle}
                            type="text"
                            onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, location: false }))}
                        />

                        <div className='flex justify-between items-center'>
                            <label className="font-medium text-[0.9em]">Description</label>
                            {showMissingErrorsObject.description && (
                                <span className='text-red-600 text-[0.7em]'>Missing field</span>
                            )}
                        </div>
                        <textarea
                            value={formInputs.description}
                            onChange={onChangeInputField}
                            name="description"
                            rows="5"
                            className="resize-none bg-gray-50 border border-gray-200 rounded-md pl-2"
                            onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, description: false }))}
                        />
                        <button onClick={postJob} className='ml-auto bg-blue-500 text-white rounded-lg w-[35%] font-medium p-1'> Submit</button>
                    </form>
                </div>
            </div>


        )

    }

    // Desktop =----------------------------------------------------------
    return (
        <div>
            <div onClick={() => formContext.setIsDisplayAddForm(false)} className='z-1 w-full h-full fixed top-0 left-0 bg-[#2a3447] opacity-60'>


            </div>
            <div className='z-10 bg-white w-[40%]  fixed left-[30%] top-[5%]  rounded-md '>
                <div className='text-center text-pink-800 text-lg '>
                    <div className='flex justify-between'>
                        <GiArtificialHive className='text-pink-800 size-10 p-1' />
                        <RxCross2 className='mt-1 text-red-600' onClick={() => formContext.setIsDisplayAddForm(false)}></RxCross2>
                    </div>

                    Post Job Form

                </div>

                <form className='grid gap-2 p-3'>
                    <div className='flex justify-between items-center'>
                        <label className="font-medium text-[0.9em]">Title</label>
                        {showMissingErrorsObject.title && (
                            <span className='text-red-600 text-[0.7em]'>Missing field</span>
                        )}
                    </div>
                    <input
                        value={formInputs.title}
                        onChange={onChangeInputField}
                        name="title"
                        className="border border-gray-200 bg-gray-50 rounded-md pl-2"
                        type="text"
                        onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, title: false }))}
                    />
                    <div className='flex justify-between items-center'>
                        <label className="font-medium text-[0.9em]">Salary</label>
                        {showMissingErrorsObject.salary && (
                            <span className='text-red-600 text-[0.7em]'>Missing field</span>
                        )}
                    </div>
                    <input
                        value={formInputs.salary}
                        onChange={onChangeInputField}
                        name="salary"
                        className={inputFieldsStyle}
                        type="number"
                        onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, salary: false }))}
                    />


                    <div className='flex justify-between items-center'>
                        <label className="font-medium text-[0.9em]">Company</label>
                        {showMissingErrorsObject.company && (
                            <span className='text-red-600 text-[0.7em]'>Missing field</span>
                        )}
                    </div>
                    <input
                        value={formInputs.company}
                        onChange={onChangeInputField}
                        name="company"
                        className={inputFieldsStyle}
                        type="text"
                        onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, company: false }))}
                    />

                    <div className='flex justify-between items-center'>
                        <label className="font-medium text-[0.9em]">Location</label>
                        {showMissingErrorsObject.location && (
                            <span className='text-red-600 text-[0.7em]'>Missing field</span>
                        )}
                    </div>
                    <input
                        value={formInputs.location}
                        onChange={onChangeInputField}
                        name="location"
                        className={inputFieldsStyle}
                        type="text"
                        onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, location: false }))}
                    />

                    <div className='flex justify-between items-center'>
                        <label className="font-medium text-[0.9em]">Description</label>
                        {showMissingErrorsObject.description && (
                            <span className='text-red-600 text-[0.7em]'>Missing field</span>
                        )}
                    </div>
                    <textarea
                        value={formInputs.description}
                        onChange={onChangeInputField}
                        name="description"
                        rows="5"
                        className="resize-none bg-gray-50 border border-gray-200 rounded-md pl-2"
                        onFocus={() => setShowMissingErrorsObject(prev => ({ ...prev, description: false }))}
                    />
                    <button onClick={postJob} className='ml-auto bg-blue-500 text-white rounded-lg w-[35%] font-medium p-1'> Submit</button>
                </form>
            </div>
        </div>


    )
}

export default AddJobForm
