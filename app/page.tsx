import About from "@/components/About";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 pb-6">
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <Counter />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
