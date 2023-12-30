import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import AuthPage from "./pages/AuthPage";
import { AUTH_ROUTE, BOARDS_ROUTE } from "./utils/entities";
import useStore from "./store";
import Loader from "./components/layout/Loader";
import PublicRoute from "./utils/PublicRoute";
import BoardsPage from "./pages/BoardsPage";
import BoardPage from "./pages/BoardPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
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
            <Route
              path="/boards/:boardId"
              element={<PrivateRoute Component={BoardPage} />}
            />
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
