import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AudioLines, Disc, SearchIcon } from "lucide-react";

const queue = [
  "Levitating",
  "Save Your Tears",
  "Positions",
  "What's Next",
  "Blinding Lights",
];

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Biblioteca
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <circle cx="8" cy="18" r="4" />
                <path d="M12 18V2l7 4" />
              </svg>
              Canciones
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle cx="17" cy="7" r="5" />
              </svg>
              Artistas
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="m16 6 4 14" />
                <path d="M12 6v14" />
                <path d="M8 8v12" />
                <path d="M4 4v16" />
              </svg>
              Álbumes
            </Button>
          </div>
        </div>

        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Cola
          </h2>

          {/* Scroll Area */}

          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {queue.map((song, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <AudioLines />
                  {song}
                </Button>
              ))}

              {queue.map((song, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <AudioLines />
                  {song}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
