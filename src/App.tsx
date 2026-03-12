import { Header } from './Header';
import { useReducer } from 'react';
import { authenticate, User } from './api/authenticate';
import { authorize } from './api/authorize';
import { Main } from './Main';
import { AppProvider } from './AppContext';

//app is stateful component, it has the state and the logic to update the state, it is the parent component of all other components

export function App() {
  //const [{ user, permissions, loading }, dispatch] = useReducer(appReducer, initialState);

  //async function handleSignInClick() {
  // dispatch({ type: 'authenticate' });
  // const user = await authenticate();
  // dispatch({ type: 'authenticated', user });
  // console.log('Sign In Clicked');
  // if (user !== undefined) {
  //   dispatch({ type: 'authorize' });
  //   const permissions = await authorize(user.id.toString());
  //dispatch({ type: 'authorized', permissions: ['admin'] });
  //}
  //}

  return (
    <AppProvider>
      {/* <Header user={user} onsignInClick={handleSignInClick} loading={loading} />;
      <Main user={user} permissions={permissions} /> */}

      <Header></Header>
      <Main></Main>
    </AppProvider>
  );
}
