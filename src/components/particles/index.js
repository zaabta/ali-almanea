import { useMemo } from "react";
import ParticlesRenderer, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particles = () => {
  const options = useMemo(() => ({
    particles: {
      number: {
        value: 50,
        density: { enable: false, area: 5000 },
      },
      links: { enable: true, opacity: 0.5 },
      size: { value: 1 },
    },
    detectRetina: true,
  }), []);

  return (
    <ParticlesProvider init={loadSlim}>
      <ParticlesRenderer className="particles" options={options} />
    </ParticlesProvider>
  );
};

export default Particles;
