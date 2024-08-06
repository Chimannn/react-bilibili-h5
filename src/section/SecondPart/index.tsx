import { FC, useState } from "react";
import Cartoon from "../../assets/cartoon.jpg"
import Food from "../../assets/food.jpg"
import Movie from "../../assets/movie.png"
import Life from "../../assets/life.jpg"
import styles from "./styles.module.scss"

const SecondPart: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("cartoon")

    const tabs = [
        {
            key: "cartoon",
            title: "卡通"
        },
        {
            key: "food",
            title: "美食"
        },
        {
            key: "movie",
            title: "电影"
        },
        {
            key: "life",
            title: "生活"
        }

    ]

    return (
        <div className={styles.secondPart}>
            <ul>
                {tabs.map( tab => (
                    <li key={tab.key } onClick={()=> setActiveTab(tab.key)} >
                        <span>{tab.title}</span>
                        {activeTab === tab.key && <span className={styles.line}></span>}
                    </li>
                ))}
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