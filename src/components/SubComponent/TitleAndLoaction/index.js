import React from 'react'
import Styles from "./styles.module.scss";
import { useHistory } from 'react-router-dom'

export default function TitleAndLoaction({ title, location }) {
    const history = useHistory()
    const routeTo = () => history.push('/card-details/1')
    return (
        <div className={Styles["card"]}>
            <h2 className={Styles["card-head"]} onClick={routeTo}>
                {title}
            </h2>
            <p className={Styles["card-location"]}>
                {location}
            </p>
        </div>
    )
}
