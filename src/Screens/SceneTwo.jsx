import styles from '../style/scenetwo.module.css'
import Collage from "../assets/CollageFood.png"
import Banner from '../components/Banner'


function SceneTwo() {
    return ( 
        <div className={styles.divScenetwo}>
            <div className={styles.containerCenter}>
                <div className={styles.containerData}>
                    <div className={styles.letterTitle}>
                        <p>Nuestra historia</p>
                    </div >
                    <div className={styles.letterInfo}>
                    <p>Como cualquier otro lugar característico, 
                    tenemos nuestra propia historia especial. La 
                    idea del restaurante llegó a los fundadores 
                    de forma inesperada. Durante un paseo por el
                     bosque, el creador de nuestro restaurante se 
                     quedó atrapado a cientos de kilómetros del 
                     asentamiento más cercano. Lejos de la civilización 
                     y las comunicaciones, tuvieron que establecer una 
                     vida rudimentaria durante un tiempo, para encontrar y 
                     cocinar sus propios alimentos.</p>
                    </div>

                     <div className={styles.infoLetter}>
                        <div>
                        <b>93</b>
                        <p>Bebidas</p>
                        </div>
                        <div>
                        <b>206</b>
                        <p>Alimentos</p>
                        </div>
                        <div>
                        <b>71</b>
                        <p>Aperitivos</p>
                        </div>
                     </div>
                </div>
                <div className={styles.imageData}>
                    <img className={styles.collageImage} src={Collage} alt="Collage" />
                </div>
            </div>
            <Banner></Banner>
        </div>
     );
}

export default SceneTwo;