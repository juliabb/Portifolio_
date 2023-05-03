import React, { Children, useRef, useState } from "react";



import style from "./style.module.scss";



export interface Carousel {
  children: React.ReactNode;
}

export const Carousel = ({ children }: Carousel) => {
  return (
    <>
    
     

     {children}
    </>
  );
};
