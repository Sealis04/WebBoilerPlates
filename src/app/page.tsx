'use client'
import { useRef } from "react";
import {ImagePlaceholder, CarouselImagePlaceholder} from "./_components/imageplaceholder";
import { Page } from "./_components/pagedefault";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
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
      <ImagePlaceholder src="/bgImages/base.jpg" imageRef={topImageRef} className="h-[100vh] w-[100%] px-60"/>
      <CarouselImagePlaceholder className="px-60" srcImages={["/bgImages/base.jpg","/bgImages/base.jpg","/bgImages/base.jpg"]}/>
      <ImagePlaceholder src="/bgImages/base.jpg" className="h-[40vh] px-60"/>
      <ImagePlaceholder src="/bgImages/base.jpg" className="h-[40vh] px-60"/>
    </Page>
  );
}
