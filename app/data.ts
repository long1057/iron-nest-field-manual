export type SourceLink = {
  label: string;
  href: string;
  kind: "official" | "community" | "player" | "video";
};

export type ArticlePage = {
  slug: string;
  title: string;
  keyword: string;
  eyebrow: string;
  dek: string;
  intent: string;
  status: "source-led" | "version-check";
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
  sources: SourceLink[];
};

export const sources = {
  steamDemo: {
    label: "Steam Demo · official listing",
    href: "https://store.steampowered.com/app/4300500/IRON_NEST_Heavy_Turret_Simulator_Demo/?l=english",
    kind: "official",
  },
  steamCommunity: {
    label: "Steam Community · official hub",
    href: "https://steamcommunity.com/app/2950790",
    kind: "official",
  },
  wikiHome: {
    label: "Iron Nest Wiki · unofficial field manual",
    href: "https://ironnest.wiki/",
    kind: "community",
  },
  guidesHub: {
    label: "Iron Nest Wiki · guides hub",
    href: "https://ironnest.wiki/guides/",
    kind: "community",
  },
  demoWalkthrough: {
    label: "Demo walkthrough · version-aware guide",
    href: "https://ironnest.wiki/guides/iron-nest-demo-walkthrough/",
    kind: "community",
  },
  firstFiring: {
    label: "First firing solution · beginner guide",
    href: "https://ironnest.wiki/guides/first-firing-solution/",
    kind: "community",
  },
  ballistic: {
    label: "Ballistic calculator guide",
    href: "https://ironnest.wiki/guides/ballistic-calculator-guide/",
    kind: "community",
  },
  tacticalMap: {
    label: "Tactical map guide",
    href: "https://ironnest.wiki/guides/reading-the-tactical-map/",
    kind: "community",
  },
  systems: {
    label: "Systems overview",
    href: "https://ironnest.wiki/systems/",
    kind: "community",
  },
  phantomBattery: {
    label: "Reddit · Phantom Battery discussion",
    href: "https://www.reddit.com/r/IronNest/comments/1vhmr7n/advice_for_phantom_battery_mission/",
    kind: "player",
  },
  counterBattery: {
    label: "Reddit · counter-battery discussion",
    href: "https://www.reddit.com/r/IronNest/comments/1u9qvog/counterbattery_demo_cant_find_second_battery/",
    kind: "player",
  },
  officialVideo: {
    label: "IRON NEST · official video",
    href: "https://www.youtube.com/watch?v=AQMEC5QtGug",
    kind: "video",
  },
  ammunition: {
    label: "Ammunition guide",
    href: "https://ironnest.wiki/guides/ammunition/",
    kind: "community",
  },
} satisfies Record<string, SourceLink>;

