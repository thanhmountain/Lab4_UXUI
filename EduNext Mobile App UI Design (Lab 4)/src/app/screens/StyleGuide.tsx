import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { CourseCard } from '../components/CourseCard';
import { BottomNav } from '../components/BottomNav';

export function StyleGuide() {
  const colors = [
    { name: 'Primary', hex: '#4F46E5', desc: 'Main brand color' },
    { name: 'Secondary', hex: '#22C55E', desc: 'Success & progress' },
    { name: 'Background', hex: '#F9FAFB', desc: 'App background' },
    { name: 'Text', hex: '#111827', desc: 'Primary text' },
    { name: 'Accent', hex: '#F59E0B', desc: 'Highlights & ratings' },
  ];

  return (
    <div className="h-full bg-[#F9FAFB] overflow-auto p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#111827] mb-2">EduNext Style Guide</h1>
        <p className="text-gray-600 mb-12">Design system for mobile learning platform</p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 gap-4">
            {colors.map((color) => (
              <div key={color.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div
                  className="h-32"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[#111827] mb-1">{color.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{color.desc}</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">{color.hex}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Typography</h2>
          <div className="bg-white rounded-2xl p-6 space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-[#111827]">Heading 1 - 32px Bold</h1>
              <p className="text-sm text-gray-500 mt-1">Used for page titles</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#111827]">Heading 2 - 24px Bold</h2>
              <p className="text-sm text-gray-500 mt-1">Used for section headers</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#111827]">Heading 3 - 18px Medium</h3>
              <p className="text-sm text-gray-500 mt-1">Used for card titles</p>
            </div>
            <div>
              <p className="text-base text-[#111827]">Body Text - 14-16px Regular</p>
              <p className="text-sm text-gray-500 mt-1">Used for descriptions and content</p>
            </div>
            <div>
              <p className="text-sm font-medium text-[#111827]">Button Text - 14px Medium</p>
              <p className="text-sm text-gray-500 mt-1">Used for interactive elements</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">UI Elements</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-[#111827] mb-4">Buttons</h3>
              <div className="space-y-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-[#111827] mb-4">Input Fields</h3>
              <div className="space-y-4">
                <Input label="Email" placeholder="Enter your email" type="email" />
                <Input label="Password" placeholder="Enter your password" type="password" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-[#111827] mb-4">Course Card</h3>
              <CourseCard
                image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
                title="Complete Web Development"
                instructor="Sarah Johnson"
                rating={4.8}
                students="12.5k"
                price="$49"
              />
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-[#111827] mb-4">Bottom Navigation</h3>
              <BottomNav active="home" />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Spacing System</h2>
          <div className="bg-white rounded-2xl p-6">
            <p className="text-gray-600 mb-4">8px grid system for consistent spacing</p>
            <div className="space-y-3">
              {[8, 16, 24, 32, 40, 48].map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <div
                    className="bg-[#4F46E5] rounded"
                    style={{ width: `${size}px`, height: '24px' }}
                  />
                  <span className="text-sm text-gray-600">{size}px</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-[#111827] mb-6">Design Principles</h2>
          <div className="bg-white rounded-2xl p-6 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
              <p className="text-gray-700">Clean, minimal, modern UI</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
              <p className="text-gray-700">Strong visual hierarchy</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
              <p className="text-gray-700">Consistent spacing and alignment</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
              <p className="text-gray-700">Rounded corners (12-20px)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
              <p className="text-gray-700">Soft shadows for depth</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4F46E5] rounded-full mt-2" />
              <p className="text-gray-700">Clear navigation and usability</p>
            </div>
          </div>
        </section>

        <div className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">Designed by Nguyen Thanh Son</p>
        </div>
      </div>
    </div>
  );
}
