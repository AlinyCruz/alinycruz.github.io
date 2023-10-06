// import Avatar from '../img'
import avatar from '../img/avatar.jpg'
import '../styles/components/sidebar.sass'
import InformationContent from './InformationContent'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={avatar} alt="foto-aline" srcSet=""/>
      <p className="title">Desenvolvedora Full Stack</p>
      <SocialNetworks />
      <InformationContent />
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
