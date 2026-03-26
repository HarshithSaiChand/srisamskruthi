const CategoryBanner = ({ category }) => {
  const bannerData = {
    Necklace: {
      bgColor: 'from-sky-700 to-sky-900',
      icon: <img src="/necklace-icon.png" alt="Necklace" className="w-14 h-14" />,
      description: 'Elegant handmade necklaces for every occasion'
    },
    Bangles: {
      bgColor: 'from-blue-600 to-blue-800',
      icon: <img src="/bangles-icon.png" alt="Bangles" className="w-14 h-14 inline-block" />,
      description: 'Stunning bangles with traditional craftsmanship'
    },
    Chains: {
      bgColor: 'from-cyan-600 to-cyan-800',
      icon: <img src="https://cdn-icons-png.flaticon.com/128/7466/7466570.png" alt="Chains" className="w-14 h-14 inline-block" />,
      description: 'Beautiful chains crafted with precision'
    },
    Rings: {
      bgColor: 'from-indigo-600 to-indigo-800',
      icon: <img src="/ring-icon.png" alt="Rings" className="w-14 h-14 inline-block" />,
      description: 'Exquisite rings for special moments'
    },
    Earrings: {
      bgColor: 'from-teal-600 to-teal-800',
      icon: <img src="/earrings-icon.png" alt="Earrings" className="w-14 h-14 inline-block" />,
      description: 'Delicate earrings with artistic designs'
    },
    'Hip Belt': {
      bgColor: 'from-blue-700 to-indigo-900',
      icon: <img src="/hipbelt-icon.png" alt="Hip Belt" className="w-14 h-14 inline-block" />,
      description: 'Elegant hip belts for a traditional look'
    },
    'Hair Accessories': {
      bgColor: 'from-purple-600 to-pink-800',
      icon: <img src="/hair-icon.png" alt="Hair Accessories" className="w-14 h-14 inline-block" />,
      description: 'Beautiful hair accessories for every style'
    }
  };

  const data = bannerData[category] || bannerData.Necklace;

  return (
    <div className={`bg-gradient-to-r ${data.bgColor} text-white py-8 px-6 rounded-lg mb-8 shadow-lg`}>
      <div className="flex items-center gap-4">
        <span className="text-5xl">{data.icon}</span>
        <div>
          <h2 className="text-3xl font-bold">{category}</h2>
          <p className="text-ivory opacity-90">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
