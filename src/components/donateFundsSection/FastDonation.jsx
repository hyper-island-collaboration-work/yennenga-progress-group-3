import DonationForm from "../donationForm/DonationForm";

export default function FastDonation() {
  return (
    <section className="flex gap-20 px-48 py-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-burkina-blue">Fast donation</h2>
        <DonationForm formWidth={"w-[28.5rem]"} />
        <div />
      </div>
      <div className="align-center flex flex-col justify-center text-2xl">
        <span className="font-bold text-burkina-blue">
          We need your support to start and develop operations,
        </span>
        <p>
          as well as to spread our development models to more people. Your
          donation for research and development is crucial for creating a
          sustainable future for both individuals and the region. Thank you for
          contributing to our shared future!
        </p>
      </div>
    </section>
  );
}
