'use client'
import { createRef, useRef } from "react";
import {ImagePlaceholder, CarouselImagePlaceholder} from "./_components/imageplaceholder";
import { Page } from "./_components/pagedefault";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image1 from "public/bgimages/Towa Tokoyam, Suisei Hoshimachi, Minato Aqua [Hololive] [1700x2936].jpg"
import Image2 from "public/bgimages/Twitter.jpg"
import Image3 from "public/bgimages/images.png"
export default function Home() {
  //create margin separations (or paddings, idk choose ur poison) to separate navbar from body.
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
    tl.to(navBarRef.current,{
      backgroundColor:'rgb(49, 131, 232)',

    })
  },{});
  return (
    <Page childClassName="mt-0" navBarClassName="bg-transparent" navBarRef={navBarRef}>
      <ImagePlaceholder src={Image1.src} imageRef={topImageRef} className="h-[100vh] w-[100%] px-60"/>
      <CarouselImagePlaceholder className="px-60" srcImages={[Image1.src, Image2.src, Image3.src]}/>
      <ImagePlaceholder src={Image3.src} className="h-[40vh] px-60"/>
      <ImagePlaceholder src={Image2.src} className="h-[40vh] px-60"/>
    </Page>
  );
}
