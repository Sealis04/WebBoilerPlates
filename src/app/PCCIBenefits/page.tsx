'use client'
import { ImagePlaceholder } from "../_components/imageplaceholder";
import { Page } from "../_components/pagedefault";
export default function Home(){
    return(
        <Page>
            <ImagePlaceholder src="/bgImages/base.jpg" className="h-[90vh] w-[100%] px-60"/>
        </Page>
    )
}