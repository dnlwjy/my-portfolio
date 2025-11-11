import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SiteMetaData } from "@/components/SiteMetaData";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import LinkButton from "@/components/ui/LinkButton";
import AnimationGroup from "@/components/ui/AnimationGroup";

const RefundPolicy = () => {
    return (
        <div>
            <SiteMetaData
                title="Shop | Refund Policy"
                description="Get in touch with me for collaborations."
                url="https://danielwijaya.com/shop/refund-policy"
                type="article"
            />

            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://danielwijaya.com" },
                    { name: "Shop", url: "https://danielwijaya.com/shop" },
                    { name: "Refund Policy", url: "https://danielwijaya.com/shop/refund-policy" },
                ]}
            />

            <Header />
            <main className="py-10">
                <section id="privacy-policy" className="flex flex-col py-20 gap-20 mx-auto w-full text-start">
                    <div className="flex flex-col gap-4">
                        <AnimationGroup
                            delay={300}
                            className="space-y-5 text-white">
                            <h1>Refund Policy</h1>
                            <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
                        </AnimationGroup>
                    </div>

                    <AnimationGroup
                        delay={500}
                        className="space-y-5 text-white">
                        <p>All products sold on this website are digital goods that are delivered instantly upon purchase. Because of this, all sales are final and non-refundable.</p>

                        <p>Once a product has been downloaded or accessed, it cannot be returned, exchanged, or refunded. Please review product descriptions, previews, and compatibility requirements carefully before purchasing.</p>

                        <p>If you have any questions before placing your order, feel free to reach out. I will be happy to provide clarification to help you make an informed decision.</p>

                        <p>If you encounter technical issues accessing your purchase, please <LinkButton
                title="contact me"
                link="/contact"
                className="text-white hover:text-gray transition-colors"
              /> and I will provide support to ensure you receive the product as intended.</p>
                    </AnimationGroup>

                </section>
            </main>
            <Footer />
        </div>
    );
};

export default RefundPolicy;