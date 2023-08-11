import {z, defineCollection} from 'astro:content';

const jadwalCommunities = defineCollection({
    schema: z.object({
        foto: z.string(),
        logo: z.string(),
        nama: z.string(),
        singkatan: z.string(),
        hari: z.string(),
        detailRuangan: z.string(),
        ruangan: z.string(),
        jam: z.string(),
    })
});

const achievementsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        award: z.string(),
        competition: z.string(),
        imageSrc: z.string(),
        event: z.string(),
        team: z.string(),
        publishDate: z.date(),
    })
});

export const collections = {
    'communities': jadwalCommunities,
    'achievements': achievementsCollection,
};
