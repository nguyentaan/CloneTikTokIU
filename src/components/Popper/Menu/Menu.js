// import { Children } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    // Map over the current menu data to generate a MenuItem component for each item
    return current.data.map((item, index) => {
      // Determine if the current item has any children
      const isParent = !!item.children;
      // Render a MenuItem component for the current item
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            // If the current item is a parent, add its children to the history stack
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
            // Otherwise, call the onChange function with the current item
            else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderReult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );
  // reset to first page
  const handleResetMenu = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      interactive
      delay={[0, 700]}
      offset={[0, 10]} // adjust offset as needed
      appendTo={document.body}
      // visible
      placement="bottom-end"
      hideOnClick={hideOnClick}
      render={renderReult}
      onHide={handleResetMenu}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
