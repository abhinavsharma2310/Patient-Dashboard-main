import TestLogo from "../assets/TestLogo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 border border-gray-300 rounded-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center mr-8">
            {/* Use your Tech.Care logo */}
            <img src={TestLogo} alt="Tech.Care Logo" className="h-8 w-auto ml-2" />
          </div>

          <nav className="flex space-x-4">
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Overview Icon */}</span>
              <span>Overview</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full bg-cyan-400 text-white">
              <span className="mr-2">{/* Patients Icon */}</span>
              <span>Patients</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Schedule Icon */}</span>
              <span>Schedule</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Message Icon */}</span>
              <span>Message</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2 rounded-full text-gray-700">
              <span className="mr-2">{/* Transactions Icon */}</span>
              <span>Transactions</span>
            </a>
          </nav>
        </div>

        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src="doc.png"
              alt="Dr. Jose Simmons"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-2">
              <div className="text-sm font-medium text-gray-800">Dr. Jose Simmons</div>
              <div className="text-xs text-gray-500">General Practitioner</div>
            </div>
          </div>
          <button className="ml-2 text-gray-500">{/* Settings Icon */}</button>
          <button className="ml-2 text-gray-500">{/* Menu Icon */}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
