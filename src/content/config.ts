import { defineCollection, z } from 'astro:content';

const blogConstant = 'blog';
const booksConstant = 'books';
const journalConstant = 'journal';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const blog = defineCollection({
        schema: z.object({
        title: z.string(),
        field: z.string().default(blogConstant),
       description: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        seo: seoSchema.optional()
    })
});

const pages = defineCollection({
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        field: z.string().default(booksConstant),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema.optional(),
        tags: z.array(z.string()).optional(),
        
      
    })
});
const journal = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        field: z.string().default(journalConstant),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema.optional(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string()).optional()
    })
});

export const collections = { blog, pages, books, journal };
