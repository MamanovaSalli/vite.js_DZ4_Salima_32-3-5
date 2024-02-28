
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const userInfo = useSelector(state => state.user);

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>Age: {userInfo.age}</p>
    </div>
  );
};

export default UserInfo;
