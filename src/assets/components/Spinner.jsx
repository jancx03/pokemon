export default function Spinner() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-yellow-500"></div>
    </div>
  );
}
