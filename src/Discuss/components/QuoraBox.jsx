import { Avatar } from '@material-ui/core'
import React from 'react'
import "./css/QuoraBox.css"
function QuoraBox() {
  return (
    <div className='quoraBox'>
        <div className='quoraBox__info'>
             <Avatar/>
        </div>
        <div className='quoraBox__quora'>
           <h5>what is your quetion</h5>
        </div>
      
    </div>
  )
}

export default QuoraBox
