import About from './components/About/About';
import Header from './components/Header/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-[100vh] bg-cool-white rounded-t-[50px] ">
        <About />
      </main>
    </>
  );
}
