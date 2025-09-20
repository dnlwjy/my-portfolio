import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CMSList from "@/components/CMSList"

const ShopPage = () => {
    return (
        <>
            <Header />
            <main className="py-20">
                <CMSList collection="shop" h1={true} />
            </main>
            <Footer />
        </>
    )
}

export default ShopPage;