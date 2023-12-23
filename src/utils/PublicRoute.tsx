import { Navigate } from "react-router-dom";
import useStore from "../store";

interface PublicOnlyRouteProps {
  Component: React.ComponentType<any>;
}

function PublicRoute({ Component }: PublicOnlyRouteProps) {
  const { isLoggedIn } = useStore();
  return isLoggedIn ? <Navigate to="/boards" replace /> : <Component />;
}

export default PublicRoute;