export const guidePages: ArticlePage[] = [
  {
    slug: "gameplay",
    title: "IRON NEST gameplay: turn an order into a firing solution",
    keyword: "iron nest gameplay",
    eyebrow: "Core loop",
    dek: "A source-led map of the work: read, measure, calculate, load, lay, fire, then learn from the result.",
    intent: "The player wants to understand what the game actually asks them to do before committing to a run.",
    status: "source-led",
    sections: [
      {
        heading: "The loop is the game",
        paragraphs: [
          "IRON NEST is built around operating a heavy artillery machine rather than steering a soldier around a battlefield. The official demo description centers the tactical map, the ballistic calculator, the physical controls and the consequences of each shot.",
          "That makes the useful mental model procedural: every shot is a chain of handoffs. If an impact is wrong, trace the chain instead of guessing at the final lever.",
        ],
        bullets: [
          "Read the incoming order and separate target facts from instructions.",
          "Plot the target and measure range and bearing from the turret.",
          "Choose an appropriate shell and charge before finalizing elevation.",
          "Load, traverse, elevate and fire, then preserve the result as evidence.",
        ],
      },
      {
        heading: "What a first session should prove",
        paragraphs: [
          "A first session is successful when the information chain becomes repeatable, not when the player rushes through a claimed mission count. The current demo is a useful introduction, but demo and full-release details can diverge.",
        ],
      },
    ],
    sources: [sources.steamDemo, sources.firstFiring, sources.demoWalkthrough],
  },
  {
    slug: "first-firing-solution",
    title: "IRON NEST beginner guide: your first firing solution",
    keyword: "iron nest guide",
    eyebrow: "Beginner guide",
    dek: "A calm first pass through the stations, with checks that keep one stale number from poisoning the whole shot.",
    intent: "The player needs an entry point and wants to know what to do first.",
    status: "source-led",
    sections: [
      {
        heading: "Start with the information, not the gun",
        paragraphs: [
          "Read the complete teleprinter order before touching the controls. Keep the target, source of the report, range or bearing, ammunition constraint and time pressure separate in your notes.",
          "The tactical map is where intelligence becomes geometry. A bearing is a line from its observer; a distance is an arc around its observer. Do not silently replace a spotter-to-target measurement with a turret-to-target range.",
        ],
      },
      {
        heading: "Use a final checksum",
        bullets: [
          "Target matches the current order.",
          "Shell and charge match the calculator setup.",
          "Elevation is set on the correct gun.",
          "Traverse matches the turret-to-target bearing.",
          "Loading and safety indicators show readiness.",
        ],
      },
      {
        heading: "If the shot misses",
        paragraphs: [
          "Change one uncertain variable at a time. A lateral miss suggests a plot, bearing or traverse problem; a short or long miss suggests range, charge, elevation or shell data. A single controlled correction keeps the next impact informative.",
        ],
      },
    ],
    sources: [sources.firstFiring, sources.steamDemo, sources.tacticalMap],
  },
  {
    slug: "tactical-map",
    title: "IRON NEST tactical map: measure range and bearing",
    keyword: "iron nest triangulation",
    eyebrow: "Map systems",
    dek: "Turn coordinates and observer reports into a target point, then measure from the Iron Nest rather than from the wrong origin.",
    intent: "The player is stuck between an intelligence report and a usable firing solution.",
    status: "version-check",
    sections: [
      {
        heading: "Build the target from its true origin",
        paragraphs: [
          "Mark the Iron Nest, named observers and every point explicitly identified by the report. Draw a bearing from the observer that supplied it. If the report supplies distance, use an arc centered on that observer.",
          "Two independent constraints create possible intersections. Once the target is fixed, draw the final line from the turret to the target; that is the line that supplies the firing range and bearing.",
        ],
      },
      {
        heading: "Triangulation checklist",
        bullets: [
          "Keep observer-to-target geometry separate from turret-to-target geometry.",
          "Remove abandoned lines and label the final target before measuring.",
          "Re-measure after a major target or turret-position change.",
          "Treat the current build's tools and labels as authoritative.",
        ],
      },
    ],
    sources: [sources.tacticalMap, sources.demoWalkthrough, sources.steamDemo],
  },
  {
    slug: "elevation-calculator",
    title: "IRON NEST ballistic calculator: range, charge and elevation",
    keyword: "iron nest how to calculate elevation",
    eyebrow: "Fire control",
    dek: "The calculator formalizes the inputs; it does not rescue a wrong range, wrong shell or mismatched charge.",
    intent: "The player needs a repeatable way to calculate elevation instead of eyeballing the shot.",
    status: "version-check",
    sections: [
      {
        heading: "Three inputs, one solution",
        paragraphs: [
          "The working relationship is range, propellant charge and shell. Measure the target first, select the relevant ammunition data, establish a valid charge and then read the elevation result carefully.",
          "If the shell family or charge changes, calculate again. Copying an angle from a previous target is a reliable way to create a confidently wrong shot.",
        ],
      },
      {
        heading: "Diagnose the miss scientifically",
        bullets: [
          "Short or long: revisit range, charge and elevation.",
          "Correct range but wrong side: revisit bearing and traverse.",
          "Unrelated impact: check target identity and transcription before fine-tuning.",
        ],
      },
    ],
    sources: [sources.steamDemo, sources.ballistic, sources.firstFiring],
  },
  {
    slug: "shell-types",
    title: "IRON NEST shell types: choose by target, not drama",
    keyword: "iron nest shell types",
    eyebrow: "Ammunition",
    dek: "The reliable question is what the target requires. Exact names, availability and behavior still need a check against the installed version.",
    intent: "The player wants to know which round belongs in the loading cycle for a given target.",
    status: "version-check",
    sections: [
      {
        heading: "Match purpose to target",
        paragraphs: [
          "The official demo page describes different rounds for different battlefield purposes, including armor-piercing, smoke and chemical effects. The community ammunition guide expands the topic, but the in-game labels and current build remain the final authority.",
        ],
        bullets: [
          "Armor-piercing: hardened vehicles and emplacements.",
          "High-explosive: soft targets and area effect.",
          "Smoke: screening movement or obscuring a position.",
          "Specialist rounds: use only when the current operation supports the choice.",
        ],
      },
      {
        heading: "Recalculate after a shell change",
        paragraphs: [
          "Shell weight and charge affect the firing solution. If you swap ammunition after calculating, return to the calculator rather than assuming the elevation still applies.",
        ],
      },
    ],
    sources: [sources.steamDemo, sources.ammunition, sources.firstFiring],
  },
  {
    slug: "multiplayer",
    title: "Is IRON NEST multiplayer? What the current listing confirms",
    keyword: "iron nest multiplayer",
    eyebrow: "Intent check",
    dek: "A useful answer can be a careful boundary: the current Steam Demo listing identifies the experience as single-player.",
    intent: "The player wants to know whether they can operate the turret with other people.",
    status: "version-check",
    sections: [
      {
        heading: "What is confirmed",
        paragraphs: [
          "The current Steam Demo listing shows Single-player as a feature. That is enough to answer the present question cautiously: do not promise co-op or multiplayer without an official announcement or an in-game option in the version being played.",
          "This page should be maintained as a verification page, not padded into a multiplayer guide. If the developers add a confirmed mode, the source and date should change with it.",
        ],
      },
      {
        heading: "What to check before publishing an update",
        bullets: [
          "Steam feature tags and the current store description.",
          "Developer announcements on the Steam Community hub.",
          "The installed build's menu and session options.",
        ],
      },
    ],
    sources: [sources.steamDemo, sources.steamCommunity],
  },
  {
    slug: "demo-walkthrough",
    title: "IRON NEST demo walkthrough: learn the loop before the clock",
    keyword: "iron nest walkthrough",
    eyebrow: "Demo route",
    dek: "Use the demo to test whether the deliberate operating loop is rewarding, while keeping demo claims separate from the full game.",
    intent: "The player wants a safe first route through the available introduction.",
    status: "version-check",
    sections: [
      {
        heading: "Practice the handoffs",
        paragraphs: [
          "The community walkthrough describes a guided first operation followed by a harder second operation where the player must triangulate the target. Use that as a learning shape, not as a permanent promise about the full campaign.",
          "The official demo page is the authority for what the public build currently contains. If the installed operation list differs, update this page rather than forcing an old walkthrough onto a new build.",
        ],
      },
      {
        heading: "A good demo session",
        bullets: [
          "Read the entire order before moving.",
          "Write down target, range, bearing, shell, charge and elevation.",
          "Review one miss before changing another variable.",
          "Record the build or version when a detail matters.",
        ],
      },
    ],
    sources: [sources.demoWalkthrough, sources.steamDemo, sources.firstFiring],
  },
];

