import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import KatalogCard from "./ui/katalog-card"
import { Button } from "./ui/button"

const Katalog = () => {
  return (
    <div className="flex min-h-svh w-full flex-col gap-4 overflow-hidden p-6">
      <p className="font-serif-secondary text-xl text-muted-foreground italic md:pt-16 md:text-2xl">
        Katalog Kami
      </p>
      <h3 className="font-serif text-3xl font-semibold">
        Pilih Desain yang Paling <br className="hidden md:block" />{" "}
        Merepresentasikan Anda
      </h3>
      <p className="md:text-md max-w-lg text-base text-muted-foreground">
        Setiap detail dipertimbangkan—untuk menghadirkan undangan yang tidak
        hanya indah, tetapi juga terasa.
      </p>
      <Tabs defaultValue="semua">
        <TabsList variant={"line"}>
          <TabsTrigger value="semua" className="text-sm">
            Semua
          </TabsTrigger>
          <TabsTrigger value="essence" className="text-sm">
            Essence
          </TabsTrigger>
          <TabsTrigger value="heritage" className="text-sm">
            Heritage
          </TabsTrigger>
          <TabsTrigger value="contemporary" className="text-sm">
            Contemporary
          </TabsTrigger>
          <TabsTrigger value="signature" className="text-sm">
            Signature
          </TabsTrigger>
        </TabsList>
        <TabsContent value="semua">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-3">
            <KatalogCard />
            <KatalogCard />
            <KatalogCard />
          </div>
        </TabsContent>
        <TabsContent value="essence">Change your password here.</TabsContent>
        <TabsContent value="heritage">Change your password here.</TabsContent>
        <TabsContent value="contemporary">
          Change your password here.
        </TabsContent>
        <TabsContent value="signature">Change your password here.</TabsContent>
      </Tabs>
      <Button>Jelajahi Semua Template</Button>
    </div>
  )
}

export default Katalog
