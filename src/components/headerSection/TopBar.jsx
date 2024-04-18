import "./topbar.css";

export default function TopBar() {
  return (
    <div className="topbar-container bg-umber text-light-gray flex h-20 items-center justify-between px-8 py-3 ">
      <a>
        <div className="whistle-button flex inline-flex h-10 w-60 items-center justify-center gap-2 rounded-3xl bg-black px-8 py-3">
          <button className="font-['Arial'] text-lg font-bold leading-10">
            Whistle blowing
          </button>
          <img src="/images/whistleIcon.svg" />
        </div>
      </a>
      <div className="topbar-buttons flex inline-flex items-center justify-center gap-2.5 font-['Arial'] text-lg font-bold leading-10">
        <button>Donate</button>
        <button>Give monthly</button>
      </div>
    </div>
  );
}
