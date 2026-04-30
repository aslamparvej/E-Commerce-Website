import React from "react";
import Sidebar from "./Sidebar";
import Carousel from "./UI/Carousel";

const Hero = () => {
  const slides = [
    {
      title: "Up to 10% off Voucher",
      subtitle: "iPhone 16 Series",
      action: "Shop Now",
      actionLink: "/products/iphone-16",
      image: "/carousel/iphone-16.png",
    },
    {
      title: "Up to 15% off Voucher",
      subtitle: "iPad Pro",
      action: "Shop Now",
      actionLink: "/products/ipad-pro",
      image: "/carousel/iPad-Pro.png",
    },
    {
      title: "Up to 10% off Voucher",
      subtitle: "MacBook Air",
      action: "Shop Now",
      actionLink: "/products/macbook-air",
      image: "/carousel/macbook.png",
    },
  ];

  return (
    <section className="flex mb-8">
      <div className="hidden lg:block w-64 shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 pb-0 w-full">
        <Carousel slides={slides} />
      </div>
    </section>
  );
};

export default Hero;
