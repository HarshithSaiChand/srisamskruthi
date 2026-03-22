const CategoryBanner = ({ category }) => {
  const bannerData = {
    Necklace: {
      bgColor: 'from-sky-700 to-sky-900',
      icon: '📿',
      description: 'Elegant handmade necklaces for every occasion'
    },
    Bangles: {
      bgColor: 'from-blue-600 to-blue-800',
      icon: '✨',
      description: 'Stunning bangles with traditional craftsmanship'
    },
    Chains: {
      bgColor: 'from-cyan-600 to-cyan-800',
      icon: '🔗',
      description: 'Beautiful chains crafted with precision'
    },
    Rings: {
      bgColor: 'from-indigo-600 to-indigo-800',
      icon: '💍',
      description: 'Exquisite rings for special moments'
    },
    Earrings: {
      bgColor: 'from-teal-600 to-teal-800',
      icon: '💎',
      description: 'Delicate earrings with artistic designs'
    },
    'Hip Belt': {
      bgColor: 'from-blue-700 to-indigo-900',
      icon: '✨',
      description: 'Elegant hip belts for a traditional look'
    },
    'Hair Accessories': {
      bgColor: 'from-purple-600 to-pink-800',
      icon: '🌸',
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
