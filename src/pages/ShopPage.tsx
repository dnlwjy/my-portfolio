import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList";
import { SiteMetaData } from "@/components/SiteMetaData";

const ShopPage = () => {
    return (
        <>
            <SiteMetaData
                title="Shop | Daniel Wijaya"
                description="Explore my store and products."
                url="https://danielwijaya.com/shop"
                image="https://danielwijaya.com/og-shop.png"
            />

            <Header />
            <main className="py-10">
                <CMSList collection="shop" showPrice={true} title1="Welcome to" title2="My Store" />
            </main>
            <Footer />
        </>
    )
}

export default ShopPage;