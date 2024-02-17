import React from 'react';
import SideInputs from '../components/SideInputFields';
import {cityNames,salaryLimit,datePost,workExp,employment} from '../constants/index';
import Button from '../components/Button';


const Sidebar = ({handleClick,handleChange}) => {
  return (
    <>
      <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <div>
          <h4 className='text-lg font-medium mb-2'>Location</h4>
          <SideInputs data={cityNames} handleChange={handleChange}/>
        </div>
        <div>
          <h4 className='text-lg font-medium mb-2'>Salary</h4>
          <Button handleClick={handleClick}/>
          <hr className='mb-4 border-none'/>
          <SideInputs data={salaryLimit} handleChange={handleChange}/>
        </div>
        <div>
          <h4 className='text-lg font-medium mb-2'>Date of posting</h4>
          <SideInputs data={datePost} handleChange={handleChange}/>
        </div>
        <div>
          <h4 className='text-lg font-medium mb-2'>Work Experience</h4>
          <SideInputs data={workExp} handleChange={handleChange}/>
        </div>
        <div>
          <h4 className='text-lg font-medium mb-2'>Type of employment</h4>
          <SideInputs data={employment} handleChange={handleChange}/>
        </div>
      </div>
    </>
  )
}

export default Sidebar