import {React,useContext} from 'react';
import Add from './Add';
import { appContext } from './App';

function Middle(props) {
    const {store,setStore,id,setId,sub,setSub}=useContext(appContext)
    //const[id,setId]=useState(0);
    function addElement(e){
    //  const x=  <Add/>;
/*[
  0:{}
]

[
  0:{
    0:id,
    1:{}
  }
]






*/


const y={};
y.id=id;
y.data=<Add/>

setId(id+1);


    setStore((prev)=>[...prev,y])
      
    
   
    }
  

    return (
        <>
             <button className='topbutt' onClick={(e)=>addElement(e)}>Add</button>
      
      {store.map((item,i)=>{
 ;
 return(
 <div key={i}>
   <Add index={item.id}/>
 </div>
 
 )
       })
 }
        </>
    );
}

export default Middle;