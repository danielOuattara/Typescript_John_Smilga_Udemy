import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl ">
          Shopping with us is nature friendly.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
          qui lorem cupidatat commodo.
        </p>

        <Button asChild size="lg" className="mt-10">
          <Link to="/products">Visit Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
