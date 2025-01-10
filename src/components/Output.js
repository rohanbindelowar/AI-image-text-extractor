import React from 'react'
import '../styles/Output.css'


 const Output = () => {
  return (
    <div className='outputWrapper'>
        <div>
            <h2 className="">Image Preview</h2>
            <img className="image" id='previewImg' />
        </div>
        <div className="output-main">
            <textarea id='output' placeholder='Your text will appear here...'></textarea>
        </div>

    </div>
  )
}
export default Output;
