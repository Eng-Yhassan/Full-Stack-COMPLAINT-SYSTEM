import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const CreateComplaints = () => {
    const [open, setOpen] = useState(false);

    // Inputs
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")


  

    const handleIsOpne = () => {
        setOpen(true)
    }
    const handleclose = () => {
        setOpen(false)
    }


    const HandleCreateComplaints = () => {
        axios.post("http://localhost:5555/create/complaint", {
            "name":name,
            "email":email,
            "body":body
        }).then(() => {
          Swal.fire({
            icon:"success",
            title:"Success",
            text:"Mahadsanid",
            confirmButtonText:"ok"
          })
           
        })
    }

    return (
        <div>
            <div className='bg-yellow-200 w-full py-[240px] flex justify-center '>

                <button
                    onClick={handleIsOpne}

                    style={{
                        display: open === true ? "none" : ""
                    }}
                    className=' bg-green-300 px-14 py-2 text-3xl text-white rounded-lg'> Complaint</button>

                <form
                    style={{
                        display: open === true ? "block" : ""
                    }}
                    onSubmit={(e) => e.preventDefault()} className='hidden bg-slate-500 w-[400px] h-[430px] relative space-y-6 -mt-[190px]'>
                    <i
                        onClick={handleclose}
                        className='fa-solid fa-x absolute right-2  my-1  text-2xl text-green-300'></i>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-80 outline-none rounded-lg pl-4 text-2xl h-10 ml-10 ' type="text" placeholder='Enter Your Name' /> <br /> <br />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-80 outline-none rounded-lg pl-4 text-2xl h-10 ml-10 ' type="email" placeholder='Enter Your Email' /> <br /> <br />
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className='w-80 outline-none rounded-lg pl-4 text-2xl h-10 ml-10 ' placeholder='Enter Your Complaint'></textarea> <br /> <br />
                    <button 
                    onClick={HandleCreateComplaints}
                    className=' bg-yellow-300 w-80 py-2 ml-10  text-3xl text-white rounded-lg'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default CreateComplaints