import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import ScoreBoard from "../components/ScoreBoard/ScoreBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />
      <main>
        <ScoreBoard />
      </main>
    </div>
  );
}
