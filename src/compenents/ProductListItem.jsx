import { useSelector,useDispatch } from 'react-redux'
import { addBasket } from '../reducers/shopBasket'
import { addLike } from '../reducers/likes';


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { HeartIcon,StarIcon} from '@heroicons/react/24/solid'

import {ShoppingCartIcon} from '@heroicons/react/24/outline'

import ReactStars from "react-rating-stars-component";


export default function ProductListItem({product}) {

  const dispatch = useDispatch()

  const addBasketFunc = (id,title) => {
      dispatch(addBasket({
         id:id,
         name:title,
         value:1
      }))
  }


  const likes = useSelector((state) => state.likes.likes);
  const liked = likes.includes(product.id); // Check if product id is in likes

  return (
    <div className="productListItem w-full bg-white border border-black border-opacity-10 p-4 rounded-xl relative">
        <div onClick={() => dispatch(addLike(product.id))} className={ `${liked ? 'text-red-600 bg-red-200 ' : 'bg-gray-200 '}`  + " like-btn absolute left-5 top-5 z-50  p-2 rounded-xl  cursor-pointer text-gray-400 hover:text-red-600 hover:bg-red-200 transition ease-in-out" }>
           <HeartIcon className="size-6 " />
        </div>
        <div className="productImageSliderContainer">
            <Swiper pagination={true} modules={[Pagination]} className="productImageSlider">
                {product.images.map((image) => (
                  <>
                    <SwiperSlide><img src={image} alt="" /></SwiperSlide>
                  </>
                ))}
            </Swiper>
        </div>
        <div className="title text-xl font-semibold mt-4">{product.title} </div>
        <ReactStars
        count={5}
        size={23}
        edit={false}
        activeColor="#ffd700"
        value={product.rating}
        />
        <div className='flex justify-between'>
             <div className="price text-xl font-semibold mt-4">
              {product.price} $
             </div>
             <div className="add-bascet">
                <div onClick={() => addBasketFunc(product.id,product.title)} className='h-full flex justify-center items-center bg-blue-600 px-3 rounded-md text-white hover:opacity-45 cursor-pointer transition ease-in-out'>
                    <ShoppingCartIcon className="size-6 " ></ShoppingCartIcon>
                </div>
             </div>
        </div>
    </div>
  )
}
