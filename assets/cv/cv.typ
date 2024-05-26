#set text(font: "Crimson Pro", size: 12pt, fill: luma(30))
#set page(paper: "us-letter", margin: (x: 1.5cm, y: 1.5cm), fill: rgb("#f8fafc"))

#show heading.where(level: 1): it => [
  #set block(above: 1.5em, below: 1em)
  #set text(size: 18pt, weight: "regular")
  #text(rgb("#151515"))[#strong[#text[#it.body.text]]]
  #box(
    width: 1fr, line(length: 100%, stroke: luma(0) + 2pt), baseline: -1.5pt,
  )
]

#align(center)[
  #text(35pt, rgb("#151515"))[*Võ Quang Chiến*]\
  #text(16pt, rgb("#A91D3A"), baseline: 5pt)[_#upper("Web Developer")_]
]

#set rect(stroke: none)

#let icon(img) = {
  [#box(height: 10pt, image(img), baseline: 1.5pt)]
}

#align(
  center,
)[
  #grid(
    columns: 4, rect[
      #link(
        "tel:0852008975",
      )[#text(12pt, luma(0))[#icon("phone-solid.svg") 0852008975]]
    ], rect[
      #link(
        "mailto:yeuxacucodon.dev@proton.me",
      )[#text(12pt, luma(0))[#icon("envelope-solid.svg") yeuxacucodon.dev\@proton.me]]
    ], rect[
      #link(
        "https://www.linkedin.com/in/2giosangmitom/",
      )[#text(12pt, luma(0))[#icon("linkedin.svg") 2giosangmitom]]
    ], rect[
      #link(
        "https://github.com/2giosangmitom",
      )[#text(12pt, luma(0))[#icon("github.svg") 2giosangmitom]]
    ],
  )
]

= Summary

Aspiring full-stack developer with a strong foundation in HTML, CSS, JavaScript,
TypeScript, Go, Docker, Nuxt.js, and Vue.js. Passionate about building
comprehensive web applications and continually expanding my skill set. Seeking
an internship opportunity to apply my knowledge and further develop my expertise
in both front-end and back-end development.

= Technical Skills

As a web developer with a diverse skill set, I am proficient in various
programming languages, frameworks, libraries, tools, and platforms. Here's a
comprehensive list of my technical skills:

- *Languages*: TypeScript, JavaScript, Go, Shell, Lua, HTML, CSS, SCSS, Nix,
  Typst, C\#
- *Frameworks and Libraries*: Vue.js, Nuxt.js, Jest, Vitest, Tailwind, Go Fiber,
  React, Next.js
- *Tools and Platforms*: Docker, NixOS, GitHub Actions, Git, Node.js, Bun, Deno
- *Operating Systems*: NixOS

= Projects

#let projectLinks(source, demo) = {
  [#link(source)[#text(rgb("#135D66"))[GitHub Repository]] | #link(demo)[#text(rgb("#135D66"))[Live Demo]]]
}

Throughout my journey as a web developer, I've had the opportunity to work on
various projects that showcase my skills and creativity. Here are some of my
noteworthy projects:

- *Year Progress*
  - *Description:* A website for tracking the progress of the current year visually.
  - *Technologies Used:* Next.js, TypeScript, Tailwind, Jest, Docker.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/year-progress", "https://2giosangmitom.is-a.dev/year-progress/",
    )

- *Meme Generator*
  - *Description:* Random Memes - Instant Laughs.
  - *Technologies Used:* Next.js, TypeScript, Tailwind, Shadcn/ui, Vercel blob
    database.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/meme_generator", "https://meme-generator-sigma-gilt.vercel.app/",
    )

- *Portfolio*
  - *Description:* My portfolio to showcase skills and projects in an engaging way.
  - *Technologies Used:* Nuxt.js, TypeScript.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/2giosangmitom.github.io", "https://2giosangmitom.is-a.dev/",
    )

- *Fylo Dark Theme Landing Page*
  - *Description:* My solution for the Fylo Dark Theme Landing Page challenge on
    Frontend Mentor.
  - *Technologies Used:* Nuxt.js, SCSS, TypeScript.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/fylo-landing-page", "https://fylo-landing-page-ebon.vercel.app/",
    )

These projects not only showcase my technical skills but also reflect my passion
for creating meaningful and impactful web applications.

= Open Source Contributions

Contributing to open source projects is not only a way for me to give back to
the community, but also an opportunity to sharpen my skills and collaborate with
like-minded developers. Here are some of my notable contributions:

- *Release Puller Action*
  - *Description:* A powerful GitHub Action that automates your release process
    based on conventional commit messages.
  - *Technologies Used:* GitHub Actions, Bash.
  - *GitHub Repository:* #link(
      "https://github.com/2giosangmitom/release-puller-action",
    )[#text(rgb("#135D66"))[2giosangmitom/release-puller-action]]

- *Nightfall.nvim*
  - *Description:* A sublime colorscheme for Neovim, enveloping your coding
    environment in the tranquil shades of twilight, enhancing focus and fostering
    creativity.
  - *Technologies Used:* Lua.
  - *GitHub Repository:* #link(
      "https://github.com/2giosangmitom/nightfall.nvim",
    )[#text(rgb("#135D66"))[2giosangmitom/nightfall.nvim]]

= Certifications

- *Foundational C\# with Microsoft:* #link(
    "https://www.freecodecamp.org/certification/2giosangmitom/foundational-c-sharp-with-microsoft",
  )[#text(rgb("#135D66"))[FreeCodeCamp Certification]]

= Interests and Hobbies

In addition to my passion for web development, I enjoy various activities
outside of work that contribute to my overall well-being and personal growth.
Here are some of my interests and hobbies:

- *Gym:* Regular exercise is an essential part of my routine. I find solace in the
  gym, where I challenge myself physically and strive to maintain a healthy
  lifestyle.

- *Calisthenics:* I am fascinated by bodyweight exercises and the art of
  controlling and manipulating one's body through movements such as push-ups,
  pull-ups, and dips. Calisthenics not only strengthens my muscles but also
  enhances my balance and agility.

- *Playing Badminton:* Badminton is more than just a sport to me, It's a social
  activity that brings joy and camaraderie. I enjoy the fast-paced nature of the
  game and the strategic thinking required to outsmart my opponents on the court.

These activities not only provide me with relaxation and enjoyment but also
instill discipline, perseverance, and teamwork—all of which are valuable
qualities that I bring to my professional endeavors.

