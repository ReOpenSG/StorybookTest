import React from 'react';
import styles from './About.module.css';

function BannerImage() {
  return (
    <section className={styles.BannerImage}>
      <h3 className={styles.title}>소개 이미지</h3>
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
          className={styles.img}
        />
      </picture>
    </section>
  );
}

export default BannerImage;
