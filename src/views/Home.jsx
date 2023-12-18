import React from 'react';
import Slogan from '@/components/Home/Slogan';
import Universe from '@/components/Home/Universe';
import Solutions from '@/components/Home/Solutions';
import Products from '@/components/Home/Products';
import Industries from '@/components/Home/Industries';
import Partner from '@/components/Home/Partner';
import styles from '@/components/Home/Home.module.css';

function Home() {
  return (
    <section className={styles.home}>
      <h2 className="sr-only">메인 페이지</h2>
      <div className={styles.black}>
        <Slogan />
      </div>
      <Universe />
      <div className={styles.black}>
        <Solutions />
        <Products />
      </div>
      <div className={styles.white}>
        <Industries />
        <Partner />
      </div>
    </section>
  );
}

export default Home;
