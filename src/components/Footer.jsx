import styled from "styled-components";

export default function Footer() {
    return (
        <Container data-component="footer">
            <section>
                <h3>Our Branches</h3>
                <ul>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>India</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>China</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>Russia</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>Japan</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>Australia</span>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Quick Links</h3>
                <ul>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>Home</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>About</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>Menu</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>Review</span>
                    </li>
                    <li>
                        <i className="bx bx-right-arrow-alt"></i><span>Book</span>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Contact Info</h3>
                <ul>
                    <li>
                        <i className="bx bx-phone"></i><span>+21 23 32 43 54 65 75 64</span>
                    </li>
                    <li>
                        <i className="bx bxs-phone"></i><span>+21 23 32 43 54 65 75 64</span>
                    </li>
                    <li>
                        <i className="bx bx-envelope"></i><span>somebody@somebody.com.co.uk</span>
                    </li>
                    <li>
                        <i className="bx bxs-map"></i><span>Japan, Info street 10</span>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Follow us</h3>
                <ul>
                    <li>
                        <i className="bx bxl-facebook"></i><span>Facebook</span>
                    </li>
                    <li>
                        <i className="bx bxl-instagram"></i><span>Instagram</span>
                    </li>
                    <li>
                        <i className="bx bxl-twitter"></i><span>Twitter</span>
                    </li>
                    <li>
                        <i className="bx bxl-linkedin"></i><span>Linkedin</span>
                    </li>
                </ul>
            </section>

            <div>Inspired by Mr Web Designer</div>
        </Container>
    );
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 0.2fr;
    gap: 2rem;
    background: rgba(220, 220, 220);
    padding: 10rem 2rem 2rem 2rem;
    color: var(--main-color);

    section {
        padding: 1rem;

        h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        ul {
            list-style-type: none;

            li {
                display: flex;
                align-items: center;
                cursor: pointer;
                margin-bottom: 0.5rem;

                i {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-right: 0.5rem;
                }

                span {
                    font-size: 1rem;
                    font-weight: 600;
                }
            }
        }
    }

    >div {
        grid-column: 1 / 3;
        place-self: center;
        letter-spacing: 0.25rem;
    }

    @media(min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 0.2fr;

        >div {
            grid-column: 1 / 5;
        }
    }
`;