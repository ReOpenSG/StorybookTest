import React from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ButtonSection({ isEditing, handleSave }) {
  const navigate = useNavigate();
  const handleCancel = () => {
    toast.done('변경을 취소했습니다.');
    navigate(-1);
  };
  return (
    <div className="flex justify-end px-10 py-4 gap-2.5">
      <h3 className="sr-only">커뮤니티 폼 버튼 섹션</h3>
      <button
        type="button"
        className="flex gap-2 justify-center items-center w-[140px] px-5 py-5 text-open-font-large -text--openfoundation-white bg-blue-400 rounded"
        onClick={handleSave}
      >
        {' '}
        <span className="block font-medium">{isEditing ? '수정하기' : '등록하기'} </span>
      </button>
      <button
        type="button"
        className="flex gap-2 justify-center items-center w-[140px] px-5 py-5 text-open-font-large -text--openfoundation-white bg-red-400 rounded"
        onClick={handleCancel}
      >
        {' '}
        <span className="block font-medium">취소하기</span>
      </button>
    </div>
  );
}

export default ButtonSection;

ButtonSection.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
};
