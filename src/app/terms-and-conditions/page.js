// src/app/terms-and-conditions/page.js
import React from 'react';
import Wrapper from '../../../hoc/wrapper';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/Footer';
import SEOHead from '../../../html/SEOHead';
import { WEB_LINK } from '../../../lib/config';

// Define metadata for the page
export const metadata = {
    title: "Terms and Conditions | Crypto3Blog",
    description: "Read the terms and conditions for using Crypto3Blog.",
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
                <h1 className="text-3xl font-bold mb-4">Terms and Conditions of Use</h1>
                <p className="mb-4">Welcome to Crypto3Blog!</p>
                <p className="mb-4">
                    These Terms and Conditions govern your use of the Crypto3Blog website (the “Website”) and all content, products, and services provided by Crypto3Blog (collectively referred to as the “Service”). By accessing or using the Service, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, then you may not access the Service.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">1. Intellectual Property</h2>
                <p className="mb-4">
                    The Service and its original content, features, and functionality are owned by Crypto3Blog and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">2. User Accounts</h2>
                <p className="mb-4">
                    To access certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information when creating or updating your account. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account or password.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">3. User Content</h2>
                <p className="mb-4">
                    You retain ownership of any content you submit, post, or display on or through the Service (“User Content”). However, by submitting, posting, or displaying User Content, you grant Crypto3Blog a non-exclusive, royalty-free, worldwide, irrevocable, and sub-licensable license to use, reproduce, adapt, distribute, publish, publicly perform, publicly display, and otherwise exploit such User Content.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">4. Prohibited Conduct</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
                    <li>Violate, or encourage others to violate, any right of a third party, including by infringing or misappropriating any third-party intellectual property right.</li>
                    <li>Interfere with security-related features of the Service, including by disabling or circumventing features that prevent or limit use or copying of any content.</li>
                    <li>Modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of the Service.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">5. Limitation of Liability</h2>
                <p className="mb-4">
                    In no event shall Crypto3Blog, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>your access to or use of or inability to access or use the Service.</li>
                    <li>any conduct or content of any third party on the Service.</li>
                    <li>any content obtained from the Service.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">6. Governing Law</h2>
                <p className="mb-4">
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">7. Changes to Terms</h2>
                <p className="mb-4">
                    Crypto3Blog reserves the right, at its sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days’ notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
                <p>
                    If you have any questions or concerns regarding these Terms and Conditions, please contact us.
                </p>
            </div>
        </Wrapper>
    );
};

export default TermsAndConditions;
