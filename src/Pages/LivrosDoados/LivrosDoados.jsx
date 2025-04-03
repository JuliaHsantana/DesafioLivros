import Lixeira from '../../assets/excluirr.png'
import s from './livroDoados.module.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    const puxarLivros = async() =>{
        const resposta = await  axios.get("https://api-livraria-0la5.onrender.com/livros")
        console.log(resposta)
        setLivros(resposta.data)
    } 
    const excluirLivro = async (id) => {
        if (!id) {
            alert("Erro: ID do livro não encontrado.");
            return;
        }

        const confirmacao = window.confirm("Tem certeza que deseja excluir este livro?");
        if (!confirmacao) return;

        try {
            const resposta = await axios.delete(`https://api-livraria-0la5.onrender.com/livros/${id}`);
            console.log("Resposta da API ao excluir:", resposta); 
            alert("Livro excluído com sucesso!");
            puxarLivros(); 
        } catch (error) {
            console.error("Erro ao excluir o livro:", error.response ? error.response.data : error);
            alert("Erro ao excluir o livro.");
        }
    };
  useEffect(()=>{
      puxarLivros()
  },[])

    return(
        <section className={s.livrosDoadosSection}>
           <h2>Livros Doados</h2>
           <section className={s.containerCard}>
           {livros.map((item)=>(
            <section>
                <button onClick={() => excluirLivro(item.id)}> <img src={Lixeira}/> </button>
                <img src={item.image_url} alt={item.titulo} />
            <div>
                <h4>{item.titulo}</h4>
                <h5>{item.autor}</h5>
                <h5>{item.categoria}</h5>
            </div>
           </section>
           ) )}
           </section>
        </section>
    )
}