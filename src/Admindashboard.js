import React from 'react'
import Sidebar from './Sidebar'
import BodySection from './BodySection'
import { BrowserRouter } from 'react-router-dom'

export default function Admindashboard() {
    return (
        <div id="wrapper">
            <BrowserRouter>
                <Sidebar />
                <BodySection />
            </BrowserRouter>
        </div>
    )
}