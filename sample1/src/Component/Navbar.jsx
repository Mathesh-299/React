import { CircleUser } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <>
    <div className='w-full h-[4rem] flex bg-cyan-200 justify-center items-center shadow-lg shadow-cyan-100'>
        <div className='w-[80%] h-ful flex justify-start items-center flex-row'>
            <div className='w-1/2 h-full flex justify-start items-center font-bold text-2xl text-white'> Mathesh M</div>
            <div className='w-1/2 h-full flex justify-end items-center'>
                <ul className='w-4/6 line-none flex justify-between items-center flex-row '>
                <Link to={'/'}>
                    <li className='font-bold text-2xl text-white'>Profile</li>
                </Link>
                <Link to={'/project'}>
                    <li className='font-bold text-2xl text-white'>Project</li>
                </Link>
                <Link to={'/contact'}>
                    <li className='font-bold text-2xl text-white'>Contact</li>
                </Link>
                {/* </Link> */}
                </ul>
                    <CircleUser className="text-white ml-10" size={32}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar ;

