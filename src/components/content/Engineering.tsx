import React from 'react';
import { Y2KMediaCarousel, CarouselMediaItem } from '../Y2KMediaCarousel';

export const Engineering: React.FC = () => {
  const cfdMedia: CarouselMediaItem[] = [
    { type: 'video', src: 'assets/videos/cfd_bugatti.mp4', title: 'Bugatti CFD Streamline Simulation', aspectRatio: '16/9' },
    { type: 'video', src: 'assets/videos/cfd_naca.mp4', title: 'NACA Airfoil Flow Sim', aspectRatio: '16/9' },
    { type: 'video', src: 'assets/videos/cfd_wedge.mp4', title: 'Wedge Aerodynamics', aspectRatio: '16/9' }
  ];

  const turbineMedia: CarouselMediaItem[] = [
    { type: 'image', src: 'assets/images/engineering/h_rotor_1.jpg', alt: "H-Rotor turbine CAD", fileFormat: 'PNG', dimensions: '250 x 250', aspectRatio: '1/1' },
    { type: 'image', src: 'assets/images/engineering/h_rotor_2.jpg', title: 'H-Rotor turbine CAD', aspectRatio: '1/1' }
  ];

  const ddaMedia: CarouselMediaItem[] = [
    { type: 'video', src: 'assets/videos/h-rotor-test.mov', title: 'H-Rotor Turbine Test Run', aspectRatio: '1/1' },
    { type: 'image', src: 'assets/images/dda_icon.png', alt: "Déplace d'air competition", fileFormat: 'PNG', dimensions: '250 x 250', aspectRatio: '1/1' },
    { type: 'image', src: 'assets/images/engineering/dda_prototype_1.jpg', alt: "Déplace d'air competition prototype 1", fileFormat: 'PNG', dimensions: '250 x 250', aspectRatio: '1/1' },
    { type: 'image', src: 'assets/images/engineering/dda_prototype_2.jpg', alt: "Déplace d'air competition prototype 2", fileFormat: 'PNG', dimensions: '250 x 250', aspectRatio: '1/1' },
    { type: 'image', src: 'assets/images/engineering/dda_prototype_3.jpg', alt: "Déplace d'air competition prototype 3", fileFormat: 'PNG', dimensions: '250 x 250', aspectRatio: '1/1' },
    { type: 'image', src: 'assets/images/engineering/dda_coils.jpg', alt: "Turbine coils", fileFormat: 'PNG', dimensions: '250 x 250', aspectRatio: '1/1' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="cv-bar">
        <span className="tech-label">CV_TARGET: ENGINEERING</span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <a href="assets/resumes/hardware_en.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Download CV: 🇬🇧 EN ]
          </a>
          <a href="assets/resumes/hardware_fr.pdf" download className="button-retro" style={{ fontSize: '13px', padding: '2px 8px', textDecoration: 'none' }}>
            [ Télécharger CV: 🇫🇷 FR ]
          </a>
        </div>
      </div>

      <div className="panel-content" style={{ flex: 1 }}>
        <div>
          <h3 className="section-header">[ ENGINEERING SYSTEM MATRIX ]</h3>
          <p className="item-body">
            System diagnostics verify full-spectrum compliance across CAD hardware structures, fluid dynamics mathematical models, and electromagnetic turbine configurations.
          </p>
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-title">CFD Simulation</span>
            <span className="item-date">2026</span>
          </div>
          <p className="item-body" style={{ marginBottom: '8px' }}>
            Programmed an active, real-time ``Computational Fluid Dynamics'' inside game engine limitations to visualize particle trajectory.
          </p>
          <ul className="item-list" style={{ marginBottom: '12px' }}>
            <li>Particle trajectories driven by boids-inspired cohesion/separation algorithms and pressure vectors.</li>
            <li>Real-time velocity/pressure gradients modeled using Bernoulli's fluid dynamic variables.</li>
            <li>Visual validation mapped directly onto custom geometry.</li>
          </ul>
          <Y2KMediaCarousel media={cfdMedia} />
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-title">CEGEP Integrative Wind Turbine</span>
            <span className="item-date">2026</span>
          </div>
          <div className="item-secondary" style={{ marginBottom: '6px' }}>Collège Lionel-Groulx // Fusion360 CAD</div>
          <ul className="item-list" style={{ marginBottom: '12px' }}>
            <li>Designed a high-efficiency vertical axis H-Rotor turbine profile using parametric CAD modeling.</li>
            <li>Configured brushed DC motors to act as generator nodes capturing kinetic voltage payloads.</li>
            <li>Applied electromagnetic theory (Faraday's Law, cogging torque, and Kirchhoff's loop rules).</li>
            <li>Integrated mechanical principles including aerodynamic airfoil boundaries and Betz's limit coefficients.</li>
          </ul>
          <Y2KMediaCarousel media={turbineMedia} />
        </div>

        <div className="item-card">
          <div className="item-header">
            <span className="item-title">Polytechnique Montréal "Déplace de l'air"</span>
            <span className="item-date">2026</span>
          </div>
          <div className="item-secondary" style={{ marginBottom: '6px' }}>Polytechnique Montreal // Aerodynamics Lead</div>
          <p className="item-body" style={{ marginBottom: '6px' }}>
            Led a team of three in wind-tunnel prototyping, airfoil testing, and alternator AC circuits.
          </p>
          <ul className="item-list" style={{ marginBottom: '12px' }}>
            <li>Conducted analysis of blade lift/drag coefficients on custom NACA profiles.</li>
            <li>Assembled an axial flux alternator incorporating custom lamination layouts and coil loops.</li>
            <li>Managed budget limits, size constraints, and design trade-offs under competition guidelines.</li>
          </ul>
          <Y2KMediaCarousel media={ddaMedia} />
        </div>
      </div>
    </div>
  );
};
