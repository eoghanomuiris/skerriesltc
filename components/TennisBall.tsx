export default function TennisBall() {
  return (
    <div className="inline-block animate-bounce">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#B7D433]"
      >
        <circle cx="12" cy="12" r="10" fill="currentColor" stroke="#fff" strokeWidth="0.5" />
        <path
          d="M 6 8 Q 12 12 6 16"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 18 8 Q 12 12 18 16"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
