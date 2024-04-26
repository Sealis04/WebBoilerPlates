'use client'
import { ImagePlaceholder } from "../_components/imageplaceholder";
import { Page } from "../_components/pagedefault";
import Image1 from "public/bgimages/Towa Tokoyam, Suisei Hoshimachi, Minato Aqua [Hololive] [1700x2936].jpg"
export default function Home(){
    return(
        <Page>
            <ImagePlaceholder src={Image1.src} className="h-[50vh] w-[100%] px-60"/>
            <ImagePlaceholder src={Image1.src} className="h-[40vh] w-[100%] px-60"/>
            <ImagePlaceholder src={Image1.src} className="h-[50vh] w-[100%] px-60"/>
        </Page>
    )
}