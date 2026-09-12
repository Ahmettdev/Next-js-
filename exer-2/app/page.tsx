import Image from "next/image";
import Counter from "./components/Counter";
import { TimePage } from "./time/page";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Counter  />
      <h1 className="text-3xl font-bold">Welcome to Next.js!</h1>
    <TimePage />
    <h2>about page :</h2>
    <a href="/about" className="text-blue-500 hover:underline">Go to About Page</a>
     < AboutPage  />
    </div>
  );
}
