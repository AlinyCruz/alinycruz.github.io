import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'
import '../styles/components/socialnetworks.sass'

const socialnetworks = [
  { name: 'linkedin', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/aliny-cruz-dev' },
  { name: 'github', icon: <FaGithub />, link: 'https://github.com/AlinyCruz' },
  { name: 'instagram', icon: <FaInstagram /> , link: 'https://www.instagram.com/aliny.ocruz/?next=%2F' },
]

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialnetworks.map((network) => (
      <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noreferrer">
        {network.icon}
      </a>
    ))}
  </section>

}

export default SocialNetworks
