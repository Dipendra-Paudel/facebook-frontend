import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const dummySearchHistory = [
  {
    text: "Jpt",
  },
  {
    text: "Test",
  },
  {
    text: "Hello",
  },
];

const RecentSearches = () => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (!mounted) return false;

      setSearchHistory(dummySearchHistory);
      setFetching(false);
    }, 500);
  }, []);

  useEffect(() => {
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <div className="p-2 pb-0 pt-5">
      {!fetching && (
        <div>
          <div className="flex justify-between items-center pb-2">
            <div className="font-bold text-gray-700 pl-2">Recent searches</div>
            <div className="text-sm text-blue-500">Edit</div>
          </div>

          <div>
            {searchHistory.map((history, index) => {
              const { text } = history;
              return (
                <div
                  key={index}
                  className="flex justify-between items-center hover:bg-gray-200 p-2 cursor-pointer rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-100 h-8 w-8 flex items-center justify-center rounded-full text-gray-600">
                      <AccessTimeIcon style={{ fontSize: "20px" }} />
                    </div>
                    <div className="text-sm text-gray-700">{text}</div>
                  </div>

                  <div className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-gray-300">
                    <CloseIcon
                      className="text-gray-600"
                      style={{ fontSize: "18px" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentSearches;
