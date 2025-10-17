import React from "react";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
    title:
      "Navigating the Road Ahead: Your Guide to Auto Insurance in the USA (2025)",
    date: "April 15, 2025",
    excerpt:
      "Driving in the United States in 2025 comes with the responsibility of having adequate auto insurance. It's not just about...",
  },
  {
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600",
    title:
      "Is Health Insurance Worth It in 2025? Breaking Down Real Costs vs. Risks",
    date: "April 15, 2025",
    excerpt:
      "With inflation tightening budgets and the healthcare landscape evolving fast, many Americans are asking critical questions in 2025: 'Is...",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
    title: "How to Lower Your Home Insurance Premiums?",
    date: "April 15, 2025",
    excerpt:
      "Home insurance is essential for protecting your biggest investment—but that doesn’t mean you have to overpay. Whether you’re a first-time...",
  },
  {
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600",
    title: "How Climate Change Is Affecting Public Health in the USA?",
    date: "April 15, 2025",
    excerpt:
      "Climate change isn’t just about the planet getting warmer—it’s about how these changes ripple into every aspect of our lives...",
  },
  {
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600",
    title: "Best Life Insurance Policies in the USA (2025 Guide)",
    date: "April 15, 2025",
    excerpt:
      "In today’s unpredictable world, having life insurance is one of the most important steps you can take to protect your family’s future...",
  },
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600",
    title: "How Your Credit Score Affects Auto Insurance Rates?",
    date: "April 15, 2025",
    excerpt:
      "Many drivers don’t realize how a low credit score can impact auto insurance premiums. Here’s what you need to know before your next renewal...",
  },
];

export default function Insurance() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-5 md:px-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto mb-10">
        <h3 className="text-xs font-semibold uppercase text-green-700 tracking-widest mb-2">
          Browsing: Insurances
        </h3>
        <div className="h-[2px] w-12 bg-green-700 mb-4"></div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-5">
              <span className="inline-block text-xs font-bold tracking-wider uppercase text-white bg-green-700 px-3 py-1.5 rounded mb-3 group-hover:bg-green-600 transition-colors duration-300">
                Insurance
              </span>
              <h2 className="text-lg font-bold leading-tight mb-2 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                {article.title}
              </h2>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                {article.date}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
