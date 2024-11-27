import s from './footer.module.scss'
import facebook from '../../assets/face.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/insta.png'
import tt from '../../assets/tt.png'
import linkedln from '../../assets/linkedln.png'

export default function Footer(){
    return(
        <footer className={s.footer}>
        <section className={s.contatosFooter}>
        <p>4002-8922</p>

        <nav>
            <a href="https://www.facebook.com/login/" target='_blank'>  <img src={facebook} alt="logo facebook" /> </a>
            <a href="https://x.com/" target='_blank'> <img src={tt} alt="logo twitter" /> </a>
            <a href="https://www.youtube.com/"target='_blank'> <img src={youtube} alt="logo youtube" /> </a>
            <a href="https://br.linkedin.com/"target='_blank'> <img src={linkedln} alt="logo linkedln" /> </a>
            <a href="https://www.instagram.com/"target='_blank'> <img src={instagram} alt="logo instagram" /> </a>
        </nav>
        </section>
        <section className={s.copyrigth}>
     <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
        </section>
        </footer>
    )
}