import Image from "next/image";

/**
 * Supporting illustration for a section.
 *
 * Sources are a mix of 1:1 and 3:2, so each one is contained inside a box
 * the caller sizes — side by side, an unboxed square sits shorter than a
 * wide one and the row loses its baseline.
 *
 * The caller supplies the sizing because the two uses need different rules:
 * the services band wants a shared aspect ratio, while the pillars need a
 * fixed height (their columns are unequal widths, so an aspect ratio there
 * makes the first illustration taller than the other two and pushes its
 * heading out of line).
 *
 * These sit below the fold, so they stay lazy: no `priority` here.
 */
export default function SectionArt({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
