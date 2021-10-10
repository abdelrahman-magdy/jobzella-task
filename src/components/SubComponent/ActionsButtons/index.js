import React from 'react'
import Styles from "./styles.module.scss";
import { shareIcon, saveIcon } from "../../../assets";
import { useHistory } from 'react-router-dom'

export default function BTNS({ border }) {
    const history = useHistory()
    const routeTo = () => history.push('/card-details/1')
    return (
        <div className={Styles[border ? "btns-border" : "btns"]}>
            <div className={Styles["btns-actions"]}>
                <button className={Styles["btns-btn"]}>
                    <img src={saveIcon} alt="" className={Styles["btns-image"]} />
                    <span>
                        save
                    </span>
                </button>
                <button className={Styles["btns-btn"]}>
                    <img src={shareIcon} alt="" className={Styles["btns-image"]} />
                    <span>
                        share
                    </span>
                </button>
            </div>
            <div className={Styles["btns-links"]} onClick={routeTo}>
                <a className={Styles["btns-link"]}>
                    rent
                </a>
            </div>
        </div>
    )
}
