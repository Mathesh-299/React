import { CircleUser } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
export const Navbar = () => {
    const [visible, setvisible] = useState(true)

    const NavLinks = [{
        title: "Profile",
        path: '/'
    }, {
        title: "Project",
        path: '/project'
    }, {
        title: "Contact",
        path: "/contact"
    }
    ]
    // const [userdata, setUserdata] = useState({
    //     email: '',
    //     password: ''
    // })
    // const handleChange = (e) => {
    //     setUserdata({ ...userdata, [e.target.id]: e.target.value })
    //     console.log(userdata)

    // }
    // const emailref = useRef(null)
    // const nameref = useRef(null)
    // const numberref = useRef(null)
    // const passwordref = useRef(null)
    // const ageref = useRef(null)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // console.log(nameref.current.value);
    //     // console.log(emailref.current.value);
    //     // console.log(numberref.current.value);
    //     // console.log(ageref.current.value);
    //     // console.log(passwordref.current.value);
    //     //  console.log(userdata)

    // }
    return (
        <>
            <div className='w-[99vw] h-[4rem] flex bg-gray-600 justify-center items-center shadow-lg shadow-cyan-100'>
                <div className='w-[80%] h-full flex justify-start items-center flex-row'>
                    <div className='w-1/2 h-full flex justify-start items-center  '>
                        <Link to={'/'}><p className='font-bold text-4xl text-white'>Mathesh</p></Link></div>
                    <div className='w-1/2 h-full flex justify-end items-center'>
                        <ul className='w-4/6 line-none flex justify-between items-center flex-row gap-10'>
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>

                                        <li className='font-bold text-2xl text-white hover:bg-black active:outline-none'>{navdata.title}</li>
                                    </NavLink>
                                ))

                            }

                        </ul>

                        {visible && (
                            //         <button className=''>
                            //             <Link to={'/login'}>
                            //                 <CircleUser className="text-white ml-10 flex justify-end items-center border-2 border-white hover:bg-white  hover:border-white hover:text-black/70" size={32} onClick={() => setvisible(true)} />
                            //             </Link>
                            //         </button>
                            <button
                                className="flex justify-end items-center border-2 border-white hover:bg-white hover:border-white hover:text-black/70 ml-20 text-white"
                                onClick={() => setvisible(true)}
                            >
                                <Link to="/login">
                                    <CircleUser size={32} />
                                </Link>
                            </button>

                        )
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;