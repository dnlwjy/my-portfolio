import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Accordion from "@/components/ui/Accordion";
import AnimationGroup from "@/components/ui/AnimationGroup";
import { client } from "@/sanityClient";

interface FAQItem {
    question: string;
    answer: string;
}

const ContactPage = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const query = `*[_type == "faq"] | order(_createdAt asc){
          question,
          answer
        }`;
                const data = await client.fetch(query);
                setFaqs(data);
            } catch (error) {
                console.error("Error fetching FAQs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFAQs();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Contact />
                <section
                    id="Frequently Asked Questions"
                    className="w-full flex flex-col gap-10 justify-center mx-auto pb-20"
                >
                    <AnimationGroup
                        delay={200}
                        className="flex items-center gap-6 overflow-visible"
                    >
                        <h2>FAQ</h2>
                        <hr className="flex-grow h-0.5 bg-darkgray" />
                    </AnimationGroup>

                    {loading ? (
                        <p className="text-white">Loading FAQs...</p>
                    ) : (
                        <Accordion items={faqs} />
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;