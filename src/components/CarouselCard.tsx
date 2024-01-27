import React from "react";

type CardProps = {
  header: string;
  image: string;
  description: string;
};

const CarouselCard: React.FC<CardProps> = ({ header, image, description }) => {
  return (
    <div className="mx-16 py-6 bg-purple">
      <div className="card px-4 py-5 pb-8 flex flex-col items-center w-full h-full">
        <div className="flex items-center w-full mb-4">
          <img
            src=""
            alt="icon"
            className="rounded-xl"
            width="300"
            height="250"
          />
        </div>
        <div className="mb-4">
          {/* <h3 centered="True" header={header} maxWidth="14" /> */}
        </div>
        <span className="text-center">{description}</span>
      </div>
    </div>
  );
};

export default CarouselCard;
