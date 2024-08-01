import React from 'react'
// container me specifically styling properties dete hai
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx auto px-4'>
      {children}  
    </div>
  )
}

export default Container