
{/*
  This site is fully hand-coded by Daniel Wijaya.
  Built with React, Tailwind CSS, and 💻.
*/}

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
};

const Shop = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Design System Template",
      price: 49,
      description: "A comprehensive design system for your next project",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "UI Component Library",
      price: 39,
      description: "Ready-to-use UI components for web applications",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3255&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Icon Pack Bundle",
      price: 29,
      description: "500+ custom icons in multiple styles and formats",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Portfolio Template",
      price: 59,
      description: "Custom portfolio template with multiple page layouts",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]);

  return (
    <section id="shop" className="py-20">
      <Separator className="mb-20 bg-gray-800" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Products</h2>
          <div className="h-1 w-20 bg-highlight mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out my collection of digital products for designers and developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-highlight/30 hover:scale-[1.01] group"
            >
              <Link to={`/shop/${product.id}`} className="block h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-5">
                <Link to={`/shop/${product.id}`}>
                  <h3 className="text-xl font-semibold mb-2 hover:text-highlight transition-colors duration-300">{product.name}</h3>
                </Link>
                <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-highlight text-xl font-bold">${product.price}</span>
                  <Button 
                    className="bg-highlight hover:bg-highlight text-white transition-all duration-300 flex items-center gap-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]"
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
