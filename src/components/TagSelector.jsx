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

  const toggleAllSubTags = () => {
    if (selectedSubTags.length === subTags.length) {
      setSelectedSubTags([]);
    } else {
      setSelectedSubTags([...subTags]);
    }
  };

  return (
    <div className="space-y-6 text-center">
      <div>
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text drop-shadow-sm">
          Tema Principal
        </h2>
        <div className="flex flex-wrap gap-2 justify-center">
          {mainTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedMainTag(tag);
                setSelectedLevel(null);
                setSelectedSubTags([]);
              }}
              className={`px-4 py-2 rounded-lg border text-sm transition-all duration-200 ${
                selectedMainTag === tag
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {selectedMainTag && (
        <div>
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text drop-shadow-sm">
            Nivel
          </h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => {
                  setSelectedLevel(level);
                  setSelectedSubTags([]);
                }}
                className={`px-4 py-2 rounded-lg border text-sm transition-all duration-200 ${
                  selectedLevel === level
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedMainTag && selectedLevel && (
        <div>
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
            Subtemas
          </h2>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={toggleAllSubTags}
              className={`px-6 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-200 ${
                selectedSubTags.length === subTags.length
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800 text-white hover:bg-gray-700 border-purple-500/50 hover:border-purple-500"
              }`}
            >
              {selectedSubTags.length === subTags.length ? "Deseleccionar Todos" : "Seleccionar Todos"}
            </button>
            <div className="flex flex-wrap gap-2 justify-center">
              {subTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleSubTag(tag)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all duration-200 ${
                    selectedSubTags.includes(tag)
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
