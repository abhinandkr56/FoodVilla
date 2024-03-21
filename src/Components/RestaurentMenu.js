import React from 'react'
import { useParams } from 'react-router-dom'

const RestaurentMenu = () => {
    const props = useParams();
  return (
    <div>RestaurentMenu: {props.id}</div>
  )
}

export default RestaurentMenu