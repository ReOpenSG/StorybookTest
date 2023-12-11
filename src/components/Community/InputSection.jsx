import React from 'react';
import PropTypes from 'prop-types';

function InputSection({
  title,
  setTitle,
  content,
  setContent,
  imagePreview,
  setImagePreview,
  selectedFile,
  setSelectedFile,
}) {
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // 이미지 파일인 경우에만 미리보기 표시
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }

    setSelectedFile(file);

    const fileNameInput = document.getElementById('fileName');
    if (fileNameInput) {
      fileNameInput.value = file ? file.name : '첨부파일';
    }
  };
  return (
    <>
      <h3 className="sr-only">커뮤니티 폼 입력 섹션</h3>
      <div className="flex items-center justify-between border-b -border--open-gray-300 px-10 py-5">
        <input
          type="text"
          placeholder="제목을 입력하세요."
          className="text-open-font-xl font-medium decoration-slate-600 p-2 min-w-tablet-min"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="flex flex-col gap-4 min-h-[400px] h-full overflow-y-scroll p-10 border-b -border--open-gray-300">
        <div className="flex items-center gap-2 py-4">
          {imagePreview ? (
            <>
              <img
                src={imagePreview}
                alt="이미지 미리보기"
                className="w-[300px] h-[300px] object-cover"
              />
              <label
                htmlFor="file"
                className="inline-block px-2.5 py-2 h-10 ml-2.5 cursor-pointer align-middle bg-slate-400 -text--openfoundation-white rounded"
              >
                이미지 변경
              </label>
            </>
          ) : (
            <>
              <input
                type="text"
                value={selectedFile ? selectedFile.name : '첨부파일'}
                id="fileName"
                placeholder="첨부파일"
                onChange={() => {}}
                className="inline-block h-10 px-2.5 align-middle border -border--open-gray-400 w-1/3"
              />
              <label
                htmlFor="file"
                className="inline-block px-2.5 py-2 h-10 ml-2.5 cursor-pointer align-middle bg-slate-400 -text--openfoundation-white rounded"
              >
                파일 찾기
              </label>
            </>
          )}
          <input type="file" id="file" onChange={handleFileChange} className="w-0 h-0" />
        </div>
        <textarea
          placeholder="내용을 입력해주세요."
          rows={12}
          className="text-open-font-large h-auto p-10 w-full"
          value={content}
          onChange={handleContent}
        />
      </div>
    </>
  );
}
export default InputSection;

InputSection.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
  imagePreview: PropTypes.string.isRequired,
  setImagePreview: PropTypes.func.isRequired,
  selectedFile: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
  setSelectedFile: PropTypes.func.isRequired,
};
