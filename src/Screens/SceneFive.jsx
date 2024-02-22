import styles from '../style/scenefive.module.css'
import ChefOne from "../assets/ChefOne.jpg";
import ChefTwo from "../assets/ChefTwo.jpg";
import ChefThree from "../assets/ChefThree.jpg";



function SceneFive() {
    return ( 
        <div className={styles.contScene}>
            <div className={styles.contTitle}>
            <p>Nuetros</p><b>Chef</b>
            </div>
            <div className={styles.contImage}>
                <div>
                <img  src={ChefOne}  />
                </div>
                <div>
                <img src={ChefTwo}  />
                </div>
                <div>
                <img  src={ChefThree}  />
                </div>
            </div>
        </div>
     );
}

export default SceneFive;