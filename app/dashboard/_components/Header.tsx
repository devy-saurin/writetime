import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-xl'>
        <Search />
        <input type='text' placeholder='Search...'
          className='outline-none' />
      </div>
      <div className='bg-primary p-3 rounded-full text-xs items-center text-white px-2'>
        <h2>Join Membership just just for $10.99/Month</h2>
      </div>
    </div>
  )
}

export default Header