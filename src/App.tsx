import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { HomePage } from "./pages/home";
import Layout from "./layout";
import { NoPageFound } from "./pages/noPageFound";
import LoginPage from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />

        <Route path="*" element={<NoPageFound />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
