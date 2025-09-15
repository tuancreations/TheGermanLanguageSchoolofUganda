import React from 'react';
import { Monitor, Headphones, Users, Award, PlayCircle, BookOpen, Globe, Clock } from 'lucide-react';

const ELearningPage: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Interactive Lessons',
      description: 'Engaging multimedia content with interactive exercises and real-time feedback'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Audio Pronunciation',
      description: 'Native German speaker recordings for perfect pronunciation practice'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Virtual Classrooms',
      description: 'Live online sessions with instructors and fellow students'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Progress Tracking',
      description: 'Detailed analytics on your learning progress and achievements'
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: 'Video Lessons',
      description: 'High-quality video content for visual learning and comprehension'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Cultural Content',
      description: 'Learn about German culture, customs, and traditions alongside language'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">E-Learning Platform</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Experience the future of German language learning with our comprehensive online platform
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12 bg-yellow-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-yellow-200 text-yellow-800 px-6 py-3 rounded-full font-semibold">
              <Clock className="w-5 h-5 mr-2" />
              Coming Soon - Currently in Development
            </div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our advanced e-learning platform is under development. We're creating an immersive 
              online German learning experience that will revolutionize language education in Uganda.
            </p>
          </div>
        </div>
      </section>

      {/* Preview Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our e-learning platform will offer cutting-edge features designed to make 
              German language learning effective, engaging, and accessible from anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Future of German Language Learning
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our e-learning platform will combine the best of traditional teaching methods 
                with modern technology to create an unparalleled learning experience. Students 
                will have access to a comprehensive suite of tools designed to accelerate 
                German language acquisition.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adaptive Learning Paths</h4>
                    <p className="text-gray-600 text-sm">Personalized curriculum that adapts to your learning pace and style</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Virtual Classes</h4>
                    <p className="text-gray-600 text-sm">Real-time interaction with instructors and fellow students</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gamified Learning</h4>
                    <p className="text-gray-600 text-sm">Earn points, badges, and compete with other learners</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8 text-center">
              <Monitor className="w-24 h-24 text-gray-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Platform Preview</h3>
              <p className="text-gray-600 mb-6">
                Get a glimpse of what our e-learning platform will offer when it launches
              </p>
              <div className="space-y-3 text-left">
                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Interactive lesson modules</span>
                </div>
                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Real-time progress tracking</span>
                </div>
                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Mobile-responsive design</span>
                </div>
                <div className="bg-white rounded-lg p-3 flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Offline content access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-gray-600">
              Our platform leverages cutting-edge technology to deliver exceptional learning experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">AI</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Learning</h3>
              <p className="text-sm text-gray-600">Artificial intelligence for personalized learning paths</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cloud-Based</h3>
              <p className="text-sm text-gray-600">Access your courses from any device, anywhere</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Voice Recognition</h3>
              <p className="text-sm text-gray-600">Advanced speech recognition for pronunciation practice</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Blockchain Certificates</h3>
              <p className="text-sm text-gray-600">Secure, verifiable digital certificates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beta Testing Signup */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Among the First to Experience It
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Sign up for our beta testing program and get early access to our revolutionary 
            e-learning platform when it launches.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email for beta access"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-r-lg hover:bg-yellow-400 font-semibold transition-colors">
                Join Beta
              </button>
            </div>
            <p className="text-sm text-red-200 mt-4">
              Beta testers will receive free access to the platform for the first 3 months
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ELearningPage;