"use client";
import Link from "next/link";
import { forwardRef, type MutableRefObject } from "react";
import {
  CustNavigationMenuLink ,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";
import { ImagePlaceholder } from "./imageplaceholder";
import { useRouter } from "next/navigation";
type NavbarProps = {
  className?: string;
  navRef?: MutableRefObject<HTMLDivElement | null>;
  children?: React.ReactNode | React.ReactNode[];
};

export default function Navbar({ className, navRef }: NavbarProps) {
  const route = useRouter();
  return (
    <div
      ref={navRef}
      className={cn(
        "fixed top-0 z-10 w-full bg-sky-200 p-4 xl:px-60 flex justify-between max-h-[10vw] min-h-[5vw]",
        className,
      )}
    >
      <ImagePlaceholder src="/bgimages/images.png" className="h-auto w-[10vw] cursor-pointer" onClick={()=>{
        route.push("/")
      }}/>
      <NavigationMenu >
        <NavigationMenuList>
          {/* Sample Comp for Item */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <CustNavigationMenuLink  className={cn(navigationMenuTriggerStyle(),'')}>
                Home
              </CustNavigationMenuLink >
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={className}>
              About us
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[250px] flex-col gap-3 p-4">
                <li className="text-center w-full">
                  <Link className="w-full text-center" href="/BoardOfTrustees" legacyBehavior passHref>
                    <CustNavigationMenuLink 
                      className={cn(navigationMenuTriggerStyle(),'w-full')}
                    >
                      Office & Board of Trustees
                    </CustNavigationMenuLink >
                  </Link>
                </li>
                <li>
                   <Link href="/Committees" legacyBehavior passHref>
                    <CustNavigationMenuLink 
                       className={cn(navigationMenuTriggerStyle(),'w-full')}
                    >
                      Committees
                    </CustNavigationMenuLink >
                  </Link>
                </li>
                <li>
                   <Link href="/PastPresidents" legacyBehavior passHref>
                    <CustNavigationMenuLink 
                      className={cn(navigationMenuTriggerStyle(),'w-full')}
                    >
                      Active Past Presidents
                    </CustNavigationMenuLink >
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> 
          <NavigationMenuItem>
            <NavigationMenuTrigger className={className}>
              Membership
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[320px] flex-col gap-3 p-4">
                <li className="text-center w-full">
                  <Link className="w-full text-center" href="/HowToJoin">
                    <CustNavigationMenuLink 
                      className={cn(navigationMenuTriggerStyle(),'w-full')}
                    >
                      How to Join PCCI-VC
                    </CustNavigationMenuLink >
                  </Link>
                </li>
                <li>
                   <Link href="/PCCIBenefits" legacyBehavior passHref>
                    <CustNavigationMenuLink 
                       className={cn(navigationMenuTriggerStyle(),'w-full')}
                    >
                      Members Benefits
                    </CustNavigationMenuLink >
                  </Link>
                </li>
                <li>
                   <Link href="/MembersDirectory" legacyBehavior passHref>
                    <CustNavigationMenuLink 
                      className={cn(navigationMenuTriggerStyle(),'w-full')}
                    >
                      Members Directory
                    </CustNavigationMenuLink >
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
             <Link href="/ContactUs" legacyBehavior passHref>
              <CustNavigationMenuLink  className={navigationMenuTriggerStyle()}>
                Contact Us
              </CustNavigationMenuLink >
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
             <Link href="/LogIn" legacyBehavior passHref>
              <CustNavigationMenuLink  className={cn(navigationMenuTriggerStyle(),)}>
                Login
              </CustNavigationMenuLink >
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <CustNavigationMenuLink  asChild>
        <a
          {...props}
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
        >
          <div className="mb-2 mt-4 text-lg font-medium">{title}</div>
          <p className="text-muted-foreground text-sm leading-tight">
            {children}
          </p>
        </a>
      </CustNavigationMenuLink >
    </li>
  );
});

ListItem.displayName = "ListItem";
