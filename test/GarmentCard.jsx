import {useState} from "react" ;

function GarmentCard ({y}) {
       const  [price, inc] = useState(y.price) ;
       const [isLiked, setIsLiked] = useState(false);

          
       return(
            <>
               <button onClick={() => inc(price+100)}>+100</button>  
               <button onClick={() => inc(price-100)}>-100</button>
               <p>{price}</p>
               <button onClick={() => setIsLiked(!isLiked)}>like</button>
               <p>{isLiked? "true" : "false"}</p>
            </>
       );
}

export default GarmentCard;