import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SitemapArrow from '@/icons/SitemapArrow';
import styles from '@/components/Header/Header.module.css';

function AccordionItem({ title, children, small }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={small ? styles.accordionItemSmall : styles.accordionItemLarge}>
      <button type="button" onClick={toggle} className="flex flex-row w-full items-center justify-between gap-open-gutter-mobile">
        <div>{title}</div>
        {isOpen ? <SitemapArrow /> : <SitemapArrow down />}
      </button>
      {isOpen && <ul>{children}</ul>}
    </li>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
};

AccordionItem.defaultProps = {
  small: false,
};

export default AccordionItem;
