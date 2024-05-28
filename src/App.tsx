import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <h1
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 500px)",
        }}
        onClick={() => navigate("/home/index")}
      >
        Click me
      </h1>
      <Footer />
    </>
  );
}

export default App;
