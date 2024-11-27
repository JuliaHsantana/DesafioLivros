import livro from '../../assets/livross.png'
import s from './queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.queroDoarSection}>
           <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

         <form action="">
            <div>
          <img src={livro} alt="icone de um livro aberto" />
          <p>Informações do Livro</p>
            </div>
            <input type="text" name="" id=""  placeholder='Titulo'/>
             <input type="text" name="" id=""  placeholder='Categoria'/>
              <input type="text" name="" id="" placeholder='Autor'/>
               <input type="text" name="" id="" placeholder='Link da Imagem' />
               <input type="submit" value="Doar" className={s.buttonDoar}/>
         </form>
        </section>
    )
}