"use client"

import React, { use } from "react"
import { Separator } from "@/components/ui/separator"

import { CheckCircle, Minus } from "phosphor-react"

const Problem = () => {
  return (
    <div className="flex h-1/2 flex-col items-center justify-center lg:flex-row">
      <div className="flex h-1/2 w-full min-w-0 flex-col items-center justify-center gap-4 p-6 py-20 text-center leading-loose lg:w-1/2">
        <h3 className="font-serif text-2xl md:text-3xl">
          Undangan yang biasa saja{""}
          <br className="hidden md:block" />
          tidak mencerminkan momen Anda
        </h3>
        <Separator className="w-1/2" />
        <ul className="list-none text-sm">
          <li className="flex items-center gap-2">
            <Minus />
            <p>Terlihat umum dan tidak personal</p>
          </li>
          <li className="flex items-center gap-2">
            <Minus />
            <p>Proses yang membingungkan</p>
          </li>
          <li className="flex items-center gap-2">
            <Minus />
            <p>Hasil tidak sesuai ekspektasi</p>
          </li>
          <li className="flex items-center gap-2">
            <Minus />
            <p>Kurang elegan dan berkesan</p>
          </li>
        </ul>
      </div>
      <div className="flex h-1/2 w-full min-w-0 flex-col items-center justify-center gap-4 bg-black p-6 py-20 text-center leading-loose text-secondary lg:w-1/2">
        <h3 className="font-serif text-2xl md:text-3xl">
          Dirancang dengan makna&nbsp;
          <br className="hidden md:block" />
          bukan sekadar tampilan
        </h3>
        <Separator />
        <ul className="list-none text-sm">
          <li className="flex items-center gap-2">
            <CheckCircle />
            <p>Desain minimalis & premium</p>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle />
            <p>Proses cepat & terarah</p>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle />
            <p>Tampilan elegan di semua perangkat</p>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle />
            <p>Template atau fully custom</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Problem
