interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ type = 'text', placeholder, label, value, onChange }: InputProps) {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 text-sm text-[#111827]">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl text-[#111827] placeholder:text-gray-400 focus:outline-none focus:border-[#4F46E5] transition-colors"
      />
    </div>
  );
}
