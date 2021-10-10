import React from 'react'
import { Header, Footer, Card } from '../../components'
import "./style.scss";
export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="home">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card />
                            </div>
                            <div className="col">
                                <Card />
                            </div>
                            <div className="col">
                                <Card />
                            </div>
                            <div className="col">
                                <Card />
                            </div>
                            <div className="col">
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
