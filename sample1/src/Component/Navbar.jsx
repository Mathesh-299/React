import { CircleUser, CircleX } from 'lucide-react';
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
    const [userdata, setUserdata] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setUserdata({ ...userdata, [e.target.id]: e.target.value })
        console.log(userdata)

    }
    // const emailref = useRef(null)
    // const nameref = useRef(null)
    // const numberref = useRef(null)
    // const passwordref = useRef(null)
    // const ageref = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(nameref.current.value);
        // console.log(emailref.current.value);
        // console.log(numberref.current.value);
        // console.log(ageref.current.value);
        // console.log(passwordref.current.value);
        //  console.log(userdata)

    }
    return (
        <>
            <div className='w-full h-[4rem] flex bg-cyan-200 justify-center items-center shadow-lg shadow-cyan-100'>
                <div className='w-[80%] h-ful flex justify-start items-center flex-row'>
                    <div className='w-1/2 h-full flex justify-start items-center font-bold text-4xl text-white '>
                        <Link to={'/'}>Mathesh M</Link></div>
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

                        {!visible && (
                            <button><CircleUser className="text-white ml-10" size={32} onClick={() => setvisible(true)} /></button>
                        )
                        }

                    </div>
                </div>
            </div>
            {
                visible && (
                    <div className='h-[91vh] w-full bg-black/20 flex justify-center items-center absolute z-30'>
                        <div className='h-[91vh] w-full bg-white flex justify-center items-center'>
                            <div className='h-[60%] w-[25%] flex flex-col justify-start items-center  shadow-md shadow-purple-800'>
                                <div className='w-[100%] h-[15%] flex flex-row justify-center px-10 items-center border-2 text-white bg-purple-500 text-2xl font-bold '>
                                    <div className='w-1/2 p-28'>
                                        Login
                                    </div>
                                    <div className='w-1/2 flex justify-end'>
                                        <button>
                                            <CircleX onClick={() => setvisible(!visible)} />
                                        </button>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[91vh] flex  justify-center items-center bg-black/20'>
                                    <form className="w-80 h-[100%] flex flex-col justify-center items-center gap-4 p-4" onSubmit={handleSubmit} >
                                        <input type="text" name="name" id="name" placeholder="Name" className=' w-80 h-[3.5rem] rounded-sm outline-none active:outline-none focus:border-b-2 hover:border-red-700 font-bold' required onChange={handleChange} />
                                        <input type="email" name="email" id="email" placeholder="Email" className=' w-80 h-[3.5rem] rounded-sm  outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required onChange={handleChange} />
                                        <button type="submit" className='submit-btn  w-80 h-[4rem] bg-black text-white text-2xl font-sans font-bold flex justify-center items-center rounded-lg'>Submit</button>
                                        {/* <input type="text" ref={nameref} name="name" id="name" placeholder="Name" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required />
                                    <input type="password"  name="password" id="password" placeholder="Password" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required  onChange={handleChange}/>
                                    <input type="email" ref={emailref} name="email" id="email" placeholder="Email" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required />
                                    <input type="number" ref={numberref} name="number" id="number" placeholder="Phone" maxLength={10} className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required />
                                    <input type="number" ref={ageref} name="age" id="age" placeholder="Age" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required />
                                    </form> */}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default Navbar;