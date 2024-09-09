"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Data {
  title: string;
  user_email: string;
  category?: string;
  total_uang?: string;
  deadline: string;
}

export default function BookmarkButton({
  title,
  user_email,
  category,
  total_uang,
  deadline,
}: Data) {
  const [isCreated, setIsCreated] = useState(false);

  const handleBookmark = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Determine the endpoint and create the data object based on the presence of category or total_uang
    const isLomba = !!category;
    const endpoint = isLomba ? "/api/bookmark/lomba" : "/api/bookmark/beasiswa";

    const data = {
      title,
      user_email,
      deadline,
      ...(isLomba ? { category } : { total_uang }),
    };

    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
