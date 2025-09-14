"use client";
import {useBalance} from "@repo/store/useBalance";
import {PrismaClient}  from "@repo/db/client";


export default function Page(){

  const balance = useBalance();
  const client = new PrismaClient();
  return (
    <div className="text-2xl">
      yoyoyo whatsupp whatsuppppp
    </div>
  )
}