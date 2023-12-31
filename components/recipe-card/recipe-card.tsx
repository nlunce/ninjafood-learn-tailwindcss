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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span>{`${time} mins`}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
