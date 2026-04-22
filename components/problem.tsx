"use client"

import React, { use } from "react"

import { Minus } from "phosphor-react"

const Problem = () => {
  return (
    <div className="flex h-1/2 items-center justify-center">
      <div className="flex h-1/2 w-1/2 min-w-0 flex-col gap-4 p-6 py-24 leading-loose md:items-center md:justify-center md:text-center">
        <h3 className="font-serif text-3xl">
          Undangan yang biasa saja
          <br />
          tidak mencerminkan momen Anda
        </h3>
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
      <div className="flex h-1/2 w-1/2 min-w-0 flex-col gap-4 bg-black p-6 py-24 leading-loose text-secondary md:items-center md:justify-center md:text-center">
        <h3 className="font-serif text-3xl">
          Undangan yang biasa saja
          <br />
          tidak mencerminkan momen Anda
        </h3>
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
    </div>
  )
}

export default Problem
