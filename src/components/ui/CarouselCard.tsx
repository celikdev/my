interface CarouselCardProps {
  source: string;
}

const CarouselCard = ({ source }: CarouselCardProps) => {
  return (
    <div className="w-full h-[100%] flex justify-center ">
      <img
        src={source}
        alt="fotograf"
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default CarouselCard;
