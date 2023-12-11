import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import NoticeList from '../components/community/NoticeList';
import { isLoggedInState } from '@/recoil/atoms/authStore';
import { db } from '../../firebase';
import BannerSection from '../components/common/BannerSection';
import ListButtons from '../components/community/ListButtons';

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
  }, []);
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const navigate = useNavigate();
  const sortedNotices = notices?.slice().toSorted((a, b) => b.data.index - a.data.index);

  const handleWrite = () => {
    navigate('write', { state: { notices: sortedNotices } });
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

  // 이전 페이지로 이동합니다.
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 다음 페이지로 이동합니다.
  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 처음 페이지로 이동합니다
  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  // 마지막 페이지로 이동합니다.
  const handleLastPage = () => {
    setCurrentPage(pageCount);
  };

  const ListButtonsProps = {
    currentPage,
    pageCount: Math.ceil(notices.length / noticesPerPage),
    handleFirstPage,
    handlePrevPage,
    handlePageChange,
    handleNextPage,
    handleLastPage,
  };
  return (
    <div className="w-[1440px] min-w-[1440px] max-width-[1920px]">
      <BannerSection category="Community" part="커뮤니티" />
      <div className="w-full flex justify-end animate-bounce">
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
      </div>
      <section className="flex flex-col justify-center items-center min-w-[500px] gap-4 py-10">
        <p className="text-open-font-medium text-right px-10 min-w-[600px] w-[1320px]">
          Total: {notices?.length} [{currentPage} / {ListButtonsProps.pageCount}]
        </p>

        <NoticeList notices={sortedNotices} currentNotices={currentNotices} />

        <ListButtons {...ListButtonsProps} />
      </section>
    </div>
  );
}

export default Community;
