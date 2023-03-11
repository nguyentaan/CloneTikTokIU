// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy 
      // visible 
      interactive 
      offset={[-20,0]}
      delay={[800, 0]} 
      render={renderPreview} 
      placement="bottom">
        <div className={cx('account-item')}>
          <img
            className={cx('avatar')}
            src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/292726387_1748984332120972_3920023126473528481_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_qmUsu0tG_8AX86v3-a&_nc_ht=scontent.fhan3-2.fna&oh=00_AfB4uTwNs_AyIthMPVTaUil0Ph9XemVK7V-QWBVA4S9fyw&oe=640FFA10"
            alt=""
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>taan</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Nguyễn Tân</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

// AccountItem.propTypes = {};

export default AccountItem;
