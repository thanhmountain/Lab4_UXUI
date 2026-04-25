import { Home, Search, BookOpen, User } from 'lucide-react';

interface BottomNavProps {
  active?: string;
}

export function BottomNav({ active = 'home' }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'courses', icon: BookOpen, label: 'Courses' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          className={`flex flex-col items-center gap-1 ${
            active === id ? 'text-[#4F46E5]' : 'text-gray-400'
          }`}
        >
          <Icon className="w-6 h-6" />
          <span className="text-xs">{label}</span>
        </button>
      ))}
    </div>
  );
}
