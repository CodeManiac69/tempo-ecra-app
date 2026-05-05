"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Card = ({ children, className, ...props }) => (
  <div className={className} {...props}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Button = ({ children, className, ...props }) => (
  <button className={`px-3 py-2 bg-black text-white rounded ${className}`} {...props}>
    {children}
  </button>
);
