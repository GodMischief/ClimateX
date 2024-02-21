import React from 'react';

const EnvironmentalNewsPage = () => {
  // Array of news articles with titles, descriptions, and links
  const newsArticles = [
    {
      title: 'Article 1: Ocean Pollution',
      description: 'Learn about the impact of plastic pollution on marine life and ecosystems.',
      link: 'https://example.com/article1',
    },
    {
      title: 'Article 2: Deforestation Crisis',
      description: 'Read about the consequences of deforestation and efforts to combat it worldwide.',
      link: 'https://example.com/article2',
    },
    {
      title: 'Article 3: Renewable Energy Growth',
      description: 'Discover the latest advancements in renewable energy technologies and adoption rates.',
      link: 'https://example.com/article3',
    },
    {
      title: 'Article 4: Climate Change Policy',
      description: 'Explore the current state of climate change policies and international agreements.',
      link: 'https://example.com/article4',
    },
    {
      title: 'Article 5: Biodiversity Loss',
      description: 'Understand the threats to global biodiversity and conservation efforts.',
      link: 'https://example.com/article5',
    },
  ];

  return (
    <div>
      <h2>Environmental News</h2><br/>
      {/* Render news articles with titles, descriptions, and links */}
      <ul>
        {newsArticles.map((article, index) => (
          <li key={index}>
            <h3><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
            <p>{article.description}</p><br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnvironmentalNewsPage;
