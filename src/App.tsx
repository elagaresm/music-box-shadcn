import Header from "./components/header";
import Main from "./components/main";
import { ThemeProvider } from "./store/theme-provider";

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <div className="">
        <Header />
        <Main />
      </div>
    </ThemeProvider>
  );
}
