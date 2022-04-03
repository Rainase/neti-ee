import classNames from "classnames";
import { useState } from "react";

const SearchOrigin = ({link, onClick, currentIndex, isActive}) => {

  const handleClick = (i) => {
    onClick(i)
  }

  const style = {
    baseStyle: 'text-sm cursor-pointer',
    isActive: 'text-[#2875BC]'
  }
  const styleObject = {
    [style.baseStyle]: true,
    [style.isActive]: isActive 
  }
  const btnStyle = classNames(styleObject)
  return ( 
      <div className={btnStyle} onClick={(e) => handleClick(e.target.innerText) }>
      {link}
    </div>
   );
}
 
export default SearchOrigin;