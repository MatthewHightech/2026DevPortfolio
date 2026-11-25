import { FavouriteThingsSection } from "@/components/fun/sections/FavouriteThingsSection";
import { TwoTruthsSection } from "@/components/fun/sections/TwoTruthsSection";

export default function FunFactsPage() {
  return (
    <>
      <h1 className="mb-1.5 text-center font-['Comic_Sans_MS','Comic_Sans',cursive] text-[1.35rem] font-bold text-[#ffff66]">
        Fun Facts
      </h1>
      <p className="mx-auto mb-[0.65rem] max-w-[34rem] text-center text-[0.95rem] leading-[1.45] text-[#ffff66]">
        Two truths and a lie, plus a list of my favourite things.
      </p>
      <hr className="my-4 border-0 border-t border-[#444]" />
      <TwoTruthsSection />
      <hr className="my-4 border-0 border-t border-[#444]" />
      <FavouriteThingsSection />
    </>
  );
}
