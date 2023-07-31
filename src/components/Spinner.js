import React from 'react'
import loading from './loading.gif'

const Spinner = () => {

  return (
    <div className='my-3 text-center'>
      <img src={loading} alt="Loading" />
    </div>
  )

}

export default Spinner
