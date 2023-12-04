import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NoticeList from '../components/community/NoticeList';

const today = new Date();
const year = today.getFullYear();
const month = `0${today.getMonth() + 1}`.slice(-2);
const day = `0${today.getDate()}`.slice(-2);
const dateString = `${year}-${month}-${day}`;

function Community() {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 6; // 한 페이지 당 게시글 수
  const notices = [
    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.1',
      content: '예시 내용입니다.1',
      createdAt: dateString,
    },
    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.2',
      content: '예시 내용입니다.2',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.3',
      content: '예시 내용입니다.3',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.4',
      content: '예시 내용입니다.4',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.5',
      content: '예시 내용입니다.5',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.6',
      content: '예시 내용입니다.6',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.7',
      content: '예시 내용입니다.7',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.8',
      content: '예시 내용입니다.8',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.9',
      content: '예시 내용입니다.9',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.10',
      content: '예시 내용입니다.10',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.11',
      content: '예시 내용입니다.11',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.12',
      content: '예시 내용입니다.12',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.13',
      content: '예시 내용입니다.13',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.14',
      content: '예시 내용입니다.14',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.15',
      content: '예시 내용입니다.15',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.16',
      content: '예시 내용입니다.16',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.17',
      content: '예시 내용입니다.17',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.18',
      content: '예시 내용입니다.18',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.19',
      content: '예시 내용입니다.19',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.20',
      content: '예시 내용입니다.20',
      createdAt: dateString,
    },

    {
      id: uuidv4(),
      name: 'admin',
      title: '커뮤니티 제목을 보여주는 란입니다.21',
      content: '예시 내용입니다.21',
      createdAt: dateString,
    },
  ];

  // 현재 페이지의 게시글만 가져옵니다.
  const currentNotices = notices.slice(
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
    <div className="flex flex-col w-[1440px] min-w-[1440px] max-width-[1920px] justify-center items-center">
      <section className="w-full py-20 flex flex-col text-center gap-8">
        <h3 className="text-3xl">Support</h3>

        <h2 className="text-5xl font-bold">커뮤니티</h2>
      </section>

      <div className="flex flex-col justify-center items-center min-w-[500px] gap-4 py-10">
        <p className="text-right px-10 min-w-[600px] w-[1320px]">
          Total: {notices.length} [{currentPage} / {pageCount}]
        </p>

        <NoticeList notices={currentNotices} />

        <div className="flex gap-4 py-4">
          <button type="button" onClick={handleFirstPage}>
            First
          </button>

          <button type="button" onClick={handlePrevPage}>
            Prev
          </button>

          {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNumber) => (
            <button
              type="button"
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`w-9 h-9 ${
                currentPage === pageNumber ? 'bg-black text-white rounded-full' : ''
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button type="button" onClick={handleNextPage}>
            Next
          </button>

          <button type="button" onClick={handleLastPage}>
            Last
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community;
