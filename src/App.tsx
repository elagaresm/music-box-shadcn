import Header from "./components/header";
import Main from "./components/main";
import { Sidebar } from "./components/sidebar";
import { ThemeProvider } from "./store/theme-provider";

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="h-full grid grid-cols-[0.3fr_1.7fr] grid-rows-[0.1fr_1.9fr]">
        <Header className="[grid-area:1_/_1_/_2_/_3]" />
        <Sidebar className="border-r h-full" />
        <Main className="flex-1" />
      </div>
    </ThemeProvider>
  );
}
