import { useState } from "react";
import styled from "styled-components";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Container data-component="header">
            <MenuButton className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}></MenuButton>
            
            <Logo href="#">
                Coffee
                <i className='bx bxs-coffee-togo' ></i>
            </Logo>

            <Navbar isMenuOpen={isMenuOpen}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#menu">Menu</a>
                <a href="#review">Review</a>
                <a href="#book">Book</a>
            </Navbar>

            <BookButton href="#">Book a table</BookButton>
        </Container>
    );
}

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    padding: 2rem;

    @media(min-width: 1024px) {
        padding: 2rem 9%;
    }
`;

const MenuButton = styled.i`
    font-size: 3rem;
    cursor: pointer;
    color: var(--main-color);
    display: inline-block;
    transition: 400ms;

    :active {
        transform: rotate(180deg);
    }

    @media(min-width: 768px) {
        display: none;
    }
`;

const Logo = styled.a`
    display: flex;
    align-items: center;
    color: var(--main-color);
    font-size: 2.5rem;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: 0.25rem;

    i {
        padding-left: 0.5rem;
    }
`;

const Navbar = styled.nav`
    position: absolute;
    top: 99%;
    left: 0;
    right: 0;
    background: #fff;
    opacity: ${({isMenuOpen}) => isMenuOpen ? '1' : '0'};
    visibility: ${({isMenuOpen}) => isMenuOpen ? 'visible' : 'hidden'};
    transition: 200ms;

    a {
        display: block;
        font-size: 2.2rem;
        color: var(--main-color);
        cursor: pointer;
        text-decoration: none;            
        padding: 1.5rem 2rem;
    }

    @media(min-width: 768px) {
        position: static;
        background: transparent;
        opacity: 1;
        visibility: visible;

        a {
            display: initial;
            font-size: 1.5rem;
        }
    }
`;

const BookButton = styled.a`
    display: inline-block;
    background: none;
    color: var(--main-color);
    font-size: 1.7rem;
    padding: 0.9rem 1.5rem;
    border: var(--border);
    border-radius: var(--border-radius);
    cursor: pointer;
    text-decoration: none;
    transition: 200ms;

    :hover {
        border: var(--border-hover);
        border-radius: var(--border-radius-hover);
    }
`;