import avatar from '../img/avatar.jpg'
import InformationContent from './InformationContent'
import SocialNetworks from './SocialNetworks'
//import Curriculo_Aline_Cruz from '/pdf/Currículo_AlineCruz.pdf'
import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="foto-aline" srcSet=""/>
      <p className="title">Desenvolvedora Web</p>
      <SocialNetworks />
      <InformationContent />
      <a href="https://drive.google.com/file/d/12GRjaodbKIfh2OL2pWYMV6lpWL_r0QIs/view?usp=sharing" className="btn" download="Currículo_AlineCruz">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
