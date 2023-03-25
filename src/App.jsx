import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";
import NavScrollExample from "./components/navbar";
import Container from 'react-bootstrap/Container';

export function App() {
  return (
    <Router>
      <header></header>
      <main>
        <NavScrollExample />
        <Container className="">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/movies/:movieId" element={<MovieDetails />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </Container>
      </main>
    </Router>
  );
}
