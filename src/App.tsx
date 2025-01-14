import React, { useState } from 'react';
import { 
  ChevronDown, 
  BarChart3, 
  Target, 
  Layout, 
  CheckCircle, 
  ArrowRight, 
  X, 
  Rocket, 
  Settings, 
  TrendingUp, 
  MousePointer, 
  BarChart, 
  RefreshCw,
  Search,
  DollarSign,
  Clock,
  Briefcase,
  Target as TargetIcon,
  LineChart as ChartIcon
} from 'lucide-react';
import StarryBackground from './StarryBackground';

function App() {
  const [selectedDetail, setSelectedDetail] = useState<string | null>(null);

  const services = [
    {
      title: "Search Ads",
      description: "Targeted Google & Bing ads that capture high-intent prospects",
      icon: <MousePointer className="w-8 h-8" />,
    },
    {
      title: "Display Ads",
      description: "Visual campaigns that build brand awareness and drive engagement",
      icon: <Layout className="w-8 h-8" />,
    },
    {
      title: "Retargeting",
      description: "Re-engage visitors and increase conversion rates",
      icon: <RefreshCw className="w-8 h-8" />,
    },
    {
      title: "Analytics",
      description: "Data-driven insights to optimize campaign performance",
      icon: <BarChart className="w-8 h-8" />,
    }
  ];

  const timelineSteps = [
    {
      phase: "Phase 1: Setup",
      title: "Campaign Foundation",
      description: "Setting up the infrastructure for success",
      icon: <Settings className="w-6 h-6" />,
      details: [
        "New landing page development",
        "Conversion tracking setup",
        "Lead notification automation",
        "CRM integration"
      ]
    },
    {
      phase: "Phase 2: Launch",
      title: "Initial Campaign Deployment",
      description: "Getting your campaigns live and generating initial data",
      icon: <Rocket className="w-6 h-6" />,
      details: [
        "Campaign creation and launch",
        "First leads generated",
        "Bid adjustments",
        "Keyword refinement"
      ]
    },
    {
      phase: "Phase 3: Optimization",
      title: "Performance Enhancement",
      description: "Refining campaigns based on real data",
      icon: <Target className="w-6 h-6" />,
      details: [
        "Ad copy testing",
        "Offline conversion tracking",
        "Audience refinement",
        "Lead quality analysis"
      ]
    },
    {
      phase: "Phase 4: Scaling",
      title: "Growth & Expansion",
      description: "Scaling successful campaigns for maximum impact",
      icon: <TrendingUp className="w-6 h-6" />,
      details: [
        "Campaign adjustments",
        "Budget scaling strategy",
        "Performance monitoring",
        "Volume increase"
      ]
    }
  ];

  const businessCharacteristics = [
    {
      icon: <Search className="w-6 h-6" />,
      name: "High-Intent Search Volume",
      description: "Your services or products are actively searched for by potential clients with immediate needs or pain points requiring solutions.",
      details: [
        "Clients searching with specific problem-focused keywords",
        "Solutions to urgent business or personal needs",
        "Clear search intent indicating buying readiness"
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      name: "High Customer Lifetime Value",
      description: "Your average customer value justifies significant acquisition costs, allowing competitive bidding on valuable keywords.",
      details: [
        "Services with recurring revenue potential",
        "Products with high margins",
        "Long-term client relationships"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      name: "Urgent Need Services",
      description: "Your business addresses time-sensitive needs where customers require immediate solutions or information.",
      details: [
        "Emergency or time-critical services",
        "Rapid response requirements",
        "Immediate problem resolution"
      ]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      name: "Complex Purchase Decisions",
      description: "Your offering involves significant research and comparison, benefiting from early touchpoint establishment.",
      details: [
        "Multi-stakeholder decision processes",
        "High-value purchases requiring research",
        "Professional service evaluation"
      ]
    },
    {
      icon: <TargetIcon className="w-6 h-6" />,
      name: "Specific Geographic Markets",
      description: "Your services target specific locations or regions, enabling efficient geographic targeting and local market dominance.",
      details: [
        "Location-based service delivery",
        "Regional market focus",
        "Local service area optimization"
      ]
    },
    {
      icon: <ChartIcon className="w-6 h-6" />,
      name: "Scalable Fulfillment",
      description: "Your business can effectively handle increased lead volume with consistent service quality and delivery.",
      details: [
        "Operational capacity for growth",
        "Systematic lead handling process",
        "Scalable service delivery model"
      ]
    }
  ];

  const detailContent = {
    "New landing page development": {
      title: "Custom Landing Page Development",
      content: (
        <div className="space-y-4">
          <p>We create high-converting landing pages specifically designed for your PPC campaigns. Our process includes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom design aligned with your brand</li>
            <li>Mobile-first responsive layout</li>
            <li>Clear value propositions and CTAs</li>
            <li>Trust indicators and social proof</li>
            <li>Lead capture forms optimized for conversion</li>
            <li>Fast loading speeds for better Quality Score</li>
          </ul>
        </div>
      )
    },
    "Conversion tracking setup": {
      title: "Advanced Conversion Tracking",
      content: (
        <div className="space-y-4">
          <p>We implement comprehensive tracking to measure every important action:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Form submissions and phone calls</li>
            <li>Google Analytics 4 integration</li>
            <li>Custom event tracking</li>
            <li>Cross-domain tracking when needed</li>
            <li>Conversion value assignment</li>
          </ul>
        </div>
      )
    },
    "Lead notification automation": {
      title: "Lead Notification System",
      content: (
        <div className="space-y-4">
          <p>Automated lead handling system for immediate response:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time email notifications</li>
            <li>SMS alerts for high-priority leads</li>
            <li>Automated lead distribution</li>
            <li>Custom notification rules</li>
            <li>Integration with your sales process</li>
          </ul>
        </div>
      )
    },
    "CRM integration": {
      title: "Seamless CRM Integration",
      content: (
        <div className="space-y-4">
          <p>Connect your PPC campaigns directly to your CRM:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Automated lead import</li>
            <li>Custom field mapping</li>
            <li>Lead source tracking</li>
            <li>Campaign attribution</li>
            <li>ROI reporting</li>
          </ul>
        </div>
      )
    },
    "Campaign creation and launch": {
      title: "Campaign Launch Process",
      content: (
        <div className="space-y-4">
          <p>Strategic campaign setup and launch methodology:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Comprehensive keyword research</li>
            <li>Competitor analysis</li>
            <li>Ad copy development</li>
            <li>Campaign structure optimization</li>
            <li>Quality Score maximization</li>
          </ul>
        </div>
      )
    },
    "First leads generated": {
      title: "Initial Lead Generation",
      content: (
        <div className="space-y-4">
          <p>Monitoring and optimizing initial campaign performance:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Lead quality assessment</li>
            <li>Cost per lead tracking</li>
            <li>Conversion path analysis</li>
            <li>Performance benchmarking</li>
            <li>Initial optimization opportunities</li>
          </ul>
        </div>
      )
    },
    "Bid adjustments": {
      title: "Strategic Bid Management",
      content: (
        <div className="space-y-4">
          <p>Data-driven bid optimization process:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Device-based adjustments</li>
            <li>Geographic performance optimization</li>
            <li>Time-of-day bidding</li>
            <li>Audience bid modifiers</li>
            <li>Competitor bid monitoring</li>
          </ul>
        </div>
      )
    },
    "Keyword refinement": {
      title: "Keyword Optimization",
      content: (
        <div className="space-y-4">
          <p>Continuous keyword strategy improvement:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Search term analysis</li>
            <li>Negative keyword expansion</li>
            <li>Long-tail opportunity identification</li>
            <li>Quality Score improvement</li>
            <li>Competitor keyword analysis</li>
          </ul>
        </div>
      )
    },
    "Ad copy testing": {
      title: "Ad Copy Optimization",
      content: (
        <div className="space-y-4">
          <p>Systematic ad testing methodology:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>A/B testing of headlines</li>
            <li>Call-to-action optimization</li>
            <li>Extension testing</li>
            <li>Performance tracking</li>
            <li>Winning ad scale-up</li>
          </ul>
        </div>
      )
    },
    "Offline conversion tracking": {
      title: "Offline Conversion Tracking",
      content: (
        <div className="space-y-4">
          <p>Connecting offline sales to online campaigns:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>CRM data integration</li>
            <li>Phone call tracking</li>
            <li>Lead status import</li>
            <li>Revenue attribution</li>
            <li>ROAS calculation</li>
          </ul>
        </div>
      )
    },
    "Audience refinement": {
      title: "Audience Optimization",
      content: (
        <div className="space-y-4">
          <p>Advanced audience targeting strategies:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Custom intent audiences</li>
            <li>Similar audience expansion</li>
            <li>Remarketing list refinement</li>
            <li>Demographic targeting</li>
            <li>B2B audience development</li>
          </ul>
        </div>
      )
    },
    "Lead quality analysis": {
      title: "Lead Quality Optimization",
      content: (
        <div className="space-y-4">
          <p>Comprehensive lead quality improvement process:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quality scoring system</li>
            <li>Sales feedback loop</li>
            <li>Source quality analysis</li>
            <li>Cost per qualified lead tracking</li>
            <li>Lead nurturing optimization</li>
          </ul>
        </div>
      )
    },
    "Campaign adjustments": {
      title: "Campaign Optimization",
      content: (
        <div className="space-y-4">
          <p>Continuous campaign refinement process:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Performance analysis</li>
            <li>Budget optimization</li>
            <li>Targeting refinement</li>
            <li>Bid strategy updates</li>
            <li>Campaign structure improvements</li>
          </ul>
        </div>
      )
    },
    "Budget scaling strategy": {
      title: "Strategic Budget Scaling",
      content: (
        <div className="space-y-4">
          <p>Methodical approach to scaling ad spend:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Incremental budget increases</li>
            <li>Performance monitoring</li>
            <li>ROI maintenance</li>
            <li>Market opportunity analysis</li>
            <li>Competitive spending analysis</li>
          </ul>
        </div>
      )
    },
    "Performance monitoring": {
      title: "Performance Tracking",
      content: (
        <div className="space-y-4">
          <p>Comprehensive performance monitoring system:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Real-time dashboards</li>
            <li>Custom reporting</li>
            <li>Alert systems</li>
            <li>Competitor tracking</li>
            <li>ROI monitoring</li>
          </ul>
        </div>
      )
    },
    "Volume increase": {
      title: "Lead Volume Scaling",
      content: (
        <div className="space-y-4">
          <p>Strategic approach to increasing lead volume:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Market expansion</li>
            <li>New keyword opportunities</li>
            <li>Audience expansion</li>
            <li>Ad inventory optimization</li>
            <li>Conversion rate improvement</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <StarryBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300">
            Triple Your Leads in 60 Days—Guaranteed. That's It.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We leverage relentless PPC optimization to explode your lead count.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 transition-all transform hover:scale-105"
            >
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Our PPC Services at a Glance</h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive PPC management solutions designed to maximize your ROI and drive business growth
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500 w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 transition-all transform hover:scale-105"
            >
              Schedule a Strategy Call
            </button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">What To Expect</h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Your 90-day roadmap to scaling your business
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/0 via-orange-500 to-orange-500/0"></div>
            
            <div className="space-y-12 lg:space-y-24">
              {timelineSteps.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50"></div>
                  
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                        <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                          {step.icon}
                        </div>
                        <div>
                          <div className="text-orange-500 font-semibold">{step.phase}</div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-400 mb-4">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <li 
                            key={i} 
                            className={`flex items-center gap-2 text-sm text-gray-300 cursor-pointer group ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
                            onClick={() => setSelectedDetail(detail)}
                          >
                            <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                            <span className="group-hover:text-orange-500 transition-colors">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button
              className="bg-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-400 transition-all transform hover:scale-105"
            >
              Start Your PPC Journey Today
            </button>
          </div>
        </div>
      </section>

      {/* Business Characteristics Section */}
      <section className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Is PPC Right For Your Business?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Successful PPC campaigns align with specific business characteristics. Evaluate your fit based on these key indicators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessCharacteristics.map((characteristic, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                    {characteristic.icon}
                  </div>
                  <h3 className="text-xl font-bold">{characteristic.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{characteristic.description}</p>
                <ul className="space-y-2">
                  {characteristic.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Why These Characteristics Matter</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-orange-500 mb-4">ROI Optimization</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>Higher conversion rates from qualified traffic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>Justified CAC for high-value services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>Measurable performance metrics</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-orange-500 mb-4">Market Position</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>Capture market share at critical moments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>Establish authority in target markets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                    <span>Scale presence in profitable segments</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="calendly-inline-widget" 
               data-url="https://calendly.com/jason-digitalrocket/30min?background_color=1a1a1a&text_color=ffffff&primary_color=ffa500" 
               style={{minWidth: "320px", height: "700px"}}>
          </div>
        </div>
      </section>

      {/* Detail Popup */}
      {selectedDetail && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-orange-500">{detailContent[selectedDetail]?.title}</h3>
                <button 
                  onClick={() => setSelectedDetail(null)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="text-gray-200">
                {detailContent[selectedDetail]?.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;