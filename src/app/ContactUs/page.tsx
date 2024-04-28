'use client'
import { ImagePlaceholder } from "../_components/imageplaceholder";
import { Page } from "../_components/pagedefault";
import BaseImage from "../../../public/bgimages/1920 x 1080 base.jpg"
import { Label } from "~/components/ui/label";
export default function Home(){
    return (
      <Page>
        <div className="flex flex-col gap-4 items-center max-w-[90vw]">
          <Label className="text-7xl">Contact Us </Label>
          <Label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
            sapien, dictum nec laoreet sed, convallis semper mi. Sed elementum
            auctor sodales. Duis id lorem vel magna pretium porta. Pellentesque
            fermentum, tellus facilisis rhoncus aliquet, mauris orci semper mi,
            quis lacinia lectus nisi ac arcu. Phasellus eleifend lobortis dolor
            mollis ultrices. Etiam rhoncus enim massa, ac volutpat quam interdum
            sit amet. Nullam ac ipsum aliquam, consequat est quis, rhoncus eros.
            Proin nulla dolor, fermentum tincidunt nisi sit amet, venenatis
            efficitur erat. Nulla tempor lorem consequat dolor scelerisque, eu
            interdum lorem consectetur.
          </Label>
        </div>
        <ImagePlaceholder
          src={BaseImage.src}
          className="h-[90vh] w-[100%] px-60"
        />
      </Page>
    );
}