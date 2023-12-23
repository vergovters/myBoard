import { Navigate } from "react-router-dom";
import useStore from "../store";

interface PrivateOnlyRouteProps {
  Component: React.ComponentType<any>;
}

function PrivateRoute({ Component }: PrivateOnlyRouteProps) {
  const { isLoggedIn } = useStore();
  return !isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
}

export default PrivateRoute;
