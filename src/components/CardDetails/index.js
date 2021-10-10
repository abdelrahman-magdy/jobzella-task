import React from 'react'
import Styles from "./styles.module.scss";
import { ActionsButtons, TitleAndLoaction } from "../SubComponent";
import { cardImage } from "../../assets";
export default function Card() {
    return (
        <div className={Styles["card-details"]}>
            <div className={Styles["card-details-top"]}>
                <TitleAndLoaction
                    title={"cercacor leboratories, inc."}
                    location={" maadi, cairo"}
                />
                <ActionsButtons />
            </div>
            <div className={Styles["card-details-middle"]}>
                <img
                    src={cardImage}
                    alt="image-card"
                    className={Styles["card-details-image"]}
                />
            </div>
            <p className={Styles["card-details-desc"]}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime harum ut quaerat, laudantium ad doloribus autem! Quae expedita, ad, assumenda, quia similique perferendis dicta repellendus ratione hic laborum pariatur voluptate.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime harum ut quaerat, laudantium ad doloribus autem! Quae expedita, ad, assumenda, quia similique perferendis dicta repellendus ratione hic laborum pariatur voluptate.
            </p>
            <p className={Styles["card-details-desc"]}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime harum ut quaerat, laudantium ad doloribus autem! Quae expedita, ad, assumenda, quia similique perferendis dicta repellendus ratione hic laborum pariatur voluptate.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime harum ut quaerat, laudantium ad doloribus autem! Quae expedita, ad, assumenda, quia similique perferendis dicta repellendus ratione hic laborum pariatur voluptate.
            </p>
        </div>
    )
}
