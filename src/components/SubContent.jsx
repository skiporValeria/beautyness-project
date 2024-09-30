import React from 'react'

const SubContent = (props) => {
  return (
    <div className='SubContent'>
      <div className="SubImg">
        <img src={props.subIcon} alt={props.alt} />
      </div>
      
      <div className='SubText'>
      <h4>{props.subTitle}</h4>
      {props.subPag && <p>The majority have suffered alteration in some form, buying to injected humour, or randomised words which desktop publishing packages.</p>}
      </div>
    </div>
  )
}

export default SubContent