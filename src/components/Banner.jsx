import styles from "../style/banner.module.css";
import BannerImg from "../assets/BannerFood.png";
import ReserveButton from "./ReserveButton";

function Banner() {
  return (
    <>
<div className={styles.containerImage}>
  <img className={styles.bannerImage} src={BannerImg} alt="Collage" />
    <div className={styles.dataImage}>
    <div className={styles.dataText}>
        <p>Celébrelo en uno de los mejores restaurantes de Chiapas</p>
        <b>"Solo este mes, el almuerzo continental desde 200 pesos"</b>
    </div>
    <div className={styles.dataButton}>
        <div>
        <ReserveButton
        Text='Reservar mesas'
        ></ReserveButton>
        </div>
    </div>
    </div>
</div>
    </>
  );
}

export default Banner;
