import { Helmet } from "react-helmet-async";

export const OG_TYPES = [
    "website",
    "article",
    "product",
    "profile",
] as const;
export type OGType = typeof OG_TYPES[number];

interface SiteMetaDataProps {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    type?: OGType;
    isIndexable?: boolean;
}

export function SiteMetaData({
    title = "Daniel Wijaya | Designer + Developer",
    description = "I'm Daniel, a designer and developer focused on creating user-friendly experiences and building robust, efficient systems",
    url = "https://danielwijaya.com",
    image = "https://danielwijaya.com/og-preview.png",
    type = "website",
    isIndexable = true,
}: SiteMetaDataProps) {
    const robotsValue = isIndexable ? "index, follow" : "noindex, nofollow";

    return (
        <Helmet>

            {/* Basic SEO */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robotsValue} />

            {/* Open Graph (Social Preview) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={url} />

            {/* Twitter Card (Social Preview) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* 🔹 Canonical */}
            <link rel="canonical" href={url} />

        </Helmet>
    );
}