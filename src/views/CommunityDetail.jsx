import { useRecoilValue } from 'recoil';
import { toast } from 'react-toastify';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { db, storage } from '../../firebase';
import { isLoggedInState } from '@/recoil/atoms/authStore';
import 'react-toastify/dist/ReactToastify.css';

function CommunityDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [notices, setNotices] = useState([]);
  const [currentNotice, setCurrentNotice] = useState(null);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(-1);
  const [nextNotice, setNextNotice] = useState(null);
  const [prevNotice, setPrevNotice] = useState(null);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  // useEffect(() => {
  //  const fetchData = async () => {
  //    const { notices: locationNotices } = location.state || {};
  //    if (locationNotices) {
  //      setNotices(locationNotices);
  //      const noticeIndex = locationNotices.findIndex((n) => n?.id === params?.id);
  //      setCurrentNoticeIndex(noticeIndex);
  //      if (noticeIndex !== -1) {
  //        const current = locationNotices[noticeIndex];
  //        await setCurrentNotice(locationNotices[noticeIndex]);

  //        const next =
  //          noticeIndex < locationNotices.length - 1 ? locationNotices[noticeIndex + 1] : null;
  //        const prev = noticeIndex > 0 ? locationNotices[noticeIndex - 1] : null;
  //        setNextNotice(next);
  //        setPrevNotice(prev);
  //        setCurrentNotice(current);
  //      }
  //      console.log(currentNotice);
  //    }
  //  };

  //  fetchData();
  // }, [location.state, params.id]);

  useEffect(() => {
    const fetchData = async () => {
      const { currentNotice: locationNotice } = location.state || {};
      if (locationNotice) {
        setCurrentNotice(locationNotice);

        const noticeIndex = notices.findIndex((n) => n?.id === params?.id);
        setCurrentNoticeIndex(noticeIndex);

        const next = noticeIndex < notices.length - 1 ? notices[noticeIndex + 1] : null;
        const prev = noticeIndex > 0 ? notices[noticeIndex - 1] : null;

        setNextNotice(next);
        setPrevNotice(prev);

        console.log(locationNotice);
      }
    };

    fetchData();
  }, [location.state, params.id, notices]);
  const handleEdit = () => {
    navigate(`/community/${currentNotice?.id}/edit`, { state: { currentNotice, notices } });
  };
  const handleDelete = async () => {
    try {
      // 현재 문서 가져오기
      const currentDocRef = doc(db, 'community', params.id);
      const currentDocSnapshot = await getDoc(currentDocRef);

      // 문서 삭제
      await deleteDoc(currentDocRef);

      // 이미지 삭제
      if (currentDocSnapshot.exists()) {
        const { imageUrl } = currentDocSnapshot.data();
        if (imageUrl) {
          const storageRef = ref(storage, `images/${currentNoticeIndex}`);
          await deleteObject(storageRef);
        }
      }

      toast.success('글이 삭제되었습니다.');
      // 리스트 페이지로 이동
      navigate('/community');
    } catch (error) {
      console.error(error);
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
    <div className="flex flex-col w-[1440px] min-w-[1440px] max-width-[1920px]">
      <section className="w-full py-20 flex flex-col text-center gap-8">
        <h3 className="text-open-font-xxl">Support</h3>
        <h2 className="text-open-font-xxxxl font-bold">커뮤니티</h2>
      </section>
      <section className="flex flex-col min-w-[500px] w-[1320px] py-5 px-10">
        <div className="flex items-center justify-between border-b -border--open-gray-300 px-10 py-5">
          <h2 className="text-open-font-xl font-medium decoration-slate-600">
            {currentNotice?.data?.title}
          </h2>
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
                state={{ notices }}
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
                state={{ notices }}
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
    </div>
  );
}

export default CommunityDetail;
