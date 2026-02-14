import React from 'react';

export default function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-xl overflow-hidden premium-shadow">
            {/* Image skeleton */}
            <div className="aspect-[3/4] bg-gray-200 animate-pulse" />

            {/* Content skeleton */}
            <div className="p-5 space-y-3">
                {/* Title and category */}
                <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>

                {/* Price and rating */}
                <div className="flex items-center justify-between pt-2">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-1/3" />
                    <div className="h-5 bg-gray-200 rounded animate-pulse w-12" />
                </div>
            </div>
        </div>
    );
}
