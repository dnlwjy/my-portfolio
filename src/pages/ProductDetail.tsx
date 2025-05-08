
import { useParams } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import ProductDetailContent from "@/components/ProductDetailContent";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#121212] text-white">
        <Navbar />
        <div className="ml-16 md:ml-16">
          <div className="max-w-[840px] mx-auto px-4">
            <ProductDetailContent productId={id} />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductDetail;
