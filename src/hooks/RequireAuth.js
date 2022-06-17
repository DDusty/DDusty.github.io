import { auth } from "../firebase";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    console.log(user);

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
      }, [user, loading]);

    return (
        !loading ? (
            user
            ? <Outlet />
            : <Navigate to="/login" state={{from: location}} />
        ) : (
            <p>loading</p>
        )
  
    );
}

export default RequireAuth;