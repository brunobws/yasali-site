import config from "../factory.config.json" with { type: "json" };

const args = process.argv.slice(2);
const option = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
};

const normalizedPhase = (option("--phase") ?? "")
  .toLowerCase()
  .replace(/^fase[-\s]?/, "")
  .replace(/^phase[-\s]?/, "");
const validPhases = ["1", "2a", "2b", "3a", "3b", "4", "release"];

if (!validPhases.includes(normalizedPhase)) {
  console.error("Uso: node scripts/check-integrations.mjs --phase <1|2a|2b|3a|3b|4|release> [--available capacidade,...] [--json]");
  process.exit(2);
}

const declared = option("--available") ?? process.env.VELOZEWEB_AVAILABLE_INTEGRATIONS ?? "";
const available = new Set(declared.split(",").map((item) => item.trim().toLowerCase()).filter(Boolean));
const has = (name) => available.has(name);
const results = [];

for (const [name, item] of Object.entries(config.integrations.skills)) {
  if (!item.phases.includes(normalizedPhase)) continue;
  results.push({ type: "skill", name, level: item.level, available: has(name), fallback: item.fallback });
}

for (const [name, item] of Object.entries(config.integrations.mcpCapabilities)) {
  if (!item.phases.includes(normalizedPhase)) continue;
  const alternatives = item.anyOf ?? [name];
  results.push({
    type: "capability",
    name,
    level: item.level,
    available: alternatives.some(has),
    alternatives,
    fallback: item.fallback,
  });
}

const blocked = results.filter((item) => item.level === "required" && !item.available);
const fallback = results.filter((item) => item.level !== "required" && !item.available);
const status = blocked.length ? "BLOCKED" : fallback.length ? "FALLBACK" : "READY";
const report = { phase: normalizedPhase, available: [...available], status, results };

if (args.includes("--json")) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log(`${status}: fase ${normalizedPhase}`);
  for (const item of results) {
    const availability = item.available ? "disponível" : "ausente";
    const alternatives = item.alternatives ? ` (${item.alternatives.join(" ou ")})` : "";
    console.log(`- ${item.type} ${item.name}${alternatives}: ${availability} [${item.level}]`);
    if (!item.available) console.log(`  fallback: ${item.fallback}`);
  }
}

process.exit(blocked.length ? 1 : 0);
