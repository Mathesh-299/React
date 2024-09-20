import Navbar from '../Component/Navbar';
import Pic from '../assets/img/IMG-20221115-WA0002.jpg';
export const Profile = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-full flex justify-center items-center bg-black/80'>
        <div className='w-full h-[100%] flex flex-row justify-start items-center px-1'>
          <div className="h-[91vh] w-1/2 flex flex-row justify-start items-center mx-20 ">
            <div className='w-[50%] h-[60%] flex justify-center items-center'>
              <img src={Pic} alt="Profile" className='h-[90%] w-[90%] rounded-full mt-[4%]' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile;