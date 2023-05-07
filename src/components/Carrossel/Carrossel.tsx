import React from "react";
import Slider from 'react-slick'
import { Card } from "@components/Card/Card";
import style from "./style.module.scss";

export interface CarrosselProps {
  items: Card[];
}

export const Carrossel = ({ items }: CarrosselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <Card {...item} />
        </div>
      ))}
    </Slider>
  );
};
