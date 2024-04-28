'use client'
import { ImagePlaceholder } from "../_components/imageplaceholder";
import { Page } from "../_components/pagedefault";
import BaseImage from "../../../public/bgimages/1920 x 1080 base.jpg"
export default function Home(){
    return(
        <Page>
            <ImagePlaceholder src={BaseImage.src} className="h-[90vh] w-[100%] px-60"/>
        </Page>
    )
}