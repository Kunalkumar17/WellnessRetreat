
import { thumbnailBackground } from "../assets/images";

const Hero = () => {

  return (
    <section
      id='home'
      className='flex xl:flex-row xl:justify-center flex-col gap-10 border-black border-2 rounded-3xl max-lg:items-center bg-green-100'
    >
      <div className='px-10 mt-16 lg:mb-16 max-lg:justify-center'>
        <img
          src={thumbnailBackground}
          alt='Background-image'
          width={500}
          height={600}
          className='rounded-3xl'
        />
      </div>
      
      <div className='flex flex-col lg:pt-10 '>

        <h1 className='mt-4 font-palanquin text-4xl font-bold max-sm:px-6'>
          <span className='pr-10'>
              Welcome to Serenity
          </span>
          <br />
          <span className='text-green-600 inline-block'>Wellness</span> Retreat
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 sm:max-w-2xl max-sm:px-6'>
          Escape the hustle and bustle of everyday life and embark on a journey of rejuvenation at Serenity Wellness Retreat.   Nestled in the heart of nature, our retreat offers a sanctuary for relaxation, healing, and personal growth.
          At Serenity, you'll find a harmonious blend of wellness activities designed to nurture your mind, body, and spirit. Enjoy yoga and meditation sessions, therapeutic massages, and nutritious gourmet meals crafted from fresh, local ingredients.
        </p>
      </div>
    </section>
  );
};

export default Hero;
