export function Milkyway() {
  return (
    <div
      className="milkyway-band pointer-events-none fixed inset-[-20%] z-0 opacity-70"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(115deg, transparent 30%, rgba(201, 214, 255, 0.05) 42%, rgba(232, 93, 160, 0.09) 47%, rgba(124, 92, 252, 0.12) 50%, rgba(79, 216, 224, 0.08) 54%, rgba(201, 214, 255, 0.05) 58%, transparent 70%)",
        backgroundSize: "220% 220%",
      }}
    />
  );
}