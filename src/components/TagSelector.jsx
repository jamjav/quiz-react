import React from "react";

export default function TagSelector({ availableTags, selectedTags, setSelectedTags }) {
    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    return (
        <div className="flex flex-wrap gap-2 mb-4">
            {Object.entries(availableTags).map(([theme, subthemes]) => (
                <div key={theme} className="mb-4">
                    <h3 className="font-bold text-lg">{theme}</h3>
                    <div className="flex flex-wrap gap-2">
                        {subthemes.map((subtheme) => (
                            <button
                                key={subtheme}
                                onClick={() => toggleTag(subtheme)}
                                className={`px-3 py-1 rounded-full border text-sm ${selectedTags.includes(subtheme) ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}
                            >
                                {subtheme}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}