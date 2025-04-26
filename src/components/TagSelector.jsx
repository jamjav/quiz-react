import React from "react";

export default function TagSelector({
  mainTags,
  levels,
  subTags,
  selectedMainTag,
  selectedLevel,
  selectedSubTags,
  setSelectedMainTag,
  setSelectedLevel,
  setSelectedSubTags,
}) {
  const toggleSubTag = (subTag) => {
    setSelectedSubTags((prevTags) => {
      if (prevTags.includes(subTag)) {
        return prevTags.filter((tag) => tag !== subTag);
      } else {
        return [...prevTags, subTag];
      }
    });
  };

  return (
    <div className="space-y-4 text-center">
      <div>
        <h2 className="text-xl font-bold mb-2">Tema Principal</h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {mainTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedMainTag(tag);
                setSelectedLevel(null);
                setSelectedSubTags([]);
              }}
              className={`px-3 py-1 rounded-full border text-sm ${
                selectedMainTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {selectedMainTag && (
        <div>
          <h2 className="text-xl font-bold mb-2">Nivel</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => {
                  setSelectedLevel(level);
                  setSelectedSubTags([]);
                }}
                className={`px-3 py-1 rounded-full border text-sm ${
                  selectedLevel === level
                    ? "bg-green-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedLevel && (
        <div>
          <h2 className="text-xl font-bold mb-2">Subtema</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {subTags.map((subTag) => (
              <button
                key={subTag}
                onClick={() => toggleSubTag(subTag)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  selectedSubTags.includes(subTag)
                    ? "bg-purple-600 text-white"
                    : "bg-white text-black"
                }`}
              >
                {subTag}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
