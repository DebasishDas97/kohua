export default function TermsOfService() {
  const date = new Date();

  return (
    <div className="my-24 md:mx-[100px] mx-0 md:p-8 px-3">
    <h1 className="md:text-5xl text-4xl font-bold mb-8">Terms of Service</h1>
    <div>
      <p className="md:text-2xl text-xl mb-7">
        Welcome to Kohua! These terms of service ("Terms") outline the rules and regulations for the
        use of Kohua's Website, located at kohua.in.
      </p>

      <h2 className="md:text-2xl text-xl">1. Acceptance of Terms</h2>
      <p className="md:text-xl text-lg mt-3 mb-5">
        By accessing this website, we assume you accept these Terms. Do not continue to use Kohua if
        you do not agree to all the Terms stated on this page.
      </p>

      <h2 className="md:text-2xl text-xl">2. License to Use the Website</h2>
      <p className="md:text-xl text-lg mt-3 mb-5">
        Unless otherwise stated, Kohua and/or its licensors own the intellectual property rights for
        all material on Kohua. You may view and/or print pages from kohua.in for your own personal
        use, subject to restrictions set in these Terms.
      </p>

      <h2 className="md:text-2xl text-xl">3. User Account</h2>
      <p className="md:text-xl text-lg mt-3 mb-5">
        If you create an account on Kohua, you are responsible for maintaining the confidentiality of
        your account and password. You agree to accept responsibility for all activities that occur
        under your account or password.
      </p>

      <h2 className="md:text-2xl text-xl">4. Content</h2>
      <p className="md:text-xl text-lg mt-3 mb-5">
        Kohua reserves the right to remove any content at any time without notice.
      </p>

      <h2 className="md:text-2xl text-xl">5. Governing Law</h2>
      <p className="md:text-xl text-lg mt-3 mb-5">
        These Terms will be governed by and interpreted in accordance with the laws of your country,
        and you submit to the non-exclusive jurisdiction of the state and federal courts located in
        your country for the resolution of any disputes.
      </p>

      <p className="md:text-xl text-lg mt-3 mb-5">
        By using Kohua, you agree to abide by these Terms. If you do not agree to these Terms, please
        refrain from using our website.
      </p>

      <p className="md:text-xl text-lg mt-3 mb-5">Last updated: {`${date.getUTCDate()}-${date.getMonth()}-${date.getFullYear()}`}</p>
    </div>
  </div>
  )
}