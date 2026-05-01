"use client"

import React from "react"
import Link from "next/link"
import { Button } from "./ui/button"

import { BookOpen, ChatCircleDots } from "phosphor-react"

const Hero = () => {
  return (
    <div className="flex min-h-svh items-center justify-center p-6">
      <div className="flex min-w-0 flex-col gap-4 leading-loose md:items-center md:justify-center md:text-center">
        <p className="font-serif-secondary text-2xl text-muted-foreground italic md:pt-16 md:text-3xl">
          The Essence of Every Beginning
        </p>
        <h1 className="font-serif text-8xl font-bold md:text-9xl">
          Felt at First Glance
        </h1>
        <p className="md:text-md max-w-lg pt-8 text-base text-muted-foreground md:pt-16">
          Undangan digital elegan yang dirancang dengan detail — menyampaikan
          cerita Anda secara sederhana dan berkelas.
        </p>
        <div className="flex items-center gap-4 pt-8 md:gap-8 md:pt-36 md:pb-8">
          <Link href="/">
            <Button
              variant={"outline"}
              className="p-2 md:h-11 md:px-8 md:text-base"
            >
              <div className="flex items-center gap-2">
                <BookOpen />
                <p className="text-base">Lihat Katalog</p>
              </div>
            </Button>
          </Link>
          <Link href="/">
            <Button className="p-2 md:h-11 md:px-8 md:text-base">
              <div className="flex items-center gap-2">
                <ChatCircleDots />
                <p className="text-base">Konsultasi Gratis</p>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
