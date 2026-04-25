import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SplashScreen } from './screens/SplashScreen';
import { SignInScreen } from './screens/SignInScreen';
import { HomeScreen } from './screens/HomeScreen';
import { CourseDetailScreen } from './screens/CourseDetailScreen';
import { StyleGuide } from './screens/StyleGuide';

type Screen = 'splash' | 'signin' | 'home' | 'course-detail' | 'style-guide';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [menuOpen, setMenuOpen] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onGetStarted={() => setCurrentScreen('signin')} />;
      case 'signin':
        return (
          <SignInScreen
            onSignIn={() => setCurrentScreen('home')}
            onBack={() => setCurrentScreen('splash')}
          />
        );
      case 'home':
        return <HomeScreen onCourseClick={() => setCurrentScreen('course-detail')} />;
      case 'course-detail':
        return <CourseDetailScreen onBack={() => setCurrentScreen('home')} />;
      case 'style-guide':
        return <StyleGuide />;
      default:
        return <SplashScreen onGetStarted={() => setCurrentScreen('signin')} />;
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-900">
      {/* Mobile Phone Frame */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50" />

        {/* Screen Content */}
        <div className="relative w-full h-full bg-white overflow-hidden">
          {renderScreen()}
        </div>

        {/* Navigation Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-10 right-6 z-50 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Navigation Menu Overlay */}
        {menuOpen && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}>
            <div className="absolute top-20 right-6 bg-white rounded-2xl shadow-xl p-4 min-w-[200px]" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-semibold text-sm text-gray-500 mb-3 px-2">SCREENS</h3>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setCurrentScreen('splash');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Splash Screen
                </button>
                <button
                  onClick={() => {
                    setCurrentScreen('signin');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setCurrentScreen('home');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setCurrentScreen('course-detail');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Course Detail
                </button>
              </div>
              <div className="border-t border-gray-200 mt-3 pt-3">
                <h3 className="font-semibold text-sm text-gray-500 mb-3 px-2">DESIGN</h3>
                <button
                  onClick={() => {
                    setCurrentScreen('style-guide');
                    setMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-[#4F46E5] font-medium"
                >
                  Style Guide
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Info Panel */}
      <div className="absolute bottom-8 left-8 right-8 text-center text-white/70 text-sm">
        <p>Click the menu button in the top right to navigate between screens</p>
      </div>
    </div>
  );
}
