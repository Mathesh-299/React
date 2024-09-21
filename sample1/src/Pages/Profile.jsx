import Navbar from '../Component/Navbar';
import Pic from '../assets/img/IMG-20221115-WA0002.jpg';
export const Profile = () => {
  return (
    <>
      <Navbar />

      <div className='w-[99vw] h-[91vh] flex justify-center items-center bg-black/80'>
        <div className='w-full h-[100%] flex flex-row justify-start items-center px-1'>
          <div className="h-[91vh] w-[50%] flex flex-col justify-center items-center my-20 ">
            <div className='w-[40%] h-[55%] flex justify-center items-center rounded-full'>
              <img src={Pic} alt="Profile" className='h-[90%] w-[90%] mt-[4%]  ' />
            </div>
          </div>
          <div className='h-[91vh] w-1/2 flex flex-col justify-start items-center'>
            <div className='w-full h-[30vh] flex flex-row justify-start items-end'>
              <div className=' flex flex-col justify-center items-stretch  text-yellow-300  font-bold text-3xl m'>
                <p>
                  Hello Welcome!!!
                </p>
              </div>
            </div>
            <div className='w-full h-[10vh] flex flex-row justify-start items-center'>
              <div className=' flex flex-col justify-start items-start  text-white/55  font-bold text-xl'>
                <p>
               I'm Mathesh M. 
                </p>
              </div>
              </div>
            <div className='w-full h-[45vh] flex flex-row justify-start items-start'>
              <div className=' flex flex-col justify-start items-start  text-white/55  font-bold text-xl'>
                <p>
                Mathesh M. is a dedicated third-year IT student with expertise in the MERN stack and Spring framework. Proficient in data structures and algorithms, Mathesh is focused on mastering key technologies while enhancing problem-solving skills. His goal is to apply his knowledge to drive innovation in dynamic software development environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Profile;