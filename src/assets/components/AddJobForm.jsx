import React from 'react'
import { isAddFormOpenContext } from './IsAddJobFormOpenContext'
import { useContext } from 'react'
import {generateUID} from "./helperFunctions"
function AddJobForm(props) {
    let formContext = useContext(isAddFormOpenContext)
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
            props.setJobData(prev => ([...prev, { src:"/logos/default.svg",id:generateUID(),...formInputs }]));
        }

    }
    return (
        <div>
            <div onClick={() => formContext.setIsDisplayAddForm(false)} className='w-full h-full fixed top-0 left-0 bg-[#2a3447] opacity-60'>


            </div>
            <div className='bg-white w-[80%]  fixed left-[10%] top-[5%]  rounded-md '>
                <form className='grid justify-center gap-2 p-3'>

                    {/* 


                    <label className="font-medium text-[0.9em]" htmlFor="">Title </label>
                    <input value={formInputs.title} onChange={onChangeInputField} name="title" className="border border-gray-200 bg-gray-50 rounded-md pl-2 " type="text" />

                    <label className="font-medium text-[0.9em]" htmlFor="">Salary </label>
                    <input value={formInputs.salary} onChange={onChangeInputField} name="salary" className={inputFieldsStyle} type="number" />

                    <label className="font-medium text-[0.9em]" htmlFor="">Company </label>
                    <input value={formInputs.company} onChange={onChangeInputField} name="company" className={inputFieldsStyle} type="text" />

                    <div className='flex justify-between items-center'>
                        <label className="font-medium text-[0.9em]" htmlFor="">Location </label>
                        
                        {
                            showMissingErrorsObject.location?
                            <span className='text-red-600 text-[0.7em]'>Location Field missing</span>
                            :
                            ""
                        }
                    </div>


                    <input value={formInputs.location} onChange={onChangeInputField} name="location" className={inputFieldsStyle} type="text" />


                    <label className="font-medium text-[0.9em]" htmlFor="">Description </label>
                    <textarea value={formInputs.description} onChange={onChangeInputField} name="description" rows="5" className='resize-none bg-gray-50 border border-gray-200 rounded-md pl-2' id="" ></textarea> */}

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
