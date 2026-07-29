import type { Metadata } from "next";import "./globals.css";
export const metadata:Metadata={title:"TerraNova Agro — сучасне агровиробництво",description:"Вирощуємо, зберігаємо та експортуємо українське зерно відповідально.",openGraph:{title:"TerraNova Agro",description:"Земля. Технології. Відповідальність.",locale:"uk_UA",type:"website"},icons:{icon:"/favicon.svg"}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="uk"><body>{children}</body></html>}
