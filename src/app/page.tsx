import Books from "@/components/Books";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex justify-start flex-col bg-gray-800">
      <NavBar />
      <Hero />
      <Features />
      <Categories />
      <Books />
    </main>
  );
}
