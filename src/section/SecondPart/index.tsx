import { FC, useState, useRef, useEffect } from "react";
import Cartoon from "../../assets/cartoon.jpg"
import Food from "../../assets/food.jpg"
import Movie from "../../assets/movie.png"
import Life from "../../assets/life.jpg"
import Logo from "../../assets/logo.png"
import styles from "./styles.module.scss"

const SecondPart: FC = () => {
    const [activeTab, setActiveTab] = useState<string>("cartoon")
    const [isFixed, setIsFixed] = useState<boolean>(false)
    const secondPartRef = useRef<HTMLDivElement>(null)
    const TAB_HEIGHT = 56
    const activate = (key: string) => {
        setActiveTab(key)
        const el = document.getElementById(key)
        if(el){
            el.scrollIntoView({behavior: "smooth"})
        }
    }

    const onScroll = () => {
        if(secondPartRef.current){
            let { top } = secondPartRef.current.getBoundingClientRect()
            setIsFixed( top <= 0 )

            const sectionsList = secondPartRef.current.querySelectorAll("section")
            Array.from(sectionsList).forEach(node => {
                const { top } = node.getBoundingClientRect()
                const key = node.id
                if(top <= TAB_HEIGHT ){
                    setActiveTab(key)
                }
            });
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])

    const tabs = [
        {
            key: "cartoon",
            title: "卡通",
            imgSrc: Cartoon
        },
        {
            key: "food",
            title: "美食",
            imgSrc: Food
        },
        {
            key: "movie",
            title: "电影",
            imgSrc: Movie
        },
        {
            key: "life",
            title: "生活",
            imgSrc: Life
        }

    ]

    return (
        <div className={styles.secondPart} ref={secondPartRef}>
            <ul className={`${isFixed && styles.isFixed}`}>
                {tabs.map( tab => (
                    <li key={tab.key } onClick={()=> activate(tab.key)} >
                        <span>{tab.title}</span>
                        <span className={`${styles.line} ${activeTab === tab.key && styles.visible}`}></span>
                    </li>
                ))}
            </ul>
            <div>
                {tabs.map( tab => (
                     <section id={tab.key} key={tab.key}>
                        <h2>{tab.title}</h2>
                        <img src={tab.imgSrc} />
                    </section>
                ))}
            </div>
            <div className={`${styles.btnWrapper} ${isFixed && styles.visible}`}>
                <img src={Logo} />
                <a href="https://www.bilibili.com/" target="_blank" >
                    <button>App 内打开</button>     
                </a>
            </div>
        </div>
    )
}
export default SecondPart