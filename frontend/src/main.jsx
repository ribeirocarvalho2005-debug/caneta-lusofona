import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

import Header from "./Header.tsx";
import ImageCarousel from "./HomeCarousel.tsx";
import HomeArticles from "./HomeArticles.tsx";

const theme = createTheme();

const images = [
    { id: 1, url: "/img/photo1.jpg", alt: "First photo" },
    { id: 2, url: "/img/photo2.jpg", alt: "Second photo" },
    { id: 3, url: "/img/photo3.jpg", alt: "Third photo" },
    { id: 4, url: "/img/photo4.jpg", alt: "Fourth photo" },
];

const articles = [
    {
        id: "article-1",
        image: "/img/photo1.jpg",
        imageAlt: "Students taking part in an academic activity",
        title: "Academic life built every day",
        date: "Nov 8, 2026",
        category: "Academia",
    },
    {
        id: "article-2",
        image: "/img/photo2.jpg",
        imageAlt: "Athletes during a competition",
        title: "University sports bring the community together again",
        date: "Nov 5, 2026",
        category: "Sports",
    },
    {
        id: "article-3",
        image: "/img/photo3.jpg",
        imageAlt: "Talk with several participants",
        title: "Ideas that bring people together and shape the future",
        date: "Nov 2, 2026",
        category: "Culture",
    },
];

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <Header />
            <ImageCarousel images={images}/>
            <HomeArticles articles={articles} />
        </ThemeProvider>
    </StrictMode>
);