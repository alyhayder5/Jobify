import React from 'react';

const SideInputFields = ({data,handleChange}) => {
  return (
    <>
      {data.map((city,index)=>(
        <div key={city.name}>
          <label className='sidebar-label-container'>
            <input defaultChecked={index === 0} type="radio" name={city.val} id={city.name} value={city.value? city.value : city.timezone? city.timezone : city.work? city.work : city.type? city.type : city.name} onChange={handleChange}/>
            <span className='checkmark'></span>{city.name}
          </label>
        </div>
      ))}
    </>
  )
}

export default SideInputFields