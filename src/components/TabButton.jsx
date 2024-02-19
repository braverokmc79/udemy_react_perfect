import React from 'react'

const TabButton = ({children, isSelected , onSelect}) => {
  return (
    <li >
       <button  className={isSelected ? 'active' :undefined} onClick={onSelect}>{children}</button> 
    </li>
  )
}

export default TabButton