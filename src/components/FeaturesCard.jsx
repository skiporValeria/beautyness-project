import React from 'react'

const FeaturesCard = (props) => {
  return (
    <div className='FeaturesCard'>
        <img src={props.img} alt="feature" />
        <h3>{props.title}</h3>
        <p>If you are going to use a passage offer Lorem Ipsum, you need to be sure hidden in the middle of text.</p> 
        <button>READ MORE</button>
    </div>
  )
}

export default FeaturesCard