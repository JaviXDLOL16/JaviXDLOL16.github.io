import DessertImg from "../assets/foodDessert.jpg";
import foodOne from "../assets/foodOne.jpg";
import foodTwo from "../assets/foodTwo.jpg";
import foodLarge from "../assets/foodLarge.jpg";

import styles from "../style/scenethree.module.css";
import CardFood from "../components/CardFood";
import CourseOne from "../assets/Courses1.png";
import CourseTwo from "../assets/Courses2.png";
import CourseThree from "../assets/Courses3.png";
import CourseFour from "../assets/Courses4.png";
import ReserveButton from "../components/ReserveButton";





function SceneThree() {
  return (
    <>
    <div className={styles.titleCourse}>
    <p>Platillos</p>
    </div>
    <div className={styles.containerScene}>
      <div className={styles.squareCenter}>
        <div className={styles.squareLeft}>
            <img className={styles.imgDessert} src={DessertImg}  />
            <div className={styles.imagesContainer}>
            <div className={styles.contFood}>
            <img className={styles.imgFoodone} src={foodOne} />
            <img className={styles.imgFoodtwo} src={foodTwo}  />
            </div>
            <div className={styles.contFoodlarge}>
            <img className={styles.imgFoodlarge} src={foodLarge}  />
            </div>
            </div>
        </div>




        <div className={styles.squareRight}>
            <CardFood
            Image={CourseOne}
            Title='Res y arroz'
            Description='Carne de res adobada sobre una cama de arroz condimentado con especies de la zona. '
            />
            <CardFood
            Image={CourseTwo}
            Title='Fajitas de pollo'
            Description='Pollo cocinado a las brazas con una guarnición de chile morrón, cebolla morada y otros condimentos. '
            />
            <CardFood
            Image={CourseThree}
            Title='Caldo tlalpeño con chicharrón '
            Description='El clásico caldo tlalpeño con la incorporacion del chicharrón lo que le dará un delicioso toque. '
            />
            <CardFood
            Image={CourseFour}
            Title='Pollo horneado'
            Description='Pollo horneado acompañado de pepinillos, zanahoria rayada, col, lechuga y el aderezo de la casa. '
            />
             <ReserveButton
             Text='Menú completo'
             />
        </div>
      </div>
    </div>
    </>

  );
}

export default SceneThree;
