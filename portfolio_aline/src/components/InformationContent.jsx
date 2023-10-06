import '../styles/components/informationcontainer.sass'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const InformationContent = () => {
  return <section id="information">
    <div className='info-card'>
      <AiFillPhone id='phone-icon' />
      <div>
        <h3>Telefone</h3>
        <p>(11) 9.4825-3436</p>
      </div>
    </div>

    <div className='info-card'>
      <AiOutlineMail id='email-icon' />
      <div>
        <h3>E-mail</h3>
        <p>aliny.cruz@yahoo.com.br</p>
      </div>
    </div>

    <div className='info-card'>
      <AiFillEnvironment id='pin-icon' />
      <div>
        <h3>Localização</h3>
        <p>São Paulo/SP</p>
      </div>
    </div>
    </section>
}

export default InformationContent
