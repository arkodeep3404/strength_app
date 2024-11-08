import { Trophy } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <header className="flex h-20 w-full items-center justify-between bg-black px-6 md:px-10">
      <Link
        href="#"
        className="flex items-center gap-3 text-xl font-semibold text-white"
      >
        <Trophy className="h-7 w-7" />
        <span>Strength</span>
      </Link>
      <div className="flex items-center space-x-8">
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-white hover:text-gray-300 transition-colors text-lg"
          >
            About Us
          </Link>
        </nav>
        <Button className="bg-emerald-500 text-lg font-medium text-white hover:bg-emerald-600 px-6 py-3">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
}
