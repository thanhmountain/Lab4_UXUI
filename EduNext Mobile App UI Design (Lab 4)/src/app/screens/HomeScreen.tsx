import { Search, Bell } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { BottomNav } from '../components/BottomNav';

interface HomeScreenProps {
  onCourseClick: () => void;
}

export function HomeScreen({ onCourseClick }: HomeScreenProps) {
  const categories = ['All', 'Design', 'Development', 'Business', 'Marketing'];

  const featuredCourses = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      title: 'Complete Web Development Bootcamp',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: '12.5k',
      price: '$49',
    },
    {
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400',
      title: 'UI/UX Design Masterclass',
      instructor: 'Michael Chen',
      rating: 4.9,
      students: '8.2k',
      price: '$39',
    },
  ];

  const myCourses = [
    {
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      title: 'Python for Data Science',
      instructor: 'Dr. Emily Davis',
      rating: 4.7,
      students: '15k',
      progress: 65,
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      title: 'Digital Marketing Strategy',
      instructor: 'James Wilson',
      rating: 4.6,
      students: '9.8k',
      progress: 30,
    },
  ];

  return (
    <div className="h-full bg-[#F9FAFB] overflow-auto pb-24">
      <div className="bg-gradient-to-b from-[#4F46E5] to-[#4F46E5]/90 px-6 pt-12 pb-8 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-white/80 text-sm mb-1">Welcome back,</p>
            <h2 className="text-white text-2xl font-bold">Nguyen Thanh Son</h2>
          </div>
          <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl text-[#111827] placeholder:text-gray-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="px-6 mt-6">
        <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full whitespace-nowrap ${
                cat === 'All'
                  ? 'bg-[#4F46E5] text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-[#111827] mb-4">Continue Learning</h3>
          <div className="grid gap-4">
            {myCourses.map((course, idx) => (
              <CourseCard key={idx} {...course} onClick={onCourseClick} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-[#111827] mb-4">Featured Courses</h3>
          <div className="grid gap-4">
            {featuredCourses.map((course, idx) => (
              <CourseCard key={idx} {...course} onClick={onCourseClick} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="home" />
    </div>
  );
}
