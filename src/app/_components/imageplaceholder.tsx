import Image from "next/image"
import React, { type RefObject } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel"
import { cn } from "~/lib/utils"
import MangaImage2 from "public/bgimages/Manga Girl.jpg"
type placeholder = {
    src?:string
    className?:string
    imageRef?: RefObject<HTMLDivElement>
    width?:number
    height?:number
}
function ImagePlaceholder({src=MangaImage2.src, className,imageRef}:placeholder){
    return (
        <div ref={imageRef} className={cn(`relative flex flex-col overflow-hidden w-[95%] h-[60vh]`,className)}>
            <Image alt="MIA" src={src} fill={true} objectPosition="50% 50%" objectFit="contain" className={cn("w-full h-auto max-w-[100vw]")} />
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