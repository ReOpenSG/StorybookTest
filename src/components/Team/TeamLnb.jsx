import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes, { string } from 'prop-types';
import styles from './Team.module.css';

function TeamLnb({ data }) {
  const id = useParams();
  return (
    <ul className={styles.lnbUl}>
      <li>
        <button
          type="button"
          id={id}
          onClick={() => {
            window.location.pathname = '/team';
          }}
          className={
            id.id === undefined ? '-bg--open-accent-accent' : '-bg--openfoundation-quaternary'
          }
        >
          전체
        </button>
      </li>
      {data.map((list) => (
        <li>
          <button
            type="button"
            id={id}
            onClick={() => {
              window.location.pathname = `/team/${list[0]}`;
            }}
            className={
              list[0] === id.id ? '-bg--open-accent-accent' : '-bg--openfoundation-quaternary'
            }
          >
            {list[0]}
          </button>
        </li>
      ))}
    </ul>
  );
}

TeamLnb.propTypes = {
  data: PropTypes.arrayOf(string).isRequired,
};

export default TeamLnb;
