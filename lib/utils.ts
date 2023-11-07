import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Ensure minutes are displayed as two digits
  const formattedMinutes = (minutes < 10 ? "0" : "") + minutes;

  return `${hours}:${formattedMinutes}`;
};
