import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'books' | 'journal'>, itemB: CollectionEntry<'blog' | 'books' | 'journal' >) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                slug: slugify(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
        });
}

export function getPostsByTag(posts: CollectionEntry<'blog' | 'books' | 'journal'>[], tagSlug: string) {
    const filteredPosts: CollectionEntry<'blog' | 'books' | 'journal'>[] = posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug));
    return filteredPosts;
}
