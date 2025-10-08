import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import StartUpCard, { StartupTypeCard } from "./StartUpCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startUps = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {startUps.length > 0 ? (
        startUps.map((startup: StartupTypeCard) => (
          <StartUpCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no results">No posts Yet</p>
      )}
    </>
  );
};

export default UserStartups;
