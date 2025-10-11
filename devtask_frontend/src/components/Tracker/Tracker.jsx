import React from 'react'
import './Tracker.css'

function Tracker() {
  return (
    <div className='w-100 p-4'>
        <div className="tittle">
            <h1 className='text-warning'>Tracker</h1>
        </div>

        <div className="table-responsive mt-4 ">
            <table className="w-100 tracker_table text-center">
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th >Duration</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Task Mananger</td>
                        <td>Task Mananger</td>
                        <td> 04:15 AM</td>
                        <td> 04:15 PM</td>
                        <td className=' ' >
                            <div className="completed_msg status_box">
                             Completed
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Task Mananger</td>
                        <td>Task Mananger</td>
                        <td> 04:15 AM</td>
                        <td> 04:15 PM</td>
                        <td className=''>
                            <div className="pending_msg status_box">

                             Pending
                            </div>
                             
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tracker