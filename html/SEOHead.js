import Head from 'next/head';
import en from "../translations/en.json"
import { WEB_LINK } from '../lib/config';

const SEOHead = ({ title, description, url, image, keywords }) => {
    return (
        <Head>
            <title>{title ? title : en.seo.defaultTitle}</title>
            <meta
                name="description"
                content={description ? description : en.seo.defaultDescription}
            />
            <meta name="keywords" content={keywords || en.seo.defaultKeywords} />
            <meta property="og:title" content={title ? title : en.seo.defaultTitle} />
            <meta
                property="og:description"
                content={description ? description : en.seo.defaultDescription}
            />
            <meta property="og:url" content={url ? url : WEB_LINK} />
            <meta property="og:type" content={en.seo.defaultOgType} />
            <meta property="og:image" content={image ? image : en.seo.defaultOgImage} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title ? title : en.seo.defaultTitle} />
            <meta
                name="twitter:description"
                content={description ? description : en.seo.defaultDescription}
            />
            <meta name="twitter:image" content={image ? image : en.seo.defaultTwitterImage} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default SEOHead;
