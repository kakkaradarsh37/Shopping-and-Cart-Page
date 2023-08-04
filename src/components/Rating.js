import React from 'react'
import {AiFillStar , AiOutlineStar} from "react-icons/ai";

const Rating = ({rating,onClick, style}) => {
  return (
   <>
      {[...Array(5)].map((_, i)=>(// _ means we are not taking anything from the map as we are mapping so key is used
<span key={i} onClick={() =>onClick(i)} style={style}>
{rating> i ?(
    <AiFillStar fontSize= "15px"/>
):(
    <AiOutlineStar fontSize= "15px"/>
)}
</span>
  ))}
  </>
  )
}

export default Rating