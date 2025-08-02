import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  Users,
  TrendingUp,
  UserCheck,
  BookOpen,
  Users2,
  Trophy,
  Heart,
  Calendar,
  ArrowRight,
  Star
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Honesty Private School</h1>
                <p className="text-sm text-gray-600">Excellence in Education</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-red-600 font-medium">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-red-600">About Us</Link>
              <Link href="/programs" className="text-gray-700 hover:text-red-600">Academic Programs</Link>
              <Link href="/events" className="text-gray-700 hover:text-red-600">Events</Link>
              <Link href="/resources" className="text-gray-700 hover:text-red-600">Student Resources</Link>
              <Link href="/portal" className="text-gray-700 hover:text-red-600">Portal</Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
            </nav>

            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Enroll Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-red-600">Honesty Private School</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Where excellence meets integrity. Providing quality education from Kindergarten to
            Grade 12, fostering academic achievement and character development in a nurturing environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">University Acceptance</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Dedicated Teachers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Announcements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <Calendar className="h-4 w-4 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Latest Announcements</h2>
            </div>
            <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-red-600 text-white">New</Badge>
                  <Badge variant="outline">Important</Badge>
                </div>
                <CardTitle>School Registration Open for 2024-2025</CardTitle>
                <CardDescription>
                  Registration for the new academic year is now open. Early bird discounts available until March 15th.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2/1/2024</span>
                  <Button variant="ghost" className="text-red-600">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-red-600 text-white">New</Badge>
                  <Badge variant="outline">Event</Badge>
                </div>
                <CardTitle>Annual Science Fair - March 20th</CardTitle>
                <CardDescription>
                  Students from grades 6-12 will showcase their innovative science projects. Parents and community welcome!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2/15/2024</span>
                  <Button variant="ghost" className="text-red-600">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">Meeting</Badge>
                </div>
                <CardTitle>Parent-Teacher Conferences</CardTitle>
                <CardDescription>
                  Schedule your one-on-one meetings with teachers. Online booking available through parent portal.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">2/10/2024</span>
                  <Button variant="ghost" className="text-red-600">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">Update</Badge>
                </div>
                <CardTitle>New Online Learning Platform</CardTitle>
                <CardDescription>
                  We've upgraded our digital classroom experience with interactive tools and better accessibility.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">1/28/2024</span>
                  <Button variant="ghost" className="text-red-600">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Honesty Private School?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing an exceptional educational experience that prepares students for success in life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Excellence</h3>
                <p className="text-gray-600">
                  Comprehensive curriculum from KG to Grade 12 designed to nurture critical thinking and creativity.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users2 className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Class Sizes</h3>
                <p className="text-gray-600">
                  Personalized attention with low student-to-teacher ratios ensuring every child receives quality education.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Character Development</h3>
                <p className="text-gray-600">
                  Building integrity, honesty, and leadership skills alongside academic achievement.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Caring Environment</h3>
                <p className="text-gray-600">
                  A nurturing school community where students feel safe, supported, and inspired to learn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Star className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our School Family?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Give your child the gift of quality education in a caring, supportive environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Start Enrollment <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
              Schedule Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Honesty Private School</h3>
                  <p className="text-gray-400 text-sm">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Providing quality education from Kindergarten to Grade 12, fostering academic excellence
                and character development in a nurturing environment.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/programs" className="hover:text-white">Academic Programs</Link></li>
                <li><Link href="/events" className="hover:text-white">Events</Link></li>
                <li><Link href="/resources" className="hover:text-white">Student Resources</Link></li>
                <li><Link href="/portal" className="hover:text-white">Portal</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+1 (555) 123-4567</li>
                <li>info@honestyschool.edu</li>
                <li>123 Education St, City, State 12345</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Facebook</Button>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">YouTube</Button>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Telegram</Button>
              </div>
              <div className="mt-4">
                <Button className="bg-red-600 hover:bg-red-700 w-full">Enroll Now</Button>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="text-center text-gray-400 text-sm">
            © 2024 Honesty Private School. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
