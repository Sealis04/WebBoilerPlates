'use client'
import Link from "next/link";
import { forwardRef, type MutableRefObject} from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "~/components/ui/navigation-menu";
import { cn } from "~/lib/utils";

type NavbarProps = {
  className?:string,
  navRef?:MutableRefObject<HTMLDivElement | null>,
  children?:React.ReactNode | React.ReactNode []
}

export default function Navbar({className,navRef}:NavbarProps) {
  return (
    <div ref={navRef} className={cn("fixed top-0 w-full p-4 xl:px-60 bg-sky-200 z-10",className)}>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Sample Comp for Item */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className={className}>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[300px] flex-col gap-3 p-4">
                <li>
                  <Link href="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Link</NavigationMenuLink>
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={className}>Item Two</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[300px] flex-col gap-3 p-4">
                <li>
                  {/* Sample Comp for List Item, uses <a> tag for links */}
                  <ListItem title="Hello test" href="/">
                    Testing List desc
                  </ListItem>
                </li>
                <li>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
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
        <NavigationMenuLink asChild>
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
        </NavigationMenuLink>
      </li>
    );
});

ListItem.displayName = "ListItem";