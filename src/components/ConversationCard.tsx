import React from "react";
import Avatar from "./Avatar";
import { ConversationData } from "../types";

interface ConversationCardProps {
  conversation: ConversationData;
  onClick?: () => void;
}

const ConversationCard: React.FC<ConversationCardProps> = ({
  conversation,
  onClick,
}) => {
  return (
    <div
      className="conversation-card cursor-pointer primary-card card-shadow"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <Avatar
            src={conversation.user.avatar}
            alt={conversation.user.name}
            size="md"
            isOnline={false}
          />
          {conversation.user.isOnline && (
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#5F8909] border border-white rounded-full"></div>
          )}
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center space-x-2">
            <span className="text-[#999999] font-medium text-sm truncate">
              {conversation.user.name}
            </span>
          </div>
          <span className="text-[#5C5C5C] text-[15px] truncate">
            {conversation.user.username}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-start text-right flex-shrink-0 card-test">
        <span className="text-[#999999] text-[15px] whitespace-nowrap">
          {conversation.lastMessage}
        </span>
        <span className="text-[#5C5C5C] text-[15px] whitespace-nowrap mt-0.5">
          {conversation.firstSeen}
        </span>
      </div>
      <div className="text-[#fff] text-[1.5rem]">⋮</div>
    </div>
  );
};

export default ConversationCard;
