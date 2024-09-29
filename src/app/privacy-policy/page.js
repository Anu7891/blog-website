import React from "react";
import Wrapper from "../../../hoc/wrapper";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/Footer";

const PrivacyPolicy = () => {
  return (

    <Wrapper>

        <Header/>

        {/* ------------------------- Privacy Policy Content ------------------------------------- */}
          <div className="container mx-auto px-4 pt-14 mt-14 md:mt-0 pb-6 md:py-8">
              <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
              <p className="mb-4">
                  This Privacy Policy discloses the privacy practices for the
                  website.crypto3blog.com website (the “Website”). Crypto3Blog, the
                  provider of the Website (referred to as “Crypto3Blog” “us” or “we”), is
                  committed to protecting your privacy online. Please read the following
                  to learn what information we collect from you (the “User” or the “End
                  User”) and how we use that information. If you have any questions about
                  our privacy policy, please email us.
              </p>
              <p className="font-bold mb-4">
                  PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY ACCESSING OR USING OUR
                  WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTAND, AND AGREE TO BE
                  BOUND TO ALL THE TERMS OF THIS PRIVACY POLICY AND OUR WEBSITE TERMS OF
                  USE. IF YOU DO NOT AGREE TO THESE TERMS, EXIT THIS PAGE AND DO NOT
                  ACCESS OR USE THE WEBSITE.
              </p>

              <h2 className="text-2xl font-semibold mb-4">1. Changes to Privacy Policy</h2>
              <p className="mb-4">
                  If we decide to change our privacy policy, we will post those changes to
                  this privacy statement, the home page, and other places we deem
                  appropriate so that you are aware of what information we collect, how we
                  use it, and under what circumstances, if any, we disclose it. We reserve
                  the right to modify this privacy statement at any time, so please review
                  it frequently. If we make material changes to this policy, we will
                  notify you here, by email, or by means of notice on our home page.
              </p>

              <h2 className="text-2xl font-semibold mb-4">
                  2. Types of Information Collected and Uses of Collected Information
              </h2>
              <p className="mb-4">
                  We collect two types of information about our Website Users: Personally
                  Identifiable Information and Non-Personally Identifiable Information.
              </p>
              <h3 className="text-xl font-semibold mb-2">
                  Personally Identifiable Information
              </h3>
              <p className="mb-4">
                  Personally Identifiable Information is information that identifies a
                  specific End User. When you engage in certain activities on the Website,
                  such as creating an account, ordering a product or service from us or
                  our partners, submitting content and/or posting content in discussion
                  forums, entering a contest or sweepstakes sponsored by us or our
                  partners, filling out a survey, posting a review, sending us or our
                  partners feedback, requesting information about our services, or signing
                  up for special offers from third parties through the Website
                  (collectively, “Identification Activities”), we may ask you to provide
                  certain information about yourself. It is optional for you to engage in
                  an Identification Activity.
              </p>

              {/* Repeat structure for other sections in the privacy policy */}
              <h2 className="text-2xl font-semibold mb-4">3. Release of Personally Identifiable Information</h2>
              <p className="mb-4">
                  We will not share, sell, rent, or trade your Personally Identifiable
                  Information with other parties except as provided below:
              </p>

              {/* Add more sections of the policy here in a similar fashion */}

              <h2 className="text-2xl font-semibold mb-4">12. Contacting Us</h2>
              <p className="mb-4">
                  If you have any questions about this Privacy Policy, the practices of
                  this site, or your dealings with this site, please contact us at:
              </p>
              <address className="mb-4">
                  Crypto3Blog<br />
                  1234 Some Street<br />
                  Some City, ST 12345<br />
                  Email: info@crypto3blog.com
              </address>
          </div>

        <Footer/>

    </Wrapper>

   
   
  );
};

export default PrivacyPolicy;
