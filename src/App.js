import React, { useState } from 'react';



import './App.scss';


  function App(){
   


    const [val,setVal]=useState([]);
    const handleAdd=()=>{
        const abc=[...val,[]]
       
        setVal(abc)
        console.log(abc)
    }
  
    const handleChange=(onChangeValue,i)=>{
      const inputdata=[...val]

      inputdata[i]=onChangeValue.target.value;
      console.log(inputdata)
      setVal(inputdata)
     }

     const handleDelete=(i)=>{
      const deletVal=[...val]
      deletVal.splice(i,1)
      setVal(deletVal)  
  }


  
  const [count, setCount] = useState(0);
  const [coun, setCoun] = useState();
  
  const [name, setName] = useState("Counter");
  const [nam, setNam] = useState("Counter");
 // var Re;
  const inp=(e)=>{
    const set=e.target.value;
    setCoun(set);
    

   
  }
  console.log(Set)
  const nameInp=(e)=>{
  const Re=e.target.value;
  setNam(Re)

   
  }

  return (
    <div>



<button className='topbutt'  onClick={()=>handleAdd()}>Add</button>

<span>

   { val.map((data,i)=>{ 

    
return(




<span>
<div className="app" value={data} onChange={e=>handleChange(e,i)}  >
      
  


<span>
  <div>
      <h1 className='h1' > {name}</h1>
      <label>Enter the name you want to set</label>
          <input className='in' name="myInput" onChange={nameInp} />
    
    
          <label >To set value Enter the number</label>
          <input  value={coun} name="myInput" onChange={inp} />
          
          <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
            {count}
          </h1>
          <div className="button__wrapper">
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            
          </div>
          <div>
            <button onClick={() => setCount(0)} className='butt '>Reset</button>
            <button onClick={() => setCount(Number(coun))} className='butt '>Set</button>
            <button onClick={() => setName(nam)} className='butt '>Rename</button>
            
            </div>
    
    </div>
            </span>
    
            <button className='topbutt' onClick={()=>handleDelete(i)}>x</button>
    
<div className='line'></div>



</div>
</span>

)




  
   })}
   </span>
  

   </div>
  )  
     
  
  }
  
export default App;
