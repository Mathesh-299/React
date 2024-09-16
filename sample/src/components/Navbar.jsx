const Navbar=({para})=>{
    console.log(para)
    return (
        <div className="flex justify-center items-center bg-blue-600">{para.appData}{para.appName}</div>
    )
}

export default Navbar;