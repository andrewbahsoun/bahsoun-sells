import Link from "next/link";

const phoneNumber = "+19496303042";
const phoneDisplay = "+1 949 630 3042";
const emailAddress = "sales@bahsounsells.com";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f7f4] text-zinc-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-black tracking-tight">
          Bahsoun <span className="text-emerald-700">Sells</span>
        </h1>

        <a
          href={`sms:${phoneNumber}`}
          className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-800"
        >
          Text Photos
        </a>
      </nav>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
            Local resale help, powered by smarter tools
          </p>

          <h2 className="mb-6 text-5xl font-black leading-tight md:text-7xl">
            Send a picture. <br /> We help sell it.
          </h2>

          <p className="mb-8 max-w-xl text-lg text-zinc-600">
            Bahsoun Sells helps you turn unwanted items into cash without
            writing listings, researching prices, or dealing with the annoying
            parts of selling online.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={`sms:${phoneNumber}`}
              className="rounded-full bg-emerald-700 px-7 py-4 text-center font-bold text-white hover:bg-emerald-800"
            >
              Text Your Items
            </a>

            <Link
              href="#how-it-works"
              className="rounded-full bg-zinc-900 px-7 py-4 text-center font-bold text-white hover:bg-zinc-800"
            >
              How It Works
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h3 className="mb-6 text-2xl font-black">What We Help Sell</h3>

          {[
            "Electronics",
            "Furniture",
            "Clothing & Shoes",
            "Sports Cards & Collectibles",
            "Tools, Decor, and More",
          ].map((item) => (
            <div
              key={item}
              className="border-b border-zinc-100 py-4 text-lg font-medium last:border-b-0"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-black">
          How It Works
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Step
            number="1"
            title="Send Photos"
            text="Take a few pictures of the item you want to sell and text them to us."
          />
          <Step
            number="2"
            title="We Create the Listing"
            text="We help price, describe, and post your item on the right marketplaces."
          />
          <Step
            number="3"
            title="You Get Paid"
            text="Once the item sells, you receive your payout after the agreed commission."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-black">
          Why Use Bahsoun Sells?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Feature
            title="No Listing Work"
            text="No need to write descriptions, choose categories, research prices, or answer repetitive buyer questions alone."
          />
          <Feature
            title="Local & Trustworthy"
            text="A simple, personal service built for people who want selling to be easy."
          />
          <Feature
            title="Built to Scale"
            text="Whether you have one item or a hundred, I have the tools and experience to help you sell them."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-zinc-900 px-8 py-16 text-center text-white">
          <h2 className="mb-4 text-4xl font-black">
            Have stuff sitting around?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
            Text us pictures and we’ll help you figure out what it could sell
            for.
          </p>

          <p className="mx-auto mb-8 max-w-2xl text-sm text-zinc-300">
            Contact us at{" "}
            <a href={`tel:${phoneNumber}`} className="font-semibold text-white">
              {phoneDisplay}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${emailAddress}`}
              className="font-semibold text-white"
            >
              {emailAddress}
            </a>
            .
          </p>

          <a
            href={`sms:${phoneNumber}`}
            className="inline-block rounded-full bg-emerald-600 px-8 py-4 font-bold text-white hover:bg-emerald-700"
          >
            Text Photos Now
          </a>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 Bahsoun Sells · Turn clutter into cash. ·{" "}
        <a href={`tel:${phoneNumber}`} className="hover:text-zinc-700">
          {phoneDisplay}
        </a>{" "}
        ·{" "}
        <a href={`mailto:${emailAddress}`} className="hover:text-zinc-700">
          {emailAddress}
        </a>
      </footer>
    </main>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-xl font-black text-emerald-700">
        {number}
      </div>
      <h3 className="mb-3 text-xl font-black">{title}</h3>
      <p className="text-zinc-600">{text}</p>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <h3 className="mb-3 text-xl font-black text-emerald-700">{title}</h3>
      <p className="text-zinc-600">{text}</p>
    </div>
  );
}
