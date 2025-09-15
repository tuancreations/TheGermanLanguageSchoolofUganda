import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, BookOpen, Globe, Award, Clock, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'A1 to B2 Levels',
      description: 'Complete German language curriculum from beginner to upper-intermediate level'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Teachers',
      description: 'Native and certified German language instructors with years of experience'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Opportunities',
      description: 'Open doors to studying and working in Germany and other German-speaking countries'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Training',
      description: 'Internationally recognized certificates upon course completion'
    }
  ];

  const shifts = [
    { type: 'Morning', time: '8:00 AM - 11:00 AM', mode: 'Physical & Online' },
    { type: 'Afternoon', time: '2:00 PM - 5:00 PM', mode: 'Physical & Online' },
    { type: 'Evening', time: '6:00 PM - 9:00 PM', mode: 'Physical & Online' },
    { type: 'Weekend', time: 'Saturday & Sunday', mode: 'Physical & Online' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Learn
                <br />
                <span className="text-yellow-200">German</span>
                <br />
                Language
              </h1>
              <p className="text-xl mb-8 text-red-100">
                Unlock German potentials with the German Language School of Uganda. 
                Join thousands of students who have successfully mastered German from A1 to B2 levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Register Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/courses"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all flex items-center justify-center"
                >
                  View Courses
                </Link>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-white text-red-600 p-8 rounded-2xl shadow-2xl inline-block">
                <div className="text-center">
                  <div className="bg-red-600 text-white rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                    <div className="text-center">
                      <div className="text-sm font-bold">Registration</div>
                      <div className="text-xs">IN PROGRESS</div>
                      <div className="text-lg font-bold">25000</div>
                      <div className="text-xs">Ugx</div>
                    </div>
                  </div>
                  <p className="font-semibold text-lg mb-2">Current Intake</p>
                  <p className="text-sm text-gray-600">
                    Special registration fee for Au-pairs & volunteers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GLSU?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive German language education designed to prepare you for 
              academic, professional, and personal success in German-speaking environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all">
                <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tuition & Shifts
            </h2>
            <p className="text-xl text-gray-600">
              Flexible learning options to fit your schedule and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pricing */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Tuition Fees</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Physical Classes</h4>
                      <p className="text-gray-600">In-person learning experience</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-red-600">500,000</div>
                      <div className="text-sm text-gray-500">UGX (per level)</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">Online Classes</h4>
                      <p className="text-gray-600">Learn from anywhere</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-yellow-600">400,000</div>
                      <div className="text-sm text-gray-500">UGX (per level)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shifts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Shifts</h3>
              <div className="space-y-4">
                {shifts.map((shift, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md flex items-center">
                    <Clock className="w-6 h-6 text-red-600 mr-4" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{shift.type}</h4>
                      <p className="text-sm text-gray-600">{shift.time}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600">{shift.mode}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your German Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved their German language goals with GLSU. 
            Registration is now open for all levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Register Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gray-300 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center"
            >
              <MapPin className="mr-2 w-5 h-5" />
              Visit Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;