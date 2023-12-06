import React from 'react';
import { number, shape, string } from 'prop-types';
import { NavLink } from 'react-router-dom';

function Notice({ notice, notices }) {
  return (
    <NavLink to={`/community/${notice.id}`} state={{ notices }}>
      <div className="flex items-center justify-between min-w-[500px] w-[1320px] p-10 border-t -border--open-gray-300">
        <h2 className="text-open-font-xxl font-semibold hover:underline decoration-slate-600">
          {notice.title}
        </h2>
        <time className="text-open-font-medium -text--open-gray-600" dateTime={notice.createdAt}>
          {notice.createdAt}
        </time>
      </div>
    </NavLink>
  );
}

export default Notice;
Notice.propTypes = {
  notices: shape({
    id: number.isRequired,
    index: number.isRequired,
    name: string.isRequired,
    title: string.isRequired,
    createdAt: string.isRequired,
    image: string.isRequired,
    content: string.isRequired,
  }).isRequired,
  notice: shape({
    title: string.isRequired,
    createdAt: string.isRequired,
  }).isRequired,
};
