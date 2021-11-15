import styled from "styled-components";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Review() {
    return (
        <Container data-component="review" id="review">

            <Header>
                <h1>REVIEW</h1>
                <h3>What They Say</h3>
            </Header>

            <Reviews>
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40
                        },
                        1366: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                >
                    <SwiperSlide>
                        <ReviewItem>
                            <i className='bx bxs-quote-left'></i>
                            <img src="https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                            <section>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </section>
                            <div>
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                            </div>
                            <h3>John McCanye</h3>
                            <span>Happy client</span>
                            <i className='bx bxs-quote-right'></i>
                        </ReviewItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewItem>
                            <i className='bx bxs-quote-left'></i>
                            <img src="https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                            <section>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </section>
                            <div>
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                            </div>
                            <h3>John McCanye</h3>
                            <span>Happy client</span>
                            <i className='bx bxs-quote-right'></i>
                        </ReviewItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewItem>
                            <i className='bx bxs-quote-left'></i>
                            <img src="https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                            <section>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </section>
                            <div>
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                            </div>
                            <h3>John McCanye</h3>
                            <span>Happy client</span>
                            <i className='bx bxs-quote-right'></i>
                        </ReviewItem>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewItem>
                            <i className='bx bxs-quote-left'></i>
                            <img src="https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
                            <section>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </section>
                            <div>
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                                lorem ipsum facsum gecsum ipere gangesz padohaj jeri facsum gecsum ipere gangesz padohaj jeri
                            </div>
                            <h3>John McCanye</h3>
                            <span>Happy client</span>
                            <i className='bx bxs-quote-right'></i>
                        </ReviewItem>
                    </SwiperSlide>
                </Swiper>
            </Reviews>
        </Container>
    );
}

const Container = styled.div`
    background: url(https://images.pexels.com/photos/1166646/pexels-photo-1166646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
    background-position: right bottom;
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

const Reviews = styled.div`

`;

const ReviewItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: var(--border);
    border-radius: var(--border-radius);
    color: var(--main-color);
    padding: 4rem 2rem;
    margin: 1rem;
    position: relative;

    .bxs-quote-left {
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        font-size: 4rem;
        opacity: 0.9;
    }

    img {
        width: 4rem;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    section {
        margin-bottom: 1rem;

        i {
            font-size: 1.5rem;
        }
    }

    div {
        font-size: 1rem;
        line-height: 1.5rem;
        margin-bottom: 1rem;
    }

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    span {
        font-size: 1.2rem;
    }

    .bxs-quote-right {
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
        font-size: 4rem;
        opacity: 0.9;
    }
`;