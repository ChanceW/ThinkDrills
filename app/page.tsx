'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function HomeContent() {
  const searchParams = useSearchParams()
  const deleted = searchParams.get('deleted')

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-md px-8 py-8">
        <div className="text-center mb-8">
          <Image
            src="/ThinkDrillsLogo.png"
            alt="ThinkDrills Logo"
            width={200}
            height={200}
            className="mx-auto mb-4 rounded-[15px]"
          />
          {deleted === 'true' && (
            <div className="bg-green-100 text-green-700 p-3 rounded-lg mb-4">
              Your account has been successfully deleted. We're sorry to see you go!
            </div>
          )}
        </div>

        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Welcome Students
          </h1>
          
          <p className="text-lg sm:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Personalized AI-powered learning that adapts to your child's interests and academic needs
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
            <Link 
              href="/parent/signup" 
              className="btn-get-started text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
            >
              Get Started
            </Link>
            
            <Link 
              href="/parent/login" 
              className="btn-parent-login text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
            >
              Parent Login
            </Link>
            
            <Link 
              href="/student/login" 
              className="btn-student-login text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
            >
              Student Login
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-bg-blue -mx-8">
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-8 sm:mb-12">
              Why Choose ThinkDrills?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Personalized Learning */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 sm:h-12 w-10 sm:w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Personalized Learning</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  AI-generated worksheets tailored to each student's interests, making learning more engaging and effective
                </p>
              </div>

              {/* Interest-Based */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 sm:h-12 w-10 sm:w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Interest-Based Learning</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Questions incorporate students' favorite topics, from space and animals to music and sports
                </p>
              </div>

              {/* Comprehensive Subjects */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 sm:h-12 w-10 sm:w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Multiple Subjects</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Covers Math, Science, Social Studies, Reading, and more, aligned with grade-level standards
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Benefits Section */}
      <div className="w-full bg-bg-orange -mx-8">
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-8 sm:mb-12">
              Benefits for Students
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="h-8 sm:h-10 w-8 sm:w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Increased Engagement</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Students stay motivated with questions that relate to their interests
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="h-8 sm:h-10 w-8 sm:w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 sm:h-6 w-5 sm:w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Daily Progress</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Regular practice with new worksheets generated daily
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="h-8 sm:h-10 w-8 sm:w-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 sm:h-6 w-5 sm:w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Immediate Feedback</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Detailed explanations help students understand concepts better
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="h-8 sm:h-10 w-8 sm:w-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 sm:h-6 w-5 sm:w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Continuous Adaptation</h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Questions adapt to student's progress and changing interests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-white -mx-8">
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Join ThinkDrills today and discover a new way of learning that's tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/parent/signup" 
                className="btn-get-started text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
              >
                Get Started
              </Link>
              <Link 
                href="/parent/login" 
                className="btn-parent-login text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
              >
                Parent Login
              </Link>
              <Link 
                href="/student/login" 
                className="btn-student-login text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 w-full sm:w-auto"
              >
                Student Login
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default function Home() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex flex-col items-center bg-gray-50">
        <div className="w-full max-w-md px-8 py-8">
          <div className="text-center mb-8">
            <Image
              src="/ThinkDrillsLogo.png"
              alt="ThinkDrills Logo"
              width={200}
              height={200}
              className="mx-auto mb-4 rounded-[15px]"
            />
          </div>
        </div>
      </main>
    }>
      <HomeContent />
    </Suspense>
  )
} 