import React from 'react'

function Card({bio, bioText}) {
  
  return (
        <div className="card_box border bg-white px-4 py-3 d-flex justify-content-center align-items-center flex-column" >
            <div className="icon p-4 rounded  d-flex justify-content-center align-items-center">
                <i className="fa fa-user fs-1"></i>
            </div>
            <p className="fs-5 text-black mt-2">{bio}</p>
            <h2 className='text-black'>{bioText}</h2>
        </div>
  )
}

export default Card