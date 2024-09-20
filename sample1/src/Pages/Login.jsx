import { CircleX } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
export const Login = () => {
    const [visible, setvisible] = useState(true)
    const [userdata, setUserdata] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setUserdata({ ...userdata, [e.target.id]: e.target.value })
        console.log(userdata)

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (

        <>
            <Navbar />
            {
                visible && (
                    <div className='h-[91vh] w-full bg-black/20 flex justify-center items-center absolute z-30'>
                        <div className='h-[91vh] w-full bg-black flex justify-center items-center'>
                            <div className='h-[60%] w-[35%] flex flex-col justify-start bg-white items-center  shadow-md shadow-purple-800'>
                                <div className='w-[100%] h-[15%] flex flex-row justify-center px-10 items-center border-transparent text-white bg-gray-600 text-2xl font-bold '>
                                    <div className='w-1/2 p-28'>
                                        Login
                                    </div>
                                    <div className='w-1/2 flex justify-end'>
                                        <button>
                                                <Link to={'/'}><CircleX onClick={() => setvisible(!visible)} /></Link>
                                        </button>
                                    </div>
                                </div>
                                <div className='w-[100%] h-[91vh] flex  justify-center items-center bg-black/90'>
                                    <form className="w-80 h-[100%] flex flex-col justify-center items-center gap-4 p-4" onSubmit={handleSubmit} >
                                        <input type="text" name="name" id="name" placeholder="Name" className=' w-80 h-[3rem] rounded-sm outline-none active:outline-none focus:border-b-2 hover:border-green-700 bg-[#d1d1d1] hover:bg-white font-bold' required onChange={handleChange} />
                                        <input type="email" name="email" id="email" placeholder="Email" className=' w-80 h-[3rem] rounded-sm  outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required onChange={handleChange} />
                                        <button type="submit" className='submit-btn  w-80 h-[3.5rem] bg-green-700 text-black text-2xl font-sans font-bold flex justify-center items-center rounded-lg hover:bg-white'>Submit</button>
                                        {/* <input type="text" ref={nameref} name="name" id="name" placeholder="Name" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required />
                                        <input type="password" name="password" id="password" placeholder="Password" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required onChange={handleChange} />
                                        <input type="email" ref={emailref} name="email" id="email" placeholder="Email" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required />
                                        <input type="number" ref={numberref} name="number" id="number" placeholder="Phone" maxLength={10} className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required />
                                        <input type="number" ref={ageref} name="age" id="age" placeholder="Age" className=' w-80 h-[15%] outline-none active:outline-none focus:border-b-2 hover:border-purple-700 font-bold' required /> */}
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

export default Login;
