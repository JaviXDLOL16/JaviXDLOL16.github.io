import styles from '../style/header.module.css'
import Logo from "../assets/logoTransparentt.png"
import ReserveButton from './ReserveButton';


function Header() {
    return ( 
        
        <header className = {styles.DivHeader}>
            <img className={styles.Logo} src={Logo} alt="Logo" />
            <div className = {styles.divLetterlogo}>
                <p>Restaurante</p>
                <p>Sabor del jaguar</p>
            </div>
            <div className = {styles.divDataheader}>
            <p>Menú</p>
            <p>Sobre nosotros</p>
            <p>Galería</p>
            <p>Contactos</p>      
            </div>
            <div className = {styles.divIconheader}>
            <ion-icon name="cart-outline"></ion-icon>
            </div>
            <div className = {styles.divNumberheader}>
                <div>
                    <ion-icon name="call-outline"></ion-icon>
                </div>
                <div>
                    <b>+7 (708) 555 -55 - 55</b>
                </div>
                <div>
                    <p>Contacte con nosotros para reservas</p>
                </div>
            </div>
            <div className = {styles.divButton}>
                <ReserveButton
                Text='Reservar mesas'
                ></ReserveButton>
            </div>
        </header>

    );
}

export default Header;
