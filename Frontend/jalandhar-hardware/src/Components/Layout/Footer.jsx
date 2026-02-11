
const Footer = () => {
  return (
    <>
      <main className="font-Anton ">
        <div className="flex justify-center gap-20 bg-[#0d121b] p-10">
          <div className="w-1/2 h-110 bg-red-600 p-8 ">
            <p className="text-center text-amber-400 text-4xl mb-12">
              CONTACT US
            </p>
            <p className="text-left text-amber-400 text-2xl pb-10">
              EMAIL: JALANDHARHARDWARE@GMAIL.COM
            </p>
            <p className="text-left text-amber-400 text-2xl pb-10">
              OUR ADDRESS : SHOP NO 203, BBC BUILDING, NABUGABO ROAD, KAMPALA,
              UGANDA
            </p>
            <p className="text-left text-amber-400 text-2xl pb-10">
              CONTACT DETAILS / PHONE : +256 456-7890
            </p>
            <p className="text-left text-amber-400 text-2xl pb-10">
              OPEN HOURS : MONDAY - SATURDAY 8 AM - 6 PM
            </p>
          </div>
          <div className="w-4/12 h-110 bg-red-600 ">
            <img
              className="h-full w-full"
              src="../src/assets/ContactRED.jpg"
              alt="Contact Us"
            />
          </div>
        </div>
        <div className="bg-red-600 text-amber-400 py-6">
          <p className="text-center">
            {" "}
            &copy; 2026 JALANDHAR HARDWARE. ALL RIGHTS RESERVED.{" "}
          </p>
        </div>
      </main>
    </>
  );
};

export default Footer;
