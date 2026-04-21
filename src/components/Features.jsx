import { Headset, ShieldCheck, Van } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free and Fast Delivery",
      description: "Free delivery for all orders over $140",
      icon: <Van size={32} color="#FFF" />,
    },
    {
      id: 2,
      title: "24/7 Customer Service",
      description: "Friendly 24/7 customer support",
      icon: <Headset size={32} color="#FFF" />,
    },
    {
      id: 3,
      title: "Money Back Guarantee",
      description: "Not satisfied with your purchase? No problem!",
      icon: <ShieldCheck size={32} color="#FFF" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12 p-24">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col items-center text-center"
        >
          <div className="w-20 h-20 mb-6 rounded-full bg-black flex items-center justify-center border-12 border-[#2F2E30]">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold uppercase mb-2">{feature.title}</h3>
          <p className="text-sm font-normal">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
