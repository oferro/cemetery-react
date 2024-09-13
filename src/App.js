import { Container } from "react-bootstrap";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
// import MemoryDayCarusel from "./components/memoryDayCarusel/MemoryDayCarusel";
import MainHome from "./components/mainHome/MainHome";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <Container>
      <Navigation />
      <MainHome />
      <Footer />
    </Container>
  );
};

export default App;
