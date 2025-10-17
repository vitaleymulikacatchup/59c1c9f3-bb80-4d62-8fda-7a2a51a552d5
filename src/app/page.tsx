"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { CheckCircle } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34307858/pexels-photo-34307858.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"fresh bakery bread - Photo by Novkov Visuals"},
  {"id":"about-image","url":"https://images.pexels.com/photos/7552330/pexels-photo-7552330.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant lemon cheesecake on a stand surrounded by natural flowers. Perfect for celebrations or culinary projects."},
  {"id":"product-1-image","url":"https://images.pexels.com/photos/34301986/pexels-photo-34301986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of bread baking on the walls of a traditional tandoor oven."},
  {"id":"product-2-image","url":"https://images.pexels.com/photos/19095244/pexels-photo-19095244.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two women engaged in conversation inside a cozy cafe at night, seen through a window."},
  {"id":"product-3-image","url":"https://images.pexels.com/photos/3945214/pexels-photo-3945214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Start your day with a cozy breakfast of croissant and coffee on a warm blanket."}
];

function resolveAssetUrl(id) {
  const asset = assetMap.find(a => a.id === id);
  return asset ? asset.url : "/public/images/placeholder.webp";
}

function resolveAssetAlt(id) {
  const asset = assetMap.find(a => a.id === id);
  return asset ? asset.alt : "Decorative image";
}

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Bakery"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Bakery"
            description="Experience the finest baked goods made fresh each day."
            imageSrc={resolveAssetUrl("hero-image")}
            imageAlt={resolveAssetAlt("hero-image")}
            buttons={[
              { text: "See Our Products", href: "products" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our passion for baking and see what makes us unique."
            bulletPoints={[
              { title: "Quality Ingredients", description: "We use only the finest ingredients for our breads and pastries.", icon: CheckCircle },
              { title: "Freshly Baked", description: "Every item is baked fresh daily to ensure the best taste." }
            ]}
            imageSrc={resolveAssetUrl("about-image")}
            imageAlt={resolveAssetAlt("about-image")}
          />
        </div>
      </div>

      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            title="Our Products"
            description="Handcrafted delights baked with love."
            products={[
              { id: "1", brand: "Bakery", name: "Sourdough Bread", price: "$5", rating: 5, reviewCount: "120", imageSrc: resolveAssetUrl("product-1-image"), imageAlt: resolveAssetAlt("product-1-image") },
              { id: "2", brand: "Bakery", name: "Chocolate Croissant", price: "$3", rating: 5, reviewCount: "95", imageSrc: resolveAssetUrl("product-2-image"), imageAlt: resolveAssetAlt("product-2-image") },
              { id: "3", brand: "Bakery", name: "Blueberry Muffin", price: "$2.50", rating: 4, reviewCount: "80", imageSrc: resolveAssetUrl("product-3-image"), imageAlt: resolveAssetAlt("product-3-image") }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Visit Us"
            title="Get in Touch"
            description="We'd love to hear from you or welcome you to our bakery!"
            imageSrc={resolveAssetUrl("hero-image")}
            imageAlt={resolveAssetAlt("hero-image")}
            onSubmit={() => console.log("Submitted")}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [
                { label: "Home", href: "home" },
                { label: "About", href: "about" }
              ]},
              { items: [
                { label: "Products", href: "products" },
                { label: "Contact", href: "contact" }
              ]}
            ]}
            logoText="Bakery"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}