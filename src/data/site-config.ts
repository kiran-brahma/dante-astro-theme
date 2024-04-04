export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Kiran Brahma',
    subtitle: 'Sharing my journey, insights and tools',
    description: 'Sharing business insights from my my entreprenurial journey',
    image: {
        src: '/SiteP.png',
        alt: 'Kiran Brahma Blog'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Books',
            href: '/books'
        },
        
        {
            text: 'Business Learnings',
            href: '/journal'
        },
        {
            text: 'Topics',
            href: '/tags'
        },
        {
            text: 'Photos',
            href: 'https://photos.kiranbrahma.com'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        
        {
            text: 'Terms',
            href: '/terms'
        },
        {
            text: 'Work',
            href: 'https://knighthood.co'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/kbrahma/'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/the.brahma/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/the_brahmaa'
        }
    ],
    hero: {
        title: 'Hey there! I am Kiran Brahma 👋',
        text: "<b>Feeling lost in all that starup and funding talk?</b> Business blogs are full of it, but what about us, the small business owners already in the game?. <p>Join me as I share my journey and the tools I use to keep my small business thriving.</p>",
        image: {
            src: 'https://res.cloudinary.com/dzmnxs9lz/image/upload/v1712225655/blog/Profile_1200x800_aj58l2.webp',
            alt: 'Kiran Brahma'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to my Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: 'https://script.google.com/macros/s/AKfycbzD6_AMOVORDwte0rfaoaI0N5ZZNQl-whKTXHlDXFUhD7xo24zyffQg0Qo-7Ef9mCLg/exec'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
