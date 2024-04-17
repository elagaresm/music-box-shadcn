import { ModeToggle } from "./dark-mode-toggle";
import { CommandDialogDemo } from "./search";
import { TypographyH3, TypographySmall } from "./typography";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AreaChart, BadgeDollarSign } from "lucide-react";

export default function Header(): JSX.Element {
  return (
    <header className="border-b w-full py-2 px-4 flex justify-between items-center">
      <TypographyH3 className="flex items-center gap-3">
        Music Box <Badge>Pro</Badge>
      </TypographyH3>

      <div className="flex gap-3">
        <CommandDialogDemo />
        <Icons />
      </div>
    </header>
  );
}

function Icons() {
  return (
    <>
      <Button className="flex gap-2">
        <TypographySmall>88</TypographySmall>
        <BadgeDollarSign />
      </Button>
      <ModeToggle />
      <Button variant="ghost" size="icon">
        <AreaChart />
      </Button>
    </>
  );
}
