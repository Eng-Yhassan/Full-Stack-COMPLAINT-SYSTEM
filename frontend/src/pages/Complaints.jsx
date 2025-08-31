import React, { useEffect, useState } from 'react'
import axios from "axios"
const Complaints = () => {
    const [data, setData] = useState([])

    const handleData = () => {
        axios.get("http://localhost:5555/read/complaint").then((res) => {
            setData(res.data);
        })
    }

    useEffect(() => {
        handleData()
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5555/delete/complaint/${id}`).then(()=>{
            alert("Deleted")
            handleData()
        })
    }

    return (
        <div className='flex flex-wrap gap-4'>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className='bg-yellow-300 w-[400px] h-[350px] mt-4 space-y-4 px-3'>
                            <h1 className='text-3xl font-semibold '>Name: <span>{item.name}</span></h1>
                            <h1 className='text-3xl font-semibold '>Email: <span>{item.email}</span></h1>
                            <h1 className='text-3xl font-semibold text-center text-red-600 '>Complaints</h1>
                            <h1 className='text-3xl font-semibold '>{item.body}</h1>
                            <div className='flex justify-end text-3xl px-4 text-red-600 border-t-2 border-black '>
                                <i onClick={()=> handleDelete(item._id)} className='fa-solid fa-trash mt-4'></i>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Complaints