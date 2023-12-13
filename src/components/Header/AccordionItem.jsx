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
      <div className="flex flex-row items-center gap-open-gutter-mobile">
        <button type="button" onClick={toggle}>{title}</button>
        {isOpen ? <SitemapArrow /> : <SitemapArrow down />}
      </div>
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
