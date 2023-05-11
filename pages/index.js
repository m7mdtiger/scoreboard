import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import NewMatch from "../components/NewMatch/NewMatch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <main>
        <NewMatch />
      </main>
    </div>
  );
}
