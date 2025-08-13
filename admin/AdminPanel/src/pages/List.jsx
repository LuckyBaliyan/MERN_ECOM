import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';
import { currency } from '../App';

const List = ({token}) => {

    const [list,setList] = useState([]);
    const [loading,setLoading] = useState(false);
    const width = window.innerWidth;

    const fetchList = async()=>{
        setLoading(true);
        try{

            const response = await axios.get(backendUrl + '/api/product/list');
            if(response.data.success){
                setList(response.data.products);
            }
            else{
                toast.error(response.data.message)
            }
        }catch(error){
            console.log(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    const deleteProduct = async(id)=>{
        setLoading(true);
        try{

            const response = await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})
            if(response.data.success){
                toast.success(response.data.message)
                await fetchList();
            }else{
                toast.error(response.data.message)
            }

        }catch(error){
            console.log(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchList();
    },[])

  return (
    <>
       {loading && (
                <div className="loader-overlay">
                  <div className="spinner"></div>
                  <p>Hold On...</p>
                </div>
           )}
        <p>All Products List</p>

        <div className='flex flex-col gap-4 mt-2 md:gap-2'>
            {/* List Table Title */}
            <div className='hidden md:grid grid-cols-[2fr_3fr_3fr_1fr_1fr] items-center
            py-1 px-2 border-0 bg-gray-100 text-sm'>
                <b>Image</b>
                <b>Name</b>
                <b>Category</b>
                <b>Price</b>
                <b className='text-center'>Action</b>
            </div>

            {/* ------ ProductList ----*/}
            {
                list.map((item,index)=>(
                    <div key={index} className='grid grid-cols-[2fr_2fr_2fr_1fr_1fr] md:grid-cols-
                    [2fr_3fr_3fr_1fr_1fr] items-center gap-2 py-1 px-2 border-b-1 border-b-gray-300 sm:text-sm text-[12px]'>
                        <img src={item.image[0]} alt="" className='w-5 sm:w-12 aspect-square rounded-[50%] object-cover'/>
                        <p className='md:translate-x-[-22%] overflow-clip leading-tight  md:leading-[1]'>{item.name}</p>
                        <p className='ml-3'>{width > 680?item.category:item.category.slice(0,1)}</p>
                        <p className='md:translate-x-[50%]'>{currency}{item.price}</p>
                        <p onClick={()=>deleteProduct(item._id)} className='text-right md:text-center cursor-pointer
                        md:text-lg  text-black md:ml-2'>X</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default List