import { FC } from "react";
import Cartoon from "../../assets/cartoon.jpg"
import Food from "../../assets/food.jpg"
import Movie from "../../assets/movie.png"
import Life from "../../assets/life.jpg"
import styles from "./styles.module.scss"

const SecondPart: FC = () => {
    return (
        <div className={styles.secondPart}>
            <ul>
                <li>动画</li>
                <li>美食</li>
                <li>电影</li>
                <li>生活</li>
            </ul>

            <div>
                <section>
                    <h2>动画</h2>
                    <img src={Cartoon} />
                </section>
                <section>
                    <h2>美食</h2>
                    <img src={Food} />
                </section>
                <section>
                    <h2>电影</h2>
                    <img src={Movie} />
                </section>
                <section>
                    <h2>生活</h2>
                    <img src={Life} />
                </section>
            </div>
        </div>
    )
}
export default SecondPart