import React from 'react'
import { assets } from '../assets/admin_assets/assets';
import '../index.css';
import { useState } from 'react';
import axios  from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
    const [image1,setImage1] = useState(false);
    const [image2,setImage2] = useState(false);
    const [image3,setImage3] = useState(false);
    const [image4,setImage4] = useState(false);

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('Men');
    const [subCategory,setSubCategory] =  useState('Topwear');

    const [bestseller,setBestseller] = useState(false);
    const [sizez,setSizes] = useState([]);

    //custome loader

    const [loading,setLoading] = useState(false);

    const onSubmitHandler = async(e)=>{
        e.preventDefault();
        setLoading(true)
        try{
            const formData = new FormData();

            formData.append("name",name);
            formData.append('description',description);
            formData.append('price',price);
            formData.append('category',category);
            formData.append('subCategory',subCategory);
            formData.append('bestseller',bestseller);
            formData.append('sizes',JSON.stringify(sizez));
            image1 && formData.append('image1',image1);
            image2 && formData.append('image2',image2);
            image3 && formData.append('image3',image3);
            image4 && formData.append('image4',image4);

            /*bsically when i Post this response due to authenticational code of my backend i was unautharized for the
            acrtion because i havent add the token which holds my authorization in this request 
            headers */

            const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})
            if(response.data.success){
                toast.success(response.data.message);
                setName('');
                setDescription('');
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(false);
                setPrice('');
                setBestseller(false);
            }else{
                toast.error(response.data.message)
            }
        }catch(error){
          console.log(error.message)
        }
        finally{
            setLoading(false);
        }
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
        <div>
            {loading && (
                <div className="loader-overlay">
                  <div className="spinner"></div>
                  <p>Adding product...</p>
                </div>
           )}

            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Product"}
            </button>

            <p className='mb-2'>Upload Image</p>

            <div className='flex gap-2'>
                <label htmlFor="image1">
                    <img src={!image1 ? assets.upload_area: URL.createObjectURL(image1)} alt="" 
                    className='w-20 overflow-hidden aspect-square object-cover'/>
                    <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id='image1' hidden/>
                </label>
                <label htmlFor="image2">
                    <img src={!image2 ? assets.upload_area: URL.createObjectURL(image2)} alt=""  
                    className='w-20 overflow-hidden aspect-square object-cover'/>
                    <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id='image2' hidden/>
                </label>
                <label htmlFor="image3">
                    <img src={!image3 ? assets.upload_area: URL.createObjectURL(image3)} alt=""  
                    className='w-20 overflow-hidden aspect-square object-cover'/>
                    <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id='image3' hidden/>
                </label>
                <label htmlFor="image4">
                    <img src={!image4 ? assets.upload_area: URL.createObjectURL(image4)} alt=""  
                    className='w-20 overflow-hidden aspect-square object-cover'/>
                    <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id='image4' hidden/>
                </label>
            </div>
        </div>

        <div className='w-full'>
            <p className='mb-2'>Product Name</p>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" 
            placeholder='Type product name' required
            className='w-full max-w-[500px] px-3 py-2'/>
        </div>

        <div className='w-full'>
            <p className='mb-2'>Product Description</p>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} 
            placeholder='Write about the product' required
            className='w-full max-w-[500px] px-3 py-2'/>
        </div>

     <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
            <p className='mb-2'>Product Category</p>
            <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
            </select>
        </div>

        <div>
            <p className='mb-2'>Sub Category</p>
            <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
                <option value="Topwear">Topwear</option>
                <option value="Bottomwear">Bottomwear</option>
                <option value="Seasonal">Seasonal</option>
            </select>
        </div>

        <div>
            <p className='mb-2'>Product Price</p>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} type="Number" 
            placeholder='10' min={10} className='w-full px-3 
            py-2 sm:w-[120px]'/>
        </div>
     </div>
     <div>
        <p className='mb-2'>Product Sizes</p>
            <div className='flex gap-3'>
                <div onClick={()=>setSizes(prev=> prev.includes("S") ? 
                    prev.filter((item)=>item!== "S"):[...prev,"S"])}>
                    <p className={`${sizez.includes("S")?'bg-pink-100':'bg-slate-100'} 
                    px-3 py-1 cursor-pointer transition`}>S</p>
                </div>
                <div onClick={()=>setSizes(prev=> prev.includes("M") ? 
                    prev.filter((item)=>item!== "M"):[...prev,"M"])}>
                    <p  className={`${sizez.includes("M")?'bg-pink-100':'bg-slate-100'} 
                    px-3 py-1 cursor-pointer transition`}>M</p>
                </div>
                <div onClick={()=>setSizes(prev=> prev.includes("L") ? 
                    prev.filter((item)=>item!== "L"):[...prev,"L"])}>
                    <p  className={`${sizez.includes("L")?'bg-pink-100':'bg-slate-100'} 
                    px-3 py-1 cursor-pointer transition`}>L</p>
                </div>
                <div onClick={()=>setSizes(prev=> prev.includes("XL") ? 
                    prev.filter((item)=>item!== "XL"):[...prev,"XL"])}>
                    <p className={`${sizez.includes("XL")?'bg-pink-100':'bg-slate-100'} 
                    px-3 py-1 cursor-pointer transition`}>XL</p>
                </div>
                <div onClick={()=>setSizes(prev=> prev.includes("XXL") ? 
                    prev.filter((item)=>item!== "XXL"):[...prev,"XXL"])}>
                    <p  className={`${sizez.includes("XXL")?'bg-pink-100':'bg-slate-100'} 
                    px-3 py-1 cursor-pointer transition`}>XXL</p>
                </div>
            </div>
        </div>

     <div className='flex gap-2 mt-2 items-center'>
        <input onChange={()=>setBestseller(prev=>!prev)} checked={bestseller} type="checkbox" id='bestseller' className='cursor-pointer w-3.5'/>
        <label htmlFor="bestseller" className='cursor-pointer'>
            Add To Best Seller
        </label>
     </div>

     <button type='submit' className='w-28 py-3 mt-4 bg-black 
     text-white active:scale-95 cursor-pointer'>
        ADD
     </button>
    </form>
  )
}

export default Add