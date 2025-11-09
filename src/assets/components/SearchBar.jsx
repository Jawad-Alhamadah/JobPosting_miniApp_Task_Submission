import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import SearchFilters from './SearchFilters';
import { ScreenWidthContext } from './ScreenWidthContext';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function SearchBar(props) {
    let [searchInputValue, setSearchInputValue] = React.useState("")
    let [location, setLocation] = React.useState("")
    let [expanded, setExpanded] = React.useState(true)
    const minMaxRef = React.useRef(null);

    const width = React.useContext(ScreenWidthContext);

    React.useEffect(() => filterBySearchValue(searchInputValue, location, 0, 0),
        [searchInputValue, location, minMaxRef])


    function filterBySearchValue(searchString, location, min, max) {

        fetch("/data/mockData.json")
            .then(res => res.json())
            .then(data => {
                //if No filter is applied, return all.
                if (!searchString && !location && !min && !max) return props.setJobData(data)

                let filteredJobs = data
                let cleanLocation = location.toLowerCase().trim()
                let cleanSearchStr = searchString.toLowerCase().trim()


                if (cleanLocation) {
                    filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().trim().includes(cleanLocation))

                }

                if (searchString) {
                    filteredJobs = filteredJobs.filter(job =>
                    (job.title.toLowerCase().trim().includes(cleanSearchStr) ||
                        job.company.toLowerCase().trim().includes(cleanSearchStr) ||
                        job.location.toLowerCase().trim().includes(cleanSearchStr))
                    )
                }

                if (min !== 0) {
                    filteredJobs = filteredJobs.filter(job => job.salary >= min)
                }

                if (max !== 0) {
                    filteredJobs = filteredJobs.filter(job => job.salary <= max)
                }


                props.setJobData(filteredJobs)
            })
            .catch(err => { console.log(err) })

    }

    function onChangeSearch(e) {
        setSearchInputValue(e.target.value)
    }
    function onChangeLocation(e) {
        setLocation(e.target.value)
    }

    function search(searchStr, locationStr) {

        let min = 0
        let max = 0
        if (minMaxRef) min = Number(minMaxRef.current().minSalaryRange)
        if (minMaxRef) max = Number(minMaxRef.current().maxSalaryRange)


        filterBySearchValue(searchStr, locationStr, min, max)
    }

    function getMinMax(minMax) {
        minMaxRef.current = minMax
    }

    // Mobile
    if (width < 800) {
        return (
            <div>
                <div className='w-full bg-white p-2 flex space-x-4'>

                    <div className=' flex w-[50%] rounded-l-3xl outline bg-black'>
                        <button className=' text-white p-1'>
                            <HiOutlineSearch className='size-5 '
                                onClick={() => search(searchInputValue, location)}
                            />
                        </button>
                        <input placeholder="search" onChange={onChangeSearch} value={searchInputValue} className='pl-1  bg-white w-[90%]'>

                        </input>
                        <VscClose onClick={() => setSearchInputValue("")} className='bg-white h-full' />
                    </div>
                    <div className=' flex w-[50%] rounded-l-3xl outline bg-black'>
                        <button className=' text-white p-1'>
                            <GrLocation className='size-5 '
                                onClick={() => search(searchInputValue, location)}
                            />

                        </button>
                        <input placeholder="location" onChange={onChangeLocation} value={location} className='pl-1  bg-white  w-[90%]'></input>
                        <VscClose onClick={() => setLocation("")} className='bg-white h-full' />
                    </div>

                </div>
                <SearchFilters getMinMax={getMinMax}></SearchFilters>

            </div>
        )
    }
    //Desktop

    return (
        <div >


            <div className={` transition-transform duration-300 flex  fixed  top-12 right-0 ${expanded ? "translate-x-0" : "translate-x-[83%]"} `}>
                {expanded ?
                    <FaChevronRight onClick={() => setExpanded(false)} className='bg-primary size-auto text-white ring-1 ring-primary px-4 rounded-l-2xl'></ FaChevronRight >
                    :
                    <FaChevronLeft onClick={() => setExpanded(true)} className='bg-primary size-auto text-white ring-1 ring-primary px-4 rounded-l-2xl'></FaChevronLeft >
                }

                <div className=' bg-white pt-3 px-4 ring-1 ring-primary'>

                    <div className=' gap-2'>

                        <div className='flex gap-2 '>
                            <div>
                                <div className=' flex  rounded-l-3xl outline bg-black '>
                                    <button className=' text-white p-1'>
                                        <HiOutlineSearch className='size-5 '
                                            onClick={() => search(searchInputValue, location)}
                                        />
                                    </button>
                                    <input placeholder="search" onChange={onChangeSearch} value={searchInputValue} className='pl-1  bg-white w-[90%]'>

                                    </input>
                                    <VscClose onClick={() => setSearchInputValue("")} className='bg-white size-4 h-auto' />
                                </div>
                                <div className=' flex  rounded-l-3xl outline bg-black   '>
                                    <button className=' text-white p-1'>
                                        <GrLocation className='size-5 '
                                            onClick={() => search(searchInputValue, location)}
                                        />

                                    </button>
                                    <input placeholder="location" onChange={onChangeLocation} value={location} className='pl-1  bg-white  w-[90%]'></input>
                                    <VscClose onClick={() => setLocation("")} className='bg-white size-4 h-auto' />
                                </div>
                            </div>
                            <div>
                                <SearchFilters getMinMax={getMinMax}></SearchFilters>
                            </div>
                        </div>




                    </div>

                </div>

            </div>
        </div>
    )

}

export default SearchBar
