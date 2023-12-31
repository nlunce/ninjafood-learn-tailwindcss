import RecipeCardCollection from "@/components/recipe-card-collection/recipe-card-collection";

export default function Home() {
  return (
    <main className="px-16 py-6 bg-gray-100 md:col-span-2">
      <div className="flex justify-center md:justify-end">
        <a
          href="#"
          className="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Log in
        </a>
        <a
          href="#"
          className="btn text-primary ml-2 border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Sign up
        </a>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>

        <RecipeCardCollection />

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
        <div className="mt-8"></div>
        <div className="flex justify-center">
          <div className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner">
            Load more
          </div>
        </div>
      </div>
    </main>
  );
}
