export function PageAmbient() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="noise-overlay absolute inset-0" />
      <div className="float-orb float-orb-1 absolute -left-32 top-[15%] h-[28rem] w-[28rem] rounded-full bg-orange/10 blur-[100px]" />
      <div className="float-orb float-orb-2 absolute -right-24 top-[45%] h-[24rem] w-[24rem] rounded-full bg-purple/10 blur-[90px]" />
      <div className="float-orb float-orb-3 absolute bottom-[10%] left-[30%] h-80 w-80 rounded-full bg-orange/8 blur-[80px]" />
    </div>
  );
}
