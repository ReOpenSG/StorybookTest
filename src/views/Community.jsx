import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { db } from '../../firebase';
import BannerSection from '../components/common/BannerSection';
import NoticeSection from '../components/Community/NoticeSection';
import { isLoggedInState } from '@/recoil/atoms/authStore';

function Community() {
  const [notices, setNotices] = useState([]);
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const navigate = useNavigate();
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

  const sortedNotices = notices?.slice().toSorted((a, b) => b.data.index - a.data.index);

  const handleWrite = () => {
    navigate('write', { state: { notices: sortedNotices } });
  };
  return (
    <div className="w-[1440px] min-w-[1440px] max-width-[1920px]">
      <BannerSection category="Support" part="커뮤니티" />
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
      <NoticeSection sortedNotices={sortedNotices} />
    </div>
  );
}

export default Community;
