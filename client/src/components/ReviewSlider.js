import React from 'react'
import Slider, { SliderTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Slider.css'

const { createSliderWithTooltip } = Slider
const { Handle } = Slider

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props
  return (
    <SliderTooltip visible={dragging} placement="top" key={index}>
      <Handle value={value} {...restProps} />
    </SliderTooltip>
  )
}

const ReviewSlider = (props) => {
  const marks = {
    0: '0.0',
    1: '1.0',
    2: '2.0',
    3: '3.0',
    4: '4.0',
    5: '5.0',
    6: '6.0',
    7: '7.0',
    8: '8.0',
    9: '9.0',
    10: '10.0'
  }

  return (
    <div>
      <Slider
        min={0}
        max={10}
        step={0.1}
        defaultValue={5.0}
        handle={handle}
        marks={marks}
        trackStyle={{ backgroundColor: '#FFEA00' }}
        railStyle={{ backgroundColor: '#231387' }}
        handleStyle={{
          backgroundColor: '#ffffff',
          border: 'solid 3px #ffffff'
        }}
        dotStyle={{
          backgroundColor: '#231387',
          border: 'solid 3px #231387',
          borderRadius: '0',
          height: '20px',
          width: '2px',
          transform: 'translateY(6px)'
        }}
        activeDotStyle={{
          backgroundColor: '#FFEA00',
          border: 'solid 3px #FFEA00',
          borderRadius: '0',
          height: '20px',
          transform: 'translateY(6px)'
        }}
        value={props.rating}
        onChange={(e) => props.setRating(e)}
      />
    </div>
  )
}

export default ReviewSlider
