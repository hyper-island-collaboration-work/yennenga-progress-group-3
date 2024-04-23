export default function DonationForm() {
  return (
    <form className="donation-form h-96 w-96 rounded-3xl bg-black bg-opacity-70 px-10 py-20 font-['Arial'] text-lg font-bold leading-10 text-light-gray">
      <div className="flex items-center justify-start">
        <legend>Give as:</legend>
        <div>
          <input
            type="radio"
            id="privat"
            name="Privat person"
            value="Privat person"
          />
          <label for="privat">Privat person</label>
        </div>

        <div>
          <input type="radio" id="company" name="company" value="Company" />
          <label for="company">Company</label>
        </div>
      </div>
      <div className="flex flex h-11 items-center justify-center">
        <button className=" w-full rounded-bl-3xl rounded-tl-3xl border-2 border-light-gray shadow">
          Donate
        </button>
        <button className="w-full rounded-br-3xl rounded-tr-3xl border-b-2 border-r-2 border-t-2 border-light-gray">
          Give monthly
        </button>
      </div>
      <div className="flex flex h-11 items-center justify-center">
        <button className=" w-full rounded-bl-3xl rounded-tl-3xl border-2 border-light-gray shadow">
          200 kr
        </button>
        <button className="w-full border-b-2 border-t-2 border-light-gray">
          400 kr
        </button>
        <button className="w-full rounded-br-3xl rounded-tr-3xl border-2 border-light-gray">
          Optional
        </button>
      </div>
      <div>
        <button className="w-full rounded-3xl bg-light-gray+ text-light-gray++">
          Next
        </button>
      </div>
    </form>
  );
}
