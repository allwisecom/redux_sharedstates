import { Header } from './Header';
import { useReducer } from 'react';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';

type AppState = {
  user: undefined | User;
  permissions: undefined | string[];
  loading: boolean;
};

const initialState: AppState = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

type AppAction =
  | { type: 'authenticate' }
  | { type: 'authenticated'; user: User }
  | { type: 'authorize' }
  | { type: 'authorized'; permissions: string[] };

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'authenticate':
      return { ...state, loading: true };
    case 'authenticated':
      return { ...state, user: action.user, loading: false };
    case 'authorize':
      return { ...state, loading: true };
    case 'authorized':
      return { ...state, permissions: action.permissions, loading: false };
    default:
      return state;
  }
}

export function App() {
  const [{ user, permissions, loading }, dispatch] = useReducer(appReducer, initialState);

  async function handleSignInClick() {
    dispatch({ type: 'authenticate' });
    const user = await authenticate();
    dispatch({ type: 'authenticated', user });
    console.log('Sign In Clicked');

    if (user !== undefined) {
      dispatch({ type: 'authorize' });
      const permissions = await authorize(user.id.toString());
      dispatch({ type: 'authorized', permissions });
    }
  }

  return <Header user={user} onsignInClick={handleSignInClick} loading={loading} />;
}
