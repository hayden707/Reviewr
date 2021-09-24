import React from 'react'
import './DeezerWidget.css'

const DeezerWidget = (props) => {
  return (
    <iframe
      className="DeezerWidget LazyLoad"
      title="deezer-widget"
      src={`https://widget.deezer.com/widget/dark/album/${props.albumId}?tracklist=false`}
      width="350"
      height="350"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media; clipboard-write"
    ></iframe>
  )
}

export default DeezerWidget
