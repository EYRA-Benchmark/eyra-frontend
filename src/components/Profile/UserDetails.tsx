import { Avatar, Typography } from '@material-ui/core';
import { IUser } from 'src/types';
import styles from './styles.css';

interface IProps {
  user: IUser | null;
}
const UserDetails = (props: IProps) => {
  const { user } = props;
  return user ? (
    <div className={styles.container}>
      <Avatar src="/static/images/profile.png" />
      <Typography variant="subtitle2">
        {'  ' + user.first_name + '  ' + user.last_name}
      </Typography>
      <Typography variant="subtitle2">Netherlands eScience Center</Typography>
    </div>
  ) : null;
};
export default UserDetails;
