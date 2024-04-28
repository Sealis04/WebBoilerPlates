import Image from "next/image"
import React, { type RefObject } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel"
import { cn } from "~/lib/utils"
import BaseImage from "../../../public/bgimages/1920 x 1080 base.jpg"
type placeholder = {
    src?:string
    className?:string
    imageRef?: RefObject<HTMLDivElement>
    width?:number
    height?:number
    onClick?:()=>void
}
function ImagePlaceholder({src=BaseImage.src, className,imageRef,onClick}:placeholder){
    return (
        <div ref={imageRef} className={cn(`relative flex flex-col overflow-hidden w-[95%] h-[60vh]`,className)} onClick={onClick}>
            <Image alt="MIA" src={src} fill={true} className={cn("w-full h-auto max-w-[100vw] object-contain object-[50%_50%]")} />
        </div>
    )
}

ImagePlaceholder.displayName = "ImagePlaceholder"
type CarouselImagePlaceholderProps = {
  srcImages: string [];
  className?:string;
}
function CarouselImagePlaceholder({srcImages,className}:CarouselImagePlaceholderProps){
    return (
      <Carousel className={cn("w-[90%]",className)}>
        <CarouselContent>
          {srcImages.map((e,index)=>{
            return (
              <CarouselItem key={index}>
                <ImagePlaceholder className={`w-[100%]`} src={e}/>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    );
}

export {ImagePlaceholder,CarouselImagePlaceholder}