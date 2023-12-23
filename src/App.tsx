import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import AuthPage from "./pages/AuthPage";
import { AUTH_ROUTE, BOARDS_ROUTE } from "./utils/entities";
import useStore from "./store";
import Loader from "./components/layout/Loader";
import PublicRoute from "./utils/PublicRoute";
import BoardsPage from "./pages/BoardsPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const { loader, setLoginStatus } = useStore();

  // if (loader) return <Loader />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route
              path={AUTH_ROUTE}
              element={<PublicRoute Component={AuthPage} />}
            />
            <Route
              path={BOARDS_ROUTE}
              element={<PrivateRoute Component={BoardsPage} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
