import protagonista from '../../assets/Protagonista.png'
import s from './livroDoados.module.scss'


export default function LivrosDoados(){
    return(
        <section className={s.livrosDoadosSection}>
           <h2>Livros Doados</h2>
           <section className={s.containerCard}>
               <section>
                 <img src={protagonista} alt="capa do livro O protagonista vermelha" />
                 <div>
                 <h3>O Protagonista</h3>
                 <p>Susanne Andrade</p>
                 <p>ficção</p>
                 </div>
               </section>
           </section>
        </section>
    )
}