import React, { useState } from "react";
import "../App.css"; // Add styles here

function Main() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    const { clientX, clientY } = e;
    setIsFlipped(clientX < position.x);     
    setPosition({ x: clientX, y: clientY });
  };

  return (
    <div className="container" onClick={handleClick}>
      <img
        src="https://www.wizard.financial/static/media/wizaart-img.56787174.gif" // Replace with your GIF URL
        alt="Moving GIF"
        className="moving-gif"
        style={{
          top: position.y,
          left: position.x,
          transform: `translate(-50%, -50%) scaleX(${isFlipped ? -1 : 1})`
        }}
      />
    </div>
  );
}

export default Main;
