import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { MovieRoutes } from "./MovieRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useSelector((state) => state.movie);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={
            <PublicRoute user={user}>
              <LoginScreen />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/*"
          element={
            <PrivateRoute user={user}>
              <MovieRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};
