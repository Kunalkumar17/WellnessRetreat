const RetreatCard = ({ image, title , description ,price ,date , location}) => {
  return (
    <div className='flex h-[300px]  sm:w-[300px] sm:min-w-[380px] rounded-[20px] ease-in px-4 py-4 gap-4 cursor-pointer bg-green-50 hover:shadow-3xl'>
        <div className="flex w-full h-full">
          <img src={image} alt={"image"} width={200} height={100}  className=" rounded-lg"/>
        </div>
        <div >
        <h3 className='font-palanquin text-xl leading-normal font-bold'>
          {title}
        </h3>
        <p className='mt-3 font-montserrat text-md leading-normal text-slate-gray'>
          {description}
        </p>
        <p className='mt-3 font-montserrat text-md leading-normal text-slate-gray'>
          <b>Date:</b> {date}
        </p>
        <p className='mt-3 font-montserrat text-md leading-normal text-slate-gray'>
          <b>Location:</b> {location}
          </p>
        <p className='mt-3 font-montserrat text-md leading-normal text-slate-gray'>
          <b>Price: ${price}</b>
        </p>
        </div>
    </div>
  );
};

export default RetreatCard;
