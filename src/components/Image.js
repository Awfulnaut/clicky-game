import React from "react"

const Image = props => (
  <img src={require ("../images/" + props.src)} onClick={props.onClick} alt="Cute kitty"/>
)

export default Image