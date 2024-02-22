import Header from "../components/Header";
import Background from "../assets/bgRestaurantJ.png"
import styles from '../style/sceneone.module.css'
import Card from "../components/Card";


function SceneOne() {
    return (
        <div className={styles.divSceneone}>
            <Header></Header>
            <div className={styles.divImage}>
                <img className={styles.Background} src={Background} alt="Background" />
            </div>
            <Card/>
        </div>

    );
}

export default SceneOne;