import React from 'react'
import Styles from "./styles.module.scss";
import { ActionsButtons, TitleAndLoaction } from "../SubComponent";
import { cardImage } from "../../assets";
import { useHistory } from 'react-router-dom'
export default function Card() {
    const history = useHistory()
    const routeTo = () => history.push('/card-details/1')
    return (
        <div className={Styles["card"]}>
            <div className={Styles["card-header"]} onClick={routeTo}>
                <img
                    src={cardImage}
                    alt="image-card"
                    className={Styles["card-image"]}
                />
            </div>
            <div className={Styles["card-body"]}>
                <TitleAndLoaction
                    title={"cercacor leboratories, inc."}
                    location={" maadi, cairo"}
                />
                <p className={Styles["card-desc"]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur tenetur a at rem non! Quasi, aliquid quas commodi hic vel neque ipsam omnis quidem, quam aut nisi dolorem adipisci.
                </p>
            </div>
            <ActionsButtons
                border
            />
        </div>
    )
}
