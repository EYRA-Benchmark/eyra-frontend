import { IUserProps, withUser } from 'src/context/User';
import { IUser } from 'src/types';
interface IProps extends IUserProps {
    user: IUser;
    setUserId: (id: number) => {};
}
const UserDetails = (props: IProps) => {
    const { user, setUserId } = props;
    if (user.id) {
        setUserId(user.id);
    }
    return (
        user ?
            (
                <div ><span>Name:</span>{'  ' + user.first_name + '  ' + user.last_name}</div>
            ) : null
    );
};
export default withUser(UserDetails);
