"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { ArrowUpRight, List, InstagramLogo, WhatsappLogo } from "phosphor-react"

const components: { title: string; href: string }[] = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Katalog",
    href: "/katalog",
  },
  {
    title: "Paket",
    href: "/paket",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
]

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex h-13 items-center justify-between border-b border-gray-200 bg-white/60 px-6 backdrop-blur-md">
      {/* Mobile Nav */}
      <div className="flex w-full max-w-svw items-center justify-between md:hidden">
        <Image
          src="/images/tattva.svg"
          width={97}
          height={24}
          alt="Picture of the author"
        />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"}>
              <List />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>This action cannot be undone.</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex md:w-full md:flex-row md:items-center">
        <div className="flex basis-2/5 items-center justify-start">
          <NavigationMenu>
            <NavigationMenuList>
              {components.map((component) => (
                <NavigationMenuItem key={component.title}>
                  <NavigationMenuLink asChild>
                    <Link href={component.href}>{component.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex basis-1/5 items-center justify-center">
          <Image
            src="/images/tattva.svg"
            width={97}
            height={24}
            alt="Picture of the author"
          />
        </div>
        <div className="flex basis-2/5 items-center justify-end">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem key="instagram">
                <NavigationMenuLink asChild>
                  <Link href="/">
                    <div className="flex items-center gap-1">
                      <InstagramLogo width={14} height={14} />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem key="wa">
                <NavigationMenuLink asChild>
                  <Link href="/">
                    <div className="flex items-center gap-1">
                      <WhatsappLogo width={14} height={14} />
                      <p>Konsultasi Gratis</p>
                      <ArrowUpRight width={14} height={14} />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}

export default Navbar
