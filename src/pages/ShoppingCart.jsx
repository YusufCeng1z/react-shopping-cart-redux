import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getProductInfo } from '../functions/products';
import {plusValueBasket,minusValueBasket,deleteBasket} from '../reducers/shopBasket';
import { TrashIcon } from '@heroicons/react/24/solid';

export default function ShoppingCart() {
  const ShoppingCart = useSelector((state) => state.shopBasket.basket);
  const [productInfoList, setProductInfoList] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProductInfo = async () => {
      const infoPromises = ShoppingCart.map(product => getProductInfo(product.id,product.value));
      try {
        
        const infos = await Promise.all(infoPromises);

        let totalPrice = 0;
        infos.forEach(info => {
          totalPrice += info.price * info.value;
        });

        setTotalPrice(totalPrice.toFixed(2));
        setProductInfoList(infos);
      } catch (error) {
        console.error('Error fetching product infos:', error);
        setProductInfoList([]);
      }
    };

    fetchProductInfo();
  }, [ShoppingCart]);



  const plusFunc = (id) => {
        dispatch(plusValueBasket(id))
  }

  const minusFunc = (id) => {
    dispatch(minusValueBasket(id))
  }

  const deleteFunc = (id) => {
    dispatch(deleteBasket(id))
  }

  return (
        <div className="container mx-auto mt-12 bg-white p-4 rounded-lg">
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
            <div className="lg:col-span-3 col-span-1 row-span-2">
            <div className="list">
                {productInfoList.map((product, index) => (
                <div className="w-full flex mb-5 bg-gray-100 p-2 rounded-lg relative" key={index}>
                    <div className='h-32 w-32 overflow-hidden flex justify-center items-center'>
                    <img src={product.images[0]} alt="" className='h-full object-cover' />
                    </div>
                    <div>
                    <div className="title text-lg mt-4 font-semibold">{product.title}</div>
                    <div className="price text-md mt-1 font-semibold text-green-600">{product.price} $</div>
                    <div className="count flex mt-4">
                        <div onClick={() => plusFunc(product.id)} className="plus-count bg-blue-100 text-blue-900 w-6 h-6 flex rounded-md justify-center items-center mr-1 cursor-pointer">+</div>
                        <div className='text-sm count-area bg-orange-100 text-orange-900 p-2 w-6 h-6 rounded-md flex justify-center items-center'>{product.value}</div>
                        <div onClick={() => minusFunc(product.id)} className="minus-count bg-blue-100 text-blue-900 w-6 h-6 flex rounded-md justify-center items-center ml-1 cursor-pointer">-</div>
                    </div>
                    </div>
                    <div className="delete-btn absolute right-3 top-3">
                        <button  onClick={() => deleteFunc(product.id)}  className='bg-red-300 text-red-600 p-2 text-sm rounded-md'><TrashIcon className='size-4'></TrashIcon></button>
                    </div>
                </div>
                ))}
            </div>
            </div>
            <div className="lg:col-span-1 row-span-1">
            <div className="w-full bg-orange-100 p-4 rounded-xl">
                Total Price : <span className='text-orange-500 font-bold'>{totalPrice} $</span>
            </div>
            </div>
        </div>
        </div>
  );
}