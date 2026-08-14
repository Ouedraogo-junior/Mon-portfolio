// components/ProjectImage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Code2 } from "lucide-react"; // npm i lucide-react (si pas déjà installé)

interface ProjectImageProps {
  src?: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
        <Code2 className="w-12 h-12 text-slate-400" strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <Image
      src={src!}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setHasError(true)}
    />
  );
}