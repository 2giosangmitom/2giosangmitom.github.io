import About from "@/components/About";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";

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
