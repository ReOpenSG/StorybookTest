import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { emailConfig } from '@/data/emailConfig';
import styles from '@/components/Contact/Contact.module.css';
import PersonalInfo from '@/components/contact/PersonalInfo';
import InquiryType from '@/components/contact/InquiryType';
import Content from '@/components/contact/Content';
import Agreement from '@/components/contact/Agreement';
import ContactTitleSection from '@/components/Contact/ContactTitleSection';
import ContactButton from '@/components/Contact/ContactButton';

function Contact() {
  const form = useRef(null);
  const [agreementStatus, setAgreementStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(emailConfig.serviceId, emailConfig.templateId, form.current, emailConfig.apiKey)
      .then(
        () => {
          toast.success('전송되었습니다.');
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        },
        () => {
          toast.error('전송에 실패하였습니다.');
        },
      );
  };

  const handleErrorMessage = () => {
    if (!agreementStatus) {
      toast.error('개인정보 활용동의에 체크해 주세요.');
    }
  };

  return (
    <div className="w-full px-open-margin-mobile tablet:px-open-margin-desktop desktop:px-open-margin-desktop">
      <form ref={form} onSubmit={sendEmail} className={styles.formWrapper}>
        <ContactTitleSection />
        <InquiryType />
        <PersonalInfo />
        <Content />
        <Agreement state={agreementStatus} setState={setAgreementStatus} />
        <ContactButton
          buttonText="문의하기"
          buttonStyle="-text--openfoundation-secondary font-open-label text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl p-open-lg rounded-[20px] -bg--open-accent-accent w-[180px] block mx-auto mb-open-5xl"
          type={`${agreementStatus ? 'submit' : 'button'}`}
          onClick={handleErrorMessage}
        />
      </form>
    </div>
  );
}

export default Contact;
