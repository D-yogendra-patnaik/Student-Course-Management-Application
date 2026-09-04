const About = () => {
  return (
    <div className="page-container fade-in">
      <div className="card glass about-card">
        <h2>About This Portal</h2>
        <p>
          The Student Course Management Application is designed to provide students with a seamless
          and intuitive experience for managing their academic journey. 
        </p>
        <p>
          Built with cutting-edge web technologies like React, Vite, and React Router, it ensures
          lightning-fast navigation and dynamic content updates without ever reloading the page.
        </p>
        <div className="features-list">
          <div className="feature-item">
            <span className="icon">🚀</span>
            <span>Fast Performance</span>
          </div>
          <div className="feature-item">
            <span className="icon">🎨</span>
            <span>Premium UI/UX</span>
          </div>
          <div className="feature-item">
            <span className="icon">📱</span>
            <span>Responsive Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
