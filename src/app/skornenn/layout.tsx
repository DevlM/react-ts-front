"use client";
import  { useEnsureVariant } from "@/hooks/use-app";
import { PropsWithChildren } from "react";



export default function Layout({ children }: PropsWithChildren) {
    useEnsureVariant('skornenn');
    return children;
}