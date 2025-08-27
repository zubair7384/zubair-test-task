import React from "react";
import ConversationCard from "./components/ConversationCard";
import Button from "./components/Button";
import { ConversationData } from "./types";
import lightEffect from "./assets/light-effect.png";
import bottomEffect from "./assets/bottom-overlay.png";

const App: React.FC = () => {
  const conversations: ConversationData[] = [
    {
      id: "1",
      user: {
        id: "1",
        name: "Tests",
        username: "@sarahchen5556",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        isOnline: true,
      },
      lastMessage: "Last message 1 week ago",
      firstSeen: "First seen 1 weeks ago",
    },
    {
      id: "2",
      user: {
        id: "2",
        name: "Martin G",
        username: "@martin234234",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        isOnline: true,
      },
      lastMessage: "Last message 2 week ago",
      firstSeen: "First seen 2 weeks ago",
    },
    {
      id: "3",
      user: {
        id: "3",
        name: "Rylee Ree",
        username: "@ryleeree",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        isOnline: true,
      },
      lastMessage: "Last message 3 week ago",
      firstSeen: "First seen 3 weeks ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center p-4">
      <div
        className="rounded-3xl overflow-hidden flex items-center justify-center border-2 border-[#353535]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 100%)",
        }}
      >
        {/* Header Section */}
        <div className="w-[936px] h-[261px] px-6 py-5 flex relative">
          <div className="absolute inset-0 z-10">
            <img
              src={lightEffect}
              alt="Light effect"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rotated-element"></div>
          <div className="bottom-element">
            <img
              src={bottomEffect}
              alt="Light effect"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center pr-[3rem] relative z-20">
            <h1 className="heading-primary mt-8">Test Tests Tests Test</h1>
            <p className="text-secondary">Test Tests, Test Tests.</p>
            <h1 className="heading-primary">Tests Tests Tests.</h1>
            <Button
              onClick={() => console.log("Start conversation clicked")}
              className="w-full mt-[2rem]"
            >
              Start a Conversation
            </Button>
          </div>

          {/* Conversations List */}
          <div className="conversation-stack">
            {conversations.map((conversation) => (
              <ConversationCard
                key={conversation.id}
                conversation={conversation}
                onClick={() =>
                  console.log(
                    `Clicked conversation with ${conversation.user.name}`
                  )
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
