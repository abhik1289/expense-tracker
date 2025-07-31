import { usePathname } from "next/navigation";

function useExtractPathname() {
  const pathname = usePathname();
  const extractPathname = pathname.split("/")[1];
  const formattedPathname =
    extractPathname.charAt(0).toUpperCase() + extractPathname.slice(1);
  return formattedPathname;
}

export default useExtractPathname;
