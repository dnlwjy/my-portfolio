import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ItemCard from "@/components/ui/ItemCard";
import figma from "@/assets/image24.png";

const AllShop = () => {
    return (
        <>
            <Navbar />
            <main className="py-20">
                <section className="md:py-20 p-6 flex flex-col gap-10 mx-auto w-full">

                    <div className="flex text-center justify-center items-center gap-6 mb-10">
                        <h2 className="text-[48px] md:text-[72px]"><span className="text-gray">Welcome to</span><br />My Store</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                        <ItemCard
                            title="Figma"
                            description="Collaborative design and prototyping tool."
                            image={figma}
                            url="#"
                        />
                        <ItemCard
                            title="Figma"
                            description="Collaborative design and prototyping tool."
                            image={figma}
                            url="#"
                        />
                        <ItemCard
                            title="Figma"
                            description="Collaborative design and prototyping tool."
                            image={figma}
                            url="#"
                        />
                        <ItemCard
                            title="Figma"
                            description="Collaborative design and prototyping tool."
                            image={figma}
                            url="#"
                        />
                    </div>

                </section>
            </main>
            <Footer />
        </>
    )
}

export default AllShop;