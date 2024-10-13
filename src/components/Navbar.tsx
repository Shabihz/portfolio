import React from 'react'


import {Button} from '@/components/ui/button'
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  function handleClick
  (): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>
           Shabih Zehra
        </div>
        <ul className='gap-10 lg:gap-16 hidden md:flex'>
        
            <li className='menuLink'color='red'><a href='#hero'> <Button onClick={handleClick}>Home</Button></a></li>
            <li className='menuLink'><a href='#about'> <Button onClick={handleClick}>About</Button></a></li>
            <li className='menuLink'><a href='#projects'> <Button onClick={handleClick}>Project</Button></a></li>
            <li className='menuLink'><a href='#skills'> <Button onClick={handleClick}>Skills</Button></a></li>
            <li className='menuLink'><a href='#contacts'> <Button onClick={handleClick}>Contacts</Button></a></li>
        </ul>
        <AiOutlineMenu className='md:hidden size={30}'/>
      </div>
    </div>
  )
}

export default Navbar
