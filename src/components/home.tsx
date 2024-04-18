import { cn } from "@/lib/utils";
import { TypographyH2, TypographyMuted } from "./typography";

export default function Home({
  className,
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={cn("h-full px-4 py-6", className)}>
      <div className="h-full">
        <TypographyH2>
          Populares
          <TypographyMuted className="font-normal">Artistas populares del momento</TypographyMuted>
        </TypographyH2>
      </div>
    </div>
  );
}
