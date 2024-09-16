const Array=({data})=>{
    console.log(data)
   // const arrayDataItems = data.map((data1) => <li>{data1}</li>);
    return (

        <div className="bg-cyan-100 flex justify-center items-center">
          { data.map((item)=>
        (
            <div >{item.name}{item.game}</div>
        ))}
        </div>
    )
}

export default Array;