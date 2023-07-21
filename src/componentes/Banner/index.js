import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Bom te ver por aqui! Sou Daniel Valadão, estudante de HTML, CSS, JS e REACT JS. Compartilho um pouco dos meus estudos aqui, espero que goste e possa aprender comigo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src='https://www.github.com/valadao02.png'
                    alt='Foto do Daniel Valadão'
                />
            </div>
        </div>
    )
}
