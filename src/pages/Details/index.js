import React from 'react'
import { Header, Footer, Card, CardDetails } from '../../components'
import "./style.scss";
export default function Details() {
    return (
        <>
            <Header />
            <main>
                <div className="details">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>
                            <div className="col-2">
                                <CardDetails />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
