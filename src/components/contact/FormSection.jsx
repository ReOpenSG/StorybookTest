import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import FillingInput from './FillingInput';
import Button from '@/components/contact/Button';
import ProductIcon from '@/components/contact/icons/ProductIcon';
import 'react-toastify/dist/ReactToastify.css';

function FormSection() {
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
    <div className="flex flex-col gap-5">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-10">
        <div className="flex">
          <h3
            className="-text--openfoundation-primary text-open-font-large
        font-open-label w-[150px]"
          >
            문의유형
          </h3>
          <div className="flex justify-between grow">
            <div>
              <input
                type="radio"
                id={productId}
                name="type"
                defaultValue="제품 문의"
                onChange={() => {
                  setPeoductStatus(true);
                  setPurchaseStatus(false);
                  setAsStatus(false);
                  setEtcStatus(false);
                }}
                className="hidden peer"
              />

              <label
                htmlFor={productId}
                className="flex flex-col gap-5 items-center -bg--open-gray-50 px-20 py-10 rounded-[20px] peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {productStatus === false ? (
                  <ProductIcon color="black" />
                ) : (
                  <ProductIcon color="white" />
                )}
                <span className="font-open-label text-open-font-large">제품 문의</span>
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
                className="flex flex-col gap-5 items-center -bg--open-gray-50 rounded-[20px] px-20 py-10 peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {purchaseStatus === false ? (
                  <ProductIcon color="black" />
                ) : (
                  <ProductIcon color="white" />
                )}
                <span className="font-open-label text-open-font-large">구매 문의</span>
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
                className="flex flex-col gap-5 items-center -bg--open-gray-50 rounded-[20px] px-20 py-10 peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {asStatus === false ? <ProductIcon color="black" /> : <ProductIcon color="white" />}
                <span className="font-open-label text-open-font-large">AS 문의</span>
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
                className="flex flex-col gap-5 items-center -bg--open-gray-50 rounded-[20px] px-20 py-10 peer-checked:-text--openfoundation-secondary peer-checked:-bg--open-blue-900"
              >
                {etcStatus === false ? (
                  <ProductIcon color="black" />
                ) : (
                  <ProductIcon color="white" />
                )}
                <span className="font-open-label text-open-font-large">기타 문의</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-[100px]">
          <FillingInput
            labelText="성명"
            inputType="text"
            name="name"
            placeholderText="이름을 입력해 주세요."
          />
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
        <div className="flex flex-col gap-5">
          <FillingInput labelText="제목" name="title" placeholderText="AGV 구매 문의" />
          <div className="flex items-center gap-5">
            <label htmlFor={textareaId}>
              <h3 className="-text--openfoundation-primary font-open-label text-open-font-large mr-5">
                내용
              </h3>
            </label>
            <textarea
              name="message"
              id={textareaId}
              cols="30"
              rows="10"
              className="-text--openfoundation-primary text-open-font-large font-open-paragraph -bg--open-gray-50 px-5 py-[10px] grow"
            />
          </div>
        </div>
        <Button
          type="submit"
          buttonText="문의하기"
          buttonStyle="w-1/5 font-open-label text-open-font-xl -text--openborder-secondary -bg--open-blue-900 p-[10px] rounded-[20px]"
        />
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

export default FormSection;
