import livro from '../../assets/livross.png'
import s from './queroDoar.module.scss'
import { useState } from 'react'
import axios from 'axios'

export default function QueroDoar(){

 const [titulo,setTitulo] = useState("")
    const [categoria,setCategoria] = useState("")
    const [autor,setAutor] = useState("")
    const [image_url,setImage_url] = useState("")
      const [mensagem, setMensagem] = useState("");

    const capturaTitulo = (e) => setTitulo(e.target.value);
    const capturaCategoria = (e) => setCategoria(e.target.value);
    const capturaAutor = (e) => setAutor(e.target.value);
    const capturaImg = (e) => setImage_url(e.target.value);

    const envioDados = async (e) => {
        e.preventDefault(); 

        const dadosPEnviar = { titulo, categoria, autor, image_url };

        try {
            await axios.post("https://api-livraria-0la5.onrender.com/doar", dadosPEnviar);
            setMensagem("Livro doado com sucesso! ✅");
            setTitulo("");
            setCategoria("");
            setAutor("");
            setImage_url("");
        } catch (error) {
            setMensagem("Erro ao doar o livro. Tente novamente. ❌"); 
        }
    };

    return(
        <section className={s.queroDoarSection}>
           <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>

        <form onSubmit={envioDados}>
            <div>
          <img src={livro} alt="icone de um livro aberto" />
          <p>Informações do Livro</p>
            </div>
            <input type="text"  value={titulo} placeholder='Titulo'  onChange={capturaTitulo}required/>
            <input type="text"   value={categoria}  placeholder='Categoria'onChange={capturaCategoria}required/>
            <input type="text" value={autor} placeholder='Autor'onChange={capturaAutor}required/>
            <input type="url" value={image_url} placeholder='Link da Imagem' onChange={capturaImg} required/>
            <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
         </form>
       
            {mensagem && <p className={s.mensagem}>{mensagem}</p>}
        </section>
    )
}