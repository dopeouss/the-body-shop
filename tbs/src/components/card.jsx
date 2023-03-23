import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
 

export default function card () {
    const productsurl = "https://fakestoreapi.com/products";
    const [records, setRecords] = useState([]);
  
    useEffect( ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(Response => {setRecords(Response.data)})
        .catch(err=> console.log(err))
    },[])
    

    
   
    
  return (

    
    <div>
     <div className='card-countainer'>
         
         <div className='cards'> 
        {records.map((list,index)=>( 
            <dir className="card" key={index}>
             <div className='prodimg' ><img src= { list.image } alt="" /></div>
             <div className='namePrice'>
                <h3 className="prodname"> { list.title } </h3>
                <span className="prodprice"> {list.price} $  </span>
             </div>
             <p className='text'> {list.description} </p>
             <div className="bay">
                <button> Buy Now </button>
             </div>
            </dir>

        ))}
       </div>       
     </div>
    </div>
  )
}
