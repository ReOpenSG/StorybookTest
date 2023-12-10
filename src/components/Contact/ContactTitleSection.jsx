import React from 'react';
import ContactTitleInner from './ContactTitleInner';

function ContactTitleSection() {
  return (
    <div className="flex flex-col gap-open-xl tablet:gap-open-2xl desktop:gap-open-2xl text-center my-[60px] tablet:my-open-6xl desktop:my-open-6xl">
      <ContactTitleInner
        category="Support"
        title="고객문의"
        desc="상세하게 작성해 주시면 더 빠르게 답변드릴 수 있습니다."
      />
    </div>
  );
}

export default ContactTitleSection;
