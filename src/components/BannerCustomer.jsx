import styles from "../style/bannercustomer.module.css";
import bannerCustomer from "../assets/BannerCustomer.jpg";
import Customer from "../assets/Customer.jpg";

function BannerCustomer() {
   
    return ( 

        <>
<div className={styles.containerImage}>
  <img className={styles.bannerImage} src={bannerCustomer} alt="Collage" />
    <div className={styles.dataImage}>
    <div className={styles.dataText}>
        <p>"Descubrí un verdadero tesoro gastronómico en las afueras de Tuxtla Gutiérrez, Chiapas. El restaurante ofrece una experiencia única: desde su ubicación apartada hasta su interior excepcionalmente diseñado, cada aspecto invita a una aventura culinaria incomparable.La vista desde el restaurante es simplemente impresionante, con panorámicas que capturan la esencia misma de la belleza natural de Chiapas. Una vez dentro, te sorprenderá la atmósfera inusual y acogedora que combina lo tradicional con lo contemporáneo, creando un ambiente perfecto para una experiencia gastronómica memorable."</p>
        <img className={styles.imgCustomer} src={Customer} alt="Customer" />
        <div className={styles.NamePerson}>
            <b>Visitante</b>
            <p>Diego P.</p>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>
    </div>
    </div>
</div>
    </>
     );
}

export default BannerCustomer;