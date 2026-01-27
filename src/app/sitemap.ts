import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ppdiniz.com.br';

    // Static routes
    const routes = [
        '',
        '/sobre',
        '/servicos',
        '/blog',
        '/contato',
        '/politica-privacidade',
        '/politica-cookies',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
