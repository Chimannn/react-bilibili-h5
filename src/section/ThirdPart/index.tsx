import { FC } from "react";
import title1 from "../../assets/title1.jpg";
import title2 from "../../assets/title2.jpg";
import comment from "../../assets/comment.jpg";
import styles from "./styles.module.scss"

const ThirdPart: FC = () => {
    return (
        <div className={styles.thirdPart}>
            <img src={title1} />
            <img src={comment} className={styles.comment}/>
            <img src={title2} />
            <img src={comment} className={styles.comment}/>
        </div>
    )
}

export default ThirdPart
