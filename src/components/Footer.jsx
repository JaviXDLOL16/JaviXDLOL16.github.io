import styles from '../style/footer.module.css'
import Logo from "../assets/logoTransparentt.png";

function Footer() {
  return (
    <div className={styles.contFooter}>
        <div className={styles.contTop}>
            <div className={styles.contHours}>
                <div className={styles.contWait}>
                <img className={styles.logoImage} src={Logo}  />
                <p>Nuestro restaurante te espera, el servicio y la comida son de primera porque te lo mereces</p>
                </div>
                <div className={styles.contOpen}>
                <b>Horarios</b>
            <div className={styles.Hours}>
            <div>
                 <p>De lunes a viernes</p>
                 <p>8:00 am a 9:00 pm</p>   
                </div>
                <div>
                 <p>Sabado</p>
                 <p>8:00 am a 10:00 pm</p>   
                </div>
                <div>
                 <p>Domingo</p>
                 <p>Cerrado</p>   
                </div>
            </div>
                </div>
            </div>
            <div className={styles.contNavigation}>
            <b>Navegación</b>
            <p>Menú</p>
            <p>Quienes somos</p>
            <p>Contactos</p>
            <p>Galería</p>
            </div>
            <div className={styles.contCourses}>
            <b>Platillos</b>
            <p>Res y arroz</p>
            <p>Fajitas de pollo</p>
            <p>Caldo Tlalpeño</p>
            <p>Pollo horneado</p>
            </div>
        </div>
        <div className={styles.contBottom}>
        <p>2022 Restaurants. All Right Reserved. Designed by Javier</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer