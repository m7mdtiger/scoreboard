import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div>
          <a
            className="text-xl font-semibold text-neutral-800 dark:text-neutral-200"
            href="#"
          >
            ScoreBoard
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
