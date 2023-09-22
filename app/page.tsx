import About from './components/About/About';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-[100vh] bg-cool-white rounded-t-[50px] max-lg:rounded-t-3xl max-md:rounded-t-2xl">
        <About />
        <Skills />
        <div className="h-screen"></div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </main>
    </>
  );
}
