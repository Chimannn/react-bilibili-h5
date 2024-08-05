import { FC } from "react";
import Banner from "../../assets/banner.jpg"
import styles from "./styles.module.scss";

const FirstPart: FC = () => {
    return (
        <div className={styles.firstPart}>
            <img src={Banner} />
        </div>
    )
}

export default FirstPart