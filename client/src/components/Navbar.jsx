import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/svg/company.svg';
import {navData} from '../constants/index.js';
import {FaBarsStaggered, FaXmark} from 'react-icons/fa6'

const Navbar = () => {
    const [isMenuOpen,setisMenuOpen] = useState(false)
    const   handleMenuToggle = ()=>{
        setisMenuOpen(!isMenuOpen);
    }
  return (
    <>
        <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
            <nav className='flex justify-between items-center py-6'>
                <Link className='flex items-center gap-2 text-2xl text-black' to='/'>
                    <img src={logo} alt='logo'/>
                    <span>Jobify</span>
                </Link>
                <ul className='hidden md:flex gap-12'>
                    {navData.map((val,index)=>(
                        <li key={index} className='text-base text-primary'>
                            <NavLink key={index} to={val.path}
                                style={({ isActive})=>{
                                    return {
                                        fontWeight: isActive ? "normal" : "normal"
                                    }
                                }}
                                className={({ isActive}) =>
                                isActive ? "active" : ""}
                                >
                                {val.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
                    <Link to='/contact' className='py-2 px-5 border rounded hover:bg-blue hover:text-white duration-300'>contact</Link>
                </div>

                {/* mobile menu */}
                <div className='md:hidden block'>
                    <button onClick={handleMenuToggle}>
                        {isMenuOpen? <FaXmark className='w-6 h-7 text-primary'/> : <FaBarsStaggered className='w-6 h-7 text-primary'/>}
                    </button>
                </div>

            </nav>
                {/*nav links for mobile*/}
                <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen? '' : 'hidden'}`}>
                    <ul>
                    {navData.map((val,index)=>(
                        <li key={index} className='text-base text-white mb-5'>
                            <NavLink key={index} to={val.path}
                                style={({ isActive})=>{
                                    return {
                                        fontWeight: isActive ? "normal" : "normal"
                                    }
                                }}
                                className={({ isActive}) =>
                                isActive ? "active" : ""}
                                >
                                {val.title}
                            </NavLink>
                        </li>
                    ))}
                      <li className='text-white py-1'>
                        <Link to='/login'>Log in</Link>
                      </li>
                    </ul>
                </div>
        </header>
    </>
  )
}

export default Navbar