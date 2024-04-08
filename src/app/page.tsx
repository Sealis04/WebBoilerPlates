'use server'

import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
export default async function Home() {
  return (
    <main className="flex h-[100vh] flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Navbar/>
      <Footer/>
    </main>
  );
}
