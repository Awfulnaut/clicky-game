import React from "react"
import Image from "./Image"
import "../styles/CatPhoto.css"

const ImagesContainer = props => {
  const catList = props.catPhotos.map(photos => {
    return (
      <div className="cat-photo" key={photos.id}>
        <Image
        src={photos.image}
        onClick={props.handleClick}
        />
      </div>
    )
  })

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="cats-wrapper">
          {catList}
        </div>
      </div>
    </div>
  )
}

export default ImagesContainer