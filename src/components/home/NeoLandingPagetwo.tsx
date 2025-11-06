import Image from "next/image";

const CheckListItem = ({ text }: { text: string }) => (
  <div className="flex items-center space-x-3">
    {/* Checked box SVG */}
    <svg
      className="w-5 h-5 text-gray-800 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 12.375l1.5 1.5 3-3.75"
      />
    </svg>
    <span
      className="text-gray-700"
      style={{
        fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
        fontWeight: 500,
        fontSize: 15,
        lineHeight: "1.2",
      }}
    >
      {text}
    </span>
  </div>
);

export function NeoLandingPageTwo() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 relative overflow-hidden"
      style={{
        backgroundImage: "url('/Fintara-background-gradiants-03.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl w-full relative" style={{ height: "500px" }}>
        {/* Decorative SVG path */}
        <svg
          className="absolute top-0 left-0 w-full h-full text-blue-400 opacity-70"
          fill="none"
          stroke="currentColor"
          strokeDasharray="4, 4"
          strokeWidth="1"
        >
          <path d="M 150 50 C 50 150, 50 300, 250 320 C 450 340, 550 250, 700 350" />
        </svg>

        {/* Right side feather shape */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{ bottom: '6rem', right: '-20rem' }}
        >
          <Image
            src="/Neo-web-feather-shape-02.png"
            alt="Neo feather shape"
            width={400}
            height={400}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Left Side: Question */}
        <div className="absolute top-[10%] left-[5%] md:left-[15%] w-full max-w-sm z-10">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-700">Question</h2>
            <h1
              className="text-[#00A9E5]"
              style={{
                fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: 36,
                lineHeight: "1.1",
                maxWidth: "100%",
                margin: 0,
              }}
            >
              Why you need <span className="text-[#0077B6]">Neo?</span>
            </h1>
            <div className="space-y-2 pl-2">
              <CheckListItem text="Wonder every month where the money flew (65% of people does it)." />
              <CheckListItem text="Overspending is inevitable." />
              <CheckListItem text="Finding it's hard to make a saving." />
              <CheckListItem text="Have dreams but can't afford." />
              <CheckListItem text="Book keeping is booring & apps are expensive" />
            </div>
          </div>
        </div>

        {/* Right Side: Answer */}
        <div className="absolute bottom-[5%] right-[5%] md:right-[10%] w-full max-w-sm z-10">
          <div className="space-y-4">
            <div className="flex">
              <div className="bg-white p-5 rounded-2xl shadow-lg inline-block ml-[-150px] relative top-[60px]">
                <Image
                  src="/neo-logo.png"
                  alt="Neo Logo"
                  width={60}
                  height={30}
                />
              </div>
            </div>
            <h2 className="text-sm font-semibold text-gray-700">Answer</h2>
            <h1
              className="text-[#0077B6]"
              style={{
                fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
                fontWeight: 700,
                fontSize: 36,
                lineHeight: "1.1",
                maxWidth: "100%",
                margin: 0,
              }}
            >
              Neo solves everything for you.
            </h1>
            <p
              className="text-gray-600"
              style={{
                fontFamily: "'Roboto Condensed', Arial, Helvetica, sans-serif",
                fontWeight: 500,
                fontSize: 15,
                lineHeight: "1.2",
                margin: 0,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              viverra maecenas accumsan lacus vel facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}