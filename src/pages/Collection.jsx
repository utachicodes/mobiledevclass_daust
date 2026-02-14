import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ProductCard from "../components/ProductCard.jsx";
import Skeleton from "../components/ui/Skeleton.jsx";

export default function Collection() {
  const { slug } = useParams();
  const collection = useQuery(api.collections.getBySlug, { slug });
  const products = useQuery(api.products.list);

  const isLoading = collection === undefined || products === undefined;

  const filteredProducts = products?.filter((p) => p.collection === collection?.name) || [];

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="bg-brand-navy h-64 sm:h-80 relative overflow-hidden flex items-center justify-center">
          <Skeleton className="absolute inset-0 w-full h-full opacity-20" />
          <div className="relative z-10 text-center space-y-4">
            <Skeleton className="h-12 w-64 mx-auto rounded-xl" />
            <Skeleton className="h-6 w-96 mx-auto rounded-lg" />
          </div>
        </div>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] rounded-2xl" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (!collection) {
    return (
      <main className="min-h-screen pt-32 text-center">
        <h1 className="text-3xl font-black text-brand-navy mb-4">Collection Not Found</h1>
        <p className="text-gray-500 mb-8">The collection you are looking for does not exist.</p>
        <a href="/shop" className="text-brand-orange font-bold hover:underline uppercase tracking-widest text-sm">
          Return to Shop
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <div className="relative bg-brand-navy min-h-[40vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {collection.image && (
            <img
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              src={collection.image}
              alt={collection.name}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/20 to-brand-navy/80" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-block px-3 py-1 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
            Featured Collection
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            {collection.name}
          </h1>
          {collection.description && (
            <p className="text-xl text-brand-cream/80 max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-800">
              {collection.description}
            </p>
          )}
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {filteredProducts.map((p, idx) => (
              <div key={p.id} data-aos="fade-up" data-aos-delay={100 * (idx % 4)}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
            <h3 className="text-2xl font-black text-brand-navy mb-2">No products found</h3>
            <p className="text-gray-500">This collection doesn't have any products yet.</p>
          </div>
        )}
      </section>
    </main>
  );
}