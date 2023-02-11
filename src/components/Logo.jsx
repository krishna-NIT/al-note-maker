import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function Logo() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./office.json')
    })
  }, [])
  return (
    <div >
      <div className='container' ref={container}></div>
    </div>
  );
}

export default Logo;