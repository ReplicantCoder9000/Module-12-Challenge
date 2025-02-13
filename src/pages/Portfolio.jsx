import React from 'react';

const projects = [
  {
    title: 'Responsive Web Design',
    image: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg',
    deployedLink: 'https://example.com/responsive-web-design',
    repoLink: 'https://github.com/username/responsive-web-design',
  },
  {
    title: 'E-commerce Platform',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    deployedLink: 'https://example.com/ecommerce-platform',
    repoLink: 'https://github.com/username/ecommerce-platform',
  },
  {
    title: 'Social Media Dashboard',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg',
    deployedLink: 'https://example.com/social-media-dashboard',
    repoLink: 'https://github.com/username/social-media-dashboard',
  },
  {
    title: 'Task Management App',
    image: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg',
    deployedLink: 'https://example.com/task-management-app',
    repoLink: 'https://github.com/username/task-management-app',
  },
  {
    title: 'Personal Blog',
    image: 'https://images.pexels.com/photos/265766/pexels-photo-265766.jpeg',
    deployedLink: 'https://example.com/personal-blog',
    repoLink: 'https://github.com/username/personal-blog',
  },
  {
    title: 'Recipe Finder',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    deployedLink: 'https://example.com/recipe-finder',
    repoLink: 'https://github.com/username/recipe-finder',
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="project-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                View Deployed App
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                View GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
