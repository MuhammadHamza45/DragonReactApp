import React from 'react'
import { Container } from 'react-bootstrap'

const Header = () => {
    return (
        <section className='lp__header'>
            <Container>
                <span>Welcome to</span>
                <h1 >
                    <span>D</span>
                    <div style={{ 'color': '#ff0000' }}>R</div>
                    AG
                    <div style={{ 'color': '#ffa200' }}>O</div>
                    N
                    <span style={{ 'color': '#b400ff' }}>C</span>
                    A
                    <div style={{ 'color': '#ff0000' }}>M</div>
                    P
                </h1>
                <h2><span>W</span>HERE WE AIM TO</h2>
            </Container>
        </section>
    )
}

export default Header