import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function CommunityDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { notice, notices } = location.state;
  const currentNoticeIndex = notices.findIndex((n) => n.id === notice.id);

  const nextNotice = currentNoticeIndex > 0 ? notices[currentNoticeIndex - 1] : null;
  const prevNotice =
    currentNoticeIndex < notices.length - 1 ? notices[currentNoticeIndex + 1] : null;

  const handleComeback = () => {
    navigate('/community');
  };

  return (
    <div className="flex flex-col w-[1440px] min-w-[1440px] max-width-[1920px]">
      <section className="w-full py-20 flex flex-col text-center gap-8">
        <h3 className="text-open-font-xxl">Support</h3>
        <h2 className="text-open-font-xxxxl font-bold">커뮤니티</h2>
      </section>
      <section className="flex flex-col min-w-[500px] w-[1320px] py-5 px-10">
        <div className="flex items-center justify-between border-b -border--open-gray-300 px-10 py-5">
          <h2 className="text-open-font-xl font-medium decoration-slate-600">{notice.title}</h2>
          <time className="text-open-font-medium -text--open-gray-600" dateTime={notice.createdAt}>
            {notice.createdAt}
          </time>
        </div>
        <div className="flex flex-col gap-4 h-[400px] overflow-y-scroll p-10 border-b -border--open-gray-300">
          <img src={notice.image} alt={notice.title} width={50} height={50} />
          <p className="text-open-font-large">{notice.content}</p>
        </div>
        <ul className="list-none">
          <li className="py-5 px-10 text-open-font-large border-b -border--open-gray-300">
            {nextNotice ? (
              <NavLink
                to={{
                  pathname: `/community/${nextNotice.id}`,
                  state: { notice: nextNotice, notices },
                }}
                className="flex gap-2.5"
              >
                {' '}
                <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
                <span>{nextNotice.title}</span>
              </NavLink>
            ) : (
              <NavLink to="#" className="flex gap-2.5">
                {' '}
                <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
                <span>다음 글이 없습니다.</span>
              </NavLink>
            )}
          </li>
          <li className="py-5 px-10 text-open-font-large border-b -border--open-gray-300">
            {prevNotice ? (
              <NavLink
                to={{
                  pathname: `/community/${prevNotice.id}`,
                  state: { notice: prevNotice, notices },
                }}
                className="flex gap-2.5"
              >
                {' '}
                <span className="font-semibold">&darr; &nbsp; 이전 글</span>
                <span>{prevNotice.title}</span>
              </NavLink>
            ) : (
              <NavLink to="#" className="flex gap-2.5">
                {' '}
                <span className="font-semibold">&uarr; &nbsp; 이전 글</span>
                <span>이전 글이 없습니다.</span>
              </NavLink>
            )}
          </li>
        </ul>
        <button
          type="button"
          className="flex gap-1 justify-end items-center px-10 py-5 text-open-font-large"
          onClick={handleComeback}
        >
          {' '}
          <span className="font-extralight">&gt; </span> &nbsp;{' '}
          <span className="block font-medium">목록으로</span>
        </button>
      </section>
    </div>
  );
}

export default CommunityDetail;
