import React from 'react'
import Styles from "./styles.module.scss";
import { logo, google, apple, beIcon, facebookIcon, iconJobzilla, instgramIcon, pinIcon, twitterIcon } from "../../assets";

const socielData = [
    {
        id: 2,
        title: 'facebook Icon',
        icon: facebookIcon
    },
    {
        id: 4,
        title: 'instgram Icon',
        icon: instgramIcon
    },
    {
        id: 6,
        title: 'twitter Icon',
        icon: twitterIcon
    },
    {
        id: 5,
        title: 'pin Icon',
        icon: pinIcon
    },
    {
        id: 1,
        title: 'be icon',
        icon: beIcon
    },
    {
        id: 3,
        title: 'iconJob zilla',
        icon: iconJobzilla
    },
]

const dataNavsSector = [
    {
        id: 1,
        title: "general",
        items: [
            {
                id: 1,
                title: 'about',
                link: '/'
            },
            {
                id: 2,
                title: 'blog',
                link: '/'
            },
            {
                id: 3,
                title: 'sign up',
                link: '/'
            },
            {
                id: 4,
                title: 'help center',
                link: '/'
            },
            {
                id: 5,
                title: 'from zero to hero',
                link: '/'
            },
        ]
    },
    {
        id: 2,
        title: "quick links",
        items: [
            {
                id: 1,
                title: 'jobs',
                link: '/'
            },
            {
                id: 2,
                title: 'companies',
                link: '/'
            },
            {
                id: 3,
                title: 'people',
                link: '/'
            },
            {
                id: 4,
                title: 'events',
                link: '/'
            }
        ]
    },
    {
        id: 3,
        title: "help",
        items: [
            {
                id: 1,
                title: 'help center',
                link: '/'
            },
            {
                id: 2,
                title: 'contact us',
                link: '/'
            }
        ]
    },
]

const FooterNavsSector = ({ data }) => {
    const { title, items } = data;
    return (
        <div className={Styles["footer-navs-sector"]}>
            <h5 className={Styles["footer-navs-head"]}>
                {title}
            </h5>
            <ul className={Styles["footer-navs-list"]}>
                {
                    items.map(item => (
                        <li key={item.id} className={Styles["footer-navs-item"]}>
                            <a
                                href={item.link}
                                className={Styles["footer-navs-link"]}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const FooterSocielLink = ({ imageSRC, title }) => (
    <li className={Styles["footer-sociel-item"]}>
        <a href="" className={Styles["footer-sociel-link"]}>
            <img src={imageSRC} alt={title} className={Styles["footer-sociel-image"]} />
        </a>
    </li>
)
export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className="container">
                <div className={Styles["footer-container"]}>
                    <div className={Styles["footer-links"]}>
                        <div className={Styles["footer-logo-sociel"]}>
                            <div className={Styles["footer-logo"]}>
                                <img
                                    src={logo}
                                    alt="footer-logo"
                                />
                            </div>
                            <ul className={Styles["footer-sociel"]}>
                                {
                                    socielData.map(item => <FooterSocielLink key={item.key} imageSRC={item.icon} title={item.title} />)
                                }
                            </ul>
                        </div>
                        <div className={Styles["footer-navs"]}>
                            {
                                dataNavsSector.map(item => <FooterNavsSector key={item.id} data={item} />)
                            }
                        </div>
                    </div>
                    <div className={Styles["footer-actions"]}>
                        <h4 className={Styles["footer-actions-header"]}>
                            download jobzella mobile app
                        </h4>
                        <p className={Styles["footer-actions-desc"]}>
                            jobzella mobile app for android and iphone
                        </p>
                        <div className={Styles["footer-actions-links"]}>

                            <a
                                href="/"
                                className={Styles["footer-actions-link"]}
                            >
                                <img
                                    src={google}
                                    alt="google-store-image"
                                    className={Styles["footer-actions-image"]}
                                />
                            </a>
                            <a
                                href="/"
                                className={Styles["footer-actions-link"]}
                            >
                                <img
                                    src={apple}
                                    alt="apple-store-image"
                                    className={Styles["footer-actions-image"]}
                                />
                            </a>

                        </div>
                        <p className={Styles["footer-actions-download"]}>
                            download free
                        </p>
                        <div className={Styles["footer-actions-select"]}>
                            <select name="" id="">
                                {
                                    ['english', 'arabic'].map(opt => (
                                        <option value={opt}>
                                            {opt}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
