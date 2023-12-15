import React, { useEffect, useState } from 'react';
import PropTypes, { array } from 'prop-types';
import styles from './Team.module.css';
import RoleCard from './RoleCard';
import RoleAllSection from './RoleAllSection';

function RoleSection({ data, state }) {
  const [content, setContent] = useState();

  useEffect(() => {
    data.filter((list) => (list[0] === state ? setContent(list[1]) : ''));
  });

  return (
    <ul>
      <li className={styles.sectionWrapper}>
        {state === '전체' || state === '' ? <RoleAllSection /> : ''}
        {content?.map((item) => (
          <RoleCard title={item.team} text={item.desc} key={item.team} />
        ))}
      </li>
    </ul>
  );
}

RoleSection.propTypes = {
  data: PropTypes.arrayOf(array).isRequired,
  state: PropTypes.string.isRequired,
};

export default RoleSection;
