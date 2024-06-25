interface CarouselCardProps {
  source: string;
}

const CarouselCard = ({ source }: CarouselCardProps) => {
  return (
    <div className="w-full md:h-[100%] flex justify-center ">
      <img
        src={source}
        alt="fotograf"
        className="md:h-full md:w-full h-96 object-contain"
      />
    </div>
  );
};

export default CarouselCard;
