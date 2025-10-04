import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { client, urlFor } from "@/sanityClient";
import CMSList from "@/components/CMSList";
import Button from "@/components/ui/Button";
import { PortableText } from '@portabletext/react';
import LoadingScreen from "@/components/ui/LoadingScreen";
import AnimationGroup from "@/components/ui/AnimationGroup";
import serializers from "@/components/ui/Serializers";

interface ShopDetailsProp {
    title: string;
    description: any;
    coverImage: any;
    content: any;
    tags: string[];
}

const ShopDetailsPage = () => {

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

    if (!shop)
        return (
            <LoadingScreen />
        );

    return (
        <>
            <Header />
            <main>

                <section className="flex flex-col pt-40 gap-10">

                    <div className="flex sm:flex-row flex-col mx-auto items-start gap-6 w-full">
                        <AnimationGroup
                            delay={300}
                            direction="right"
                            className="flex-1 flex flex-col gap-10 py-6"
                        >
                            <div className="flex flex-col gap-4">
                                <h1 className="text-wrap">asdsadsadd asdas</h1>
                                <p>dasdassaddadasdas</p>
                            </div>

                            <div className="flex flex-col justify-start gap-3">
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
                                    }}
                                >
                                    Preview
                                </Button>
                            </div>
                        </AnimationGroup>

                        <AnimationGroup
                            delay={600}
                            direction="left"
                            className="flex-1 flex items-center justify-center"
                        >
                            {shop.coverImage && (
                                <div className="w-full aspect-square">
                                    <img
                                        src={urlFor(shop.coverImage).url()}
                                        alt={shop.title}
                                        className="object-cover w-full h-full rounded-2xl border border-white/5"
                                    />
                                </div>
                            )}
                        </AnimationGroup>


                    </div>

                    <AnimationGroup
                        delay={500}
                        className="flex flex-col w-full gap-4">
                        {shop.content && (
                            <PortableText
                                value={shop.content}
                                components={serializers}
                            />
                        )}
                    </AnimationGroup>

                </section>


                <section>
                    <CMSList collection="shop" maxItems={2} />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ShopDetailsPage;