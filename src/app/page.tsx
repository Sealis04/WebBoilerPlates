'use client'
import { useRef, useState } from "react";
import {ImagePlaceholder, CarouselImagePlaceholder} from "./_components/imageplaceholder";
import { Page } from "./_components/pagedefault";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import BaseImage from "../../public/bgimages/1920 x 1080 base.jpg"
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const topImageRef = useRef<HTMLDivElement| null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  useGSAP(() => {
    const tl  = gsap.timeline({
      scrollTrigger:{
        trigger:topImageRef.current,
        start:'top+=10% top',
        end:'bottom',
        markers:{
          startColor:'green',
          endColor:'red',
          fontSize:'12px'
        },
        scrub:true
      }
    })
    tl.to(navBarRef.current, {
      backgroundColor: "rgb(49, 131, 232)",
    });
  },{});
  return (
    <Page childClassName="mt-0" navBarClassName="bg-transparent" navBarRef={navBarRef}>
      <ImagePlaceholder src={BaseImage.src} imageRef={topImageRef} className="h-[100vh] w-[100%] px-60"/>
      <CarouselImagePlaceholder className="px-60" srcImages={[BaseImage.src, BaseImage.src, BaseImage.src]}/>
      <ImagePlaceholder src={BaseImage.src} className="h-[40vh] px-60"/>
      <ImagePlaceholder src={BaseImage.src} className="h-[40vh] px-60"/>
    </Page>
  );
}
