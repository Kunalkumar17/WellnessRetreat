import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  Retreats,
  Subscribe,
} from "./sections";

const App = () => {
  return (
    <main >
      <Nav />
      <section className='m-2'>
        <Hero />
      </section>
      <section className='padding-x py-10'>
        <Retreats />
      </section>
      <section className='bg-green-100 padding'>
        <CustomerReviews />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
