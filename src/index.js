const SKILLS = {
  'HTML': '90%',
  'CSS': '75%',
  'JavaScript': '80%',
  'Ruby': '65%',
  'React': '75%',
  'Rails': '60%'
}

document.addEventListener('DOMContentLoaded', () => {
  buildSkillsGraph()
})

function buildSkillsGraph() {
  let graph = document.querySelector('.skills')

  for(let skill in SKILLS) {
    console.log(skill, SKILLS[skill])

    let section = document.createElement('div')
    section.classList.add('progress')

    let bar = document.createElement('div')
    bar.classList.add('progress-bar')
    bar.setAttribute('role', 'progressbar')
    bar.style = `width: ${SKILLS[skill]}`

    let label = document.createElement('div')
    label.classList.add('bar-label')
    label.innerHTML = skill

    let pct = document.createElement('div')
    pct.classList.add('pct')
    pct.innerHTML = SKILLS[skill]

    graph.append(section, document.createElement('br'))
    section.append(bar, pct)
    bar.appendChild(label)
  }
}
