/** @format */

import React, { useRef, useState, useEffect } from "react";

import { midBurn, jazzFest, beerfest, tlvMarathon } from "../Media/adds";

import EventCard from "./EventCard";

import "../Styles/main.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Styles must use direct files imports
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Main() {
  // const swiperPrev = useRef();
  // const swiperNext = useRef();

  const [events, setEvents] = useState([]);

  // console.log(events);

  const sections = ["Festival", "Activities", "Cinema", "Outdoor"];

  useEffect(() => {
    const eventsHome = async () => {
      try {
        const res = await fetch(
          // "/api/events/all"
          "https://booking-server.onrender.com/api/events/all"
        );
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.log(err);
      }
    };

    eventsHome();
  }, []);
  return (
    <div className=''>
      <h2 className='title-city-home'>Events in Tel Aviv</h2>
      {/* -------------------------- */}
      {/* ------- Banner Adds------- */}
      {/* -------------------------- */}

      <div className='banner-container'>
        <Swiper
          style={{
            margin: 0,
            padding: "1rem",
          }}
          spaceBetween={50}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          slidesPerView={1.4}
          loop
          // loop
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination, Navigation]}
          className='mySwiper'>
          <SwiperSlide className='slide'>
            <img className='banner-img' src={beerfest} />
          </SwiperSlide>

          <SwiperSlide className='slide'>
            <img className='banner-img' src={jazzFest} />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img className='banner-img' src={tlvMarathon} />
          </SwiperSlide>
          {/* <SwiperSlide className='slide'>Slide 2</SwiperSlide> */}
        </Swiper>
      </div>

      {/* -------------------------- */}
      {/* ------- Sections------- */}
      {/* -------------------------- */}

      <main>
        {sections.map((section, i) => {
          return (
            <section key={i} className='home-section'>
              <h4 className='home-cat'>{section}</h4>
              <Swiper
                style={{
                  margin: "2rem 0",
                  height: "100%",
                  width: "100%",
                }}
                spaceBetween={0}
                cssMode={true}
                // onSlideChange={() => console.log("slide change")}
                // onSwiper={(swiper) => console.log(swiper)}
                // navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1.3,
                    // spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2.3,
                    // spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    // spaceBetween: 50,
                  },
                }}
                // navigation={{
                //   prevEl: swiperPrev.current,
                //   nextEl: swiperNext.current,
                // }}
                // onInit={(swiper) => {
                //   swiper.params.navigation.prevEl = swiperPrev.current;
                //   swiper.params.navigation.nextEl = swiperNext.current;
                //   swiper.navigation.init();
                //   swiper.navigation.update();
                // }}
                // slidesPerView={4.3}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination, Navigation]}
                className='mySwiper'>
                {events
                  .filter((cat) => cat.event_type === section)
                  .map((event) => {
                    return (
                      <SwiperSlide key={event.event_id}>
                        {" "}
                        <EventCard event={event} />
                      </SwiperSlide>
                    );
                  })}
                {/* <SwiperSlide className='slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='slide'>Slide 5</SwiperSlide>
        <SwiperSlide className='slide'>Slide 6</SwiperSlide>
        <SwiperSlide className='slide'>Slide 7</SwiperSlide>
        <SwiperSlide className='slide'>Slide 8</SwiperSlide>
        <SwiperSlide className='slide'>Slide 9</SwiperSlide> */}
                {/* <div className='swiper-nav-prev' ref={swiperPrev}></div>
        <div className='swiper-nav-next' ref={swiperNext}></div> */}
              </Swiper>
            </section>
          );
        })}
      </main>
    </div>
  );
}

// import React from "react";

// function Main() {
//   return (
//     <>
//       <h3>Here will be the events and filtering</h3>

//     </>
//   );
// }

// export default Main;
