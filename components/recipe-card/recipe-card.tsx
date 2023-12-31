import Image, { StaticImageData } from "next/image";

import classes from "./recipe-card.module.css";

interface RecipeCardProps {
  title: string;
  creator: string;
  time: number;
  image: StaticImageData;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  creator,
  time,
  image,
}) => {
  return (
    <div className={classes.card}>
      <Image
        src={image}
        alt={title}
        className="w-full h-32 sm:h-48 object-cover"
      />
      <div className="m-4">
        <span className="font-bold">{title}</span>
        <span className="block text-gray-500 text-sm">{`Recipe by ${creator}`}</span>
      </div>
      <div className={classes.badge}>
        <Image
          src="/clock.svg"
          alt="Clock Icon"
          width={20}
          height={20}
          className="inline-block"
        />

        <span className="pl-1">{`${time} mins`}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
