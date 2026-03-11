import { User } from './api/authenticate';

type HeaderProps = {
  user: undefined | User;
  onsignInClick: () => void;
  loading: boolean;
};

export function Header({ user, onsignInClick, loading }: HeaderProps) {
  return (
    <header className="flex justify-between items-center border-b-2 border-gray-100 py-6">
      {user ? (
        <span className="ml-auto font-bold"> {user.name} has signed in</span>
      ) : (
        <button onClick={onsignInClick} disabled={loading}>
          {loading ? '...' : 'Sign In'}
        </button>
      )}
    </header>
  );
}
