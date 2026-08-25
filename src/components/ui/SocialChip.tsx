import { InstagramIcon } from "@/components/ui/InstagramIcon";

export function SocialChip({
  handle,
  href,
  label,
}: {
  handle: string;
  href: string;
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full border border-tc-gold px-5 py-2.5 text-sm text-tc-gold"
      aria-label={label ?? `Instagram ${handle}`}
    >
      <InstagramIcon />
      {handle}
    </a>
  );
}
