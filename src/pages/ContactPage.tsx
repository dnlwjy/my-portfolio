import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Accordion from "@/components/ui/Accordion";
import AnimationGroup from "@/components/ui/AnimationGroup";
import { client } from "@/sanityClient";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { SiteMetaData } from "@/components/SiteMetaData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

interface FAQItem {
    question: string;
    answer: string;
}

const ContactPage = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFAQs = async () => {
            setLoading(true);
            setFaqs([]);

            try {
                const query = `*[_type == "faq"] | order(orderRank asc, _createdAt asc){
          question,
          answer
        }`;
                const data = await client.fetch(query);
                setFaqs(data);
                // Add a small delay to ensure smooth transition
                setTimeout(() => {
                    setLoading(false);
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }, 300);
            } catch (error) {
                console.error("Error fetching FAQs:", error);
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            <SiteMetaData
                title="Contact | Daniel Wijaya"
                description="Get in touch with me for collaborations."
                url="https://danielwijaya.com/contact"
                image="https://danielwijaya.com/og-contact.png"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://danielwijaya.com" },
                    { name: "Contact", url: "https://danielwijaya.com/contact" },
                ]}
            />

            <Header />
            <main className="py-10">

                <Contact />

                <section
                    id="faq"
                    aria-label="Frequently Asked Questions"
                    className="w-full flex flex-col gap-10 justify-center mx-auto py-20"
                >
                    <AnimationGroup
                        delay={200}
                        className="flex items-center gap-6 overflow-visible"
                    >
                        <h2>FAQ</h2>
                        <hr className="flex-grow h-0.5 bg-darkgray" />
                    </AnimationGroup>

                    <Accordion items={faqs} />
                </section>

                <section
                    id="Location"
                    aria-label="My Location"
                    className="flex flex-col w-full h-fit gap-10">
                    <AnimationGroup
                        delay={100}
                        className="flex items-center gap-6 overflow-visible"
                    >
                        <h2>My Location</h2>
                        <hr className="flex-grow h-0.5 bg-darkgray" />
                    </AnimationGroup>

                    <AnimationGroup
                        delay={300}
                        className="w-full h-[640px] overflow-hidden rounded-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5575703348563!2d106.74956441824645!3d-6.1899073510417235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7125dc4009d%3A0xdd55d48a9ff83f3b!2sPuri%20Kencana%2C%20Jl.%20Puri%20Kencana%2C%20RT.11%2FRW.7%2C%20Kembangan%20Sel.%2C%20Kec.%20Kembangan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011610!5e0!3m2!1sen!2sid!4v1760463816828!5m2!1sen!2sid"
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </AnimationGroup>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default ContactPage;