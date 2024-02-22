import styles from "../style/card.module.css";

function Card() {
  return (
<div className={styles.divContainer}>

  
    <div className={styles.divCard}>
      <div className={styles.divIconcard}>
        <ion-icon name="restaurant-outline"></ion-icon>
      </div>
      <div className={styles.divTitleCard}>
        <p>Atmósfera</p><b> mágica</b>
      </div>
      <div className={styles.divTextCard}>
        <p>Nuestro local tiene un ambiente mágico lleno de deliciosos sabores</p>
      </div>
    </div>    

    <div className={styles.divCard}>
      <div className={styles.divIconcard}>
        <ion-icon name="restaurant-outline"></ion-icon>
      </div>
      <div className={styles.divTitleCard}>
        <p>Alimentos de la mejor</p><b>calidad</b>
      </div>
      <div className={styles.divTextCard}>
        <p>La calidad de nuestra comida es excelente</p>
      </div>
    </div>  

    <div className={styles.divCard}>
      <div className={styles.divIconcard}>
        <ion-icon name="restaurant-outline"></ion-icon>
      </div>
      <div className={styles.divTitleCard}>
        <p>Sabor</p><b> inolvidable</b>
      </div>
      <div className={styles.divTextCard}>
        <p>Nuestros chefs preparan deliciosos platillos</p>
      </div>
    </div>  
</div>

  );
}

export default Card;
