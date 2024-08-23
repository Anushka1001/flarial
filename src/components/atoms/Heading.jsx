import React from "react";
import "../molecules/Slideshow.css"

function Heading(props) {
    const {head, mirrorText} = props;
  return (
    <>
      <div className="introHead">{head}</div>
      <div className="mirror">{mirrorText}</div>
    </>
  );
}

export default Heading;
