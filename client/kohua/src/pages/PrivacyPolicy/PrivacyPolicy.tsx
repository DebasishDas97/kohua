// You can also use a array here instead of hardcoding everything
// It would be easier to add or remove from your array

export default function PrivacyPolicy() {
  const date = new Date();
  return <div className="my-24 md:mx-[100px] mx-0 md:p-8 px-3">
  <h1 className="text-3xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

  <div>
    <p className="md:text-2xl text-xl mb-7">
      Welcome to Kohua! This Privacy Policy outlines how Kohua collects, uses, maintains, and
      discloses information collected from users (each, a "User") of the kohua.in website.
    </p>

    <h2 className="md:text-2xl text-xl">1. Personal Identification Information</h2>
    <p className="md:text-xl text-lg mt-3 mb-5">
      We may collect personal identification information from Users when they visit our site,
      register on the site, place an order, subscribe to the newsletter, respond to a survey,
      fill out a form, or engage in other activities on our site.
    </p>

    <h2 className="md:text-2xl text-xl">2. Non-personal Identification Information</h2>
    <p className="md:text-xl text-lg mt-3 mb-5">
      We may collect non-personal identification information about Users whenever they interact
      with our site. Non-personal identification information may include the browser name, the
      type of computer, and technical information about Users' means of connection to our site.

    </p>

    <h2 className="md:text-2xl text-xl">3. How We Use Collected Information</h2>
    <p className="md:text-xl text-lg mt-3 mb-5">
      Kohua may collect and use Users' personal information for the following purposes:
    </p>
    <ul className="md:text-xl text-lg mt-3 mb-5 list-disc px-5">
      <li>To improve customer service</li>
      <li>To personalize the user experience</li>
      <li>To process transactions</li>
      <li>To send periodic emails</li>
    </ul>

    <h2 className="md:text-2xl text-xl">4. How We Protect Your Information</h2>
    <p className="md:text-xl text-lg mt-3 mb-5">
      We adopt appropriate data collection, storage, and processing practices and security
      measures to protect against unauthorized access, alteration, disclosure, or destruction of
      your personal information.

    </p>

    <h2 className="md:text-2xl text-xl">5. Changes to this Privacy Policy</h2>
    <p className="md:text-xl text-lg mt-3 mb-5">
      Kohua has the discretion to update this Privacy Policy at any time. When we do, we will
      revise the updated date at the bottom of this page. We encourage Users to frequently check
      this page for any changes to stay informed about how we are helping to protect the personal
      information we collect.

    </p>

    <p className="md:text-xl text-lg mt-3 mb-5">
      By using Kohua, you signify your acceptance of this policy. If you do not agree to this
      policy, please do not use our site.
    </p>

    <p className="md:text-xl text-lg mt-3 mb-5">Last updated: {`${date.getUTCDate()}-${date.getMonth()}-${date.getFullYear()}`}</p>
  </div>
</div>;
}
