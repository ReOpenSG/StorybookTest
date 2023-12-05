import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();
  const handleId = (e) => setId(e.target.value);
  const handlePw = (e) => setPw(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === 'opensg' && pw === 'opensgBest!') {
      navigate(-1);
    } else {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };
  return (
    <div className="flex flex-col w-[1440px] min-w-[1440px] max-width-[1920px] justify-center items-center gap-[120px]">
      <section className="w-full py-20 flex flex-col text-center gap-8">
        <h3 className="text-open-font-xxl">Admin</h3>
        <h2 className="text-open-font-xxxxl font-bold">관리자 페이지</h2>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-8">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-10">
          <div className="flex gap-2.5">
            <label htmlFor="id" className="w-[100px] text-open-font-xl">
              아이디
            </label>
            <input
              type="text"
              id="id"
              name="id"
              onChange={handleId}
              placeholder="아이디를 입력하세요"
              className="p-2.5 w-[240px] border -border--open-gray-300 rounded"
            />
          </div>
          <div className="flex gap-2.5">
            <label htmlFor="pw" className="w-[100px] text-open-font-xl">
              비밀번호
            </label>
            <input
              type="password"
              id="pw"
              name="pw"
              onChange={handlePw}
              placeholder="비밀번호를 입력하세요"
              className="p-2.5 w-[240px] border -border--open-gray-300 rounded"
            />
          </div>
          <input
            type="submit"
            value="로그인"
            className="text-open-font-xl text-white rounded-[20px] -bg--open-blue-900 w-[355px] p-2.5 my-10"
          />
        </form>
      </section>
    </div>
  );
}

export default Admin;
