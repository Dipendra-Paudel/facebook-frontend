import { useState } from "react";
import Image from "next/image";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Search from "./Search";

const LeftNavigation = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="px-4 py-2 relative w-80">
      <div className="flex space-x-2">
        <div className="flex-shrink-0 h-10 w-10 relative">
          <Image src="/images/facebook.png" layout="fill" />
        </div>
        <div className="z-20 flex-1">
          <Search
            value={searchText}
            isFocused={isSearchFocused}
            handleChange={setSearchText}
            handleSearchFocusChange={setIsSearchFocused}
          />
        </div>
      </div>

      <div
        className={`absolute top-0 w-full left-0 py-2 bg-white transition-all duration-300 ${
          isSearchFocused ? "shadow z-10" : "-z-10"
        }`}
      >
        <div
          className={`h-10 flex items-center transition-all duration-300 ${
            isSearchFocused ? "pl-4" : "pl-8"
          }`}
        >
          <KeyboardBackspaceIcon className="text-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default LeftNavigation;
