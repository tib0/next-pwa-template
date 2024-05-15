import Footer from "@/components/footer";
import Header from "@/components/header";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <div id="home" className="min-h-screen border-b-2 border-b-primary">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
