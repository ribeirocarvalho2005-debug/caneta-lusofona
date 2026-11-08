import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Card, CardMedia, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { HomePageCarouselImages } from "./Model";

export interface HomePageProps {
    images: HomePageCarouselImages[];
}

export default function ImageCarousel({ images }: HomePageProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    if (images.length === 0) {
        return (
            <Typography className="carousel-empty" color="text.secondary">
                No images found.
            </Typography>
        );
    }

    return (
        <div className="carousel">
            <IconButton
                className="carousel-arrow carousel-arrow--prev"
                aria-label="Previous"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
                className="carousel-arrow carousel-arrow--next"
                aria-label="Next"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            <Swiper
                modules={[Autoplay, Pagination, Keyboard]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                grabCursor
                loop={images.length > 1}
                keyboard={{ enabled: true }}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                pagination={{ clickable: true, dynamicBullets: true }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <Card className="carousel-card" elevation={4}>
                            <CardMedia
                                component="img"
                                image={image.url}
                                alt={image.alt}
                                loading="lazy"
                                className="carousel-image"
                            />
                            {image.alt && (
                                <div className="carousel-caption">
                                    <Typography
                                        className="carousel-caption-text"
                                        variant="subtitle1"
                                        noWrap
                                    >
                                        {image.alt}
                                    </Typography>
                                </div>
                            )}
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}