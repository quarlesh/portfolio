export default function AboutPage() {
  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-6 datatype-font">About</h1>
        <p>
        Haylee Quarles is a full stack software engineer from Williamsville, NY.
        Her education background includes a Bachelor of Science in Computer
        Science Engineering from Michigan State University. Most recently, she
        worked as a Software Engineer at Target Corporation for over 6 years
        developing products and delivering on technology goals as defined by the
        Target Tech organization.
        </p>
        <p>
        Outside of work, she is driven by several hobbies including reading
        fiction, pursuing creative efforts like embroidery and other fiber arts,
        playing video games, and spending time with loved ones. She shares her
        space with a sweet tuxedo cat named Ruby.
        </p>
      </div>
      <div className="flex justify-center py-6 gap-4">
        <img
          src="target_dog.jpg"
          alt="Haylee and Target Dog"
          className="img-about"
        />
        <img
          src="embroidery1.jpg"
          alt="Floral embroidery"
          className="img-about"
        />
        <img
          src="embroidery2.jpg"
          alt="Tote bag embroidery"
          className="img-about"
        />
        <img
          src="ruby.jpg"
          alt="Tuxedo cat Ruby"
          className="img-about"
        />
      </div>
    </>
  );
}
