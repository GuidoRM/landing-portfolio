import Comments from "@/components/Home/Comments";
import Experiences from "@/components/Home/Experiences";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Layout from "@/components/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout title={"Home"} description={"Página de inicio"}>
        <main>
          <Hero />
          <Experiences />
          <Projects />
          <Comments />
        </main>
      </Layout>
    </> 
  );
}
