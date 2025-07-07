import React from 'react';
import { Search, MapPin, Trophy, Smile } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: Search,
      title: 'INTUITIVE SEARCH',
      description: 'Advanced search tools to find your perfect home quickly and easily'
    },
    {
      icon: MapPin,
      title: 'LOCAL EXPERTISE',
      description: 'Deep knowledge of neighborhoods, schools, and community amenities'
    },
    {
      icon: Trophy,
      title: 'WE GET RESULTS',
      description: 'Proven track record of successful transactions and satisfied clients'
    },
    {
      icon: Smile,
      title: 'HAPPY CLIENTS',
      description: 'Dedicated to exceeding expectations and building lasting relationships'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4 group-hover:bg-purple-600 transition-colors">
                <feature.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;