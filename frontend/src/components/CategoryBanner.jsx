import React from 'react';

const CategoryBanner = ({ category }) => {
  const bannerData = {
    Necklace: {
      bgColor: 'from-purple-700 to-purple-900',
      icon: '📿',
      description: 'Elegant handmade necklaces for every occasion'
    },
    Bangles: {
      bgColor: 'from-pink-700 to-rose-900',
      icon: '✨',
      description: 'Stunning bangles with traditional craftsmanship'
    },
    Chains: {
      bgColor: 'from-amber-700 to-yellow-900',
      icon: '🔗',
      description: 'Beautiful chains crafted with precision'
    },
    Rings: {
      bgColor: 'from-red-700 to-red-900',
      icon: '💍',
      description: 'Exquisite rings for special moments'
    },
    Earrings: {
      bgColor: 'from-cyan-700 to-blue-900',
      icon: '💎',
      description: 'Delicate earrings with artistic designs'
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
