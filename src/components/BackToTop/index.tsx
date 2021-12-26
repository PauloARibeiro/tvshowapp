import React, { useEffect, useState } from 'react';

// STYLES
import Wrapper from './style';

function BackToTop() {
  const [show, setShow] = useState(false);

  function handleScroll() {
    return window.pageYOffset > 100 ? setShow(true) : setShow(false);
  }

  useEffect(() => {
    window.addEventListener('touchmove', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('touchmove', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Wrapper
      className={show ? 'active' : ''}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    >
      <img src="/assets/icons/arrow-top.svg" alt="back to top" />
    </Wrapper>
  );
}

export default BackToTop;
