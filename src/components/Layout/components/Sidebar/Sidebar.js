import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import { 
    HomeIcon, 
    HomeActiveIcon, 
    UserGroupIcon, 
    UserGroupActiveIcon, 
    LiveIcon, 
    LiveActiveIcon 
} from '../Icons';
import SuggestedAccounted from '~/components/Popper/SuggestedAccounted';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={HomeActiveIcon} />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={UserGroupActiveIcon}
        />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={LiveActiveIcon} />
      </Menu>
      <SuggestedAccounted label='Suggested Accounts'/>
      {/* <SuggestedAccounted label='Followeing Accounts'/> */}
    </aside>
  );
}

export default Sidebar;
