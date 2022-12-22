import React from 'react'

function Instruction() {
  return (
    <div className='note-div'>
        <p className='note-p'>NOTE:</p>
        <div className='child-note'>
        <div className='color-cl-cp'></div><p className='p-cl-cp'>This is correct letter at correct position</p>
        </div>
        <div className='child-note'>
        <div className='color-cl-ip'></div><p className='p-cl-ip'>This is correct letter but not in the correct position</p>
        </div>
    </div>
  )
}

export default Instruction