"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface dataLomba {
  title: string;
  user_email: string;
  category: string;
  deadline: string;
}

export default function BookmarkButton({
  title,
  user_email,
  category,
  deadline,
}: dataLomba) {
  const [isCreated, setIsCreated] = useState(false);

  const handleBookmark = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const data = { title, user_email, category, deadline };
    const response = await fetch("/api/bookmark/lomba", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const bookmark = await response.json();
   if (bookmark.isCreated) {
     setIsCreated(true);
   }
  };

  return (
    <div>
      {isCreated ? (
        <p>Berhasil Ditambahkan Ke Bookmark</p>
      ) : (
        <Button size="sm" onClick={handleBookmark}>
          Add to Bookmark
        </Button>
      )}
    </div>
  );
}
