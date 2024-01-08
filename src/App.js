import React, { useState,createContext } from 'react';
import Middle from './Middle';
import './App.scss';

export const appContext=createContext(null);
function App() {
 const[store,setStore]=useState([]);
 const[id,setId]=useState(0);
 const[sub,setSub]=useState([])

 const sendContext={
  store,setStore,id,setId,sub,setSub
 }
  return (



<appContext.Provider  value={sendContext}>

<div className='main'>
 <Middle/>
    </div>

</appContext.Provider>
    





  );
}

export default App;


