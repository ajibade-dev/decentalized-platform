import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import logo from '../assets/logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // to give a sticky menu
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 0;
  //     setScrolled(isScrolled);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const navbarClass = scrolled ? 'bg-[#1A2156]' : 'bg-transparent';

//to open and close the menu in mobile
  const handleNav = () => {
    setNav(!nav)
  }

  return (

<nav className="bg-transparent duration-300 -mt-16" >
  
  <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center">

    <div className=' w-[100px] h-[60px] flex items-center justify-center'>
                <img src={logo} alt="shiba" />
                </div>
  </a>
  
  <div className="items-center justify-between mx-auto hidden w-full md:flex md:w-auto" id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
      <li>
        <a href="#home" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
      </li>

      <li>
        <a href="#buy" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0 " aria-current="page">Buy</a>
      </li>

      <li>
        <a href="#ecosystem" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent  md:p-0" aria-current="page">Ecosystem</a>
      </li>

      <li>
        <a href="#community" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 " aria-current="page">Community</a>
      </li>
     
    </ul>


  </div> 
  {/* <div className="flex"> */}
  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 mt-4 overflow-hidden text-sm font-medium text-white rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative md:px-10 md:py-4 px-6 py-2  transition-all ease-in duration-7 bg-slate-900 rounded-md group-hover:bg-opacity-0 font-display text-white">
                    Whitepaper
                </span></button>

      <div onClick={handleNav} className='flex md:hidden'>
        {!nav ? <AiOutlineClose size={20} color='white' className='m-2' />: <AiOutlineMenu size={20} color='white' className='m-2' />}

  </div>
  {/* </div> */}

  {/* Mobile Menu */}
  <div className='flex md:hidden z-20'>
  <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-[50%] bg-gray-800 ease-in-out duration-500' : 'fixed left-[-100%] ease-out duration-500'}>
  {/* <a href="" className="flex items-center">
    <span className="self-center whitespace-nowrap dark:text-white font-display font-extrabold text-3xl pt-10">SPACE SHIBA</span>
  </a> */}

    <ul className='pt-16 uppercase pr-4'>
    <li>
        <a href="#home" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700 border-b border-gray-700" aria-current="page">Home</a>
      </li>

      <li>
        <a href="#buy" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700 border-b border-gray-700" aria-current="page">Buy</a>
      </li>

      <li>
        <a href="#ecosystem" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700 border-b border-gray-700" aria-current="page">Ecosystem</a>
      </li>

      <li>
        <a href="#community" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-xl hover:bg-slate-700" aria-current="page">Community</a>
      </li>
      
    </ul>
  </div>
  </div>


  </div>
</nav>


  )
}

export default Navbar