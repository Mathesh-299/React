import { CircleUser } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    const [visible, setvisible] = useState(false)

    const NavLinks = [{
        title: "Profile",
        path: '/'
    }, {
        title: "Project",
        path: '/project'
    }, {
        title: "Contact",
        path: "/contact"
    },
    {
        title: "Login",
        path: '/login'
    }
    ]
    return (
        <>
            <div className='w-full h-[4rem] flex bg-cyan-200 justify-center items-center shadow-lg shadow-cyan-100'>
                <div className='w-[80%] h-ful flex justify-start items-center flex-row'>
                    <div className='w-1/2 h-full flex justify-start items-center font-bold text-2xl text-white'>
                        <Link to={'/project'}>Mathesh M</Link></div>
                    <div className='w-1/2 h-full flex justify-end items-center'>
                        <ul className='w-4/6 line-none flex justify-between items-center flex-row '>
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>

                                        <li className='font-bold text-2xl text-white hover:bg-black active:outline-none'>{navdata.title}</li>
                                    </NavLink>
                                ))

                            }

                        </ul>

                        <CircleUser className="text-white ml-10" size={32} onClick={() => setvisible(true)} />

                    </div>
                </div>
            </div>
            {
                visible &&(
                    <div className='h-[91vh] w-full bg-black/20 flex justify-center items-center z-50'>
                        <div className='h-[70%] w-[40%] flex flex-col justify-start items-start bg-white '>
                            <div className='h-[20%] w-full flex justify-center items-center bg-purple-400'>
                                Login
                            </div>
                            <div></div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Navbar;

