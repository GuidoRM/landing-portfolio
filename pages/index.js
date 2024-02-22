import Experiences from "@/components/Home/Experiences";
import Hero from "@/components/Home/Hero";
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
        </main>
      </Layout>
    </> 
  );
}
