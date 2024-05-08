"use client";

export default function MyComponent({
  children,
}: {
  children: React.ReactNode
}) {
  return <section className="bg-red-600">{children}</section>
}