#set text(font: "Crimson Pro", size: 12pt, fill: rgb("#151515"))
#set page(paper: "us-letter", margin: (x: 1cm, y: 1cm), fill: rgb("#EEEEEE"))

#let cvdata = yaml("candidate.yaml")

#show heading.where(level: 1): it => [
  #text(size: 18pt, weight: "regular")[*#it.body*]
  #box(
    width: 1fr,
    line(length: 100%),
    baseline: -1.25pt,
  )
]

#let cvHeading(personal) = {
  set rect(stroke: none)
  let location = personal.location
  let icon(img) = {
    [#box(height: 10pt, image(img), baseline: 2pt)]
  }
  let contact = (
    rect[
      #link("mailto:" + personal.email)[
        #text(luma(0))[
          #icon("email.svg") #personal.email
        ]
      ]
    ],
  )
  if personal.profiles.len() > 0 {
    for profile in personal.profiles {
      contact.push(
        rect[
          #link(profile.url)[
            #text(luma(0))[
              #icon(lower(profile.network) + ".svg") #profile.username
            ]
          ]
        ],
      )
    }
  }

  align(center)[
    #text(size: 35pt)[*#personal.name*]\
    #text(
      15pt,
      rgb("#A91D3A"),
      style: "italic",
      baseline: 4pt,
    )[#personal.positions.join(" " + sym.dash.en + " ")]\
    #text(
      style: "italic",
      baseline: 5pt,
    )[#location.city, #location.region, #location.country]\
    #grid(
      columns: 1 + personal.profiles.len(),
      ..contact
    )
  ]
}

#let cvSummary(summary) = {
  par(justify: true)[
    = Summary

    #summary
  ]
}

#let cvEducation(edu) = {
  let dateRange(start, end) = {
    if end == false [
      Since #start
    ] else [
      #start #sym.dash.en #end
    ]
  }
  par(justify: true)[
    = Education

    #for item in edu {
      block(width: 100%, breakable: true)[
        *#link(item.url)[#item.school]* #h(1fr) *#item.area*\
        #text(style: "italic")[#item.studyType #h(1fr) #dateRange(
            item.startDate,
            item.endDate,
          )]\
      ]
    }
  ]
}

#let cvSkills(skills) = {
  par(justify: true)[
    = Skills & Interests

    #for item in skills {
      [- *#item.category*: #item.knowledge.join(", ")]
    }
  ]
}

#let cvProjects(projects, opensource) = {
  par(justify: true)[
    = Projects

    #for item in projects {
      strong(item.name)
      [- *Description*: #item.description]
      [
        - *Details*:
          #for detailedItem in item.detailed {
            [- #detailedItem]
          }
      ]
      [- *Technologies Used*: #item.technologies.join(", ")]
      [- *Links*: #link(item.links.github)[#text(rgb("#A91D3A"))[GitHub Repository]] | #link(item.links.preview)[#text(rgb("#A91D3A"))[Live Demo]]]
    }

    = Open-source Contributions

    #for item in opensource {
      [- #link(item.url)[*#item.name*]: #item.description]
    }
  ]
}

#cvHeading(cvdata.personal)
#cvSummary(cvdata.summary)
#cvEducation(cvdata.education)
#cvSkills(cvdata.skills)
#cvProjects(cvdata.projects, cvdata.opensource)
