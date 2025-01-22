"use client";

import Image from "next/image";
import { FiPlus } from "react-icons/fi";

export default function EmptyState({
  title,
  description,
  image,
  actionLabel,
  onAction,
  showAction = true,
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-white rounded-lg shadow-sm p-8">
      <div className="w-48 h-48 relative mb-6">
        <Image
          src={image || "/assets/images/empty-state.svg"}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-center max-w-md mb-6">{description}</p>
      {showAction && onAction && (
        <button
          onClick={onAction}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#4E73DF] hover:bg-[#2E59D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4E73DF]"
        >
          <FiPlus className="w-5 h-5 mr-2" />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
