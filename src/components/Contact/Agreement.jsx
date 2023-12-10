import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '@/components/contact/Contact.module.css';
import ContactButton from './ContactButton';

function Agreement() {
  const [agreementStatus, setAgreementStatus] = useState(false);

  const handleChangeCheck = () => {
    setAgreementStatus(!agreementStatus);
  };

  const handleErrorMessage = () => {
    if (!agreementStatus) {
      toast.error('개인정보 활용동의에 체크해 주세요.');
    }
  };

  return (
    <>
      <fieldset>
        <h3 className={styles.agreementTitle}>개인정보 활용동의</h3>
        <p className={`${styles.agreementText} my-open-xl tablet:my-open-2xl desktop:my-open-2xl`}>
          OPENSG는 개인정보보호법 및 관련 법령에 의거 고객님들의 의견 접수와 관련한 성실한 답변을
          드리기 위해 필요한 최소한의 개인정보를 아래와 같이 수집, 이용하고자 합니다.
        </p>
        <ol className={`${styles.agreementText} ${styles.agreementOl}`}>
          <li className={`${styles.agreementLi} ${styles.agreementText}`}>
            필수정보의 수집 목적 : 온라인 상담실을 통한 정보주체의 의견접수 및 문의에 대한 답변/안내
          </li>
          <li className={`${styles.agreementLi} ${styles.agreementText}`}>
            필수 수집 항목 : 이름, 이메일 주소
          </li>
          <li className={`${styles.agreementLi} ${styles.agreementText}`}>
            보유 및 이용기간 : 상담 신청 후 1년
          </li>
          <li className={styles.agreementText}>
            ※ 고객님께서는 본 동의를 거부하실 수 있으나 거부 시 필수정보의 수집 목적에 해당하는
            사항의 처리가 제한될 수 있습니다.
          </li>
        </ol>
        <div className="flex items-center justify-end pt-open-lg pb-open-2xl tablet:pt-open-2xl desktop:pt-open-2xl tablet:pb-open-3xl desktop:pb-open-3xl">
          <input
            type="checkbox"
            id="agreement"
            required
            onClick={handleChangeCheck}
            className="peer appearance-none w-open-xl h-open-xl border-2 -border--open-gray-300 rounded-[2px] -bg--openfoundation-secondary checked:-bg--open-blue-900 checked:border-0"
          />
          <label htmlFor="agreement" className={`${styles.agreementText} pl-open-lg`}>
            (필수) 위 개인정보 수집 및 이용에 동의합니다.
          </label>
        </div>
      </fieldset>
      <ContactButton
        buttonText="문의하기"
        buttonStyle="-text--openfoundation-secondary font-open-label text-open-font-medium tablet:text-open-font-xl desktop:text-open-font-xl p-open-lg rounded-[20px] -bg--open-blue-900 w-[180px] block mx-auto mb-open-5xl"
        type={`${agreementStatus ? 'submit' : 'button'}`}
        onClick={handleErrorMessage}
      />
    </>
  );
}

export default Agreement;
