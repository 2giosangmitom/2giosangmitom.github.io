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
        "https://www.linkedin.com/in/2giosangmitom",
      )[#text(12pt, luma(0))[#icon("linkedin.svg") 2giosangmitom]]
    ], rect[
      #link(
        "https://github.com/2giosangmitom",
      )[#text(12pt, luma(0))[#icon("github.svg") 2giosangmitom]]
    ], rect[
      #link(
        "https://2giosangmitom.is-a.dev",
      )[#text(12pt, luma(0))[#icon("link.svg") 2giosangmitom.is-a.dev]]
    ],
  )
]

= Summary

A dedicated web developer with a passion for creating dynamic web applications
and building high-performance systems. Eager to leverage my knowledge in a
professional setting, continuously improve my abilities, and contribute to
real-world projects. Currently seeking an internship opportunity to gain
practical experience.

= Education

#let daterange(start, end) = {
  if start != none and end != none [
    #start #sym.dash.en #end
  ]
}

#block(
  width: 100%, breakable: true,
)[
  *Hue University of Sciences* #h(1fr) *Hue #sym.dash.en Vietnam*\
  #text(style: "italic")[Bachelor of Science in Information Technology] #h(1fr)
  #daterange(2024, "Present")
]

= Skills, Interests, Languages

- *Programming*: TypeScript, JavaScript, Go, CSS, SCSS, Nix, HTML
- *Frameworks & Libraries*: Jest, Vitest
- *Web Development*: Vue.js, Nuxt.js, Go Fiber, Tailwind CSS
- *Tools & Platforms*: Docker, Nix, GitHub, Git, Node.js, Vercel, Neovim, Visual
  Studio Code
- *Operating Systems*: NixOS
- *Databases*: PostgreSQL, MongoDB
- *Languages*: Vietnamese (Native), English (Fluent)
- *Interests*: Jogging, Calisthenics, Reading

// = Work Experience
// TODO: add work experience

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
  - *Technologies Used:* Nuxt.js, TypeScript, Tailwind, Vitest, Pinia
  - *Challenges Overcome:* Implementing responsive design, optimizing performance,
    and ensuring accurate date calculations.
  - *Impact:* Increased user engagement and time-awareness.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/year-progress", "https://year-progress-kappa.vercel.app/",
    )

- *Portfolio Website*
  - *Description:* My portfolio showcases my skills and includes my CV written in
    Typst. It highlights my journey to become a web developer.
  - *Technologies Used:* Nuxt.js, Vue.js, VueUse, Sass
  - *Challenges Overcome:* Designing a clean and professional layout, optimizing for
    SEO, and ensuring fast load times.
  - *Impact:* Enhanced personal branding and online presence.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/2giosangmitom.github.io", "https://2giosangmitom.is-a.dev/",
    )

- *Fylo Dark Theme Landing Page*
  - *Description:* A landing page challenge from Frontend Mentor, designed to
    showcase responsive design skills and frontend development capabilities.
  - *Technologies Used:* Nuxt.js, Vue.js, SCSS
  - *Challenges Overcome:* Implementing responsive layouts and ensuring
    cross-browser compatibility.
  - *Impact:* Demonstrated ability to meet design requirements and deliver polished
    projects.
  - *Links:* #projectLinks(
      "https://github.com/2giosangmitom/fylo-landing-page", "https://fylo-landing-page-ebon.vercel.app/",
    )

= Open-source Contributions

Although these projects are not directly related to web development, they have
helped me improve my collaboration skills. I am passionate about contributing to
open-source software initiatives.

*Personal Projects*
- #link("https://github.com/2giosangmitom/nightfall.nvim")[*nightfall.nvim*]: A
  sublime Neovim colorscheme, immerse in twilight hues for enhanced focus and
  creativity.

// AI recommendation :)))
// = Awards and Honors

// - *Best Final Year Project* - Hue University of Sciences, 2024
// - *Top 10 in National Coding Competition* - Vietnam, 2022

// = Volunteer Experience

// - *Web Developer* - Nonprofit Organization XYZ
//   - *Duration*: January 2023 - Present
//   - *Responsibilities*:
//     - Developed and maintained the organization's website.
//     - Implemented features to improve user experience and accessibility.
//     - Provided technical support and training to staff members.

// - *Event Organizer* - Tech Community ABC
//   - *Duration*: June 2021 - December 2022
//   - *Responsibilities*:
//     - Organized and managed tech meetups and workshops.
//     - Coordinated with speakers and participants.
//     - Promoted events through social media and community outreach.

// = Professional Memberships

// - *Member*, International Web Developers Association
// - *Member*, JavaScript Developers Network

// = References

// Available upon request.
