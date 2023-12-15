import React from 'react';

function BannerImage() {
  return (
    <div className="w-full desktop:h-[720px] tablet:h-[480px] h-[320px]">
      <picture>
        <source
          media="(max-width: 1024px)"
          srcSet="http://via.placeholder.com/1024x320/FFFFFF/000000"
        />
        <source
          media="(max-width: 1440px)"
          srcSet="http://via.placeholder.com/1440x480/FFFFFF/000000"
        />
        <img
          src="http://via.placeholder.com/1920x720/FFFFFF/000000"
          alt="About Banner"
          className="w-full h-full"
        />
      </picture>
    </div>
  );
}

export default BannerImage;
