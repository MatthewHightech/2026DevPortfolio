import Image from "next/image";

const FAVOURITES = [
  {
    label: "Favourite place",
    value: "Sombrio Beach, Vancouver Island, Canada",
    description:
      "Grew up surfing, camping, and backpacking along this stretch of coast. Never a bad day here.",
    image: "/images/fun/surf.JPG",
  },
  {
    label: "Favourite rock",
    value: "El Capitan",
    description:
      "Still haven't climbed past 5ft though...one day.",
    image: "/images/fun/rock.JPG",
    imageFit: "contain" as const,
  },
  {
    label: "Favourite food",
    value: "Fresh Poké Bowls",
    description: "Lead, built and deployed anniversary date night in a public rose garden, ensuring above expected surprise factor while adhering to local regulation and client preferences. Planning to scale 5x this year with anticipated IPO late 2027.",
    image: "/images/fun/food.jpg",
    imageFit: "contain" as const,
  },
] as const;

export function FavouriteThingsSection() {
  return (
    <section className="scroll-mt-2 py-1.5">
      <h2 className="mb-1.5 text-center font-['Comic_Sans_MS','Comic_Sans',cursive] text-[1.35rem] font-bold text-[#ffff66]">
        My Favourite Things
      </h2>
      <p className="mb-3 text-left text-[1.05rem] leading-[1.45] text-[#ffff66]">
        A totally scientific list of things I like.
      </p>
      <ul className="m-0 flex list-none flex-col gap-3 p-0">
        {FAVOURITES.map((item) => {
          const uncropped =
            "imageFit" in item && item.imageFit === "contain";

          return (
            <li
              key={item.label}
              className="border-2 border-[#ffff66] bg-[#1a0033] px-3 py-2.5 text-[1.1rem] leading-relaxed text-[#ffff99]"
            >
              <b className="text-[#ffff66]">{item.label}:</b> {item.value}
              <p className="mt-1.5 mb-0 text-[1rem] leading-relaxed text-[#e6e699]">
                {item.description}
              </p>
              {item.image ? (
                uncropped ? (
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={1344}
                    height={1792}
                    sizes="(max-width: 760px) 90vw, 420px"
                    quality={65}
                    className="mt-2 h-auto w-full border border-[#ffff66]"
                  />
                ) : (
                  <div className="relative mt-2 aspect-[3/2] w-full overflow-hidden border border-[#ffff66]">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 760px) 90vw, 420px"
                      quality={65}
                      className="object-cover"
                    />
                  </div>
                )
              ) : null}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
