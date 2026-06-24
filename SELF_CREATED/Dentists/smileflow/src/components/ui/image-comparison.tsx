"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

export function ImageComparison({
  beforeImage,
  afterImage,
  title,
  description,
}: {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    
    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          <div>
            <Badge variant="outline" className="border-cyan-500 text-cyan-500 bg-cyan-500/10">Transformation</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-4xl tracking-tighter font-semibold">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="pt-8 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none cursor-ew-resize"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
              onMouseDown={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
              onTouchStart={(e) => {
                setOnMouseDown(true);
                onMouseMove(e);
              }}
            >
              {/* Divider Line */}
              <div
                className="bg-white/80 h-full w-1 absolute z-20 top-0 -ml-0.5 select-none pointer-events-none"
                style={{
                  left: inset + "%",
                }}
              >
                <div
                  className="bg-white text-foreground rounded-full shadow-lg border hover:scale-110 transition-all w-10 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-5 z-30 flex justify-center items-center pointer-events-auto"
                >
                  <GripVertical className="h-4 w-4 select-none text-slate-600" />
                </div>
              </div>
              
              {/* Before Image (Clipping Path) */}
              <div
                className="absolute left-0 top-0 z-10 w-full h-full rounded-2xl select-none overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - inset}% 0 0)`,
                }}
              >
                <img
                  src={beforeImage}
                  alt="Before treatment"
                  className="w-full h-full object-cover select-none"
                  draggable={false}
                />
              </div>

              {/* After Image (Background) */}
              <img
                src={afterImage}
                alt="After treatment"
                className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl select-none"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
