
/**
 * Enterprise Client Logo Configuration.
 */
const CLIENTS = [
  { name: "Health Canada", logo: "/assets/health-canada.svg" },
  { name: "Natural Resources Canada", logo: "/assets/natural-resources-canada.svg" },
  { name: "Elections Canada", logo: "/assets/elections-canada.svg" },
  { name: "Transport Canada", logo: "/assets/transport-canada.svg" },
  { name: "Canadian Food Inspection Agency", logo: "/assets/canadian-food-inspection-agency.svg" },
  { name: "Public Safety Canada", logo: "/assets/public-safety-canada.svg" },
];

export function ClientTicker() {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      {/* Section Header */}
      <div className="container-wide mb-10">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest opacity-80">
          Trusted by Leading Government & Enterprise Organizations
        </p>
      </div>

      {/* Masking Container: Fades logos at the left and right edges */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        {/* Ticker Track:
            - cursor-pointer: Added for interactivity.
            - Continuous movement: Removed the paused state to keep it moving.
        */}
        <div
          className="flex animate-ticker cursor-pointer"
          style={{
            animationDuration: "30s",
            width: "fit-content",
          }}
        >
          {/* Duplicate array to ensure a seamless infinite loop */}
          {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
            <div key={`${client.name}-${index}`} className="flex-shrink-0 mx-4 flex items-center group">
              {/* Logo Card Container:
                  - shadow-none: No shadows as requested.
                  - transition-all: Smooth transition for background and border.
              */}
              <div className="flex items-center justify-center px-8 py-5 rounded-xl bg-card/40 border border-border hover:border-primary/40 hover:bg-card transition-all duration-500 shadow-none hover:shadow-none">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  /* Visual Formats:
                     - grayscale: Black & White by default.
                     - group-hover:grayscale-0: Returns color while the ticker is moving.
                  */
                  className="h-9 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out brightness-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
