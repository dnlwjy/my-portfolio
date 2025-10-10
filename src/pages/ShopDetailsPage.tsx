import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { client, urlFor } from "@/sanityClient";
import CMSList from "@/components/CMSList";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { PortableText } from "@portabletext/react";
import LoadingScreen from "@/components/ui/LoadingScreen";
import AnimationGroup from "@/components/ui/AnimationGroup";
import Serializers from "@/lib/Serializers";
import Checkout from "@/components/ui/Checkout";

interface ShopDetailsProp {
    title: string;
    description: string;
    coverImage: any;
    content: any;
    tags: string[];
    checkout?: string;
    preview?: string;
    price: number;
}

const ShopDetailsPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [shop, setShop] = useState<ShopDetailsProp | null>(null);
    const [showCheckout, setCheckout] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);

        client
            .fetch(
                `*[_type == "shop" && slug.current == $slug][0]{
          title,
          price,
          description,
          coverImage,
          tags,
          content,
          checkout,
          tags,
          preview
        }`,
                { slug }
            )
            .then((data) => setShop(data))
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [slug]);

    if (loading) return <LoadingScreen />;

    if (!shop) return null;

    return (
        <>
            <Header />
            <main>
                <section id={shop.title} className="flex flex-col mx-auto pt-40 gap-10 w-full">

                    <AnimationGroup delay={100} className="flex-1 flex flex-col gap-10">

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                {shop.tags?.map((tag, i) => (
                                    <Tag key={i} title={tag} />))}
                            </div>
                            <h1 className="text-wrap">{shop.title}</h1>
                            <p>{shop.description}</p>
                            {shop?.price && (
                                <h2 className="font-inter">
                                    {shop.price.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </h2>
                            )}
                        </div>

                        <div className="flex flex-col justify-start gap-3">
                            <Button onClick={() => setCheckout(true)}>
                                Checkout
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => window.open(shop.preview, "_blank")}
                            >
                                Preview
                            </Button>
                        </div>
                    </AnimationGroup>

                    <AnimationGroup
                        delay={300}
                        direction="up"
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

                    <AnimationGroup delay={300}>
                        {shop.content && (
                            <PortableText value={shop.content} components={Serializers} />
                        )}
                    </AnimationGroup>
                </section>

                <CMSList collection="shop" heading="View More" maxItems={2} excludeSlug={slug} />
            </main>

            {shop.checkout && (
                <Checkout
                    isOpen={showCheckout}
                    onClose={() => setCheckout(false)}
                    url={shop.checkout}
                />
            )}

            <Footer />
        </>
    );
};

export default ShopDetailsPage;