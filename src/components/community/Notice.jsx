import React from 'react';
import { shape, string } from 'prop-types';

function Notice({ notice }) {
  return (
    <div className="flex items-center justify-between min-w-[500px] w-[1320px] p-10 border-t border-gray-400">
      <h2 className="text-3xl font-semibold hover:underline decoration-slate-600">
        {notice.title}
      </h2>
      <p className="text-slate-500">{notice.createdAt}</p>
    </div>
  );
}

export default Notice;
Notice.propTypes = {
  notice: shape({
    title: string.isRequired,
    createdAt: string.isRequired,
  }).isRequired,
};
