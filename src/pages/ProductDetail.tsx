import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductDetailContent from "@/components/ProductDetailContent";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  
  return (
      <div>
        <Navbar />
        <div className="ml-16 md:ml-16">
          <div className="max-w-[840px] mx-auto px-4">
            <ProductDetailContent productId={id} />
          </div>
          <Footer />
        </div>
      </div>
  );
};

export default ProductDetail;
