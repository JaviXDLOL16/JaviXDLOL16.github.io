import styles from '../style/scenefour.module.css'
import foodBanner from "../assets/foodBanner1.jpg";
import foodBannerTwo from "../assets/foodBanner2.jpg";
import foodLittleOne from "../assets/foodLittle1.jpg";
import foodLittleTwo from "../assets/foodLittle2.jpg";
import foodLittleThree from "../assets/foodLittle3.jpg";
import foodLittleFour from "../assets/foodLittle4.jpg";


function SceneFour() {
    return ( 

    <div className={styles.containerScene}>
        <div className={styles.containerTitle}><p>Galeria de </p><b>Platillos</b></div>
        <div className={styles.containerCenter}>
            <div className={styles.contRight}>
            <img className={styles.imgFoodbanner} src={foodBanner}  />
            <div className={styles.conFoodLittleR}>
            <img className={styles.imgfoodLittleOne} src={foodLittleOne}  />
            <img className={styles.imgfoodLittleTwo} src={foodLittleTwo}  />
            </div>
            </div>
            <div className={styles.contLeft}>
            <div className={styles.conFoodLittleL}>
            <img className={styles.imgfoodLittleThree} src={foodLittleThree}  />
            <img className={styles.imgfoodLittleFour} src={foodLittleFour}  />
            </div>
            <img className={styles.imgFoodbannerTwo} src={foodBannerTwo}  />
            </div>
        </div>

    </div> 
    
    );
}

export default SceneFour;