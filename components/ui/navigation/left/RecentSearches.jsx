import { useEffect, useState } from "react";

const dummySearchHistory = [
  {
    text: "Jpt",
  },
  {
    text: "Jpt",
  },
  {
    text: "Jpt",
  },
];

const RecentSearches = () => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    setTimeout(() => {}, 3000);
  }, []);

  return (
    <div>
      <div>Recent Searches</div>
    </div>
  );
};

export default RecentSearches;
