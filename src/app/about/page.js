// src/app/terms-and-conditions/page.js
import Wrapper from '../../../hoc/wrapper';
import SEOHead from '../../../html/SEOHead';
import { WEB_LINK } from '../../../lib/config';

// Metadata for the page
export const metadata = {
    title: "About | Crypto3Blog",
    description: "Discover Crypto3Blog's journey to empower readers with crypto news and blockchain insights.",
    keywords: "about, aboutus, Crypto3Blog",
    url: WEB_LINK, // Website URL
};

const About = () => {
    const content = [
        "This happens to be the fastest-changing pace in all history of humankind. We believe very deeply and truly in the future of Bitcoin, Ethereum, and all the cryptocurrencies, and in the blockchain technology of the metaverse, despite a much awkwardly erratic walk through globalization in the corridor.",
        "It started as a disruptive technology learning hobby by techno-freaks in 2016. We understand the continuously changing nature of money in this new digital era, and we have invested almost wholly, and quite deeply, into bitcoin and blockchain.",
        "All our research brought forth Protocols and Tokens Private Limited in 2019. Based in Ahmedabad, India, The Crypto Times is an open media consultancy that has been established with the intention to educate its readership and the world about this new financial and technological frontier."
    ];

    return (
        <Wrapper>
            {/* SEO Head for page metadata */}
            <SEOHead
                title={metadata.title}
                description={metadata.description}
                keywords={metadata.keywords}
                url={metadata.url}
            />

            {/* Terms and Conditions Content */}
            <div className="px-3 md:px-10 pt-14 mt-14 md:mt-0 pb-6 md:py-8 commonContentBackground" style={{minHeight:"100vh"}}>
                <h1 className="text-3xl font-bold mb-4">Our Story</h1>
                {content.map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                ))}
            </div>
        </Wrapper>
    );
};

export default About;