export const missionPages: ArticlePage[] = [
  {
    slug: "counter-battery",
    title: "IRON NEST counter-battery: a troubleshooting page",
    keyword: "iron nest counter battery mission",
    eyebrow: "Mission troubleshooting",
    dek: "Player reports point to target-location and timer confusion; this page keeps those reports separate from verified mechanics.",
    intent: "The player is losing a counter-battery operation and needs a structured way to inspect the failure.",
    status: "version-check",
    sections: [
      {
        heading: "Start with the report, not the rumor",
        paragraphs: [
          "Community discussions describe players getting stuck after destroying apparent targets or failing to locate another battery. Those are useful problem signals, not proof of one universal solution.",
          "Record which target was identified, which reports supported it, what the timer showed and what the current build did after the shot. That evidence is more useful than copying a forum guess.",
        ],
      },
      {
        heading: "Troubleshooting order",
        bullets: [
          "Re-check the target plot and observer origin.",
          "Confirm the turret-to-target range and bearing.",
          "Confirm shell, charge and elevation before firing.",
          "Note whether movement or an emergency action changed the timer in the current build.",
        ],
      },
    ],
    sources: [sources.counterBattery, sources.demoWalkthrough, sources.steamCommunity],
  },
  {
    slug: "mission-2",
    title: "IRON NEST mission 2: why triangulation becomes the test",
    keyword: "iron nest mission 2",
    eyebrow: "Demo mission",
    dek: "The current community walkthrough frames the second demo mission as a difficulty spike because the training wheels come off.",
    intent: "The player wants to understand what changes in the second operation and how to prepare.",
    status: "version-check",
    sections: [
      {
        heading: "The map becomes the problem",
        paragraphs: [
          "The community walkthrough describes a shift from a guided first operation to a second operation where the target must be triangulated from observer reports. Draw the lines from their actual origins, find the intersection, then measure from the turret.",
          "This page intentionally labels the claim as demo-specific. The official listing and the installed operation list should win if the current build differs.",
        ],
      },
      {
        heading: "Prepare before starting",
        bullets: [
          "Know where the tactical map, compass and calculator are.",
          "Keep the observer reports together rather than treating each number independently.",
          "Choose the shell after the target is understood.",
          "Use one controlled correction after the first result.",
        ],
      },
    ],
    sources: [sources.demoWalkthrough, sources.tacticalMap, sources.steamDemo],
  },
];

export const deferredPages = [
  {
    label: "Gorge Mission",
    keyword: "iron nest gorge mission",
    reason: "Search evidence exists, but the current source set lacks two reliable, text-level sources for the specific mission.",
  },
  {
    label: "Phantom Battery",
    keyword: "iron nest phantom battery",
    reason: "Player discussions confirm the question exists; the exact current-build solution still needs official or in-game confirmation.",
  },
  {
    label: "Mods",
    keyword: "iron nest mods",
    reason: "The current official sources do not confirm mod support, so the page is kept out of the first release.",
  },
];

export const allPages = [...guidePages, ...missionPages];

