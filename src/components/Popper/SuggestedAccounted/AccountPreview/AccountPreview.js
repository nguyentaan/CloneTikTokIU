import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/292726387_1748984332120972_3920023126473528481_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=_qmUsu0tG_8AX86v3-a&_nc_ht=scontent.fhan3-2.fna&oh=00_AfB4uTwNs_AyIthMPVTaUil0Ph9XemVK7V-QWBVA4S9fyw&oe=640FFA10"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>taan</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Nguyễn Tân</p>
        <p className={cx('analytist')}>
            <strong className={cx('value')}>1M </strong>
            <span className={cx('label')}>Follower</span>
            <strong className={cx('value')}>100M</strong>
            <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
