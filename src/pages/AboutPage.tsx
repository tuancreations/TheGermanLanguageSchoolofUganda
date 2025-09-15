import React from 'react';
import { Target, Eye, Users, Award, BookOpen, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  const benefits = [
    'Study opportunities in German universities',
    'Work and career advancement in Germany',
    'Cultural exchange and personal growth',
    'Enhanced cognitive abilities',
    'Access to German literature and media',
    'Networking with German-speaking communities'
  ];

  const stats = [
    { number: '500+', label: 'Graduates' },
    { number: '98%', label: 'Success Rate' },
    { number: '5+', label: 'Years Experience' },
    { number: '4', label: 'Language Levels' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GLSU</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Empowering Ugandans with German language skills for global opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide high-quality German language education that empowers Ugandans 
                with the linguistic skills and cultural understanding needed to excel in 
                academic pursuits, professional careers, and personal growth in German-speaking 
                environments worldwide.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Eye className="w-8 h-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become Uganda's leading German language institution, recognized for 
                excellence in language education and cultural exchange, creating a bridge 
                between Uganda and German-speaking countries through language and cultural 
                understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a passion for connecting Uganda to global opportunities through German language education
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Established for Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The German Language School of Uganda (GLSU) was established to address the growing 
                demand for German language skills among Ugandan students and professionals. With the 
                increasing opportunities for study and work in Germany, we recognized the need for 
                high-quality, accessible German language education in Uganda.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Located in the heart of Kampala at Metropole House, we provide convenient access 
                to quality German language education. Our modern facilities and experienced instructors 
                create an optimal learning environment for students of all backgrounds.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, GLSU stands as a trusted institution, having successfully prepared hundreds 
                of students for their German language goals, whether for academic pursuits, 
                professional advancement, or personal enrichment.
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of German Proficiency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learning German opens doors to countless opportunities in education, career, and personal development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <BookOpen className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose GLSU */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GLSU?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Native and certified German teachers with extensive teaching experience</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Programs</h3>
              <p className="text-gray-600">Internationally recognized certificates aligned with CEFR standards</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Opportunities</h3>
              <p className="text-gray-600">Prepare for study and work opportunities in Germany and beyond</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;