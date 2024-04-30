import About from "@/components/About";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

export default function () {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Cursor />
        <Nav />
        <Footer />
      </div>
      <div>
        <About />
        <Projects />
      </div>
    </div>
  );
}
