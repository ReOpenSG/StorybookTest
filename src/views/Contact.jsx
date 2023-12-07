import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '@/components/contact/Contact.module.css';
import ProductIcon from '@/components/contact/icons/ProductIcon';
import FillingInput from '@/components/contact/FillingInput';
import Button from '@/components/contact/Button';

function Contact() {
  const productId = uuidv4();
  const purchaseId = uuidv4();
  const asId = uuidv4();
  const etcId = uuidv4();
  const textareaId = uuidv4();
  const [productStatus, setPeoductStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);
  const [asStatus, setAsStatus] = useState(false);
  const [etcStatus, setEtcStatus] = useState(false);

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
      <form ref={form} onSubmit={sendEmail}>
        <section className="flex flex-row flex-wrap gap-open-lg tablet:gap-open-xl desktop:gap-open-xl pb-open-xl tablet:pb-open-2xl desktop:pb-open-2xl mb-open-2xl">
          <h3 className={styles.label}>문의유형</h3>
          <div className="flex flex-wrap justify-between grow">
            <div>
              <input
                type="radio"
                id={productId}
                name="type"
                defaultValue="제품 문의"
                onClick={() => {
                  setPeoductStatus(true);
                  setPurchaseStatus(false);
                  setAsStatus(false);
                  setEtcStatus(false);
                }}
                className="hidden peer"
              />
              <label
                htmlFor={productId}
                className="flex flex-col gap-open-xl items-center -bg--open-gray-50 rounded-[20px] px-open-2xl py-open-xl mb-open-lg peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {productStatus === false ? (
                  <ProductIcon color="black" />
                ) : (
                  <ProductIcon color="white" />
                )}
                <span className={styles.radioSpan}>제품 문의</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id={purchaseId}
                name="type"
                defaultValue="구매 문의"
                onClick={() => {
                  setPurchaseStatus(true);
                  setPeoductStatus(false);
                  setAsStatus(false);
                  setEtcStatus(false);
                }}
                className="hidden peer"
              />
              <label
                htmlFor={purchaseId}
                className="flex flex-col gap-open-xl items-center -bg--open-gray-50 rounded-[20px] px-open-2xl py-open-xl mb-open-lg peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {purchaseStatus === false ? (
                  <ProductIcon color="black" />
                ) : (
                  <ProductIcon color="white" />
                )}
                <span className={styles.radioSpan}>구매 문의</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id={asId}
                name="type"
                defaultValue="AS 문의"
                onClick={() => {
                  setAsStatus(true);
                  setPeoductStatus(false);
                  setPurchaseStatus(false);
                  setEtcStatus(false);
                }}
                className="hidden peer"
              />
              <label
                htmlFor={asId}
                className="flex flex-col gap-open-xl items-center -bg--open-gray-50 rounded-[20px] px-open-2xl py-open-xl mb-open-lg peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {asStatus === false ? <ProductIcon color="black" /> : <ProductIcon color="white" />}
                <span className={styles.radioSpan}>AS 문의</span>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id={etcId}
                name="type"
                defaultValue="기타 문의"
                onClick={() => {
                  setEtcStatus(true);
                  setPeoductStatus(false);
                  setPurchaseStatus(false);
                  setAsStatus(false);
                }}
                className="hidden peer"
              />
              <label
                htmlFor={etcId}
                className="flex flex-col gap-open-xl items-center -bg--open-gray-50 rounded-[20px] px-open-2xl py-open-xl mb-open-lg peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {etcStatus === false ? (
                  <ProductIcon color="black" />
                ) : (
                  <ProductIcon color="white" />
                )}
                <span className={styles.radioSpan}>기타 문의</span>
              </label>
            </div>
          </div>

          {/* 폼 */}
          <div className="flex flex-row flex-wrap gap-open-margin-mobile tablet:gap-open-xl desktop:gap-open-xl grow">
            <FillingInput
              labelText="받으실 이메일"
              inputType="email"
              name="email"
              placeholderText="abc@abcd.com"
            />
            <FillingInput
              labelText="받으실 연락처"
              inputType="tel"
              name="tel"
              placeholderText="010-1234-1234"
            />
          </div>
          <hr className="w-full -text--open-gray-200 my-open-xl tablet:my-open-2xl desktop:my-open-2xl" />
          <div className="flex flex-col gap-open-lg tablet:gap-open-xl desktop:gap-open-xl grow">
            <FillingInput labelText="제목" name="title" placeholderText="AGV 구매 문의" />
            <div className={styles.wrapper}>
              <label htmlFor={textareaId}>
                <h3 className={styles.label}>내용</h3>
              </label>
              <textarea
                name="message"
                id={textareaId}
                cols="30"
                rows="10"
                placeholder="AGV 2대 견적 문의드립니다."
                className={styles.textarea}
              />
            </div>
          </div>
        </section>

        {/* 버튼 */}
        <Button type="submit" buttonText="문의하기" buttonStyle="bg-red-500" />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
}

export default Contact;
