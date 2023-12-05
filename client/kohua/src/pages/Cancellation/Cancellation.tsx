// Same here, just use an array

export default function Cancellation() {
  const date = new Date();

  return (
    <div className="my-24 md:mx-[100px] mx-0 md:p-8 px-3">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">Cancellation Policy</h1>
      <div>
        <p className="md:text-2xl text-xl mb-7">
          Welcome to Kohua! This Cancellation Policy outlines the rules and regulations regarding
          cancellations for services provided by Kohua, available at kohua.in.
        </p>

        <h2 className="md:text-2xl text-xl">1. Cancellation Process</h2>
        <p className="md:text-xl text-lg mt-3 mb-5">
          Customers can cancel their orders by contacting our customer support team. Please refer
          to our Contact Us page for details.
        </p>

        <h2 className="md:text-2xl text-xl">2. Refund Policy</h2>
        <p className="md:text-xl text-lg mt-3 mb-5">
          Refunds will be processed based on the conditions outlined in our Refund Policy. Please
          refer to the Refund Policy page for detailed information.
        </p>

        <h2 className="md:text-2xl text-xl">3. Changes to Cancellation Policy</h2>
        <p className="md:text-xl text-lg mt-3 mb-5">
          Kohua reserves the right to modify or update this Cancellation Policy at any time. Changes
          will be effective immediately upon posting to the website.
        </p>

        <h2 className="md:text-2xl text-xl">4. Contact Information</h2>
        <p className="md:text-xl text-lg mt-3 mb-5">
          For any questions about our Cancellation Policy, please contact us using the details
          provided on our Contact Us page.
        </p>

        <p className="md:text-xl text-lg mt-3 mb-5">
          By using Kohua, you agree to abide by this Cancellation Policy. If you do not agree to
          this policy, please refrain from using our website.
        </p>

        <p className="md:text-xl text-lg mt-3 mb-5">
          Last updated: {`${date.getUTCDate()}-${date.getMonth()}-${date.getFullYear()}`}
        </p>
      </div>
    </div>
  );
}
