import "./donationForm.css";

export default function DonationForm() {
  return (
    <form className="donation-form flex w-[440px] flex-col justify-between rounded-3xl bg-black bg-opacity-70 px-10 py-20 font-['Arial'] text-lg font-bold leading-10 text-light-gray">
      <div className="flex gap-2.5">
        <legend>Give as:</legend>
        <label className="giveAs-btn">
          Private Person
          <input id="private" type="radio" value="private " name="private" />
          <span class="checkmark"></span>
        </label>
        <label className="giveAs-btn">
          Company
          <input type="radio" id="company" name="company" value="Company" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div className="flex">
        <button className="w-full rounded-bl-3xl rounded-tl-3xl border-2 border-light-gray shadow">
          Donate
        </button>
        <button className="w-full rounded-br-3xl rounded-tr-3xl border-b-2 border-r-2 border-t-2 border-light-gray">
          Give monthly
        </button>
      </div>
      <div className="flex">
        <button className="w-full rounded-bl-3xl rounded-tl-3xl border-2 border-light-gray shadow">
          200 kr
        </button>
        <button className="w-full border-b-2 border-t-2 border-light-gray">
          400 kr
        </button>
        <button className="w-full rounded-br-3xl rounded-tr-3xl border-2 border-light-gray">
          Optional
        </button>
      </div>
      <div className="data-inputs text-light-gray++">
        <div>
          <input
            type="email"
            placeholder="Email"
            className="bg-light-gray- w-full rounded-3xl"
          />
        </div>
        <button className="h-16 w-full rounded-3xl bg-light-gray+">Next</button>
        <div>
          <input
            type="phone"
            placeholder="070-123-4567"
            className="bg-light-gray- w-full rounded-3xl"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="YYYYMMDD-XXXX"
            className="bg-light-gray- w-full rounded-3xl"
          />
        </div>
      </div>
    </form>
  );
}
