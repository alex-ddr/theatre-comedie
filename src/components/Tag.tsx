import React from "react";

interface TagProps {
    children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ children }) => (
    <span className="rounded-full border border-pink-300/20 bg-pink-500/10 px-3 py-1 font-medium transition-colors hover:border-pink-300/50 hover:bg-pink-500/15 hover:text-white">
        {children}
    </span>
);

export default Tag;
