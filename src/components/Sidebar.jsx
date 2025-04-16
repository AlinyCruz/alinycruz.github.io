import avatar from '../img/avatar.jpg'
import InformationContent from './InformationContent'
import SocialNetworks from './SocialNetworks'
import Currículo_AlineCruz from '../pdf/Currículo_AlineCruz.pdf'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="foto-aline" srcSet=""/>
      <p className="title">Desenvolvedora Full Stack</p>
      <SocialNetworks />
      <InformationContent />
      <a href={Currículo_AlineCruz_2025.pdf} className="btn" download="Currículo_AlineCruz">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
