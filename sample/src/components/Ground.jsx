const Ground=({set})=>{
    const ArrayValue =set.map((sets)=> <li>{sets}</li>)
    console.log(set)
return (
    <div className=" h-[50px] w-[450px] font-bold bg-yellow-200 flex justify-center items-center p-3">
        <ul>{ArrayValue}</ul>
    </div>
)
}

export default Ground;