import { Helmet } from "react-helmet-async";

export function SiteMetaData() {
    return (
        <Helmet>

            {/* Basic SEO */}
            <title>Daniel Wijaya | Designer + Developer</title>
            <meta name="description" content="As a designer and frontend developer, I’ve worked with companies and great clients to help them achieve their business goals and reach their full potential." />
            <meta name="author" content="Daniel Wijaya" />
            <meta name="robots" content="index, follow" />

            {/* Open Graph (Social Preview) */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Daniel Wijaya" />
            <meta property="og:title" content="Daniel Wijaya | Designer + Developer" />
            <meta property="og:description" content="As a designer and frontend developer, I’ve worked with companies and great clients to help them achieve their business goals and reach their full potential." />
            <meta property="og:image" content="https://danielwijaya.com/og-preview.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content="https://danielwijaya.com" />

            {/* Twitter Card (Social Preview) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Daniel Wijaya | Designer + Developer" />
            <meta name="twitter:description" content="As a designer and developer, I’ve worked with companies and great clients to help them achieve their business goals and reach their full potential." />
            <meta name="twitter:image" content="https://danielwijaya.com/og-preview.jpg" />
        </Helmet>
    );
}