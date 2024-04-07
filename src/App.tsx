import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Guest from './pages/Guest/index';
import Teacher from './pages/Teacher/index';
import ErrorPage from './pages/errorPage/index';
import Students from './pages/Students/index';

function App() {
  const token = useSelector((state: any) => state.userToken.token);
  const role = useSelector((state: any) => state.userToken.role);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  function ProtectedRoute({
    children,
    redirectTo = '/login',
    isAuthentication,
  }: {
    children: React.ReactNode;
    redirectTo?: string;
    isAuthentication: boolean;
  }) {
    useEffect(() => {
      if (!isAuthentication) {
        navigate(redirectTo);
      }
    }, [isAuthentication, navigate, redirectTo]);

    return children;
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage/>} />
        {token !== null && role === 'guest' && (
          <>
            <Route
              path='/'
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <Guest></Guest>
                </ProtectedRoute>
              }
            />
          </>
        )}
        {token !== null && role === 'teacher' && (
          <>
            <Route
              path='/'
              element={
                <ProtectedRoute isAuthentication={token ? true : false}>
                  <Teacher></Teacher>
                </ProtectedRoute>
              }
            />
          </>
        )}
        {token !== null && role === 'student' && (
          <Route
            path='/'
            element={
              <ProtectedRoute isAuthentication={token ? true : false}>
                <Students></Students>
              </ProtectedRoute>
            }
          />
        )}
        <Route path='*' element={<ErrorPage></ErrorPage>} />
      </Routes>
    </>
  );
}

export default App;
