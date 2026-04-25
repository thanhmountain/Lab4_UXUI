import { GraduationCap } from 'lucide-react';
import { Button } from '../components/Button';

interface SplashScreenProps {
  onGetStarted: () => void;
}

export function SplashScreen({ onGetStarted }: SplashScreenProps) {
  return (
    <div className="h-full bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] flex flex-col items-center justify-between px-8 py-16">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
          <GraduationCap className="w-20 h-20 text-[#4F46E5]" />
        </div>
        <h1 className="text-white text-4xl font-bold mb-4">EduNext</h1>
        <p className="text-white/90 text-center text-lg">Learn Anytime, Anywhere</p>

        <div className="mt-12 w-64 h-64 relative">
          <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute inset-8 bg-white/10 rounded-full animate-pulse delay-100"></div>
          <div className="absolute inset-16 bg-white/10 rounded-full animate-pulse delay-200"></div>
        </div>
      </div>

      <div className="w-full">
        <Button variant="primary" onClick={onGetStarted} className="bg-white text-[#4F46E5] hover:bg-gray-100">
          Get Started
        </Button>
      </div>
    </div>
  );
}
