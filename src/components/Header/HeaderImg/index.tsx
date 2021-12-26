import React from 'react';

// STYLES
import { Wrapper, Img, BgImg } from './style';

function HeaderImg({ img }: any) {
  return (
    <Wrapper>
      <BgImg img={img.original} />
      <Img src={img.original} />
    </Wrapper>
  );
}

export default HeaderImg;
