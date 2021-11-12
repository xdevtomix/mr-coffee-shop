import { useState } from "react";
import styled from "styled-components";

const images = [
    'https://images.pexels.com/photos/977876/pexels-photo-977876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

export default function Home() {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <Container data-component="home" id="home" innerHeight={innerHeight}>
            <Info>
                <div>
                    <h1>Fresh coffee in the morning</h1>
                    <button>Buy One Now</button>
                </div>
            </Info>
            <Image src={selectedImage} alt="coffee" />
            <Picker>
                <img src={images[0]} alt="coffee" onClick={() => setSelectedImage(images[0])} />
                <img src={images[1]} alt="coffee" onClick={() => setSelectedImage(images[1])} />
                <img src={images[2]} alt="coffee" onClick={() => setSelectedImage(images[2])} />
            </Picker>
        </Container>
    );
}

const Container = styled.div`
    height: ${({innerHeight}) => `${innerHeight}px`};
    background: url(https://images.pexels.com/photos/1166646/pexels-photo-1166646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-position: center;
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 4fr 2fr;
    grid-template-areas:
        "info"
        "image"
        "picker"
    ;

    @media(min-width: 768px) {
        grid-template-columns: 6fr 4fr;
        grid-template-rows: 6fr 4fr;
        grid-template-areas:
            "info image"
            "picker picker"
        ;
    }
`;

const Info = styled.div`
    grid-area: info;
    place-self: center;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 12rem;

        h1 {
            text-transform: uppercase;
            text-align: center;
            color: var(--main-color);
            font-size: 3rem;
            margin-bottom: 3rem;
            letter-spacing: 0.25rem;
        }

        button {
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
        }
    }

    @media(min-width: 768px) {
        div {
            margin: 0;
        }
    }
`;

const Image = styled.img`
    grid-area: image;
    place-self: center;
    width: 50%;
    max-width: 25rem;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 1rem;
    opacity: 0.9;
    transform: rotate(10deg);
`;

const Picker = styled.div`
    grid-area: picker;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 10rem;
        aspect-ratio: 1 / 1;
        border-radius: 1rem;
        object-fit: cover;
        opacity: 0.9;
        transition: 300ms;
        margin: 0 1rem;
        cursor: pointer;

        :nth-child(1) {
            transform: translate3d(0, -2rem, 0);
        }

        :nth-child(3) {
            transform: translate3d(0, 2rem, 0);
        }

        :hover {
            transform: rotate(10deg);
        }
    }

    @media(min-width: 768px) {
        img {
            width: 15rem;
            margin: 0 3rem;
        }
    }
`;