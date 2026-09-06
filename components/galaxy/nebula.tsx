export function Nebula() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="nebula-blob absolute left-[-10%] top-[5%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgba(124,92,252,0.35),transparent_70%)] blur-3xl" />
      <div className="nebula-blob nebula-blob-alt absolute right-[-15%] top-[35%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(232,93,160,0.28),transparent_70%)] blur-3xl" />
      <div className="nebula-blob absolute left-[10%] top-[70%] h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(79,216,224,0.22),transparent_70%)] blur-3xl" />
    </div>
  );
}