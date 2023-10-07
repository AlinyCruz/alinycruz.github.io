import '../styles/components/informationcontainer.sass'
import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

const InformationContent = () => {
  return <section id="information">
    <div className='info-card'>
      <AiFillPhone id='phone-icon' />
      <div>
        <h3>Telefone</h3>
        <p><a href="https://wa.me/5511948253436" target="_blank" rel="noreferrer">(11) 9.4825-3436</a></p>
      </div>
    </div>

    <div className='info-card'>
      <AiOutlineMail id='email-icon' />
      <div>
        <h3>E-mail</h3>
        <p><a href="http://mail.yahoo.com/d/folders/1?reason=invalid_crumb&guce_referrer=aHR0cHM6Ly9sb2dpbi55YWhvby5jb20v&guce_referrer_sig=AQAAAHfs3k5gvqG-t-4S8yyWEJnrUBhQS7XSoaJlfgZ8di_JqXCgMD2lwUZq1dTWNtHvTxURqyJmSZoy5HkSAiqywmwOMe3ObgrOBosaIFbyj1AIMrD7oPnXqKmG74T4Em6Lx5WXCcU28VPHF0mM-SeLU-C6Ivv4MRcIOgK2BZz5KP6wo.com.br" target="_blank" rel="noreferrer">aliny.cruz@yahoo.com.br</a></p>
      </div>
    </div>

    <div className='info-card'>
      <AiFillEnvironment id='pin-icon' />
      <div>
        <h3>Localização</h3>
        <p><a href="https://www.google.com/maps/place/Sacom%C3%A3,+S%C3%A3o+Paulo+-+SP/@-23.6130473,-46.6081228,15z/data=!3m1!4b1!4m6!3m5!1s0x94ce5b7f367ca541:0xfbc4d3301fd32ae9!8m2!3d-23.6149954!4d-46.5969541!16s%2Fm%2F012kcj5b?entry=ttu" target="_blank" rel="noreferrer">São Paulo/SP</a></p>
      </div>
    </div>
    </section>
}

export default InformationContent
