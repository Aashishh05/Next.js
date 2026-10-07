"use client";

import courseData from "../data/music_courses.json";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <section className="py-20 bg-gray-900">
      <div className="text-center mb-14 px-6">
        <h2 className="text-sm font-semibold text-teal-400 uppercase tracking-widest">
          Featured Courses
        </h2>

        <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white">
          Learn with the best
        </h3>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Explore our carefully selected music courses and learn from
          experienced instructors.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course: Course) => (
            <BackgroundGradient
              key={course.id}
              className="rounded-[22px] p-4 sm:p-5 bg-gray-900"
            >
              <div className="relative h-56 w-full overflow-hidden rounded-xl">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-teal-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div className="pt-5">
                <h3 className="text-xl font-semibold text-white">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  By {course.instructor}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-400 line-clamp-2">
                  {course.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Course Price</p>

                    <p className="mt-1 text-xl font-bold text-teal-400">
                      ${course.price}
                    </p>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-semibold hover:bg-teal-400 transition-colors duration-300"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg border border-teal-400 text-teal-400 font-medium hover:bg-teal-400 hover:text-gray-900 transition-all duration-300"
        >
          View All Courses
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedCourses;
