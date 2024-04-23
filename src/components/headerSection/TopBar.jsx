export default function TopBar() {
  return (
    <div className="topbar-container fixed top-0 z-10 flex h-20 w-full items-center justify-between bg-umber px-8 py-4 font-semibold leading-10">
      <div className="inline-flex h-10 w-60 items-center justify-center gap-2 rounded-3xl bg-black transition delay-100 ease-in-out hover:bg-dark-blue">
        <button className="WhistleBlowing-btn">Whistle blowing</button>
        <img src="/vector/whistleIcon.svg" alt="whistle icon" />
      </div>
      <div className="topbar-button flex inline-flex h-11 items-center justify-center gap-6">
        <button className="Donate-btn inline-flex w-32 justify-center rounded-3xl border-2 border-burkina-blue bg-burkina-blue transition delay-100 ease-in-out hover:border-dark-blue hover:bg-dark-blue">
          Donate
        </button>
      </div>
    </div>
  );
}
