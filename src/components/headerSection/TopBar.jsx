export default function TopBar() {
  return (
    <div className="topbar-container flex h-20 items-center justify-between bg-umber px-8 py-4 font-bold leading-10">
      <div className="inline-flex h-10 w-60 items-center justify-center gap-2 rounded-3xl bg-black hover:bg-dark-blue">
        <button className="WhistleBlowing-btn">Whistle blowing</button>
        <img src="/vector/whistleIcon.svg" alt="whistle icon" />
      </div>
      <div className="topbar-buttons flex inline-flex h-11 items-center justify-center gap-6">
        <button className="Donate-btn inline-flex w-32 justify-center rounded-3xl border-2 border-burkina-blue bg-burkina-blue hover:border-dark-blue hover:bg-dark-blue">
          Donate
        </button>
        <button className="GiveMonthly-btninline-flex w-44 justify-center rounded-3xl border-2 border-light-gray hover:border-dark-blue hover:text-dark-blue">
          Give monthly
        </button>
      </div>
    </div>
  );
}
