import Pic from '../assets/img/IMG-20221115-WA0002.jpg';
import Navbar from '../Component/Navbar';
export const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className='w-[1/2] h-[91vh]  flex flex-row bg-slate-300 '>
    <div className='h-full w-[40%] flex justify-center items-center  flex-col gap-3'>
        <img src={Pic} alt="Profile" className='w-2/6 rounded-3xl  mt-[4%]'/>
    
    <div className='w-[45%] h-16 bg-black flex justify-center items-center ml-[3px] text-3xl font-bold text-white rounded-lg'>
            Hi! I'm Mathesh M
    </div>
    <div className='w-[65%] h-39 bg-black text-slate-100 flex justify-center items-center ml-[3px] p-[6px] font-mono rounded-lg'>
    Hi, I'm Mathesh M, a passionate third-year IT student specializing in the MERN stack and Spring framework. I have a strong focus on data structures and algorithms, and I enjoy applying my skills to create innovative solutions in software development
    </div>
    </div>
    </div>
        
        </>
  )
}

export default Profile;