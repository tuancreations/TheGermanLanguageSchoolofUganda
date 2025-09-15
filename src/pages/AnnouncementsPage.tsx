import React from 'react';
import { Calendar, Clock, Users, BookOpen, Award, Bell } from 'lucide-react';

const AnnouncementsPage: React.FC = () => {
  const announcements = [
    {
      id: 1,
      title: 'New Intake Registration Now Open - January 2025',
      date: '2024-12-15',
      time: '09:00',
      category: 'Registration',
      priority: 'high',
      content: 'We are excited to announce that registration for our January 2025 intake is now open! This intake offers all levels from A1 to B2 with both physical and online learning options. Early bird registration is available until December 31st, 2024, with a special discount of 10% on course fees. Limited slots available for each level and shift. Register now to secure your spot in Uganda\'s premier German language program.',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 2,
      title: 'A2 Level Graduation Ceremony - December 2024',
      date: '2024-12-20',
      time: '14:00',
      category: 'Event',
      priority: 'medium',
      content: 'Congratulations to our A2 level students who have successfully completed their German language journey! Join us for a graduation ceremony on December 20th at 2:00 PM at our Metropole House location. Certificates will be awarded, and we will celebrate the achievements of our dedicated students. Family and friends are welcome to attend this special occasion.',
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 3,
      title: 'Holiday Schedule - December 2024 & January 2025',
      date: '2024-12-10',
      time: '12:00',
      category: 'Schedule',
      priority: 'medium',
      content: 'Please note our holiday schedule for the festive season. Classes will be suspended from December 22nd, 2024, to January 5th, 2025. Regular classes will resume on January 6th, 2025. All registered students will receive makeup sessions to ensure no learning time is lost. Online support and resources will remain available throughout the holiday period.',
      icon: <Calendar className="w-6 h-6" />
    },
    {
      id: 4,
      title: 'New Partnership with Goethe Institut Kampala',
      date: '2024-12-05',
      time: '10:30',
      category: 'Partnership',
      priority: 'high',
      content: 'We are thrilled to announce our new partnership with Goethe Institut Kampala! This collaboration will provide our students with additional resources, cultural events, and opportunities for international certification. Students will have access to German cultural programs, library resources, and preparation materials for internationally recognized German language certificates.',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 5,
      title: 'Weekend Workshop: German Culture & Traditions',
      date: '2024-12-14',
      time: '09:00',
      category: 'Workshop',
      priority: 'low',
      content: 'Join us for an immersive weekend workshop focusing on German culture and traditions! This special event will feature traditional German foods, music, customs, and interactive cultural activities. The workshop is open to all current students and provides an excellent opportunity to practice German in a cultural context. Registration is free for enrolled students.',
      icon: <Bell className="w-6 h-6" />
    },
    {
      id: 6,
      title: 'B1 Level Mock Exam Preparation Session',
      date: '2024-12-18',
      time: '16:00',
      category: 'Academic',
      priority: 'medium',
      content: 'B1 level students are invited to attend a comprehensive mock exam preparation session. This session will cover all aspects of the B1 exam including speaking, listening, reading, and writing components. Our experienced instructors will provide valuable tips and strategies for exam success. Practice materials and feedback will be provided to all participants.',
      icon: <BookOpen className="w-6 h-6" />
    }
  ];

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[priority as keyof typeof colors] || colors.medium;
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Registration': <Users className="w-5 h-5" />,
      'Event': <Calendar className="w-5 h-5" />,
      'Schedule': <Clock className="w-5 h-5" />,
      'Partnership': <Award className="w-5 h-5" />,
      'Workshop': <Bell className="w-5 h-5" />,
      'Academic': <BookOpen className="w-5 h-5" />
    };
    return icons[category as keyof typeof icons] || <Bell className="w-5 h-5" />;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Announcements</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Stay updated with the latest news, events, and important information from GLSU
            </p>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {announcements.map((announcement) => (
              <article 
                key={announcement.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 text-red-600 p-2 rounded-full">
                        {getCategoryIcon(announcement.category)}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 hover:text-red-600 cursor-pointer transition-colors">
                          {announcement.title}
                        </h2>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="text-sm">{formatDate(announcement.date)}</span>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span className="text-sm">{announcement.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(announcement.priority)}`}>
                        {announcement.priority.toUpperCase()}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {announcement.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {announcement.content}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Bell className="w-4 h-4 mr-1" />
                        <span>Important announcement</span>
                      </div>
                      <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-yellow-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, course updates, and special announcements directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600">
              Find what you're looking for quickly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Registration</h3>
              <p className="text-gray-600 mb-4">Register for upcoming German language courses</p>
              <a href="/register" className="text-red-600 hover:text-red-700 font-medium">
                Register Now →
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Courses</h3>
              <p className="text-gray-600 mb-4">Explore our A1 to B2 German language programs</p>
              <a href="/courses" className="text-red-600 hover:text-red-700 font-medium">
                View Courses →
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-red-100 text-red-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">Get in touch with our admissions team</p>
              <a href="/contact" className="text-red-600 hover:text-red-700 font-medium">
                Contact Now →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnnouncementsPage;