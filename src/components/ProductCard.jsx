import { Heart } from "lucide-react";
import { useState } from "react";

function ProductCard(props){
console.log(props);

const [isLiked,setIsLiked]=useState(false);
const handleClick=()=>{
}



    return(
        <div className="h-[432px] relative">
            {isLiked ?(
                <Heart
                onClick={()=>{setIsLiked(!isLiked)}}
                className="absolute top-4 right-4 cursor-pointer text-red-500 fill-red-500"
            />
            ) : (
                <Heart
                onClick={()=>{setIsLiked(!isLiked)}}
                className="absolute top-4 right-4 cursor-pointer text-red-500"
            />
            )}
        
            


            
            <div className={'h-64 rounded-xl bg-[#f2f8f9]relative'}>
            <img src={props.image} alt="item-img" className="w-full object-cover" />
            </div>

            <div className="mt-4">
                <div className="flex items-center justify-between">
                    <span className="block text-2xl font-semibold">{props.name}</span>
                    <span className="block font-semibold">{props.price}</span>
                </div>
                <p className="text-sm">{props.description}</p>

                <div className="mt-2">
                    <button
                    onClick={(e)=> handleClick(props.name)}
                    type="button"
                    className="border-2 border-black px-4 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white tr">
                        Add to Cart
                        </button>
                </div>
            </div>
           
          
        </div>

        
        
    );
}

export default ProductCard;