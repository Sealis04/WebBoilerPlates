import { cn } from "~/lib/utils";

interface DirectoryComponentProps {
  className?: string;
}

export default function DirectoryComponent({className}:DirectoryComponentProps) {
  return (
    <div className={cn('border-[1px] border-black p-2 rounded-md shadow-md drop-shadow-md h-[9vh]',className)}>
      <h1>Directory Component</h1>
    </div>
  );
}