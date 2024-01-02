import React, { useEffect, useState } from 'react'
import { getItems } from './allApi'


function Home() {
    const [pitems,setpitems]=useState([])
    const[userinfo,setuserinfo]=useState([])
    // const [response,setresponse]=useState(1)
    var result=[]
    const getitem=async()=>{
      const result= await getItems()
      setpitems(result.data)
    //   console.log(result);
  
      
      console.log(pitems);
    }
    useEffect(()=>{
        getitem()
    },[])

    const handleinfo = (e)=>{
        setuserinfo(e)

    }

    const handledelet=(e,idforuser)=>{
      
        e.preventDefault()
        var newusers=pitems.filter((afterdelete)=>{
            return afterdelete.id!=idforuser
        })
        setpitems(newusers)
        // setresponse(response+1)
    }

    
  return (
    <div className='w-full h-full flex justify-center items-start'>
        <div className='flex '>
        <div className='bg-slate-600 mt-24 p-3' style={{width:'100%',height:'100%'}}>
            {
                pitems.map((item)=>(
                   
                        <div className='flex flex-col mt-8 bg-slate-200'>
                            <div className='flex flex-col text-center mt-3'><h3>{item.name}</h3>
                            <div className='flex flex-row justify-evenly mt-6 mb-6'>
                               <div> <button onClick={e=>handleinfo(item)}><i className="fa-solid fa-info"></i></button></div>
                                <div><button onClick={e=>handledelet(e,item.id)}><i className="fa-solid fa-trash"></i></button></div>
                                </div>
                            </div>
                        </div>
                   
                ))
            }
             </div>

             {userinfo&&<div className='flex  mt-24 ms-20'>
                <div className='flex flex-col'>
                    <div>{userinfo.id}</div>
                    <div className='mt-5'> {userinfo.name}</div>
                </div>
               </div>}
        </div>
    </div>
  )
}

export default Home