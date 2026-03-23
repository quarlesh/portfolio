import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-4">
        <img
          src="profile_pic.jpeg"
          alt="Haylee profile pic"
          className="img-circle"
        />
        <h1 className="text-4xl font-bold datatype-font">Haylee Quarles</h1>
      </div>
      <p className="text-lg text-gray-600">
        Full Stack Software Engineer motivated to combine back-end expertise
        with front-end passion into products that will drive innovation and
        deliver on key goals.
      </p>

      <div className="flex gap-4">
        <Button variant="primary">
          <a href="/projects">View Projects</a>
        </Button>
        {/* <Button variant="primary">
          <a href="/designs">View Designs</a>
        </Button> */}
      </div>
    </section>
  );
}
