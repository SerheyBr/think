"use client"; // Обязательно для Swiper
import styles from "./HomeLatestInsights.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper-custom.css";
import SliderCard from "./components/SliderCard";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import SectionHeader from "../../../components/ui/SectionHeader/SectionHeader";

const slides = [
  {
    id: 1,
    title: "2025: The Great Robot Revolution...",
    subtitle: "Published 1 week ago",
    imgSrc: "/images/sectionLatestInsights/slide1.jpg",
  },
  {
    id: 2,
    title:
      "The Great Professional Pretenders: How AI Fraud is Reshaping Business Risk in 2025",
    subtitle: "May 10, 2025",
    imgSrc: "/images/sectionLatestInsights/slide2.jpg",
  },
  {
    id: 3,
    title:
      "Record-Low Unemployment, but Still You Can’t Crack the Job Market?? You’re Not Alone!",
    subtitle: "May 4, 2025",
    imgSrc: "/images/sectionLatestInsights/slide3.jpg",
  },
  {
    id: 4,
    title: "2025: The Great Robot Revolution...",
    subtitle: "Published 1 week ago",
    imgSrc: "/images/sectionLatestInsights/slide1.jpg",
  },
  {
    id: 5,
    title:
      "The Great Professional Pretenders: How AI Fraud is Reshaping Business Risk in 2025",
    subtitle: "May 10, 2025",
    imgSrc: "/images/sectionLatestInsights/slide2.jpg",
  },
  {
    id: 6,
    title:
      "Record-Low Unemployment, but Still You Can’t Crack the Job Market?? You’re Not Alone!",
    subtitle: "May 4, 2025",
    imgSrc: "/images/sectionLatestInsights/slide3.jpg",
  },
  {
    id: 7,
    title: "2025: The Great Robot Revolution...",
    subtitle: "Published 1 week ago",
    imgSrc: "/images/sectionLatestInsights/slide1.jpg",
  },
];

export default function HomeLatestInsights() {
  return (
    <section className={styles.homeLatestInsights}>
      <div className="container">
        <div className={styles.homeLatestInsights__wrapper}>
          {/* <h5 className={styles.homeLatestInsights__title}>Latest Insights</h5>
          <p className={styles.homeLatestInsights__subtitle}>
            Exploring the intersection of AI, business strategy, and human
            potential
          </p> */}
          <SectionHeader
            title={"Latest Insights"}
            subtitle={
              " Exploring the intersection of AI, business strategy, and human potential"
            }
          />
          <div className={styles.homeLatestInsights__slider}>
            <Swiper
              navigation={{
                // 2. Конфигурация стрелок
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
                disabledClass: "swiper-button-disabled",
                //  hiddenClass: "swiper-button-hidden",
              }}
              modules={[Navigation, Pagination]}
              className="mySwiper"
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true, el: ".swiper-pagination-custom" }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {slides.map((el) => {
                return (
                  <SwiperSlide key={el.id}>
                    <SliderCard
                      imgSrc={el.imgSrc}
                      subtitle={el.subtitle}
                      title={el.title}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-button-next-custom">
              <Image
                src={"/images/sectionLatestInsights/arrowRight.svg"}
                width={55}
                height={55}
                alt="left"
              />
            </div>
            <div className="swiper-button-prev-custom">
              <Image
                src={"/images/sectionLatestInsights/arrowLeft.svg"}
                width={55}
                height={55}
                alt="left"
              />
            </div>
            <div className="swiper-pagination-custom"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
