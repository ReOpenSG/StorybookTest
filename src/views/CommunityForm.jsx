import { addDoc, collection, doc, getDocs, serverTimestamp, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from '../../firebase';

function CommunityForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { notices } = location.state || {};
  console.log(notices);
  const handleSave = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'community'));
      const index = querySnapshot.size > 0 ? querySnapshot.size - 1 : 0;
      console.log(index);
      const docRef = await addDoc(collection(db, 'community'), {
        index,
        title,
        content,
        updatedAt: serverTimestamp(),
      });

      const storageRef = ref(storage, `images/${index}`);
      await uploadBytes(storageRef, selectedFile);
      const downloadURL = await getDownloadURL(storageRef);
      const updateRef = doc(db, 'community', docRef.id);
      await updateDoc(updateRef, {
        imageUrl: downloadURL,
      });
      toast.success('글이 등록되었습니다.');

      navigate(`/community/${docRef.id}`, {
        state: {
          notices: [
            ...notices,
            {
              id: docRef.id,
              data: {
                index,
                title,
                content,
                imageUrl: downloadURL,
                updatedAt: serverTimestamp(),
              },
            },
          ],
        },
      });
    } catch (error) {
      console.log(error);
      toast('변경 실패하였습니다. 다시 한번 확인해주세요.');
    }
  };
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
  const handleCancel = () => {
    if (window.confirm('변경을 취소하시겠습니까?')) {
      navigate(-1);
    }
  };

  return (
    <div className="flex flex-col w-[1440px] min-w-[1440px] max-width-[1920px]">
      <section className="w-full py-20 flex flex-col text-center gap-8">
        <h3 className="text-open-font-xxl">Support</h3>
        <h2 className="text-open-font-xxxxl font-bold">커뮤니티</h2>
      </section>
      <div className="flex flex-col min-w-[500px] w-[1320px] py-5 px-10">
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

        <div className="flex justify-end px-10 py-4 gap-2.5">
          <button
            type="button"
            className="flex gap-2 justify-center items-center w-[140px] px-5 py-5 text-open-font-large -text--openfoundation-white bg-blue-400 rounded"
            onClick={handleSave}
          >
            {' '}
            <span className="block font-medium">등록하기</span>
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
      </div>
    </div>
  );
}

export default CommunityForm;
