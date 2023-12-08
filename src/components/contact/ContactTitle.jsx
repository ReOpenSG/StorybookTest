import React from 'react';

function ContactTitle() {
  return (
    <div className="flex flex-col gap-open-xl tablet:gap-open-2xl desktop:gap-open-2xl text-center my-[60px] tablet:my-open-6xl desktop:my-open-6xl">
      <h2 className="-text--openfoundation-primary font-open-label text-open-font-large">
        Support
      </h2>
      <h3 className="-text--openfoundation-primary font-open-heading text-open-font-xxl">
        고객문의
      </h3>
      <p className="-text--openfoundation-primary font-open-paragraph text-open-font-medium">
        상세하게 작성해 주시면 더 빠르게 답변드릴 수 있습니다.
      </p>
    </div>
  );
}

export default ContactTitle;
