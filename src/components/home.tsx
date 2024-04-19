import { CarouselDemo } from "./carousel-demo";
import { TypographyH2, TypographyMuted } from "./typography";

export default function Home(): JSX.Element {
  return (
    <div className="h-full w-full px-4 py-6">
      <div>
        <TypographyH2>
          Populares
          <TypographyMuted className="font-normal my-1">
            Artistas del momento
          </TypographyMuted>
        </TypographyH2>
      </div>

      <div className="flex flex-wrap justify-center">
        <CarouselDemo />
      </div>
    </div>
  );
}
