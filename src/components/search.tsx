import { useState, useEffect } from "react";

import { AudioLines, Search, User } from "lucide-react";

const artists = ["Dua Lipa", "The Weeknd", "Ariana Grande", "Drake"];
const songs = ["Levitating", "Save Your Tears", "Positions", "What's Next"];

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandDialogDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button onClick={() => setOpen(true)}>
        <Search />
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Busca por cancion o artista..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Canciones">
            {songs.map((song) => (
              <CommandItem key={song}>
                <AudioLines className="mr-2 h-4 w-4" />
                <span>{song}</span>
                <CommandShortcut>⌘{song[0]}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Artistas">
            {artists.map((artist) => (
              <CommandItem key={artist}>
                <User className="mr-2 h-4 w-4" />
                <span>{artist}</span>
                <CommandShortcut>⌘{artist[0]}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
