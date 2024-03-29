import React from 'react'
import './Chartbar.css'

const Chartbar = (props) => {
    let barFillHeight=props.value/props.maxValue*100+'%';
  return (
    <div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:barFillHeight}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>
  )
}

export default Chartbar