import React from "react"

const Image = props => (
  <img 
    src={require ("../images/" + props.src)} 
    onClick={() => props.onClick(props.id)} 
    alt="Cute kitty"/>
)

export default Image