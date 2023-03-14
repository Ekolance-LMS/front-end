import SIdebar from '../components/SIdebar'
import React from 'react'

const Layout = ({children}) => {
  return (
    
  <div className='sm:ml-80 '>
        <SIdebar />
<div>
 {children}
 </div>
  </div>
  
  )
}

export default Layout
