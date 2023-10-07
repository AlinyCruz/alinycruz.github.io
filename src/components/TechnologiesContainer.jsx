import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiMysql,
} from "react-icons/di"

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { name: 'Html', icon: <DiHtml5 /> },
  { name: 'Css', icon: <DiCss3 /> },
  { name: 'JavaScript', icon: <DiJsBadge /> },
  { name: 'Node', icon: <DiNodejsSmall /> },
  { name: 'React', icon: <DiReact /> },
  { name: 'MySql', icon: <DiMysql /> },
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technologies-card" id={tech.name} key={tech.id}>
            {tech.icon}
            <div className='technology-info'>
              <p>{tech.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
