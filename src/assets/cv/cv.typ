#set text(font: "Crimson Pro", size: 12pt, fill: luma(30))
#set page(paper: "us-letter", margin: (x: 1cm, y: 1.5cm), fill: rgb("#f8fafc"))

#show heading.where(level: 1): it => [
  #set block(above: 1.5em, below: 1em)
  #set text(size: 18pt, weight: "regular")
  #text(rgb("#151515"))[#strong[#text[#it.body.text]]]
  #box(
    width: 1fr, line(length: 100%, stroke: luma(0) + 2pt), baseline: -1.5pt,
  )
]

#align(center)[
  #text(35pt, rgb("#151515"))[*Vo Quang Chien*]\
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
    columns: 3, rect[
      #link(
        "mailto:yeuxacucodon.dev@proton.me",
      )[#text(12pt, luma(0))[#icon("email.svg") voquangchien.dev\@proton.me]]
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

A dedicated full-stack developer with a strong passion for creating dynamic web
applications. Skilled in both front-end and back-end development, I'm eager to
apply my knowledge and continuously improve my abilities. Currently, I'm seeking
an internship opportunity to gain practical experience and contribute to
real-world projects.

= Technical Skills

As a web developer, I'm proficient in a diverse range of programming languages,
frameworks, tools, and platforms:

- *Languages*: TypeScript, JavaScript, Go, Shell, HTML, CSS, SCSS, Nix, Typst,
  Markdown
- *Frameworks and Libraries*: Vue.js, Nuxt.js, Jest, Vitest, Tailwind, Go Fiber
- *Tools and Platforms*: Docker, Nix, GitHub Actions, Git, Node.js, Firebase,
  Vercel
- *Operating Systems*: NixOS
- *Databases*: PostgreSQL, MongoDB

= Projects

#let projectLinks(source, demo) = {
  [#link(source)[#text(rgb("#135D66"))[GitHub Repository]] | #link(demo)[#text(rgb("#135D66"))[Live Demo]]]
}

Some highlighted projects demonstrating my technical skills and creativity:

- *Year Progress*
  - *Description:* A website for visually tracking the progress of the current year.
  - *Technologies Used:* Nuxt.js, TypeScript, Tailwind, Vitest, Pinia.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/year-progress", "https://year-progress-kappa.vercel.app/",
    )

- *Portfolio*
  - *Description:* My personal portfolio showcases my skills and includes my CV
    written in Typst.
  - *Technologies Used:* Vue.js, Vite, TypeScript, Docker, Vitest, Typst.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/2giosangmitom.github.io", "https://2giosangmitom.is-a.dev/",
    )

- *Fylo Dark Theme Landing Page*
  - *Description:* A responsive landing page for the Fylo Dark Theme challenge on
    Frontend Mentor.
  - *Technologies Used:* Nuxt.js, SCSS, TypeScript.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/fylo-landing-page", "https://fylo-landing-page-ebon.vercel.app/",
    )

= Open Source Contributions

Actively engaging with the open source community to give back, enhance my
technical skills, and collaborate with talented developers worldwide:

- *Release Puller Action*
  - *Description:* A GitHub Action that automates the release process based on
    conventional commit messages.
  - *Technologies Used:* GitHub Actions, Bash.
  - *GitHub Repository:* #link(
      "https://github.com/2giosangmitom/release-puller-action",
    )[#text(rgb("#135D66"))[2giosangmitom/release-puller-action]]

- *Nightfall.nvim*
  - *Description:* A sublime colorscheme for Neovim, designed to enhance focus and
    foster creativity.
  - *Technologies Used:* Lua.
  - *GitHub Repository:* #link(
      "https://github.com/2giosangmitom/nightfall.nvim",
    )[#text(rgb("#135D66"))[2giosangmitom/nightfall.nvim]]

= Interests and Hobbies

When I'm not coding, I enjoy going to the gym, practicing calisthenics, and
playing sports. These activities not only provide relaxation but also contribute
to my overall health and teamwork—essential traits in my professional journey.

- *Gym:* Regular workouts to maintain a healthy lifestyle and build discipline.
- *Calisthenics:* Enthusiast of bodyweight training, mastering exercises like
  push-ups, pull-ups, and dips. This enhances muscle strength, balance, and
  agility.
- *Jogging:* I often jog at 5 AM, enjoying the fresh air and peaceful atmosphere
  to start my day.

