import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/home";
import Layout from "./layout";
import { NoPageFound } from "./pages/noPageFound";

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
      </Routes>
    </Router>
  );
}

export default App;
