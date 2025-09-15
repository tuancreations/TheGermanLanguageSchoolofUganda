import React, { useState } from 'react';
import { CheckCircle, User, Mail, Phone, BookOpen, Clock, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  courseLevel: string;
  shift: string;
  learningMode: string;
  previousExperience: string;
  motivation: string;
}

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    courseLevel: '',
    shift: '',
    learningMode: '',
    previousExperience: '',
    motivation: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courseLevels = [
    { value: 'A1', label: 'A1 - Beginner', description: 'No prior German knowledge required' },
    { value: 'A2', label: 'A2 - Elementary', description: 'Basic German knowledge required' },
    { value: 'B1', label: 'B1 - Intermediate', description: 'Good foundation in German required' },
    { value: 'B2', label: 'B2 - Upper Intermediate', description: 'Advanced German skills required' }
  ];

  const shifts = [
    { value: 'morning', label: 'Morning', time: '8:00 AM - 11:00 AM' },
    { value: 'afternoon', label: 'Afternoon', time: '2:00 PM - 5:00 PM' },
    { value: 'evening', label: 'Evening', time: '6:00 PM - 9:00 PM' },
    { value: 'weekend', label: 'Weekend', time: 'Saturday & Sunday' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.courseLevel) newErrors.courseLevel = 'Please select a course level';
    if (!formData.shift) newErrors.shift = 'Please select a shift';
    if (!formData.learningMode) newErrors.learningMode = 'Please select learning mode';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering with GLSU. We have received your application and will contact you within 24 hours with further details.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-800">
                <strong>Next Steps:</strong> Check your email for a confirmation message and payment instructions.
              </p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  courseLevel: '',
                  shift: '',
                  learningMode: '',
                  previousExperience: '',
                  motivation: ''
                });
              }}
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Register Another Student
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Course Registration</h1>
            <p className="text-xl text-red-100">
              Begin your German language journey with GLSU
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Registration Form</h2>
              <p className="text-gray-600 mt-2">
                Please fill out all required fields to complete your registration
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2 text-red-600" />
                    Personal Information
                  </h3>
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                      errors.fullName ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                      errors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="+256 XXX XXXXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Course Selection */}
                <div className="md:col-span-2 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                    Course Selection
                  </h3>
                </div>

                <div>
                  <label htmlFor="courseLevel" className="block text-sm font-medium text-gray-700 mb-2">
                    Course Level *
                  </label>
                  <select
                    id="courseLevel"
                    name="courseLevel"
                    value={formData.courseLevel}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                      errors.courseLevel ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select course level</option>
                    {courseLevels.map(level => (
                      <option key={level.value} value={level.value}>
                        {level.label} - {level.description}
                      </option>
                    ))}
                  </select>
                  {errors.courseLevel && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.courseLevel}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="shift" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Shift *
                  </label>
                  <select
                    id="shift"
                    name="shift"
                    value={formData.shift}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 ${
                      errors.shift ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select preferred shift</option>
                    {shifts.map(shift => (
                      <option key={shift.value} value={shift.value}>
                        {shift.label} ({shift.time})
                      </option>
                    ))}
                  </select>
                  {errors.shift && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.shift}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Learning Mode *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div 
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.learningMode === 'physical' 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, learningMode: 'physical' }))}
                    >
                      <input
                        type="radio"
                        id="physical"
                        name="learningMode"
                        value="physical"
                        checked={formData.learningMode === 'physical'}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <label htmlFor="physical" className="cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">Physical Classes</h4>
                            <p className="text-sm text-gray-600">In-person learning</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-red-600">500,000</div>
                            <div className="text-sm text-gray-500">UGX</div>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div 
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        formData.learningMode === 'online' 
                          ? 'border-yellow-500 bg-yellow-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, learningMode: 'online' }))}
                    >
                      <input
                        type="radio"
                        id="online"
                        name="learningMode"
                        value="online"
                        checked={formData.learningMode === 'online'}
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <label htmlFor="online" className="cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">Online Classes</h4>
                            <p className="text-sm text-gray-600">Learn from anywhere</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-yellow-600">400,000</div>
                            <div className="text-sm text-gray-500">UGX</div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  {errors.learningMode && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.learningMode}
                    </p>
                  )}
                </div>

                {/* Additional Information */}
                <div className="md:col-span-2 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Additional Information (Optional)
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous German Learning Experience
                  </label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Tell us about any previous German language learning experience..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to learn German?
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="Share your goals and motivation for learning German..."
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> A registration fee of UGX 25,000 is required to secure your spot. 
                    Payment instructions will be provided after form submission.
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Registration...
                    </span>
                  ) : (
                    'Submit Registration'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;