import { getDictionary } from "@/app/[lang]/dictionaries";
import ModalsInternal from "./ModalsInternal";

export default async function Modals({ lang }: { lang: string }) {
  const dict = await (getDictionary as  (locale: any) => Promise<any>)(lang);
  return <ModalsInternal dict={dict} />;
}
