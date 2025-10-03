import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import LinkButton from "@/components/ui/LinkButton";
import { client, urlFor } from "@/sanityClient";
import CMSList from "@/components/CMSList";
import Button from "@/components/ui/Button";

interface ShopDetailsProp {
    title: string;
    description: any;
    coverImage: any;
    tags: string[];
}

const ShopPage = () => {

    const { slug } = useParams<{ slug: string }>();
    const [shop, setShop] = useState<ShopDetailsProp | null>(null);

    useEffect(() => {
        if (!slug) return;

        client.fetch(
            `*[_type == "shop" && slug.current == $slug][0]{
    title,
    description,
    coverImage,
    tags,
    content
  }`, { slug })
            .then((data) => setShop(data))
            .catch(console.error);
    }, [slug]);

if (!shop) return <div className="text-center h-100vh">Loading...</div>;

    return (
        <>
            <Header />
            <main>
                <section className="flex flex-col py-40 mx-auto items-start gap-6">

                    <LinkButton
                        title="‹  Back"
                        link="/shop"
                        style={{ fontSize: "14px" }}
                    />

                    <div className="flex gap-10 w-full">
                        {shop.coverImage && (
                            <img
                                src={urlFor(shop.coverImage).url()}
                                alt={shop.title}
                                className="object-cover w-1/2 rounded-2xl border border-white/5"
                            />
                        )}

                        <div className="flex flex-col gap-10 py-6">
                            <div className="flex flex-col gap-4 w-1/2">
                                <h1 className="text-wrap">asdsadsadd asdas</h1>
                                <p>dasdassaddadasdas</p>
                            </div>
                            <div
                                className="flex flex-col justify-start gap-3 blur-animation z-10"
                                style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
                            >
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        const el = document.getElementById("contact");
                                        if (el) el.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    Buy Now
                                </Button>
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        window.open("https://github.com/dnlwjy?tab=repositories", "_blank");
                                    }}>
                                    Preview
                                </Button>
                            </div>
                        </div>
                    </div>


                </section>

                <section>
                    <CMSList collection="shop" maxItems={2} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ShopPage;