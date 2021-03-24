import React from 'react'
import PropTypes from 'prop-types'


export const SliderRail = ({ getRailProps, imageCount, videoDuration }) => {
  console.log(imageCount)
  const width = 100/imageCount;
  const images = Array.apply(null, {length: Math.ceil(imageCount)}).map((_, i) => (
    <img style={{width: `${width}%`}} src={`../out${i + 1}.jpeg?dummy=${new Date().getTime()}`} />
  )
)
  return (
  <>
    <div className='react_time_range__rail__outer' {...getRailProps()} />
    <div className='react_time_range__rail__inner' style={{display:'flex', flexDirection: 'row'}} >
      {images}
    </div>
  </>
)}

SliderRail.propTypes = { getRailProps: PropTypes.func.isRequired }

export default SliderRail
