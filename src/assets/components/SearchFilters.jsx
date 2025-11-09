import React from 'react'
import { IoCloseCircleSharp } from "react-icons/io5";

function SearchFilters(props) {
    let [minSalaryRange, setMinSalaryRange] = React.useState(0)
    let [maxSalaryRange, setMaxSalaryRange] = React.useState(0)

    function onChangeMin(e) {
        setMinSalaryRange(e.target.value)
    }
    function onChangeMax(e) {
        setMaxSalaryRange(e.target.value)
    }

    function resetValues() {
        setMaxSalaryRange(0)
        setMinSalaryRange(0)
    }

    function getMinMax() {
        return { minSalaryRange, maxSalaryRange }
    }
    React.useEffect(() => {
        props.getMinMax(getMinMax)

    }, [minSalaryRange, maxSalaryRange])
    return (
        <div className='bg-white '>
            <form className='space-x-5 pt-2'>

                <div>Salary Range: </div>
                <div className='flex items-center gap-2'>

                    <div>
                        <label for="Min">Min $</label>
                        <input type="number" onChange={onChangeMin} value={minSalaryRange} className='bg-white max-w-[9ch] h-5 border-b  border-gray-400' />
                    </div>
                    <div>
                        <label for="Max">Max $</label>
                        <input type="number" onChange={onChangeMax} value={maxSalaryRange} className='bg-white max-w-[9ch] h-5 border-b  border-gray-400' />
                    </div>
                </div>

            </form>
            {(Number(minSalaryRange) || Number(maxSalaryRange)) ? <IoCloseCircleSharp onClick={resetValues} className='ml-auto m-1 text-primary size-5' /> : <div className='size-5 text-white'>.</div>}
        </div>
    )
}

export default SearchFilters
