import React from 'react';
import Array from './components/Array';
import Ground from './components/Ground';
import Navbar from './components/Navbar';
export const App = () => {
  const count=[
    {"name":"mathesh  ",
    "game":"cricket"
  }
  ]

  const graph ={
    appData:"Cricket",
    appName:"cricbuzz"
  }

  const arrayvalue=[
    "mathesh",
    "virat kohli"
  ]
  return (
    
     <>

       <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-slate-50 to-cyan-500">
         <div className="w-[500px] h-[500px] flex justify-center items-center bg-gradient-to-bl from-slate-700  to-pink-300">
           <form className="h-[500px] w-full flex flex-col justify-center items-center gap-5">
             <label className="w-[250px] flex justify-center items-center bg-green-200 p-3 rounded-lg">LOGIN FORM</label>
             <input type="text" id="" name="name" placeholder="Enter Your Name" className="w-[450px] h-[50px] font-bold outline-none active:outline-none focus:border-b-2  hover:border-purple-500 rounded-md" />
             <input type="email" id="" name="email" placeholder="Enter Your Email" className="w-[450px] h-[50px] font-bold outline-none active:outline-none focus:border-b-2 hover:border-yellow-400 rounded-md" />
            <input type="phoneno" id="" name="number" placeholder="Enter your Phone Number" className="h-[50px] w-[450px] font-bold outline-none active:outline-none focus:border-b-2 hover:border-red-900 rounded-md" />
           <textarea type="address" id="" name="address" placeholder='Enter your Address' rows={10} cols={10} className='h-[100px] w-[450px] font-bold outline-none active:outline-none focus:border-b-2 hover:border-green-500 rounded-md'>
            </textarea>
             <button type='submit' className='h-[50px] w-[200px] bg-gradient-to-b from-[#536976] to-[#292E49] text-zinc-50 rounded-lg'>Submit</button>
           </form>

         </div>
      </div>
      <div>
        <Array data={count}/>
        <Navbar para={graph} />
        <Ground set={arrayvalue} />
      </div>
    </>
  )
}

export default App;



