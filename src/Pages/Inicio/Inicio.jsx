import s from './inicio.module.scss'

export default function Inicio(){
    return(
    <main>
        <section className={s.primeiraSessaoInicio}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>

        <section>
            <h3>Por que devo doar?</h3>
        </section>
    </main>
    )
}