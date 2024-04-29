'use client'
import { ImagePlaceholder } from "../_components/imageplaceholder";
import { Page } from "../_components/pagedefault";
export default function Home(){
    return(
        <Page>
            <ImagePlaceholder src="/WebBoilerPlates/bgimages/base.jpg" className="h-[50vh] w-[100%] px-60"/>
            <ImagePlaceholder src="/WebBoilerPlates/bgimages/base.jpg" className="h-[40vh] w-[100%] px-60"/>
            <ImagePlaceholder src="/WebBoilerPlates/bgimages/base.jpg" className="h-[50vh] w-[100%] px-60"/>
        </Page>
    )
}