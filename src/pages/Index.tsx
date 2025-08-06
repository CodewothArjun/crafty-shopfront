
import React from 'react';
import { mockProducts } from '@/data/mockData';
import HeroSection from '@/components/Hero/HeroSection';
import ProductGrid from '@/components/Product/ProductGrid';
import Layout from '@/components/Layout/Layout';

const Index = () => {
  const featuredProducts = mockProducts.filter(product => product.featured);

  return (
    <Layout>
      <div className="space-y-16">
        <HeroSection />
        
        <div className="container mx-auto px-4">
          <ProductGrid
            products={featuredProducts}
            title="Featured Products"
          />
        </div>
        
        {/* Features Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4 fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold">Free Shipping</h3>
                <p className="text-muted-foreground">Free shipping on orders over $50</p>
              </div>
              <div className="text-center space-y-4 fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold">Secure Payment</h3>
                <p className="text-muted-foreground">100% secure payment processing</p>
              </div>
              <div className="text-center space-y-4 fade-in">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">↩️</span>
                </div>
                <h3 className="text-xl font-semibold">Easy Returns</h3>
                <p className="text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
