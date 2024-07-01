import { ShoppingBagIcon, HeartIcon} from '@heroicons/react/24/solid'
import { useSelector  } from 'react-redux'
import { Link } from 'react-router-dom';



export default function Header() {
   

const shopBasket = useSelector((state) => state.shopBasket.basket.length);  
const likes = useSelector((state) => state.likes.likes.length);

  return (
    <header className="container mx-auto mt-5 bg-[#FFF] flex justify-between items-center p-4 rounded-lg border border-black border-opacity-10">
        
        <div>
        <Link to="/"> <div className="companyName text-xl font-extrabold  ">PhoneStore </div></Link>
        </div>


        <div className='buttons flex justify-center items-center'>
            <div className=' hover:bg-gray-200 p-2 rounded-lg cursor-pointer relative'>
                <div className="badge text-xs absolute right-0 top-0 bg-gray-200 w-5 h-5 flex justify-center items-center text-black text-center rounded-full">{likes}</div>

                <HeartIcon className="size-6 text-gray-700" />
            </div>
            <Link to="/shopping-cart">  <div className="ml-2 hover:bg-gray-200 p-2 rounded-lg cursor-pointer relative">
                <div className="badge text-xs absolute right-0 top-0 bg-red-500 w-5 h-5 flex justify-center items-center text-white text-center rounded-full">{shopBasket}</div>
                <ShoppingBagIcon className="size-6 text-gray-700" />
            </div></Link>
        </div>

    </header>
  )
}
