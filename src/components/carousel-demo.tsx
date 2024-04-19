import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const artists = [
  { name: "Yandel" },
  { name: "Frank" },
  { name: "Drake" },
  { name: "SZA" },
  { name: "Wisin" },
];

export function CarouselDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full max-w-[80%] mt-4"
      >
        <CarouselContent>
          {artists.map((artist, index) => (
            <CarouselItem key={index} className="pl-2 basis-1/3">
              <div className="p-2">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-xs font-semibold">{artist.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-end gap-[90px] basis-full px-10 text-sm">
        <span>{artists[current]?.name}</span>
        <span>{artists[current + 1]?.name}</span>
        <span>{artists[current + 2]?.name}</span>
      </div>
    </>
  );
}
