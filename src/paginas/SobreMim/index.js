import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Daniel Valadão!
      </h3>

      <img
        src='https://github.com/valadao02.png'
        alt='Foto do Daniel Valadão'
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor nec nisi nec ultrices. Maecenas sit amet nisl lacinia mi auctor fringilla. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ornare purus eu porttitor pretium. Donec scelerisque sapien porttitor, interdum sapien id, commodo dui. Suspendisse potenti. Curabitur mattis dolor sit amet magna vehicula, sit amet vehicula lorem egestas. Nam efficitur aliquam turpis.
      </p>

      <p className={styles.paragrafo}>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas luctus posuere justo, sit amet mollis purus aliquam sit amet. Sed vitae posuere libero. Nulla diam lorem, dignissim pellentesque scelerisque ac, iaculis vel arcu. Vestibulum ullamcorper, erat vel aliquet efficitur, nibh nibh scelerisque augue, a convallis nisi felis vitae augue. Donec gravida sapien sit amet diam congue, a rhoncus sapien luctus. Proin at est a neque aliquam sollicitudin quis eu odio.
      </p>

      <p className={styles.paragrafo}>
        Nunc vitae bibendum sapien, id tincidunt sem. Sed commodo odio sit amet tincidunt rhoncus. Donec quis ex enim. Curabitur faucibus sollicitudin nulla. Phasellus quis sem purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim ultrices luctus. Suspendisse quis consectetur nibh. Pellentesque gravida ultricies lacus nec blandit. Sed rutrum ultrices dui. Morbi vulputate lacus nulla, sed ultricies quam pulvinar at. Quisque aliquam lectus vitae odio malesuada blandit.
      </p>

      <p className={styles.paragrafo}>
        Ut suscipit nibh lorem, id mattis erat rhoncus ut. Nulla placerat lectus elit. Nulla pharetra rutrum laoreet. Praesent hendrerit finibus ligula, eu semper lacus euismod quis. Morbi interdum sollicitudin arcu, eget bibendum est tristique vitae. Phasellus in neque auctor, accumsan nisl ut, pretium nunc. Duis tincidunt libero nec nibh condimentum mollis. Nunc eu nibh egestas, bibendum elit non, lacinia metus. Mauris nisi lectus, sagittis sed dictum pellentesque, vehicula eu nisi. Suspendisse vehicula lacinia tellus et luctus. Proin condimentum augue a dictum sodales. Fusce lacus magna, hendrerit non erat a, posuere varius metus. Etiam vitae lacus eleifend, cursus metus vel, consequat tellus. Sed id venenatis ex.
      </p>

      <p className={styles.paragrafo}>
        Donec volutpat nec enim eu bibendum. Donec imperdiet aliquam massa quis ullamcorper. Quisque hendrerit mattis neque at tempus. Vestibulum metus felis, facilisis sit amet mi ac, consequat volutpat ex. Nullam sed odio in tellus semper feugiat nec sit amet orci. Sed eget semper tellus. Nullam mattis eros et purus dictum pulvinar. Nunc at mi a lorem placerat efficitur.
      </p>
    </PostModelo>
  )
}
