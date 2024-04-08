'use server'

import Footer from "./_components/footer";
import ImagePlaceholder from "./_components/imageplaceholder";
import Navbar from "./_components/navbar";
export default async function Home() {
  //create margin separations (or paddings, idk choose ur poison) to separate navbar from body. 
  return (
    <main className="flex h-[100vh] flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Navbar/>
      <ImagePlaceholder/>
      <Footer/>
    </main>
  );
}
