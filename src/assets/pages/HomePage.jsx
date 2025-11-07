import React from 'react'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AddJobForm from '../components/AddJobForm'
import { isAddFormOpenContext } from '../components/IsAddJobFormOpenContext'
import SearchFilters from '../components/SearchFilters'
function HomePage() {


  let [jobData, setJobData] = React.useState([])
  let [isDisplayAddForm, setIsDisplayAddForm] = React.useState(false)

  return (
    <div >
      <isAddFormOpenContext.Provider value={{ isDisplayAddForm, setIsDisplayAddForm }}>
        <SearchBar setJobData={setJobData}></SearchBar>
        {/* <SearchFilters></SearchFilters> */}

        {isDisplayAddForm && <AddJobForm setJobData={setJobData}></AddJobForm>}
        {console.log(jobData)}
        {
          jobData.map(job => <JobCard key={job.id} {...job} />)
        }

        {jobData.length ? "" : <div className='text-gray-400 w-full text-center pt-5 capitalize'>no jobs found</div>}
        <Navbar ></Navbar>
      </isAddFormOpenContext.Provider>
    </div>
  )
}

export default HomePage
