"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "@/data/content";
export function FaqList(){const [active,setActive]=useState<number|null>(0);return <div>{faq.map((item,i)=>{const open=active===i;return <div className="border-t rule" key={item.question}><button className="flex w-full items-center justify-between gap-8 py-5 text-left text-base font-semibold" onClick={()=>setActive(open?null:i)} aria-expanded={open}>{item.question}{open?<Minus size={18}/>:<Plus size={18}/>}</button>{open&&<p className="max-w-2xl pb-6 text-sm leading-6 text-stone-600">{item.answer}</p>}</div>})}</div>}
