import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin"] });

export default function () {
  return (
    <>
      <p className={`${font.className}`}>
        Welcome to my portfolio! I'm Vo Quang Chien, a self-motivated learner with a passion for technology and a focus
        on becoming a full-stack developer. Through self-directed study and hands-on projects, I've cultivated expertise
        in a variety of technologies, including Next.js, TypeScript, Go, and C# with ASP.NET. While my formal education
        has provided a solid foundation, much of my learning has been driven by my curiosity and determination to master
        new skills. In addition to my core studies, I've dedicated countless hours to exploring online resources,
        tutorials, and documentation to deepen my understanding and proficiency in web development. One of my notable
        endeavors has been delving into Neovim plugin development with Lua scripting, a challenging yet rewarding
        pursuit that has expanded my horizons as a developer. As I continue on this journey, I'm eager to apply my
        self-taught knowledge and skills in a real-world setting. I'm actively seeking internship opportunities where I
        can further develop my abilities, collaborate with experienced professionals, and contribute to meaningful
        projects. Explore my portfolio to discover some of the projects I've undertaken and the skills I've acquired
        along the way. If you're interested in working together or have an internship opportunity available, I'd love to
        hear from you!
      </p>
    </>
  );
}
