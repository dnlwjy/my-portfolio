import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList"

const ShopPage = () => {
    return (
        <>
            <Header />
            <main className="py-20">
                <CMSList collection="shop" showPrice={true} title1="Welcome to" title2="My Store" />
            </main>
            <Footer />
        </>
    )
}

export default ShopPage;