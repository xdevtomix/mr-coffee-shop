import styled from "styled-components";

export default function About() {
    return (
        <Container data-component="about" id="about">

            <Header>
                <h1>ABOUT US</h1>
                <h3>Why Choose Us</h3>
            </Header>

            <Content>
                <img src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="people" />
                <Info>
                    <h3>What makes our coffee special</h3>
                    <p>Lorem ipsum ipsum lorem tantus mecus iltimus ipsum ipsum lorem tantus mecus iltimus ipsum ipsum lorem tantus mecus iltimus</p>
                    <button>Read more</button>
                    <div>
                        <button>
                            <i className='bx bx-coffee' ></i>
                            <br />
                            <span>Quality coffee</span>
                        </button>
                        <button>
                            <i className='bx bx-building-house'></i>
                            <br />
                            <span>Our branches</span>
                        </button>
                        <button>
                            <i className='bx bxs-truck'></i>
                            <br />
                            <span>Free delivery</span>
                        </button>
                    </div>
                </Info>
            </Content>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    background: url(https://images.pexels.com/photos/1166646/pexels-photo-1166646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-position: left top;
    background-size: cover;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 5rem 0;
    height: 20%;

    h1 {
        font-size: 6rem;
        color: transparent;
        -webkit-text-stroke: 0.5px var(--main-color);
    }

    h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        color: var(--main-color);
        font-size: 2rem;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 80%;

    img {
        width: 50%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 1rem 6rem 3rem 4rem;
        opacity: 0.9;
    }

    @media(min-width: 1024px) {
        flex-direction: row;

        img {
            width: 30%;
        }
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        color: var(--main-color);
        font-size: 2.5rem;
        padding-bottom: 2rem;
    }

    p {
        color: var(--main-color);
        font-size: 1.5rem;
        padding: 0 1rem;
        text-align: center;
        padding-bottom: 2rem;
    }

    div {
        display: flex;
        align-items: center;

        button {
            margin: 0 2rem;
        }
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
        margin-bottom: 4rem;

        i {
            font-size: 2rem;
            margin-right: 0.5rem;
        }
    }

    @media(min-width: 1024px) {
        width: 50%;
        height: 100%;
        justify-content: center;
    }
`;