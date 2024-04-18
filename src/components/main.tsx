import { cn } from "@/lib/utils";

export default function Main({
  className,
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={cn("", className)}>
      <p>Hello world!</p>
    </div>
  );
}
