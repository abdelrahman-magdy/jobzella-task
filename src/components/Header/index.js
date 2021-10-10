import React from 'react'
import Styles from "./styles.module.scss";
import { logo, iconNotifaction, iconLogo } from '../../assets'

const links = [
    {
        id: 1,
        link: '/',
        title: 'projects',
        active: true
    },
    {
        id: 2,
        link: '/',
        title: 'community'
    },
    {
        id: 3,
        link: '/',
        title: 'courses'
    }
]

const NavLink = ({ title, active }) => (
    <li className={Styles["header-nav-item"]}>
        <a href="" className={Styles[active ? "header-nav-link-active" : "header-nav-link"]}>
            {title}
        </a>
    </li>
)

const HeaderIcon = ({ imageSRC }) => (
    <li className={Styles["header-item"]}>
        <img
            src={imageSRC}
            alt="header-icon"
            className={Styles["header-icon"]}
        />
    </li>
)

export default function Header() {
    return (
        <header className={Styles.header}>
            <div className="container">
                <div className={Styles["header-container"]}>
                    <div className={Styles["header-links"]}>
                        <div className={Styles["header-logo"]}>
                            <img
                                src={logo}
                                alt="logo"
                                className={Styles["header-image"]}
                            />
                        </div>
                        <nav className={Styles["header-nav"]}>
                            <ul className={Styles["header-nav-list"]}>
                                {
                                    links.map(link => <NavLink key={link.id} title={link.title} active={link.active} />)
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className={Styles["header-actions"]}>
                        <ul className={Styles["header-icons"]}>
                            <HeaderIcon imageSRC={iconLogo} />
                            <HeaderIcon imageSRC={iconNotifaction} />
                            <li className={Styles["header-item"]}>
                                user
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
