import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (

<nav className="bg-transparent">
  
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 g">
  <a href="" className="flex items-center">
    <span className="self-center whitespace-nowrap dark:text-white font-display font-extrabold text-3xl">SPACE SHIBA</span>
  </a>
  
  <div className="items-center justify-between mx-auto hidden w-full md:flex md:w-auto" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
      </li>

      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 " aria-current="page">Buy</a>
      </li>

      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0" aria-current="page">Ecosystem</a>
      </li>

      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Community</a>
      </li>
     
    </ul>

  </div> 
  <div className="flex">
      <button type="button" className="text-white bg-transparent border border-white font-medium rounded-full text-sm px-4 py-2 text-center mr-3 md:mr-0 hover:bg-white hover:text-blue-950 hover:border-black duration-200">Spaceship Swap</button>

      <div onClick={handleNav} className='flex md:hidden'>
        {!nav ? <AiOutlineClose size={20} color='white' className='m-2' />: <AiOutlineMenu size={20} color='white' className='m-2' />}

  </div>
  </div>

  {/* Mobile Menu */}
  <div className='flex md:hidden'>
  <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-[70%] bg-gray-800 ease-in-out duration-500' : 'fixed left-[-100%] ease-out duration-500'}>
  {/* <a href="" className="flex items-center">
    <span className="self-center whitespace-nowrap dark:text-white font-display font-extrabold text-3xl pt-10">SPACE SHIBA</span>
  </a> */}

    <ul className='pt-16 uppercase pr-4'>
    <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700 border-b border-gray-700" aria-current="page">Home</a>
      </li>

      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700 border-b border-gray-700" aria-current="page">Buy</a>
      </li>

      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700 border-b border-gray-700" aria-current="page">Ecosystem</a>
      </li>

      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700" aria-current="page">Community</a>
      </li>
      
    </ul>
  </div>
  </div>


  </div>
</nav>


  )
}

export default Navbar