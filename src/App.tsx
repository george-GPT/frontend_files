import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home";
import Layout from "./layout";

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
      </Routes>
    </Router>
  );
}

export default App;
