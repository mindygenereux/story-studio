type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200 ease-in-out cursor-pointer">
      {label}
    </button>
  );
}