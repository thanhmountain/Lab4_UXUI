import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface SignInScreenProps {
  onSignIn: () => void;
  onBack: () => void;
}

export function SignInScreen({ onSignIn, onBack }: SignInScreenProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="h-full bg-[#F9FAFB] flex flex-col">
      <div className="p-6">
        <button onClick={onBack} className="p-2 -ml-2">
          <ArrowLeft className="w-6 h-6 text-[#111827]" />
        </button>
      </div>

      <div className="flex-1 px-8 pt-8">
        <h1 className="text-3xl font-bold text-[#111827] mb-2">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>
        <p className="text-gray-500 mb-12">
          {isSignUp ? 'Sign up to get started' : 'Sign in to continue learning'}
        </p>

        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setIsSignUp(false)}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              !isSignUp ? 'bg-[#4F46E5] text-white' : 'bg-white text-gray-600'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignUp(true)}
            className={`flex-1 py-3 rounded-xl font-medium transition-all ${
              isSignUp ? 'bg-[#4F46E5] text-white' : 'bg-white text-gray-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="space-y-4 mb-6">
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter your password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {!isSignUp && (
          <div className="text-right mb-8">
            <button className="text-[#4F46E5] text-sm font-medium">
              Forgot password?
            </button>
          </div>
        )}

        <Button onClick={onSignIn}>
          {isSignUp ? 'Create Account' : 'Sign In'}
        </Button>

        <p className="text-center text-gray-500 text-sm mt-6">
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-[#4F46E5] font-medium"
          >
            {isSignUp ? 'Sign In' : 'Create account'}
          </button>
        </p>
      </div>
    </div>
  );
}
