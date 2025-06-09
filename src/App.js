import React from 'react'
import { Outlet } from "react-router";
export default function App() {
  return (
    <div className='c'>
      <Outlet />
    </div>
  )
}
