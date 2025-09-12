import React, { useState, useEffect } from 'react';
import { Activity, TrendingUp, Target, Users, Zap, ChevronDown, Play, Star } from 'lucide-react';
import './index.css'; // We'll create this CSS file

const WorkoutTrackerLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Activity className="feature-icon" />,
      title: "Smart Workout Logging",
      description: "Track sets, reps, weights, and RPE with our intuitive interface"
    },
    {
      icon: <TrendingUp className="feature-icon" />,
      title: "1RM Estimation",
      description: "Automatically calculate your one-rep max based on RPE data"
    },
    {
      icon: <Target className="feature-icon" />,
      title: "Progress Dashboard",
      description: "Visualize your strength gains with beautiful charts"
    },
    {
      icon: <Zap className="feature-icon" />,
      title: "RPE Monitoring",
      description: "Prevent overtraining with Rate of Perceived Exertion tracking"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50M+", label: "Reps Logged" },
    { number: "99%", label: "Uptime" },
    { number: "4.9", label: "App Rating" }
  ];

  return (
    <div className="landing-container">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
        <div className="bg-blob bg-blob-3"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className={`logo ${isVisible ? 'animate-slide-right' : 'animate-slide-right-initial'}`}>
          <div className="logo-icon">💪</div>
          <span className="logo-text">WT</span>
        </div>
        
        <div className={`nav-links ${isVisible ? 'animate-slide-down' : 'animate-slide-down-initial'}`}>
          {['Features', 'Dashboard', 'Pricing', 'About'].map((item, index) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <button className={`nav-cta-btn ${isVisible ? 'animate-slide-left' : 'animate-slide-left-initial'}`}>
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className={`hero-content ${isVisible ? 'animate-fade-up' : 'animate-fade-up-initial'}`}>
          <div className="hero-badge">
            🚀 Smart Workout Tracker with RPE Monitoring
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-gradient">Train Smarter,</span>
            <br />
            <span className="hero-title-white">Not Harder</span>
          </h1>
          
          <p className="hero-subtitle">
            Track your workouts, monitor RPE levels, and watch your strength grow with our intelligent fitness companion
          </p>
          
          <div className="hero-buttons">
            <button className="hero-primary-btn">
              <Play className="btn-icon" />
              <span>Start Your Journey</span>
            </button>
            <button className="hero-secondary-btn">
              Watch Demo
            </button>
          </div>

          {/* Floating Stats */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-item ${isVisible ? 'animate-fade-up-delayed' : 'animate-fade-up-delayed-initial'}`} style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className={`scroll-indicator ${isVisible ? 'animate-fade-up-late' : 'animate-fade-up-late-initial'}`}>
          <ChevronDown className="scroll-icon animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              <span className="features-title-gradient">Powerful Features</span>
            </h2>
            <p className="features-subtitle">Everything you need to optimize your training</p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card ${activeFeature === index ? 'feature-card-active' : ''}`}
              >
                <div className="feature-header">
                  <div className={`feature-icon-wrapper ${activeFeature === index ? 'feature-icon-active' : ''}`}>
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Interactive Dashboard Preview */}
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <h3 className="dashboard-title">Your Fitness Dashboard</h3>
              <p className="dashboard-subtitle">Real-time insights into your training progress</p>
            </div>
            
            <div className="dashboard-cards">
              <div className="dashboard-card dashboard-card-purple">
                <div className="dashboard-card-header">
                  <span className="dashboard-card-label">Weekly Volume</span>
                  <TrendingUp className="dashboard-card-icon" />
                </div>
                <div className="dashboard-card-value">24,580</div>
                <div className="dashboard-card-change">+12% from last week</div>
              </div>
              
              <div className="dashboard-card dashboard-card-blue">
                <div className="dashboard-card-header">
                  <span className="dashboard-card-label">Avg RPE</span>
                  <Target className="dashboard-card-icon" />
                </div>
                <div className="dashboard-card-value">7.2</div>
                <div className="dashboard-card-change">Optimal range</div>
              </div>
              
              <div className="dashboard-card dashboard-card-green">
                <div className="dashboard-card-header">
                  <span className="dashboard-card-label">Est. 1RM</span>
                  <Zap className="dashboard-card-icon" />
                </div>
                <div className="dashboard-card-value">315 lbs</div>
                <div className="dashboard-card-change">Personal record!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Transform Your
            <span className="cta-title-gradient"> Training?</span>
          </h2>
          <p className="cta-subtitle">
            Join thousands of athletes who trust SQUAD-76 to optimize their performance
          </p>
          
          <div className="cta-content">
            <button className="cta-primary-btn">
              Get Started Free
            </button>
            <div className="rating-section">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="rating-star" />
              ))}
              <span className="rating-text">4.9/5 from 1,200+ reviews</span>
            </div>
          </div>
          
          <p className="cta-disclaimer">
            No credit card required • Free forever plan available
          </p>
        </div>
      </section>
    </div>
  );
};

export default WorkoutTrackerLanding;