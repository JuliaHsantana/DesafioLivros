import s from './inicio.module.scss'
import Oferece from '../../assets/oferece.png'
import estimula from '../../assets/estimula.png'
import fornece from '../../assets/fornece.png'
import garante from '../../assets/garante.png'

export default function Inicio(){
    return(
    <main>
        <section className={s.primeiraSessaoInicio}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>

  <section className={s.porqueDoarSection}>
                <h2>Por que devo doar?</h2>
                <div className={s.containerCards}>
                    <section>
                        <img src={Oferece} alt="Imagem ilustrando círculo social de 4 pessoas" />
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </section>
                    <section>
                        <img src={estimula} alt="Imagem ilustrando pessoa lendo" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </section>
                    <section>
                        <img src={fornece} alt="Imagem ilustrando 6 pessoas transformando vidas" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </section>
                    <section>
                        <img src={garante} alt="Imagem ilustrando balança que representa igualdade" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </section>
                </div>
            </section>
        </main>
    )
}