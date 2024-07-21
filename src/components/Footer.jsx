export default function Footer() {
    return (
      <footer className="bg-black text-white flex flex-col justify-center items-center">
        <img className="h-[6rem] w-[11rem] md:h-[7rem] md:w-[12rem] lg:h-[8rem] lg:w-[13rem] xl:h-[10rem] xl:w-[14rem]" src="https://s3-alpha-sig.figma.com/img/0b29/5d18/447030ac981738d1de0668b277e646ce?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cU~0Bdqgkvl3Nibj8CQOYuJ06c6290HckGJxNAOQkrun08fHc7HeOEsHUC~Jo-9remUlCHW7Rf1gplZhghCZ-xoC5SuCXQJNsUaft4o8CVN3~e0fDY~33W6II6unXCT15XwTLtC6ZG1HOuiMWV0sKvdmT3Dk5yXB6QfWRQehy33XyjWHoJ7E5ilA3Db2IgvxqgzKSMQbXgn0fIEqPSq~M~N3I4rpRO2vceKKMMCNSs8izxfsPZx-kb9CmRS2SOR3krTaCVff0Y76WOpHj1e5D9GoVO5ek9808mPBDyVOmgxoWKuRpr36aOJLs~RUHmrvfi3-fmwNZePrdIHb82SGMQ__" alt="" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact us</h3>
              <p>Phone: +91 0000000000</p>
              <p>Email: demo@gmail.com</p>
              <p>Address: Mumbai, India</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-blue-400">Services</a></li>
                <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
                <li><a href="#team" className="hover:text-blue-400">Team</a></li>
                <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for updates</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow p-2 rounded-l text-gray-800"
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Desun App Development. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }