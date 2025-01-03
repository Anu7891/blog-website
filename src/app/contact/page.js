import React from 'react';
import SEOHead from '../../../html/SEOHead';
import Wrapper from '../../../hoc/wrapper';
import { WEB_LINK } from '../../../lib/config';

// Metadata for the page
export const metadata = {
    title: "Contact Us | Crypto3Blog",
    description: "Get in touch with Crypto3Blog for crypto news, blockchain insights, and support.",
    keywords: "contact, contact us, Crypto3Blog",
    url: WEB_LINK, // Website URL
};
const ContactForm = () => {
    return (
        <Wrapper>
        {/* SEO Head for page metadata */ }
            < SEOHead
            title = { metadata.title }
            description = { metadata.description }
            keywords = { metadata.keywords }
             url = { metadata.url }
            />
        <div className="contactFormContainer">
            <h2 className="formTitle">General Customer Care & Technical Support</h2>
            <p className="formDescription">
                As we address the needs of our customers, email wait times may be longer than usual.
                In an effort to give you the best customer experience possible, we encourage you to
                take advantage of our phones. In most cases, this is the fastest and easiest option.
            </p>
            <form className="form">
                <div className="formGroup">
                    <div className="inputContainer">
                        <label className="label">
                            First Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Enter Your First Name" className="input" />
                    </div>
                    <div className="inputContainer">
                        <label className="label">
                            Last Name <span className="required">*</span>
                        </label>
                        <input type="text" placeholder="Enter Your Last Name" className="input" />
                    </div>
                </div>
                <div className="inputContainer">
                    <label className="label">
                        Email <span className="required">*</span>
                    </label>
                    <input type="email" placeholder="Email Address" className="input" />
                </div>
                <div className="inputContainer">
                    <label className="label">
                        Subject <span className="required">*</span>
                    </label>
                    <input type="text" placeholder="Type Your Subject" className="input" />
                </div>
                <div className="inputContainer">
                    <label className="label">Your Message</label>
                    <textarea placeholder="Your Message" rows="5" className="input"></textarea>
                </div>
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </div>
        </Wrapper>

    );
};

export default ContactForm;
