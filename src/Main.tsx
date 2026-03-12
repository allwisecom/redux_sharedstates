import { User } from './api/authenticate';
import { useAppContext } from './AppContext';
import { Content } from './Content';

type Props = {
  user: undefined | User;
  permissions: undefined | string[];
};

export function Main() {
  //{ user, permissions }: Props
  const { user } = useAppContext(); //compponent may gets re-render if changes in user or permissions, but we only need to re-render if user changes, so we can use useContext to get only the user and not the permissions
  return (
    <main className="p-6">
      <h1>Welcome to main component</h1>
      <p>{user ? `Hello, ${user.name}!` : 'Please sign in'}</p>
      {/* <p>Permissions: {permissions?.join(', ')}</p>
      <Content permissions={permissions} /> */}
    </main>
  );
}
