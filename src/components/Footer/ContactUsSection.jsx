import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/components/Footer/Footer.module.css';
import MoveButton from '@/components/Footer/MoveButton';

function ContactUsSection() {
  return (
    <section className={styles.contactUsWrapper}>
      <Link to="/contact" className={styles.link}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h3 className={styles.title}>Contact Us</h3>
              <p className={styles.text}>OPENSG의 전문 엔지니어들과 미래를 열어 보세요</p>
            </div>
            <MoveButton />
          </div>
        </div>
      </Link>
    </section>
  );
}

export default ContactUsSection;
