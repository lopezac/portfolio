import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import TopNav from "./Components/TopNav";

function App() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}

export default App;
