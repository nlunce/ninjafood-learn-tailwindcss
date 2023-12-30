import Image from "next/image";
import stew from "@/assets/stew.jpg";

export default function Home() {
  return (
    <main className="text-yellow-400">
      <div>
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
      </div>

      <header>
        <h2>Recipes</h2>
        <h3>For Ninjas</h3>
      </header>

      <div>
        <h4>Latest Recipes</h4>

        <div>
          <div>
            <Image src={stew} alt="Stew" />
            <div>
              <span>5 Bean Chilli Stew</span>
              <span>Recipe by Mario</span>
            </div>
          </div>
        </div>
        <h4>Most Popular</h4>
        <div></div>
        <div>
          <div>Load more</div>
        </div>
      </div>
    </main>
  );
}
