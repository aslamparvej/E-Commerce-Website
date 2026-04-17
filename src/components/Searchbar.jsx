import React, {useState} from "react";
import { Search } from "lucide-react";

const Searchbar = () => {
    const [searchInput, setSearchInput] = useState("");

  return (
    <div className="bg-[#F5F5F5] rounded-sm relative">
        <input type="text" className="ps-3 pe-12 py-2 text-gray-800 text-sm border border-gray-50 rounded-sm focus:border focus:border-gray-400 focus:outline-0" value={searchInput} onChange={ e => setSearchInput(e.target.value)} placeholder="What are you looking for?" />
        <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  )
}

export default Searchbar;
