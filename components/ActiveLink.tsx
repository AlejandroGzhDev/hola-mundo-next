import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}
const style = {
  color: "#0070f3",
  textDecoration: "underline",
};
export const ActiveLink = ({ href, text }: Props) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a style={router.asPath === href ? style : {}}>{text}</a>
    </Link>
  );
};
