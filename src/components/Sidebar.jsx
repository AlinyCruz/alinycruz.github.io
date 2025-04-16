import avatar from '../img/avatar.jpg'
import InformationContent from './InformationContent'
import SocialNetworks from './SocialNetworks'
import Curriculo_AlineCruz from '../pdf/Curriculo_AlineCruz.pdf'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="foto-aline" srcSet=""/>
      <p className="title">Desenvolvedora Full Stack</p>
      <SocialNetworks />
      <InformationContent />
      <a href={Curriculo_AlineCruz} className="btn" download="Currículo_AlineCruz">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
