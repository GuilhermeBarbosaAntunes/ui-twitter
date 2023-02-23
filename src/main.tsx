import React from 'react'
import ReactDOM from 'react-dom/client'

import './components/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <div className='layout'>
    <aside className='sidebar'></aside>
    <div className='content'>
      
    </div>
   </div>
  </React.StrictMode>,
)
