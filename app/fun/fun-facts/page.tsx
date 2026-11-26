import { FavouriteThingsSection } from "@/components/fun/sections/FavouriteThingsSection";
import { TwoTruthsSection } from "@/components/fun/sections/TwoTruthsSection";

export default function FunFactsPage() {
  return (
    <>
      <hr className="my-4 border-0 border-t border-[#444]" />
      <TwoTruthsSection />
      <hr className="my-4 border-0 border-t border-[#444]" />
      <FavouriteThingsSection />
    </>
  );
}
