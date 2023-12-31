import RecipeCard from "../recipe-card/recipe-card";

import stew from "@/assets/stew.jpg";
import noodles from "@/assets/noodles.jpg";
import curry from "@/assets/curry.jpg";

interface RecipeCardCollectionProps {}

const RecipeCardCollection: React.FC<RecipeCardCollectionProps> = ({}) => {
  return (
    <div className="mt-8 grid lg:grid-cols-3 gap-10">
      <RecipeCard
        title="5 Bean Chilli Stew"
        creator="Mario"
        time={25}
        image={stew}
      />
      <RecipeCard
        title="Veg Noodles"
        creator="Mario"
        time={25}
        image={noodles}
      />
      <RecipeCard title="Tofu Curry" creator="Mario" time={25} image={curry} />
    </div>
  );
};

export default RecipeCardCollection;
