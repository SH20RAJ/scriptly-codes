export const aboutText = [
  "Hello! I&apos;m a passionate web developer with experience in building responsive, accessible, and high-performance web applications. I enjoy creating solutions that are both user-friendly and maintainable, using modern tools like React, Next.js, and Tailwind CSS.",
  "I&apos;m constantly learning and experimenting with new technologies, and I love contributing to open source projects that solve real-world problems. Collaboration, clean code, and continuous improvement are at the heart of how I work.",
  "When I&apos;m not coding, I enjoy exploring new tech communities, reading about software design, and sharing knowledge through tutorials and blog posts.",
];

export default function About() {
  return (
    <section className="py-12 px-6 md:px-20" id="about" data-testid="about">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      {aboutText.map((i, index) => (
        <p className="mb-4" key={index}>
          {i}
        </p>
      ))}
    </section>
  );
}
