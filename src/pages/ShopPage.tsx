import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Shop from "@/components/Shop"

const ShopPage = () => {
    return (
        <>
            <Navbar />
            <main className="py-20">
                <Shop h1={true} />
            </main>
            <Footer />
        </>
    )
}

export default ShopPage;