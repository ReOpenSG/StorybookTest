import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteObject, ref } from 'firebase/storage';
import { toast } from 'react-toastify';
import { useRecoilValue } from 'recoil';
import { PropTypes } from 'prop-types';
import { db, storage } from '../../../firebase';
import { isLoggedInState } from '@/recoil/atoms/authStore';

function ContentsSection({ currentNotice, nextNotice, prevNotice, notices, params }) {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const handleEdit = () => {
    navigate(`/community/${currentNotice?.id}/edit`, {
      state: { currentNotice, notices },
    });
  };
  const handleDelete = async () => {
    try {
      const currentDocRef = doc(db, 'community', params.id);
      const currentDocSnapshot = await getDoc(currentDocRef);

      await deleteDoc(currentDocRef);

      if (currentDocSnapshot.exists()) {
        const { imageUrl } = currentDocSnapshot.data();
        if (imageUrl) {
          const storageRef = ref(storage, `images/community/${params.id}`);
          await deleteObject(storageRef);
        }
      }

      toast.success('글이 삭제되었습니다.');

      navigate('/community');
    } catch (error) {
      toast.error('글 삭제 중 오류가 발생했습니다.');
    }
  };

  const handleComeback = () => {
    navigate('/community');
  };
  if (!currentNotice) {
    return <div>Loading...</div>;
  }
  return (
    <section className="flex flex-col min-w-[500px] w-[1320px] py-5 px-10">
      <div className="flex items-center justify-between border-b -border--open-gray-300 px-10 py-5">
        <h3 className="text-open-font-xl font-medium decoration-slate-600">
          {currentNotice?.data?.title}
        </h3>
        <time
          className="text-open-font-medium -text--open-gray-600"
          dateTime={currentNotice?.data?.createdAt}
        >
          {currentNotice?.data?.createdAt}
        </time>
      </div>
      <div className="flex justify-end px-10 gap-10 pt-5">
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="text-open-font-large bg-gray-700 -text--openfoundation-white p-2 rounded"
              onClick={handleEdit}
            >
              수정
            </button>
            <button
              type="button"
              className="text-open-font-large bg-gray-400 -text--openfoundation-white p-2 rounded"
              onClick={handleDelete}
            >
              삭제
            </button>
          </>
        ) : (
          ''
        )}
      </div>
      <div className="flex flex-col gap-4 min-h-[400px] h-full overflow-y-scroll p-10 border-b -border--open-gray-300">
        <img
          src={currentNotice?.data?.imageUrl}
          alt={currentNotice?.data?.title}
          width={300}
          height={300}
        />
        <p className="text-open-font-large">{currentNotice?.data?.content}</p>
      </div>
      <ul className="list-none">
        <li className="py-5 px-10 text-open-font-large border-b -border--open-gray-300">
          {nextNotice ? (
            <NavLink
              to={`/community/${nextNotice?.id}`}
              state={{ currentNotice: nextNotice, notices }}
              className="flex gap-2.5"
            >
              <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
              <span>{nextNotice?.data?.title}</span>
            </NavLink>
          ) : (
            <NavLink to="#" className="flex gap-2.5" onClick={() => toast('다음 글이 없습니다.')}>
              {' '}
              <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
              {nextNotice && <span>{nextNotice?.data?.title}</span>}
              {!nextNotice && <span>다음 글이 없습니다.</span>}
            </NavLink>
          )}
        </li>
        <li className="py-5 px-10 text-open-font-large border-b -border--open-gray-300">
          {prevNotice ? (
            <NavLink
              to={`/community/${prevNotice?.id}`}
              state={{ currentNotice: prevNotice, notices }}
              className="flex gap-2.5"
            >
              <span className="font-semibold">&darr; &nbsp; 이전 글</span>
              <span>{prevNotice?.data?.title}</span>
            </NavLink>
          ) : (
            <NavLink to="#" className="flex gap-2.5" onClick={() => toast('이전 글이 없습니다.')}>
              {' '}
              <span className="font-semibold">&darr; &nbsp; 이전 글</span>
              {prevNotice && <span>{prevNotice?.data?.title}</span>}
              {!prevNotice && <span>이전 글이 없습니다.</span>}
            </NavLink>
          )}
        </li>
      </ul>
      <button
        type="button"
        className="flex gap-2 justify-end items-center px-10 py-5 text-open-font-large"
        onClick={handleComeback}
      >
        {' '}
        <span className="block font-medium">목록으로</span>
        <span className="font-extralight">&gt; </span> &nbsp;{' '}
      </button>
    </section>
  );
}

export default ContentsSection;

ContentsSection.propTypes = {
  currentNotice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      index: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      imageUrl: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
  }).isRequired,
  nextNotice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      index: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      imageUrl: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
  }).isRequired,
  prevNotice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
      index: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      imageUrl: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
  }).isRequired,
  notices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      data: PropTypes.shape({
        index: PropTypes.number,
        title: PropTypes.string,
        content: PropTypes.string,
        imageUrl: PropTypes.string,
        createdAt: PropTypes.string,
      }).isRequired,
    }),
  ).isRequired,
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
