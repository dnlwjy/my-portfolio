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
    images?: any[];
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
                    images,
                    tags,
                    content,
                    checkout,
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

                        <div className="flex md:flex-row flex-col justify-start gap-3">
                            <Button onClick={() => setCheckout(true)} className="w-full">
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
                        className="flex-1 flex items-center justify-center mb-5"
                    >
                        {/* Carousel: coverImage + images[] */}
                        {(shop.coverImage || (shop.images && shop.images.length > 0)) && (
                            <CarouselImages shop={shop} title={shop.title} />
                        )}
                    </AnimationGroup>

                    <AnimationGroup delay={300}>
                        {shop.content && (
                            <PortableText value={shop.content} components={Serializers} />
                        )}
                    </AnimationGroup>
                </section>

                <CMSList collection="shop" heading="More Like This" maxItems={2} excludeSlug={slug} />
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

// Local carousel component to combine coverImage + images[]
const CarouselImages = ({ shop, title }: any) => {
    const slides: any[] = [];
    if (shop.coverImage) slides.push(shop.coverImage);
    if (shop.images && shop.images.length) slides.push(...shop.images.slice(0, 4));

    const [index, setIndex] = useState(0);

    if (slides.length === 0) return null;

    const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
    const next = () => setIndex((i) => (i + 1) % slides.length);

    // keyboard navigation
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slides.length]);

    return (
        <div className="w-full">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/5">
                <img
                    src={urlFor(slides[index]).auto('format').width(1200).quality(75).url()}
                    alt={title}
                    className="w-full h-full object-cover"
                />

                <button onClick={prev} aria-label="Previous slide" className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/30"> 
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <button onClick={next} aria-label="Next slide" className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/30">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            {slides.length > 1 && (
                <div className="grid grid-cols-4 gap-2 mt-4">
                    {slides.map((s: any, i: number) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-full aspect-square rounded-lg overflow-hidden border ${i === index ? 'border-white' : 'border-white/10'} relative group`}
                        >
                            {/* overlay: visible by default, hidden on hover; hidden for active thumbnail */}
                            <div className={`${i === index ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'} absolute inset-0 bg-black/65 z-10 pointer-events-none transition-opacity duration-150`} />
                            <img src={urlFor(s).auto('format').width(800).quality(60).url()} alt={`${title}-thumb-${i}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};