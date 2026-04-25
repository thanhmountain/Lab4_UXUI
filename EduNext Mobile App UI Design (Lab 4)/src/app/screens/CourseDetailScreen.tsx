import { ArrowLeft, Star, Clock, BookOpen, Award } from 'lucide-react';
import { Button } from '../components/Button';

interface CourseDetailScreenProps {
  onBack: () => void;
}

export function CourseDetailScreen({ onBack }: CourseDetailScreenProps) {
  const lessons = [
    { title: 'Introduction to Python', duration: '12 min', completed: true },
    { title: 'Variables and Data Types', duration: '18 min', completed: true },
    { title: 'Control Flow and Loops', duration: '25 min', completed: true },
    { title: 'Functions and Modules', duration: '22 min', completed: false },
    { title: 'Data Structures', duration: '30 min', completed: false },
    { title: 'File Handling', duration: '20 min', completed: false },
  ];

  return (
    <div className="h-full bg-[#F9FAFB] overflow-auto">
      <div className="relative h-56 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED]">
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600"
          alt="Course"
          className="w-full h-full object-cover"
        />
        <button
          onClick={onBack}
          className="absolute top-6 left-6 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="px-6 pt-6">
        <h1 className="text-2xl font-bold text-[#111827] mb-2">
          Python for Data Science
        </h1>
        <p className="text-gray-600 mb-4">by Dr. Emily Davis</p>

        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="font-semibold">4.7</span>
            <span className="text-gray-400 text-sm">(15k)</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="text-sm">8h 30m</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">24 lessons</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">Course Progress</span>
            <span className="text-[#4F46E5] font-semibold">65%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-gradient-to-r from-[#4F46E5] to-[#22C55E] rounded-full" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-6">
          <h3 className="font-semibold text-[#111827] mb-3">About this course</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Master Python programming for data science. Learn to analyze data, create visualizations,
            and build machine learning models. Perfect for beginners and intermediate learners.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 mb-6">
          <h3 className="font-semibold text-[#111827] mb-4">Course Content</h3>
          <div className="space-y-3">
            {lessons.map((lesson, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-[#F9FAFB] rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    lesson.completed ? 'bg-[#22C55E]' : 'bg-gray-200'
                  }`}>
                    {lesson.completed ? (
                      <Award className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-sm text-gray-600">{idx + 1}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-[#111827]">{lesson.title}</p>
                    <p className="text-xs text-gray-500">{lesson.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-8">
          <Button>Continue Learning</Button>
        </div>
      </div>
    </div>
  );
}
