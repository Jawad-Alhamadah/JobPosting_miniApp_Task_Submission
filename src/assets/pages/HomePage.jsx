import React from 'react'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AddJobForm from '../components/AddJobForm'
import { isAddFormOpenContext } from '../components/IsAddJobFormOpenContext'
import SearchFilters from '../components/SearchFilters'
import UserProfile from '../components/UserProfile'
import { GiArtificialHive } from "react-icons/gi";
import Footer from '../components/Footer'
import { ScreenWidthContext } from '../components/ScreenWidthContext'
function HomePage() {


  let [jobData, setJobData] = React.useState([])
  let [isDisplayAddForm, setIsDisplayAddForm] = React.useState(false)

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ------------|Mobile|-----------------------------
  if (width < 800) {
    return (
      <div >
        <isAddFormOpenContext.Provider value={{ isDisplayAddForm, setIsDisplayAddForm }}>
          <ScreenWidthContext.Provider value={width}>
            <Navbar ></Navbar>
            <SearchBar setJobData={setJobData}></SearchBar>
            {/* <SearchFilters></SearchFilters> */}

            {isDisplayAddForm && <AddJobForm setJobData={setJobData}></AddJobForm>}

            {
              jobData.map(job => <JobCard key={job.id} {...job} />)
            }

            {jobData.length ? "" : <div className='text-gray-400 w-full text-center pt-5 capitalize'>no jobs found</div>}
          </ScreenWidthContext.Provider>
        </isAddFormOpenContext.Provider>
        <Footer></Footer>
      </div>
    )
  }

  // ------------|Desktop|-----------------------------
  return (
    <div >
      <isAddFormOpenContext.Provider value={{ isDisplayAddForm, setIsDisplayAddForm }}>
        <ScreenWidthContext.Provider value={width}>
          <Navbar ></Navbar>




          {/* <SearchFilters></SearchFilters> */}

          {isDisplayAddForm && <AddJobForm setJobData={setJobData}></AddJobForm>}

          <div className='flex '>

            <UserProfile  name="Jawad Alhamadah" education="Kansas State University" skills={["React", "Vue", "NodeJs", "Javascript"]} title="Software Developer" ></UserProfile>
            <SearchBar setJobData={setJobData}></SearchBar>
            <div className='w-full'>
              <div className=' flex w-full'>


                <div className='flex w-[60%] ml-25'>
                  <div className='flex items-center'><GiArtificialHive className='text-primary size-21' /></div>
                  <div className='text-[2.5em] text-primary flex items-center'>Job Listing App</div>
                </div>
              </div>
              <div className=' p-1 overflow-y-scroll max-h-[500px] grid justify-items-center mt-4'>
                {
                  jobData.map(job => <JobCard key={job.id} {...job} />)
                }

              </div>

            </div>



          </div>


          {jobData.length ? "" : <div className='text-gray-400 w-full text-center pt-5 capitalize'>no jobs found</div>}

        </ScreenWidthContext.Provider>
      </isAddFormOpenContext.Provider>
      <Footer></Footer>
    </div>
  )

}

export default HomePage
