import React from "react"
import Image from "next/image"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./button"

const KatalogCard = () => {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle>
          <Image
            src="/images/design1.jpg"
            width={190}
            height={190}
            alt="Picture of the design"
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h4 className="font-serif text-sm font-bold">Aera</h4>
        <p className="text-sm text-muted-foreground">Rp 300.000</p>
        <Button className="mt-2 w-full">Lihat Detail</Button>
      </CardContent>
    </Card>
  )
}

export default KatalogCard
