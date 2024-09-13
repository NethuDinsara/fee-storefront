import React from 'react';

function Tab(props) {
  // to change the color if its the page of the selected category
  if(props.selectedCategory===props.category.id){
    return (
      <button className='border border-[#edeef1] px-2 py-1 rounded-md' onClick={() => props.handleTabClick(props.category.id)}>
        {props.category.name}
        </button>
    );
      
    }
  


  return (
    <button className='border border-[#edeef1] px-2 py-1 rounded-md' onClick={() => props.handleTabClick(props.category.id)}>{props.category.name}</button>
  );
}

export default Tab;
