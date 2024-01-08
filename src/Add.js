import {React , useState,useContext} from 'react';
import { appContext } from './App';

function Add(props){
  const {store,setStore}=useContext(appContext)
  //console.log(store)
 // console.log(props)
    const[count,setCount]=useState(0);
    const[counter,setCounter]=useState("Counter");
    const[Rename,setRename]=useState("");
    const [value,setValue]=useState();
   
 
 














    
    const handleChange=(e)=>{
  
     const {name,value}=e.target;
     if(name === 'Rename'){
     setRename(value)
     }
      
     if(name ==='Val' )
     setValue(value)
 
    }

   
 function handleSubmit(){
   
     console.log(props.index)
     setCounter(Rename);
     setRename("")
   
 }
  
 function removeElement(k){
  console.log(k)
 const temp=store.filter((d,i)=>{
  return k!==d.id
 })
 setStore(temp)
 console.log(store[k])
 }
 
 
  
 
   return (
     <div>
 
   <div className="app"  >
 <span>
   <div>
  
      <h1 className='h1' >{counter} {props.index} </h1>
       <label>Enter the name you want to set</label>
           <input className='in' name="Rename" value={Rename} onChange={(e)=>handleChange(e)} />
     
     
           <label >To set value Enter the number</label>
           <input  name="Val" value={value} onChange={(e)=>handleChange(e)} />
           
           <h1 className="positive">
           {count}
           </h1>
           <div className="button__wrapper">
             <button onClick={()=>setCount(count-1)} >-</button>
             <button onClick={()=>setCount(count+1)}>+</button>
             
           </div>
           <div>
             <button  className='butt' onClick={()=>setCount(0)}>Reset</button>
             <button className='butt' onClick={()=>setCount(Number(value))}>Set Value</button>
            
           <button className='butt ' onClick={()=>handleSubmit()}>Rename</button>
             
             </div>
     
     </div>

             </span>
     
             <button className='topbutt' onClick={()=>removeElement(props.index)}>x</button>
     
 <div className='line'></div>
 
 
 
 </div> 
 
    </div>
 
   )  
      
   
   }

export default Add;