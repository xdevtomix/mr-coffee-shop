import styled from "styled-components";

export default function Booking() {
    return (
        <Container data-component="booking" id="book">
            <Header>
                <h1>BOOKINGS</h1>
                <h3>Reserve A Table</h3>
            </Header>

            <Form>
                <input placeholder="Your name" />
                <input placeholder="Your email" />
                <input placeholder="Your phone number" />
                <textarea placeholder="Your message"></textarea>
                <button>Send</button>
            </Form>
        </Container>
    );
}

const Container = styled.div`
    background: url(https://images.pexels.com/photos/1166646/pexels-photo-1166646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-position: left bottom;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    border: var(--border);
    border-radius: var(--border-radius);
    color: var(--main-color);
    padding: 2rem 1rem;
    margin: 0 1rem;

    @media(min-width: 768px) {
        max-width: 60%;
        margin: 0 auto;
    }

    @media(min-width: 1024px) {
        max-width: 40%;
        margin: 0 auto;
    }

    input {
        border: var(--border);
        border-radius: var(--border-radius);
        margin-bottom: 1rem;
        outline: none;
        background: transparent;
        padding: 1rem;
    }

    textarea {
        border: var(--border);
        border-radius: var(--border-radius);
        margin-bottom: 1rem;
        outline: none;
        background: transparent;
        padding: 1rem;
    }

    button {
        border: var(--border);
        border-radius: var(--border-radius);
        padding: 1rem;
        cursor: pointer;
    }
`;