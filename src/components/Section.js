import React, { Component } from 'react'
import Products from './section/Products'
import { Route, Routes } from 'react-router-dom'
import Detalle from '../components/pages/Detalle'




export class Section extends Component {
    render() {
        return (
            <section>

                <Routes>
                    <Route exact path="/" />
                    <Route exact path="/product/:id" element={<Detalle/>} />
                    <Route exact path="/product" element={<Products />} />
                </Routes>
            </section>
        )
    }
}

export default Section