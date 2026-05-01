"use client"

import React from "react"
import { Card } from "./ui/card"

import { Eye, Lightning, Person, PuzzlePiece } from "phosphor-react"

const values_content: {
  icon: React.ReactNode
  title: string
  description: string
}[] = [
  {
    icon: <Eye size={24} />,
    title: "Premium Visual",
    description:
      "Tampilan yang bersih, refined, dan timeless—memberikan kesan elegan tanpa berlebihan.",
  },
  {
    icon: <Lightning size={24} />,
    title: "Fast & Thoughtful",
    description:
      "Proses yang terarah dan efisien—tanpa mengorbankan kualitas dan detail.",
  },
  {
    icon: <Person size={24} />,
    title: "Personal Approach",
    description:
      "Undangan yang dapat disesuaikan—mencerminkan karakter dan cerita Anda.",
  },
  {
    icon: <PuzzlePiece size={24} />,
    title: "All-in-One Invitation",
    description:
      "RSVP, galeri, lokasi, hingga detail acara tersusun dalam satu pengalaman yang rapi.",
  },
]

const Value = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
      <div className="flex w-full min-w-0 flex-col justify-center gap-4 p-6 py-20 leading-loose md:items-center md:text-center">
        <h3 className="font-serif text-3xl font-semibold">
          Untuk Momen yang Tidak Ingin&nbsp;
          <br className="hidden md:block" />
          Terasa Biasa
        </h3>
        <p className="md:text-md max-w-lg text-base text-muted-foreground">
          Setiap detail dipertimbangkan — untuk menghadirkan undangan yang tidak
          hanya indah, tetapi juga terasa.
        </p>
        <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2">
          {values_content.map((value) => (
            <Card
              key={value.title}
              className="flex flex-col items-center justify-center gap-2 p-6 text-center"
            >
              {value.icon}
              <h4 className="font-serif text-lg font-medium">{value.title}</h4>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Value
