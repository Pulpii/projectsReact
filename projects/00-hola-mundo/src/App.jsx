import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { TwitterFollowCard } from "./TwitterFollowCard";
import "./twitterFollowCard.css";
export function App() {
  const users = [
    {
      userName: "pulpii",
      name: "David Acedo",
      isFollowing: true,
    },
    {
      userName: "ireneee_ac",
      name: "Irene Acuña",
      isFollowing: false,
    },
    {
      userName: "SrSpooderman",
      name: "Francisco Pavel Do Santos",
      isFollowing: false,
    },
    {
      userName: "lil_sekai",
      name: "Miguel Tordillo Sokamona",
      isFollowing: false,
    },
  ];

  return (
    <>
      <section className="App">
        {users.map((user) => {
          return (
            <TwitterFollowCard
              key={user.userName}
              userName={user.userName}
              initIsFollowing={user.isFollowing}
            >
              {user.name}
            </TwitterFollowCard>
          );
        })}
      </section>
    </>
    // <ChakraProvider>

    // </ChakraProvider>
  );
}
