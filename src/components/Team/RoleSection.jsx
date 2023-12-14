import React, { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Team.module.css';
import RoleCard from './RoleCard';
import RoleAllSection from './RoleAllSection';

function RoleSection({ data }) {
  const [content, setContent] = useState();

  const id = useParams();
  useEffect(() => {
    data.filter((list) => (list[0] === id.id ? setContent(list[1]) : ''));
  });

  useEffect(() => {});

  return (
    <ul>
      <li className={styles.sectionWrapper}>
        {id.id === undefined ? <RoleAllSection /> : ''}
        {content?.map((item) => (
          <RoleCard title={item.team} text={item.desc} />
        ))}
      </li>
    </ul>
  );
}

RoleSection.propTypes = {
  data: PropTypes.arrayOf(string).isRequired,
};

export default RoleSection;
