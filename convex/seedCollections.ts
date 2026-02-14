import { mutation } from "./_generated/server";

export default mutation({
    args: {},
    handler: async (ctx) => {
        // Seed initial collections
        const collections = [
            {
                name: "Life At Daust",
                slug: "life-at-daust",
                description: "Official DAUST merchandise celebrating campus life and community spirit.",
            },
            {
                name: "Daustian x Uniwear",
                slug: "daustian-x-uniwear",
                description: "Exclusive collaboration collection featuring premium university apparel.",
            },
        ];

        for (const collection of collections) {
            // Check if collection already exists
            const existing = await ctx.db
                .query("collections")
                .withIndex("by_slug", (q) => q.eq("slug", collection.slug))
                .first();

            if (!existing) {
                await ctx.db.insert("collections", collection);
            }
        }

        return { success: true, message: "Collections seeded successfully" };
    },
});
