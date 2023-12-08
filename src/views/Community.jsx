import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import NoticeList from '../components/community/NoticeList';
import { isLoggedInState } from '@/recoil/atoms/authStore';
import { db } from '../../firebase';

function Community() {
  const [currentPage, setCurrentPage] = useState(1);
  const [notices, setNotices] = useState([]);
  const noticesPerPage = 6; // 한 페이지 당 게시글 수
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'community'));
        const noticesData = [];

        querySnapshot.forEach((doc) => {
          noticesData.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setNotices(noticesData);
      } catch (error) {
        toast.error(error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const isLoggedIn = useRecoilValue(isLoggedInState);

  const navigate = useNavigate();
  const sortedNotices = notices?.slice().toSorted((a, b) => b.data.index - a.data.index);
  console.log(sortedNotices);
  const handleWrite = () => {
    navigate('write', { state: { notices } });
  };
  // 현재 페이지의 게시글만 가져옵니다.
  const currentNotices = sortedNotices?.slice(
    (currentPage - 1) * noticesPerPage,
    currentPage * noticesPerPage,
  );
  // 페이지 수를 계산합니다.
  const pageCount = Math.ceil(notices.length / noticesPerPage);

  // 페이지 버튼을 클릭하면 현재 페이지를 변경합니다.
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(pageCount);
  };

  return (
    <div className="w-[1440px] min-w-[1440px] max-width-[1920px]">
      <section className="w-full py-20 flex flex-col text-center gap-8">
        <h3 className="text-open-font-xxl">Support</h3>
        <h2 className="text-open-font-xxxxl font-bold">커뮤니티</h2>
      </section>
      <section className="w-full flex justify-end animate-bounce">
        {isLoggedIn ? (
          <button
            type="button"
            className="p-4 bg-slate-400 text-black rounded-md"
            onClick={handleWrite}
          >
            글쓰러 가기
          </button>
        ) : (
          ''
        )}
      </section>
      <div className="flex flex-col justify-center items-center min-w-[500px] gap-4 py-10">
        <p className="text-open-font-medium text-right px-10 min-w-[600px] w-[1320px]">
          Total: {notices?.length} [{currentPage} / {pageCount}]
        </p>

        <NoticeList notices={notices} currentNotices={currentNotices} />

        <div className="flex gap-4 py-4 text-open-font-large">
          <button type="button" onClick={handleFirstPage} className="text-open-font-large">
            &#8810;
          </button>

          <button type="button" onClick={handlePrevPage} className="-rotate-90">
            &#8896;
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
            <button
              type="button"
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`w-9 h-9 text-open-font-medium ${
                currentPage === pageNumber ? 'bg-black text-white rounded-full' : ''
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button type="button" onClick={handleNextPage} className="-rotate-90">
            &#8897;
          </button>

          <button type="button" onClick={handleLastPage}>
            &#8811;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;
