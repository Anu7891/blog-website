import Wrapper from "../../../hoc/wrapper";
import SEOHead from "../../../html/SEOHead";

export const metadata = {
    title: "Privacy Policy | Crypto3Blog",
    description: "Learn about the privacy practices and data protection policies of Crypto3Blog, including Google AdSense integration and your rights.",
    keywords: "privacy policy, crypto blog, Google AdSense, data protection, user information",
};

const PrivacyPolicy = () => {
    return (
        <Wrapper>
            <SEOHead
                title={metadata.title}
                description={metadata.description}
                keywords={metadata.keywords}
            />
            <div className="px-3 md:px-10 pt-14 mt-14 md:mt-0 pb-6 md:py-8 commonContentBackground">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="mb-4">
                    Your privacy is a top concern of Crypto3Blog ("we," "our," or "us"),
                    located at <a href="https://crypto3blog.com/" className="text-blue-600 underline">https://crypto3blog.com/</a>.
                    This Privacy Notice describes how we collect, use, and protect information about you when you visit our site, especially in reference to relevant provisions of Google's AdSense policies.
                </p>

                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                <p className="mb-4">
                    We collect personal information directly provided by users, such as name, email address, and postal address, through forms on our website.
                    We only collect personal information when it is voluntarily provided by you, such as through contact forms or newsletter subscriptions.
                </p>

                <h3 className="text-xl font-semibold mb-2">Non-Personal Information</h3>
                <p className="mb-4">
                    We use cookies and other tracking technologies to collect non-personal information for improving user experience, analyzing site performance, and delivering targeted advertising. This includes log files containing IP addresses, browser types, and timestamps.
                </p>

                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Improving site functionality and user experience.</li>
                    <li>Providing targeted advertising through Google AdSense.</li>
                    <li>Analyzing trends and site performance.</li>
                </ul>

                <h2 className="text-2xl font-semibold mb-4">3. Google AdSense and Cookies</h2>
                <p className="mb-4">
                    We use Google AdSense to display advertisements. Google and its partners may use cookies to serve ads based on your activities on this site and others. You can opt out of personalized advertising by visiting
                    <a href="http://www.aboutads.info" className="text-blue-600 underline"> www.aboutads.info</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                <p className="mb-4">
                    We use standard methods to secure your data but cannot guarantee absolute security due to the nature of the internet.
                </p>

                <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                <p className="mb-4">
                    You have the right to access and amend your personal information. To exercise these rights, contact us at <a href="mailto:cryptoa3new@gmail.com" className="text-blue-600 underline">cryptoa3new@gmail.com</a>.
                </p>

                <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
                <p className="mb-4">
                    We may update this Privacy Policy periodically. Please review this page regularly for updates.
                </p>

                <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                <p className="mb-4">
                    For questions about this Privacy Policy, contact us at:
                </p>
                <address className="mb-4">
                    Crypto3Blog<br />
                    Email: <a href="mailto:cryptoa3new@gmail.com" className="text-blue-600 underline">cryptoa3new@gmail.com</a>
                </address>
            </div>
        </Wrapper>
    );
};

export default PrivacyPolicy;
