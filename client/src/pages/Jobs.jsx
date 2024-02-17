import React from 'react'

const Jobs = ({data}) => {
  return (
    <>
      <div>
        <h3 className='text-lg font-bold mb-2'>{data.length} Jobs!</h3>
      </div>
      <div>{data}</div>
    </>
  )
}

export default Jobs