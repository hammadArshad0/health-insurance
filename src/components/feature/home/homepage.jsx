import React from 'react';
import img1 from '../../../assets/icon/image1.jpg';
const ArticleCard = ({ image, category, title, date, href = "#" }) => (
  <a 
    href={href}
    className="block bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
  >
    <img 
      src={image} 
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-5">
      <span className="inline-block text-xs font-bold tracking-wider uppercase text-white bg-green-700 px-3 py-1.5 rounded transition-colors duration-300 group-hover:bg-green-600 mb-3">
        {category}
      </span>
      <h2 className="text-lg font-bold leading-tight mb-3 text-gray-900 transition-colors duration-300 group-hover:text-green-500">
        {title}
      </h2>
      <p className="text-xs text-gray-500 uppercase tracking-wide">
        {date}
      </p>
    </div>
  </a>
);

const SmallArticleCard = ({ image, title, date, href = "#" }) => (
  <a 
    href={href}
    className="flex gap-4 bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:translate-x-1 hover:shadow-lg group"
  >
    <img 
      src={image} 
      alt={title}
      className="w-20 h-20 object-cover rounded flex-shrink-0"
    />
    <div className="flex-1">
      <h3 className="text-base font-bold leading-snug mb-2 text-gray-900 transition-colors duration-300 group-hover:text-green-500">
        {title}
      </h3>
      <p className="text-xs text-gray-500 uppercase">
        {date}
      </p>
    </div>
  </a>
);

const MainArticle = ({ image, category, title, date, excerpt, href = "#" }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img 
      src={image} 
      alt={title}
      className="w-full h-[450px] object-cover"
    />
    <div className="p-8">
      <span className="inline-block text-xs font-bold tracking-wider uppercase text-white bg-green-700 px-4 py-2 rounded mb-4">
        {category}
      </span>
      <h1 className="text-4xl font-extrabold leading-tight mb-4 text-gray-900">
        {title}
      </h1>
      <p className="text-sm text-gray-500 uppercase tracking-wide mb-5">
        {date}
      </p>
      <p className="text-base text-gray-600 leading-relaxed">
        {excerpt}
      </p>
    </div>
  </div>
);

export default function App() {
  const leftArticles = [
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400",
      category: "Insurances",
      title: "Navigating the Road Ahead: Your Guide to Auto Insurance in the USA (2025)",
      date: "April 15, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400",
      category: "Insurances",
      title: "Is Health Insurance Worth It in 2025? Breaking Down Real Costs vs. Risks",
      date: "April 15, 2025"
    }
  ];

  const mainArticle = {
    image: img1,
    category: "Home Services",
    title: "Home Remodeling Trends in the USA for Q4 2025",
    date: "September 25, 2025",
    excerpt: "Home remodeling in the USA has always been more than just fixing walls and upgrading furniture. It's about lifestyle, comfort, and future-proofing your living space to match evolving needs and aesthetics."
  };

  const rightArticles = [
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200",
      title: "How to Lower Your Home Insurance Costs",
      date: "April 15, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=200",
      title: "Why Old Windows Cost You Money? A Closer Look",
      date: "April 15, 2025"
    },
    {
      image:img1,
      title: "How Climate Change Is Affecting Public Health",
      date: "April 15, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=200",
      title: "Best Life Insurance Policies in the USA",
      date: "April 15, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200",
      title: "How Your Credit Score Affects Auto Insurance",
      date: "April 15, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-3 flex flex-col gap-8">
          {leftArticles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>

        {/* Main Article */}
        <div className="lg:col-span-6">
          <MainArticle {...mainArticle} />
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {rightArticles.map((article, index) => (
            <SmallArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}