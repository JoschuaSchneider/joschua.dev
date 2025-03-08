import { Container } from "@/components/container";
import { Heading } from "@/components/heading";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container className="mt-8">
        <Heading level="h1" className="mb-8">
          Photography
        </Heading>
        <div className="prose dark:prose-invert">
          Check out my full portfolio on{" "}
          <a
            href="https://www.instagram.com/joschuaschneider/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </Container>

      {children}
    </main>
  );
}
