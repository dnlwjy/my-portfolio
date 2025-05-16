
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription?: string;
  features?: string[];
  fileFormat?: string[];
  downloadSize?: string;
};

const ProductDetailContent = ({ productId }: { productId: string | undefined }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    // In a real app, this would be an API call
    const products: Product[] = [
      {
        id: 1,
        name: "Design System Template",
        price: 49,
        description: "A comprehensive design system for your next project",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        longDescription: "This design system template provides a complete foundation for your digital product. With carefully crafted components, consistent styling, and comprehensive documentation, it allows designers and developers to create cohesive user experiences efficiently.",
        features: [
          "200+ reusable components",
          "Responsive design patterns",
          "Accessibility compliant",
          "Dark and light mode support",
          "Figma and Sketch files included",
          "Documentation and usage examples"
        ],
        fileFormat: ["Figma", "Sketch", "Adobe XD", "HTML/CSS", "React components"],
        downloadSize: "45MB"
      },
      {
        id: 2,
        name: "UI Component Library",
        price: 39,
        description: "Ready-to-use UI components for web applications",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3255&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        longDescription: "This UI component library offers a comprehensive collection of ready-to-use components for modern web applications. Each component is designed with flexibility and customization in mind, allowing you to build beautiful interfaces quickly.",
        features: [
          "150+ UI components",
          "Modular architecture",
          "Light and dark themes",
          "Customizable variables",
          "Responsive layouts",
          "Documentation with examples"
        ],
        fileFormat: ["React", "Vue", "Angular", "HTML/CSS", "Storybook"],
        downloadSize: "38MB"
      },
      {
        id: 3,
        name: "Icon Pack Bundle",
        price: 29,
        description: "500+ custom icons in multiple styles and formats",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        longDescription: "This comprehensive icon pack bundle includes over 500 meticulously crafted icons in various styles and formats. Perfect for designers and developers looking for consistent and high-quality icons for their projects.",
        features: [
          "500+ unique icons",
          "Multiple styles (outline, filled, duotone)",
          "SVG, PNG, and icon font formats",
          "Various categories (UI, business, social, etc.)",
          "Regular updates with new icons",
          "Custom icon requests for buyers"
        ],
        fileFormat: ["SVG", "PNG", "Icon font", "Figma library", "Sketch library"],
        downloadSize: "22MB"
      },
      {
        id: 4,
        name: "Portfolio Template",
        price: 59,
        description: "Custom portfolio template with multiple page layouts",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        longDescription: "This premium portfolio template is designed for creative professionals looking to showcase their work in a modern and engaging way. With multiple page layouts and customizable sections, it adapts to various creative fields and personal styles.",
        features: [
          "8 pre-designed page layouts",
          "Project case study templates",
          "Contact form integration",
          "Blog section included",
          "Animation and transition effects",
          "SEO optimized structure"
        ],
        fileFormat: ["HTML/CSS/JS", "React", "NextJS", "Gatsby", "WordPress theme"],
        downloadSize: "65MB"
      },
    ];

    const fetchProduct = () => {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        const found = products.find(p => p.id === parseInt(productId || "0"));
        setProduct(found || null);
        setLoading(false);
      }, 500);
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    
    setAddingToCart(true);
    
    // Simulate API call to add to cart
    setTimeout(() => {
      setAddingToCart(false);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`
      });
    }, 800);
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="w-12 h-12 border-4 border-highlight rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="text-gray-400 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate(-1)} variant="primary" className="inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Button>
      </div>
    );
  }

  return (
    <section className="py-20">
      <Button 
        onClick={() => navigate(-1)} 
        variant="primary" 
        className="mb-8 flex items-center hover:bg-transparent hover:text-highlight"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Shop
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Product Image */}
        <div className="glass-card rounded-xl overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
          <div className="text-2xl font-bold text-highlight mb-4">${product.price}</div>
          <p className="text-gray-300 mb-8">{product.longDescription}</p>
          
          <Button 
            onClick={handleAddToCart} 
            className="w-full md:w-auto bg-highlight hover:bg-highlight-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mb-8"
            disabled={addingToCart}
          >
            {addingToCart ? (
              <>
                <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                Adding to Cart...
              </>
            ) : (
              <>
                <ShoppingCart size={20} />
                Add to Cart
              </>
            )}
          </Button>

          <Card className="bg-dark-secondary/30 border-dark-secondary">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">File Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Formats:</p>
                  <p>{product.fileFormat?.join(", ")}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Download Size:</p>
                  <p>{product.downloadSize}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.features?.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 rounded-full p-1 bg-highlight/10 text-highlight">
                <Check size={16} />
              </div>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* This would typically fetch other products, but for now we'll show placeholder items */}
          {[1, 2, 3].map((_, index) => {
            const relatedProductId = (parseInt(productId || "0") + index + 1) % 4 + 1;
            const relatedProduct = [
              {
                id: 1,
                name: "Design System Template",
                price: 49,
                image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                id: 2,
                name: "UI Component Library",
                price: 39,
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3255&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                id: 3,
                name: "Icon Pack Bundle",
                price: 29,
                image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                id: 4,
                name: "Portfolio Template",
                price: 59,
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].find(p => p.id === relatedProductId);

            if (!relatedProduct) return null;
            
            return (
              <div key={index} className="glass-card rounded-xl overflow-hidden cursor-pointer" onClick={() => navigate(`/shop/${relatedProduct.id}`)}>
                <div className="h-40 overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                  <p className="text-highlight">${relatedProduct.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailContent;
