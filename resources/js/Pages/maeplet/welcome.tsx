import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, Database, Globe, Bell, Shield, Code, Monitor, 
  Zap, BarChart, CheckCircle, ChevronRight, 
  Lock, Cpu, RefreshCw, ExternalLink, DownloadCloud,
} from 'lucide-react';

export default function Welcome() {
  const { user } = usePage().props.auth;
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-blue-500 animate-pulse" />,
      title: "Advanced Web Scraping",
      description: "Design and manage sophisticated web scraping pipelines with our intuitive visual builder."
    },
    {
      icon: <Database className="h-10 w-10 text-indigo-500" />,
      title: "Data Extraction & Management",
      description: "Extract structured data from any website and manage it with our powerful data tools."
    },
    {
      icon: <Bell className="h-10 w-10 text-purple-500" />,
      title: "Layout Change Detection",
      description: "Receive instant notifications when website layouts change, preventing broken scrapers."
    },
    {
      icon: <Code className="h-10 w-10 text-pink-500" />,
      title: "API Generation",
      description: "Create sellable APIs from your scraped data with just a few clicks."
    },
    {
      icon: <Shield className="h-10 w-10 text-green-500" />,
      title: "Proxy Support",
      description: "Robust proxy rotation and management to ensure reliable data collection."
    },
    {
      icon: <Monitor className="h-10 w-10 text-yellow-500" />,
      title: "Screenshot API",
      description: "Capture and analyze website screenshots as part of your data pipeline."
    }
  ];

  const extraFeatures = [
    {
      icon: <Lock className="h-8 w-8 text-blue-500" />,
      title: "Data Quarantine",
      description: "Isolate and validate suspicious data before adding it to your pipeline."
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-500" />,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols protect your data."
    },
    {
      icon: <Cpu className="h-8 w-8 text-purple-500" />,
      title: "AI-Assisted Scraping",
      description: "Smart extraction recognizes patterns and suggests optimal selectors."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-green-500" />,
      title: "Auto-Healing Scrapers",
      description: "Self-repairing scrapers adapt to minor site changes automatically."
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      features: [
        "5 active scraping projects",
        "1,000 pages per day",
        "Basic monitoring",
        "Email support",
        "Visual scraper builder",
        "Data export (CSV, JSON)"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      features: [
        "25 active scraping projects",
        "10,000 pages per day",
        "Advanced monitoring",
        "Layout change detection",
        "API endpoints",
        "Priority support",
        "Screenshot API access",
        "Proxy rotation",
        "Scheduled scraping"
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited scraping projects",
        "Custom page limits",
        "Advanced data management",
        "Dedicated proxies",
        "White-label API options",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment option",
        "Compliance assistance"
      ],
      highlighted: false
    }
  ];

  // Particle animation component
  const ParticleBackground = () => {
    return (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-20"
            style={{
              width: Math.random() * 20 + 5 + 'px',
              height: Math.random() * 20 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <AuthenticatedLayout>
      <Head title="Welcome to Maeplet" />
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(10px, 15px) rotate(5deg); }
          50% { transform: translate(20px, 5px) rotate(10deg); }
          75% { transform: translate(15px, 25px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
      `}</style>
      
      {/* Hero Section with Particles */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
        <ParticleBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="text-center">
            <div 
              className="inline-block fadeIn py-1 px-3 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-800 dark:text-blue-200 text-sm font-semibold"
              style={{ animationDelay: '0.1s' }}
            >
              The Web Scraping Platform for Data Hogs
            </div>
            
            <h1 
              className="text-5xl fadeIn md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
              style={{ animationDelay: '0.3s' }}
            >
              Web Scraping <span className="text-blue-600 dark:text-blue-400 relative">
                Simplified 
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 138 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 5.5C30.5 1.5 107 -0.5 137 7" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p 
              className="text-xl fadeIn md:text-2xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8"
              style={{ animationDelay: '0.5s' }}
            >
              Design, create, and manage powerful web scraping pipelines with zero coding required.
              <span className="block mt-2 text-blue-600 dark:text-blue-400 font-medium">Trusted by 2,500+ data professionals worldwide.</span>
            </p>
            
            <div 
              className="mt-10 fadeIn flex flex-col sm:flex-row justify-center gap-4"
              style={{ animationDelay: '0.7s' }}
            >
              <button className="px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition flex items-center justify-center transform hover:scale-105">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition flex items-center justify-center">
                Watch Demo <ExternalLink className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div 
              className="mt-16 fadeIn text-center"
              style={{ animationDelay: '0.9s' }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">TRUSTED BY TEAMS AT</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                {/* Replace with actual logos or keep placeholder text */}
                <div className="text-lg font-bold text-gray-400">Microsomes</div>
                <div className="text-lg font-bold text-gray-400">Voneus LTD</div>
                <div className="text-lg font-bold text-gray-400">Stickee Technology</div>
                <div className="text-lg font-bold text-gray-400">SoTechnology</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Welcome Banner (for logged-in users) */}
    

      {/* Features Section with Animation */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-800 dark:text-blue-200 text-sm font-semibold">
              Powerful Features
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">All-in-One Web Scraping Platform</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to extract, process, and monetize web data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 fadeIn dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                <div className="mt-6">
                  <a href="#" className="text-blue-600 dark:text-blue-400 font-medium flex items-center group">
                    Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Extra Features Row */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extraFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-blue-50 fadeIn dark:bg-blue-900/20 p-6 rounded-xl flex items-start"
                style={{ animationDelay: `${0.6 + 0.1 * index}s` }}
              >
                <div className="mr-4 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Demo Section */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-100 dark:bg-indigo-900/20 rounded-tr-full opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div 
              className="mb-12 fadeIn lg:mb-0"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="inline-block py-1 px-3 mb-4 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-800 dark:text-indigo-200 text-sm font-semibold">
                Intuitive Interface
              </span>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Visual Scraper Builder</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our drag-and-drop interface makes building complex scraping pipelines as simple as connecting blocks. No coding required.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Point-and-click element selector",
                  "Visual data transformation tools",
                  "Real-time scraper testing",
                  "Instant error detection and fixes"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <button className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 dark:hover:bg-indigo-400 transition flex items-center justify-center">
                  Try Visual Builder
                </button>
              </div>
            </div>
            
            <div 
              className="bg-white dark:bg-gray-900 fadeIn p-4 rounded-xl shadow-2xl relative"
              style={{ animationDelay: '0.4s' }}
            >
              {/* Placeholder for interface screenshot */}
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  <p className="font-medium">Visual Builder Screenshot</p>
                </div>
              </div>
              
              {/* Browser-like controls */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-100 dark:bg-gray-800 rounded-t-lg flex items-center px-3 space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works with Animated Steps */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-800 dark:text-blue-200 text-sm font-semibold">
              Simple Process
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get from raw web data to actionable insights in minutes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="text-center fadeIn relative"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-6 animate-bounce-slow">
                <Zap className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">1. Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Create your scraping pipeline with our visual builder. No coding required.
              </p>
              
              {/* Connector line (visible on desktop) */}
              <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-x-8">
                <div className="absolute right-0 w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-600 animate-pulse"></div>
              </div>
            </div>
            
            <div 
              className="text-center fadeIn relative"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-6 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <Database className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">2. Extract</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Automatically collect and process data from any website.
              </p>
              
              {/* Connector line (visible on desktop) */}
              <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 transform -translate-x-8">
                <div className="absolute right-0 w-3 h-3 rounded-full bg-blue-400 dark:bg-blue-600 animate-pulse"></div>
              </div>
            </div>
            
            <div 
              className="text-center fadeIn"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mb-6 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                <BarChart className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">3. Analyze</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Transform raw data into valuable insights or sellable API endpoints.
              </p>
            </div>
          </div>
          
          {/* Example Result Box */}
          <div 
            className="mt-20 fadeIn bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Ready to Use Data</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                  Export your data in multiple formats or create instant API endpoints that you can monetize.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-800 dark:text-blue-200 text-sm">JSON</span>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/40 rounded-full text-green-800 dark:text-green-200 text-sm">CSV</span>
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/40 rounded-full text-yellow-800 dark:text-yellow-200 text-sm">Excel</span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/40 rounded-full text-purple-800 dark:text-purple-200 text-sm">API</span>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/40 rounded-full text-pink-800 dark:text-pink-200 text-sm">Webhook</span>
                </div>
              </div>
              <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-400 transition flex items-center">
                <DownloadCloud className="mr-2 h-5 w-5" />
                Download Sample Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section with Animation */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 mb-4 bg-green-100 dark:bg-green-900 rounded-full text-green-800 dark:text-green-200 text-sm font-semibold">
              Pricing Plans
            </span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Transparent Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your data extraction needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-white fadeIn dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700 relative transition-all duration-300 hover:shadow-xl
                  ${plan.highlighted ? 'ring-2 ring-blue-500 transform md:scale-105' : ''}`}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {plan.badge}
                  </div>
                )}
                
                <div className={`p-8 ${plan.highlighted ? 'bg-blue-50 dark:bg-blue-900/30' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {plan.name === "Enterprise" ? "Custom tailored to your needs" : "Billed monthly or annually"}
                  </p>
                </div>
                
                <div className="px-8 pt-6 pb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <button 
                      className={`w-full py-4 rounded-lg font-medium shadow-md transition-all duration-300 transform hover:translate-y-1
                        ${plan.highlighted 
                          ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white'}`}
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      </AuthenticatedLayout>
    );
  }