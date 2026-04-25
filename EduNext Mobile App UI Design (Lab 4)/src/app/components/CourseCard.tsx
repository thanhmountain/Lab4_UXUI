import { Star } from 'lucide-react';

interface CourseCardProps {
  image: string;
  title: string;
  instructor: string;
  rating: number;
  students: string;
  price?: string;
  progress?: number;
  onClick?: () => void;
}

export function CourseCard({ image, title, instructor, rating, students, price, progress, onClick }: CourseCardProps) {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow">
      <div className="relative h-32 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#111827] mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{instructor}</p>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-gray-400">({students})</span>
          </div>
          {price && <span className="font-semibold text-[#4F46E5]">{price}</span>}
        </div>
        {progress !== undefined && (
          <div className="mt-3">
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-500">Progress</span>
              <span className="text-[#4F46E5] font-medium">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4F46E5] to-[#22C55E] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
