import { useState } from "react";
import "./donationForm.css";

const typePrivate = "private";
const typeCompany = "company";
const oneTimeRecurrence = " donate";
const monthlyRecurrence = "monthly";
const amount200 = "200";
const amount400 = "400";
const amountOptional = "optional";

export default function DonationForm() {
  const [formState, setFormState] = useState({
    type: "",
    recurrence: "",
    amountTemplate: "",
    amount: 0,
    showPersonalInputs: false,
    email: "",
    phone: "",
  });

  function setType(type) {
    const newState = { ...formState, type: type };
    setFormState(newState);
  }

  function setRecurrence(recurrence) {
    const newState = { ...formState, recurrence: recurrence };
    setFormState(newState);
  }

  function setAmount(amount) {
    const newState = { ...formState, amount: amount };
    setFormState(newState);
  }

  function setAmountTemplate(amountTemplate) {
    let amount = 0;

    if (amountTemplate === amount200) {
      amount = 200;
    } else if (amountTemplate === amount400) {
      amount = 400;
    }

    const newState = {
      ...formState,
      amountTemplate: amountTemplate,
      amount: amount,
    };
    setFormState(newState);
  }

  function setShowPersonalInputs(showPersonalInputs) {
    const newState = { ...formState, showPersonalInputs: showPersonalInputs };
    setFormState(newState);
  }

  function setEmail(email) {
    const newState = { ...formState, email: email };
    setFormState(newState);
  }

  function setPhone(phone) {
    const newState = { ...formState, phone: phone };
    setFormState(newState);
  }

  const isOptional = formState.amountTemplate === amountOptional;
  const isFormBtnActive =
    formState.type !== "" &&
    formState.recurrence !== "" &&
    formState.amount !== 0 &&
    (!formState.showPersonalInputs ||
      (formState.email !== "" && formState.phone !== ""));

  return (
    <div className="w-[440px] rounded-3xl bg-black bg-opacity-70 px-8 py-12">
      <form className="donation-form flex w-[376px] flex-col items-center justify-between gap-10 text-lg font-bold leading-10 text-light-gray">
        <div className="flex justify-between gap-4 ">
          <legend>Give as:</legend>
          <label className="custom-radioBtn-round">
            Private Person
            <input
              id="private"
              type="radio"
              value="Private person "
              name="type"
              onChange={() => setType(typePrivate)}
            />
            <span className="checkmark"></span>
          </label>
          <label className="custom-radioBtn-round">
            Company
            <input
              type="radio"
              id="company"
              name="type"
              value="Company"
              onChange={() => setType(typeCompany)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="flex justify-center">
          <label className="custom-radioBtn-big">
            <input
              id="donate"
              type="radio"
              value="donate"
              name="donation"
              onChange={() => setRecurrence(oneTimeRecurrence)}
            />
            <span className="checkmark rounded-bl-3xl rounded-tl-3xl px-14">
              Donate
            </span>
          </label>
          <label className="custom-radioBtn-big">
            <input
              id="montly"
              type="radio"
              value="Give monthly"
              name="donation"
              onChange={() => setRecurrence(monthlyRecurrence)}
            />
            <span className="checkmark rounded-br-3xl rounded-tr-3xl border-b-2 border-r-2 border-t-2 px-8">
              Give monthly
            </span>
          </label>
        </div>
        <div className="flex justify-center">
          <label className="custom-radioBtn-big">
            <input
              id="200"
              type="radio"
              value="200"
              name="amount"
              onChange={() => setAmountTemplate(amount200)}
            />
            <span className="checkmark rounded-bl-3xl rounded-tl-3xl px-8">
              200 kr
            </span>
          </label>
          <label className="custom-radioBtn-big">
            <input
              id="400"
              type="radio"
              value="400"
              name="amount"
              onChange={() => setAmountTemplate(amount400)}
            />
            <span className="checkmark border-b-2 border-t-2 px-8">400 kr</span>
          </label>
          <label className="custom-radioBtn-big ">
            <input
              id="400"
              type="radio"
              value="optional"
              name="amount"
              onChange={() => setAmountTemplate(amountOptional)}
            />
            <span className="checkmark rounded-br-3xl rounded-tr-3xl px-6">
              Optional
            </span>
          </label>
        </div>
        <div className="data-inputs flex flex-col items-center gap-8 text-light-gray++">
          {isOptional && (
            <input
              type="number"
              placeholder="0 SEK"
              className="w-full rounded-3xl bg-light-gray-"
              value={formState.amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          )}
          {formState.showPersonalInputs && (
            <>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-3xl bg-light-gray-"
                value={formState.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="phone"
                placeholder="070-123-4567"
                className="w-full rounded-3xl bg-light-gray-"
                value={formState.phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label className="flex flex-col font-normal text-light-gray">
                Apply if you want tax deduction
                <input
                  placeholder="YYYYMMDD-XXXX"
                  className="w-full rounded-3xl bg-light-gray- font-bold text-light-gray++"
                />
              </label>
            </>
          )}
        </div>
        <button
          disabled={!isFormBtnActive}
          onClick={(e) => {
            e.preventDefault();
            setShowPersonalInputs(true);
          }}
          className="form-btn h-12 w-[359px] rounded-3xl bg-light-gray text-burkina-blue hover:text-light-gray"
        >
          {formState.showPersonalInputs ? "Go to payment" : "Next"}
        </button>
        <div className="flex gap-6">
          <img src="/vector/visa.svg" alt="visa card logo" />
          <img src="/vector/swish.svg" alt="swish logo" />
          <img src="/vector/mastercard.svg" alt="mastercard logo" />
          <img
            src="/vector/svenskkontroll.svg"
            alt="svensk insamlings kontroll logo"
            className="h-6 w-24"
          />
        </div>
      </form>
    </div>
  );
}
