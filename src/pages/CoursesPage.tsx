import React from 'react';
import { Clock, Users, BookOpen, Award, CheckCircle } from 'lucide-react';

const CoursesPage: React.FC = () => {
  const courses = [
    {
      level: 'A1',
      title: 'Beginner Level',
      description: 'Start your German journey with basic vocabulary, grammar, and conversation skills.',
      duration: '12 weeks',
      students: '15-20',
      skills: [
        'Basic greetings and introductions',
        'Numbers, dates, and time',
        'Family and personal information',
        'Simple present tense',
        'Basic vocabulary (food, colors, etc.)'
      ],
      color: 'green'
    },
    {
      level: 'A2',
      title: 'Elementary Level',
      description: 'Build upon A1 knowledge with more complex grammar and expanded vocabulary.',
      duration: '12 weeks',
      students: '15-20',
      skills: [
        'Past and future tenses',
        'Modal verbs',
        'Describing routines and habits',
        'Shopping and services',
        'Travel and transportation'
      ],
      color: 'blue'
    },
    {
      level: 'B1',
      title: 'Intermediate Level',
      description: 'Develop confidence in speaking and understanding more complex German.',
      duration: '14 weeks',
      students: '12-18',
      skills: [
        'Complex sentence structures',
        'Expressing opinions and preferences',
        'Work and career vocabulary',
        'Conditional sentences',
        'Cultural topics and discussions'
      ],
      color: 'orange'
    },
    {
      level: 'B2',
      title: 'Upper Intermediate',
      description: 'Master advanced German skills for academic and professional contexts.',
      duration: '16 weeks',
      students: '10-15',
      skills: [
        'Advanced grammar structures',
        'Academic and professional writing',
        'Complex discussions and debates',
        'Literature and media comprehension',
        'Preparation for university studies'
      ],
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'from-green-500 to-green-600',
      blue: 'from-blue-500 to-blue-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600'
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-800',
      blue: 'bg-blue-100 text-blue-800',
      orange: 'bg-orange-100 text-orange-800',
      red: 'bg-red-100 text-red-800'
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">German Language Courses</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              From A1 to B2 levels - Complete your German language journey with us
            </p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Course Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the Common European Framework of Reference (CEFR) standards to achieve 
              internationally recognized German language proficiency
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${getColorClasses(course.color)} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{course.level}</h3>
                      <p className="text-white/90 text-lg">{course.title}</p>
                    </div>
                    <div className={`px-4 py-2 rounded-full ${getBadgeColor(course.color)} font-semibold`}>
                      Level {course.level}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 text-lg">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-gray-700">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-red-600 mr-2" />
                      <span className="text-gray-700">{course.students} students</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-2">
                    {course.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Course Fees
            </h2>
            <p className="text-xl text-gray-600">
              Affordable pricing for quality German language education
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Physical Classes</h3>
                <p className="text-gray-600 mb-6">In-person learning with direct interaction</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-red-600">500,000</span>
                  <span className="text-xl text-gray-600 ml-2">UGX</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Per level (A1, A2, B1, or B2)</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Face-to-face instruction</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Interactive group activities</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Course materials included</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Certificate upon completion</span>
                  </li>
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Choose Physical
                </button>
              </div>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-8 border-2 border-yellow-200 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Online Classes</h3>
                <p className="text-gray-600 mb-6">Learn from anywhere with flexible scheduling</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-yellow-600">400,000</span>
                  <span className="text-xl text-gray-600 ml-2">UGX</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">Per level (A1, A2, B1, or B2)</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Live online sessions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Digital learning materials</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Recorded session access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>Online certificate</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                  Choose Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Class Schedules
            </h2>
            <p className="text-xl text-gray-600">
              Flexible timing options to fit your busy schedule
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { shift: 'Morning', time: '8:00 AM - 11:00 AM', days: 'Monday - Friday' },
              { shift: 'Afternoon', time: '2:00 PM - 5:00 PM', days: 'Monday - Friday' },
              { shift: 'Evening', time: '6:00 PM - 9:00 PM', days: 'Monday - Friday' },
              { shift: 'Weekend', time: '9:00 AM - 4:00 PM', days: 'Saturday & Sunday' }
            ].map((schedule, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <Clock className="w-8 h-8 text-red-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{schedule.shift}</h3>
                <p className="text-gray-600 mb-1">{schedule.time}</p>
                <p className="text-sm text-gray-500">{schedule.days}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning German?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Choose your level and begin your journey to German language proficiency today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Register Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;