function AboutPage() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-lg md:text-7xl font-sans font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
          About Us
        </h1>

        <p className="text-neutral-400 text-base md:text-lg leading-8">
          Music School is a premier institution dedicated to teaching the art
          and science of music. From guitar and piano to vocals, drums, and
          music production, we help students of every level unlock their true
          potential.
        </p>

        <p className="mt-6 text-neutral-500 text-sm md:text-base leading-7">
          Our mission is simple: nurture talent from the ground up and foster a
          vibrant, supportive community of musicians. Whether you&apos;re
          picking up an instrument for the first time or refining decades of
          experience, there&apos;s a place for you here.
        </p>

        <div className="mt-16 grid grid-cols-3 border-t border-white/10 pt-10">
          <div>
            <p className="text-3xl font-semibold text-white">50+</p>
            <p className="mt-2 text-sm text-neutral-500">Music Courses</p>
          </div>
          <div className="border-x border-white/10">
            <p className="text-3xl font-semibold text-white">10K+</p>
            <p className="mt-2 text-sm text-neutral-500">Students</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">4.9/5</p>
            <p className="mt-2 text-sm text-neutral-500">Student Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
