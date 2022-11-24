/** @format */

import React, { useState } from "react";

function ReadMoreEventInfo({ children, limit }) {
  //   console.log(children);
  const [readMore, setReadMore] = useState(false);
  const text = children;

  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  return (
    <div>
      {readMore ? text : text.substr(0, limit)}
      <span className='readmore-btn' onClick={handleReadMore}>
        {readMore ? "read less" : "read more"}
      </span>
    </div>
  );
}

export default ReadMoreEventInfo;
