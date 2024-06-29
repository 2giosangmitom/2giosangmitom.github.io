#set text(font: "Crimson Pro", size: 12pt, fill: luma(30))
#set page(paper: "us-letter", margin: (x: 1cm, y: 1.5cm), fill: rgb("#f8fafc"))

#show heading.where(level: 1): it => [
  #set block(above: 1.5em, below: 1em)
  #set text(size: 18pt, weight: "regular")
  #text(rgb("#151515"))[#strong[#text[#it.body.text]]]
  #box(
    width: 1fr, line(length: 100%, stroke: luma(0) + 1pt), baseline: -1.25pt,
  )
]

#align(center)[
  #text(35pt, rgb("#151515"))[*Vo Quang Chien*]\
  #text(15pt, rgb("#071952"), baseline: 5pt)[_Web Developer_]
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
      )[#text(12pt, luma(0))[#sym.diamond.filled 2giosangmitom.is-a.dev]]
    ],
  )
]

= Summary

A dedicated web developer with a strong passion for creating dynamic web
applications. Proficient in both front-end and back-end development, I'm eager
to leverage my knowledge and continuously improve my abilities. Currently, I'm
seeking an internship opportunity to gain practical experience and contribute to
real-world projects.

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

- *Languages*: TypeScript, JavaScript, Go, Shell, HTML, CSS, SCSS, Nix
- *Frameworks and Libraries*: Vue.js, Nuxt.js, Jest, Vitest, Tailwind, Go Fiber
- *Tools and Platforms*: Docker, Nix, GitHub, Git, Node.js, Vercel
- *Operating Systems*: NixOS
- *Databases*: PostgreSQL, MongoDB

= Projects

#let projectLinks(source, demo) = {
  [#link(source)[#text(rgb("#135D66"))[GitHub Repository]] | #link(demo)[#text(rgb("#135D66"))[Live Demo]]]
}

- *Year Progress*
  - *Description:* A website for tracking the progress of the current year visually.
  - *Technologies Used:* Nuxt.js, TypeScript, Tailwind, Vitest, Pinia.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/year-progress", "https://year-progress-kappa.vercel.app/",
    )

= Open Source Contributions

- *Nightfall.nvim*
  - *Description:* A sublime Neovim colorscheme, immerse in twilight hues for
    enhanced focus and creativity.
  - *Technologies Used:* Lua
  - *GitHub Repository:* #link(
      "https://github.com/2giosangmitom/nightfall.nvim",
    )[#text(rgb("#135D66"))[2giosangmitom/nightfall.nvim]]

= Interests and Hobbies

- *Gym:* Regular workouts to maintain a healthy lifestyle and build discipline.
- *Calisthenics:* Enthusiast of bodyweight training, mastering exercises like
  push-ups, pull-ups, and dips. This enhances muscle strength, balance, and
  agility.
- *Jogging:* I often jog at 5 AM, enjoying the fresh air and peaceful atmosphere
  to start my day.
