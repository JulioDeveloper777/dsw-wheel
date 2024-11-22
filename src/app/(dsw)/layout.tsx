export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen flex mx-auto max-w-full">
      {children}
    </section>
  );
}
