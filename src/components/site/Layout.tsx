import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingCTAs } from "./FloatingCTAs";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCTAs />
    </div>
  );
}
