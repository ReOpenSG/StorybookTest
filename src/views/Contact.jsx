import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from '@/components/Contact/Contact.module.css';
import PersonalInfo from '@/components/contact/PersonalInfo';
import InquiryType from '@/components/contact/InquiryType';
import Content from '@/components/contact/Content';
import Agreement from '@/components/contact/Agreement';
import ContactTitleSection from '@/components/Contact/ContactTitleSection';

function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('opensg', 'opensg', form.current, '6NuaSgBDx54b9MicI').then(
      () => {
        toast.success('전송되었습니다.');
      },
      () => {
        toast.error('전송에 실패하였습니다.');
      },
    );
  };

  return (
    <div className="w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop">
      <form ref={form} onSubmit={sendEmail} className={styles.formWrapper}>
        <ContactTitleSection />
        <InquiryType />
        <PersonalInfo />
        <Content />
        <Agreement />
      </form>
    </div>
  );
}

export default Contact;
