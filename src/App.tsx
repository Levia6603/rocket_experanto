import { GlobalStyle } from "./constant/GlobalStyle";
import { Nav } from "./components/Nav";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <h1>Hello World</h1>
      <Footer />
    </>
  );
}

export default App;
