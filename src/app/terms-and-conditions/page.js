// src/app/terms-and-conditions/page.js
import Wrapper from '../../../hoc/wrapper';
import SEOHead from '../../../html/SEOHead';
import { WEB_LINK } from '../../../lib/config';

// Define metadata for the page
export const metadata = {
    title: "Terms and Conditions | Crypto3Blog",
    description: "Review the terms and conditions for using Crypto3Blog.",
    keywords: "terms, conditions, Crypto3Blog",
    url: WEB_LINK, // Set your website URL here
};

const TermsAndConditions = () => {
    return (
        <Wrapper>
            {/* SEO Head for managing page metadata */}
            <SEOHead
                title={metadata?.title}
                description={metadata?.description}
                keywords={metadata?.keywords}
                url={metadata?.url}
            />

            {/* ------------------------ Terms and Conditions Content ---------------------------- */}
            <div className="px-3 md:px-10 pt-14 mt-14 md:mt-0 pb-6 md:py-8 commonContentBackground">
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
                <p className="mb-4">Using this website is governed by the following terms and conditions.</p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">1. General Information</h2>
                <p className="mb-4">
                    The information on Crypto3Blog should not be regarded as financial, legal, or investment advice.
                    If you need professional advice, you should refer to a professional before taking any step about
                    any piece of information contained in this website.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">2. Use of Content</h2>
                <p className="mb-4">
                    You can use the content for personal purposes only without any intention of monetary profit.
                    Spread the word, but wherever shared, please attribute to Crypto3Blog.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">3. Information Accuracy</h2>
                <p className="mb-4">
                    Though we are trying to be accurate, we are human beings, and sometimes, the rates in the
                    cryptocurrency world change with a wink of the eye. We do not assume any liability for any
                    inaccuracies, omissions, or other decisions that stem from our content.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">4. Intellectual Property</h2>
                <p className="mb-4">
                    All copy of the article, pictures, and graphics are owned by Crypto3Blog. Any other use is unauthorized.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">5. Disclaimer of Liability</h2>
                <p className="mb-4">
                    We disclaim any responsibility for loss, damage, or negative outcome resulting from visiting our
                    website or any other as a result of linking from it. Activities with cryptocurrencies carry risks,
                    and visitors shall be cautious.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">6. Terms Changes</h2>
                <p className="mb-4">
                    Crypto3Blog has the right to alter or modify these terms at any time. Modifications of the terms
                    appear on the page, and further usage of the website by the visitor would mean they have accepted
                    such changes.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">7. Contact Us</h2>
                <p>
                    All queries or information can be sent to the following email: <a href="mailto:cryptoa3new@gmail.com" className="text-blue-500 underline">cryptoa3new@gmail.com</a>.
                </p>
            </div>
        </Wrapper>
    );
};

export default TermsAndConditions;
