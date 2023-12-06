import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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

  useEffect(() => {
    const fetchData = async () => {
      const { notices: locationNotices } = location.state || {};

      if (locationNotices) {
        setNotices(locationNotices);

        const noticeIndex = locationNotices.findIndex((n) => n.id === params.id);
        setCurrentNoticeIndex(noticeIndex);
        console.log(noticeIndex);
        if (noticeIndex !== -1) {
          await setCurrentNotice(locationNotices[noticeIndex]);
          console.log(currentNotice);

          const next =
            noticeIndex < locationNotices.length - 1 ? locationNotices[noticeIndex + 1] : null;
          const prev = noticeIndex > 0 ? locationNotices[noticeIndex - 1] : null;

          setNextNotice(next);
          setPrevNotice(prev);
        }
      }
    };

    fetchData();
  }, [location.state, params.id, currentNotice]);

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
            {currentNotice.title}
          </h2>
          <time
            className="text-open-font-medium -text--open-gray-600"
            dateTime={currentNotice.createdAt}
          >
            {currentNotice.createdAt}
          </time>
        </div>
        <div className="flex flex-col gap-4 h-[400px] overflow-y-scroll p-10 border-b -border--open-gray-300">
          <img src={currentNotice.image} alt={currentNotice.title} width={50} height={50} />
          <p className="text-open-font-large">{currentNotice.content}</p>
        </div>
        <ul className="list-none">
          <li className="py-5 px-10 text-open-font-large border-b -border--open-gray-300">
            {nextNotice ? (
              <NavLink
                to={`/community/${nextNotice.id}`}
                state={{ notices }}
                className="flex gap-2.5"
              >
                <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
                <span>{nextNotice.title}</span>
              </NavLink>
            ) : (
              <NavLink to="#" className="flex gap-2.5" onClick={() => toast('다음 글이 없습니다.')}>
                {' '}
                <span className="font-semibold">&uarr; &nbsp; 다음 글</span>
                {nextNotice && <span>{nextNotice.title}</span>}
                {!nextNotice && <span>다음 글이 없습니다.</span>}
              </NavLink>
            )}
          </li>
          <li className="py-5 px-10 text-open-font-large border-b -border--open-gray-300">
            {prevNotice ? (
              <NavLink
                to={`/community/${prevNotice.id}`}
                state={{ notices }}
                className="flex gap-2.5"
              >
                <span className="font-semibold">&darr; &nbsp; 이전 글</span>
                <span>{prevNotice.title}</span>
              </NavLink>
            ) : (
              <NavLink to="#" className="flex gap-2.5" onClick={() => toast('이전 글이 없습니다.')}>
                {' '}
                <span className="font-semibold">&uarr; &nbsp; 이전 글</span>
                {prevNotice && <span>{prevNotice.title}</span>}
                {!prevNotice && <span>이전 글이 없습니다.</span>}
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
