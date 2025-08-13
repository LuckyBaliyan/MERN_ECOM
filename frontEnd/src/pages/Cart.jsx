import React, { useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext,useState } from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import  CartTotal  from '../components/CardTotal';

const Cart = () => {

  const { products,currency, cartItems,updateQuantity,navigate } = useContext(ShopContext);

  const [cartData,setCartData] = useState([]);

  useEffect(()=>{
    if(products.length > 0
    ){
      const tempData = [];
    console.log(cartItems);
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData);
    }
  },[cartItems,products])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=> product._id === item._id);
            return(
              <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] 
              sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img src={productData.image[0]} alt="" className='w-16
                  sm:w-20'/>
                  <div>
                    <p className='text-sm font-medium sm:text-lg'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border-none bg-pink-200'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value === '' || e.target.value === '0'? 
                null : updateQuantity(item._id,item.size,Number(e.target.value))} 
                type="number" min={1} defaultValue={item.quantity} className='
                max-w-8 sm:max-w-15  px-1 sm:px-3 py-1 outline-none border border-gray-300'/>
                <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} 
                alt="" className='w-4 mr-4 sm:w-5 cursor-pointer'/>
              </div>
            )
          })
        }
      </div>
        <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
                <CartTotal />
                <div className='w-full text-end'>
                  <button onClick={()=>navigate('/place-order')} className='bg-black text-white text-sm my-8 px-4
                   sm:px-8 py-3 cursor-pointer
                   active:scale-95'>PROCEED TO CEHCKOUT</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart;