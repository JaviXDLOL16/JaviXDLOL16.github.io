import styles from '../style/reservebutton.module.css'


function ReserveButton({Text}) {
    return ( 
    <button className = {styles.styleButton}>
      <p>{Text}</p>  
    </button>
     );
}

export default ReserveButton;