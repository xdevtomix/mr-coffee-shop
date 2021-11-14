import styled from "styled-components";

export default function Menu() {
    return (
        <Container data-component="menu" id="menu">

            <Header>
                <h1>OUR MENU</h1>
                <h3>Popular Menu</h3>
            </Header>

            <ItemsContainer>
                <Item>
                    <h3>Our Special Coffee</h3>
                    <div>Lorem ipsum seggsum fassum dessum lite ariel groin checksum dickensum</div>
                    <span>$8.99</span>
                    <i className="bx bx-coffee"></i>
                </Item>
                <Item>
                    <h3>Our Special Coffee</h3>
                    <div>Lorem ipsum seggsum fassum dessum lite ariel groin checksum dickensum</div>
                    <span>$8.99</span>
                    <i className="bx bxs-coffee"></i>
                </Item>
                <Item>
                    <h3>Our Special Coffee</h3>
                    <div>Lorem ipsum seggsum fassum dessum lite ariel groin checksum dickensum</div>
                    <span>$8.99</span>
                    <i className="bx bxs-coffee"></i>
                </Item>
                <Item>
                    <h3>Our Special Coffee</h3>
                    <div>Lorem ipsum seggsum fassum dessum lite ariel groin checksum dickensum</div>
                    <span>$8.99</span>
                    <i className="bx bx-coffee"></i>
                </Item>
                <Item>
                    <h3>Our Special Coffee</h3>
                    <div>Lorem ipsum seggsum fassum dessum lite ariel groin checksum dickensum</div>
                    <span>$8.99</span>
                    <i className="bx bx-coffee"></i>
                </Item>
                <Item>
                    <h3>Our Special Coffee</h3>
                    <div>Lorem ipsum seggsum fassum dessum lite ariel groin checksum dickensum</div>
                    <span>$8.99</span>
                    <i className="bx bxs-coffee"></i>
                </Item>
            </ItemsContainer>
        </Container>
    );
}

const Container = styled.div`
    background: url(https://images.pexels.com/photos/1166646/pexels-photo-1166646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-position: right center;
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

const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 0 2rem;
`;

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    margin: 1rem;
    position: relative;
    color: var(--main-color);
    border: var(--border);
    border-radius: var(--border-radius);
    cursor: pointer;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    div {
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }

    i {
        position: absolute;
        top: 50%;
        left: 0;
        font-size: 4rem;
        transform: translate3d(-50%, -50%, 0);
    }

    @media(min-width: 1024px) {
        width: 75%;
        justify-self: center;
        padding: 2rem;
        margin: 2rem;
    }
`;