import { Metadata } from "next";
import { microbes } from "@/data/microbes";
import MicrobeExplorer from "@/components/MicrobeExplorer/MicrobeExplorer";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore skin microbiome data with interactive filters and sorting. View bacteria and fungi with their relative abundance and roles in skin health.",
};

// This is a Server Component by default in Next.js App Router
export default function Home() {
  // Data is fetched on the server
  // In a real app, this could be an async function fetching from a database
  const microbeData = microbes;

  return (
    <>
      {/* Server-rendered metadata for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "Skin Microbiome Database",
            description:
              "Comprehensive database of skin microorganisms including bacteria and fungi",
            url: typeof window !== "undefined" ? window.location.href : "",
            keywords: "microbiome, skin bacteria, fungi, dermatology",
            license: "https://creativecommons.org/licenses/by/4.0/",
            isAccessibleForFree: true,
            creator: {
              "@type": "Organization",
              name: "HelloBiome Tech",
            },
          }),
        }}
      />

      {/* Client component handles interactivity */}
      <MicrobeExplorer initialMicrobes={microbeData} />
    </>
  );
}
