export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] flex flex-col items-center justify-center"
    >
      <h3 className="text-3xl font-semibold">Contact Me</h3>

      <div className="flex flex-col gap-5">
        <input type="text " className="border border-black rounded-xl" />
        <input type="text " className="border border-black rounded-xl" />
      </div>
    </section>
  );
}
