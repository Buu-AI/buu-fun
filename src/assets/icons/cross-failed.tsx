type TCrossFailed = {};

export default function CrossFailed({}: TCrossFailed) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" fill="none">
      <circle cx="9" cy="9.5" r="8" stroke="#EE2525" strokeWidth="1.83133" />
      <path
        d="M6.2 6.7L11.8 12.3M11.8 6.7L6.2 12.3"
        stroke="#EE2525"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
