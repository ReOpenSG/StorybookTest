import React from 'react';
import { Link } from 'react-router-dom';
import styles from '@/components/Footer/Footer.module.css';
import MoveButton from '@/components/Footer/MoveButton';

function ContactUsSection() {
  return (
    <Link to="/contact">
      <section className={styles.contactUsWrapper}>
        <div className={styles.contactUsContainer}>
          <div className={styles.contactUsInner}>
            <div className={styles.contactUsContent}>
              <h3 className={styles.contactUsTitle}>Contact Us</h3>
              <p className={styles.contactUsText}>OPENSG의 전문 엔지니어들과 미래를 열어 보세요</p>
            </div>
            <MoveButton />
          </div>
        </div>
      </section>
    </Link>
  );
}

export default ContactUsSection;
