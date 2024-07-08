#set text(font: "Crimson Pro", size: 12pt, fill: rgb("#151515"))
#set page(paper: "us-letter", margin: (x: 1cm, y: 1cm), fill: rgb("#EEEEEE"))

#show heading.where(level: 1): it => [
  #set text(size: 18pt, weight: "regular")
  #text(rgb("#151515"))[#strong[#text[#it.body.text]]]
  #box(
    width: 1fr, line(length: 100%, stroke: rgb("#1A2130")), baseline: -1.25pt,
  )
]

#align(
  center,
)[
  #text(35pt)[*Vo Quang Chien*]\
  #text(15pt, rgb("#A91D3A"), style: "italic", baseline: 4pt)[Web Developer]\
  #text(
    12pt, rgb("#151515"), style: "italic", baseline: 5pt,
  )[Hue City, Phu Hoi #sym.dash.en Viet Nam]
]

#set rect(stroke: none)

#let icon(img) = {
  [#box(height: 10pt, image(img), baseline: 2pt)]
}

#align(
  center,
)[
  #grid(
    columns: 4, rect[
      #link(
        "mailto:voquangchien.dev@proton.me",
      )[#text(12pt, luma(0))[#icon("email.svg") voquangchien.dev\@proton.me]]
    ], rect[
      #link(
        "https://www.linkedin.com/in/2giosangmitom/",
      )[#text(12pt, luma(0))[#icon("linkedin.svg") 2giosangmitom]]
    ], rect[
      #link(
        "https://github.com/2giosangmitom",
      )[#text(12pt, luma(0))[#icon("github.svg") 2giosangmitom]]
    ], rect[
      #link(
        "https://2giosangmitom.is-a.dev/",
      )[#text(12pt, luma(0))[#icon("link.svg") 2giosangmitom.is-a.dev]]
    ],
  )
]

= Summary

A dedicated web developer with a passion for creating dynamic web applications
and building high-performance systems. Proficient in both front-end and back-end
development, eager to leverage my knowledge and continuously improve my
abilities. Currently seeking an internship opportunity to gain practical
experience and contribute to real-world projects.

= Education

#let daterange(start, end) = {
  if start != none and end != none [
    #start #sym.dash.en #end
  ]
  if start == none and end != none [
    #end
  ]
  if start != none and end == none [
    #start
  ]
}

#block(
  width: 100%, breakable: true,
)[
  *Hue University of Sciences* #h(1fr) *Hue #sym.dash.en Vietnam*\
  #text(style: "italic")[Bachelor of Science in Information Technology] #h(1fr)
  #daterange(2024, "Present")
]

= Technical Skills

- *Languages*: TypeScript, JavaScript, Go, HTML, CSS, SCSS, Nix
- *Frameworks and Libraries*: Vue.js, Nuxt.js, Jest, Vitest, Tailwind, Go Fiber
- *Tools and Platforms*: Docker, Nix, GitHub, Git, Node.js, Vercel
- *Operating Systems*: NixOS
- *Databases*: PostgreSQL, MongoDB

= Projects

Here are some projects I have developed to learn new technologies and enhance my
web development skills.

#let projectLinks(source, demo) = {
  [#link(source)[#text(rgb("#A91D3A"))[GitHub Repository]] | #link(demo)[#text(rgb("#A91D3A"))[Live Demo]]]
}

- *Year Progress*
  - *Description:* A website for visually tracking the progress of the current year.
    It provides a visual representation of how much of the year has passed, helping
    users stay motivated and mindful of their time.
  - *Role:* Sole Developer
  - *Technologies Used:* Nuxt.js, TypeScript, Tailwind, Vitest, Pinia
  - *Challenges Overcome:* Implementing responsive design, optimizing performance,
    and ensuring accurate date calculations.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/year-progress", "https://year-progress-kappa.vercel.app/",
    )

- *Portfolio Website*
  - *Description:* My portfolio showcases my skills and includes my CV written in
    Typst. It highlights my journey to become a web developer.
  - *Role:* Designer and Developer
  - *Technologies Used:* Nuxt.js, Vue.js
  - *Challenges Overcome:* Designing a clean and professional layout, optimizing for
    SEO, and ensuring fast load times.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/2giosangmitom.github.io", "https://2giosangmitom.is-a.dev/",
    )

- *Fylo Dark Theme Landing Page*
  - *Description:* A landing page challenge from Frontend Mentor, designed to
    showcase responsive design skills and frontend development capabilities.
  - *Role:* Sole Developer
  - *Technologies Used:* Nuxt.js, Vue.js, SCSS
  - *Challenges Overcome:* Implementing responsive layouts and ensuring
    cross-browser compatibility.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/fylo-landing-page", "https://fylo-landing-page-ebon.vercel.app/",
    )

= Open-source Contributions

#let openSourceProject(source, projectName) = {
  [#link(source)[#text(rgb("#A91D3A"))[#projectName]]]
}

Although these projects are not directly related to web development, they have
helped me improve my collaboration skills. I am passionate about contributing to
open-source software initiatives.

- *Nightfall.nvim*
  - *Description:* A sublime Neovim colorscheme immersed in twilight hues for
    enhanced focus and creativity.
  - *Role:* Maintainer
  - *Technologies Used:* Lua
  - *Challenges Overcome:* Optimize performance, ensure compatibility with various
    Neovim plugins, maintain consistent color schemes across different syntax
    elements, and gather user feedback for improvements.
  - *GitHub Repository:* #openSourceProject(
      "https://github.com/2giosangmitom/nightfall.nvim", "2giosangmitom/nightfall.nvim",
    )

= Languages

- *English*: Intermediate
- *Vietnamese*: Native

= Interests and Hobbies

- *Calisthenics:* Enthusiast of body-weight training, mastering exercises like
  push-ups, pull-ups, and dips. This enhances muscle strength, balance, and
  agility.
- *Jogging:* I often jog at 5 AM, enjoying the fresh air and peaceful atmosphere
  to start my day.
- *Reading Programming Books:* Constantly enhancing my skills by reading books on
  various programming topics.
