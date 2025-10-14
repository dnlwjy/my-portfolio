import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Accordion from "@/components/ui/Accordion";
import AnimationGroup from "@/components/ui/AnimationGroup";

const ContactPage = () => {
    return (
        <>
            <Header />
            <main>
                <Contact />
                <section id="Frequently Asked Questions" className="w-full flex flex-col gap-10 justify-center mx-auto">
                    <AnimationGroup delay={200} className="flex items-center gap-6 overflow-visible">
                        <h2>FAQ</h2>
                        <hr className="flex-grow h-0.5 bg-darkgray" />
                    </AnimationGroup>
                    <Accordion
                        items={[
                            { question: "What is your typical response time?", answer: "I usually respond within 24-48 hours on business days." },
                            { question: "What services do you offer?", answer: "I offer a range of services including web design, web development, UI/UX design, and consulting." },
                            { question: "What is your pricing model?", answer: "My pricing varies based on the scope and complexity of the project. I offer both fixed-price and hourly-rate options." },
                            { question: "Do you offer ongoing support and maintenance?", answer: "Yes, I offer ongoing support and maintenance packages to ensure your website remains up-to-date and secure." },
                            { question: "What is your design and development process?", answer: "My process typically involves initial consultation, research and planning, design mockups, development, testing, and launch." },
                        ]}
                    />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;