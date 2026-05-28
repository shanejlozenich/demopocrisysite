import Link from "next/link"

type SectionCardProps = {
  title: string
  description: string
  href: string
}

export default function SectionCard({
  title,
  description,
  href,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className="border border-neutral-800 bg-black/20 p-6 hover:border-neutral-500 transition-all block"
    >
      <h2 className="text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-4 text-neutral-400 leading-relaxed">
        {description}
      </p>
    </Link>
  )
}