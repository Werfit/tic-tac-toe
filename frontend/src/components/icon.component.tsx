import { CircleIcon, RotateCcwIcon, UndoIcon, XIcon } from "lucide-react";

export const IconNames = {
  CROSS: "cross",
  CIRCLE: "circle",
  UNDO: "undo",
  RESTART: "restart",
} as const;

type IconProps = {
  name: (typeof IconNames)[keyof typeof IconNames];
  className?: string;
};

export const Icon = ({ name, className }: IconProps) => {
  if (name === IconNames.CROSS) {
    return <XIcon className={className} />;
  }

  if (name === IconNames.CIRCLE) {
    return <CircleIcon className={className} />;
  }

  if (name === IconNames.UNDO) {
    return <UndoIcon className={className} />;
  }

  if (name === IconNames.RESTART) {
    return <RotateCcwIcon className={className} />;
  }

  return null;
};
