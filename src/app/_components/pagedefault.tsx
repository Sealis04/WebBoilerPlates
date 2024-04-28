import React, {type MutableRefObject } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import { cn } from "~/lib/utils";

type PageProps = {
  className?:string,
  ref?:MutableRefObject<HTMLDivElement | null>,
  navBarRef?:MutableRefObject<HTMLDivElement | null>,
  children?:React.ReactNode | React.ReactNode [],
  childClassName?:string,
  navBarClassName?:string
}
const Page = ({className, ref, children, childClassName, navBarClassName,navBarRef}:PageProps) =>{
  return (
    <div
      className={cn("flex flex-col gap-2", className)}
      ref={ref}
    >
      <Navbar navRef={navBarRef} className={cn('bg-[#3183e8]',navBarClassName)}/>
      <div className={cn("flex flex-col items-center gap-4 mt-[5vw] min-h-[70vh]",childClassName)}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export {Page}