import styles from "../style/cardfood.module.css";


function CardFood({Image,Title,Description}) {
    return ( 
        <div className={styles.cardFood}>
            <div className={styles.contImage}>
                 <img className={styles.imgFood} src={Image} />
            </div>
            <div className={styles.contLetter}>
                <div className={styles.contTitle}>
                    <p>{Title}</p>
                </div>
                <div className={styles.contDescription}>
                    <p>{Description}</p>
                </div>
            </div>
        </div>
     );
}

export default CardFood;