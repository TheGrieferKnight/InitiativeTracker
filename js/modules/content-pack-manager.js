const DEFAULT_OPTIONS = {
  storageKey: 'dmtoolbox.contentPacks',
  autoEnable: true
};

const BUILT_IN_PACKS = [
  {
    "metadata": {
      "id": "com.supreme-magus.campaign-pack",
      "name": "Supreme Magus Campaign Pack",
      "version": "1.0.0",
      "authors": ["Supreme Magus"],
      "license": "Private use only",
      "source": "Supreme Magus campaign homebrew",
      "toolVersion": "2.0.8"
    },
    "allowlist": {
      "race": ["Besessener Mensch (Abomination)", "Behemoth", "Ry (Magical Beast)"],
      "class": ["Mage"]
    },
    "records": [
      {
        "type": "race",
        "id": "Besessener Mensch (Abomination)",
        "operation": "add",
        "payload": {
          "name": "Besessener Mensch (Abomination)",
          "summary": "Shared body with a dormant Puppeteer Abomination",
          "description": "A human whose body is shared with a dormant Puppeteer Abomination. The line between human and monster blurs with each use of hidden powers. Constant danger of discovery and loss of control defines this tormented existence.",
          "abilityScoreIncrease": "+1 Strength, +1 Constitution",
          "speed": "9 m / 30 ft",
          "size": "Medium",
          "type": "Humanoid (Aberration)",
          "traits": [
            "Abartige Anpassungen (Level 1): Bonus action, 1 min duration. Choose Chitinpanzer (+2 AC, speed -3 m) or Eldritch-Gliedmaßen (unarmed strikes deal 1d6).",
            "Chaos-Erfülltes Wirken (Level 1): Once per short rest, cast any known spell without components. Immediately triggers a roll on the Unstable Mutations table.",
            "Instabile Mutationen (Level 1, Flaw): Each dawn, DC 10 Con save. On failure or natural 1-2 on any d20 test, roll on Unstable Mutations table. DC increases by 2 per consecutive daily success.",
            "Transformation Stufe 2 (Level 5-6): Choose Effizienter Mörder, Jenseitige Tentakel, Situative Evolution, or Überirdische Sinne.",
            "Schreckliches Erscheinungsbild (Level 5-6, Flaw): When losing concentration, unconscious, on hallowed ground, or voluntarily — horrific form revealed. Non-evil witnesses become hostile."
          ],
          "languages": ["Common"]
        }
      },
      {
        "type": "race",
        "id": "Behemoth",
        "operation": "add",
        "payload": {
          "name": "Behemoth",
          "summary": "Descendant of Tyris, the first griffin",
          "description": "A descendant of Tyris, the first griffin — a colossal cat-bird hybrid with unparalleled physical strength and an innate talent for Fist Magic. Its true form is a massive winged predator with mighty claws, horns, and a powerful tail.",
          "abilityScoreIncrease": "+2 Strength, +1 Constitution",
          "speed": "10.5 m (Human) / 13.5 m (Hybrid & Natural)",
          "size": "Medium / Large / Huge",
          "type": "Monstrosity (Griffin)",
          "traits": [
            "Gestaltwandel (Level 1): Action to switch between Human (Medium, 10.5 m speed), Hybrid (Large, 13.5 m, +2 Str, no armor), or Natural (Huge, 13.5 m, cannot use equipment).",
            "Unvergleichlicher Körperbau (Level 1): Count as one size larger for carrying capacity. Advantage on Strength checks/saves vs being grappled, shoved, or knocked prone.",
            "Natürliche Waffen (Level 1): Proficient with Claws (1d6 slashing), Horns (1d4 piercing), Tail (1d6 bludgeoning).",
            "Schwingen — unentwickelt (Level 1): Purely cosmetic wings. Grow stronger with level.",
            "Geschärfte Sinne (Level 1): Proficient in Perception. Darkvision 18 m / 60 ft.",
            "Gewaltiger Appetit (Level 1, Flaw): Requires double food and water. Disadvantage on attacks if a full meal is missed.",
            "Schwingen — Gleiten (Level 5-6): No fall damage. Glide 6 m horizontally per 1.5 m fallen.",
            "Schwingen — Flug (Level 7-8): Flying speed 9 m (Hybrid & Natural form).",
            "Faustmagie (Level 7-8): Store spells in your body during a short rest. Release stored spells through unarmed strikes as a bonus action.",
            "Schwingen — Mächtiger Flug (Level 9-12): Flying speed increases to 15 m.",
            "Faustmagie — Erweiterung (Level 9-12): More spell storage capacity."
          ],
          "languages": ["Common"]
        }
      },
      {
        "type": "race",
        "id": "Ry (Magical Beast)",
        "operation": "add",
        "payload": {
          "name": "Ry (Magical Beast)",
          "summary": "Wolf-type magical beast with Fire and Air affinity",
          "description": "A magical beast descended from ancient wolf-type lineages. Ry are naturally attuned to Fire and Air elements, wielding True Magic innately. They evolve into Skoll (Emperor Beasts) upon reaching higher levels.",
          "abilityScoreIncrease": "+2 Dexterity, +1 Constitution",
          "speed": "12 m / 40 ft",
          "size": "Medium",
          "type": "Monstrosity (Beast)",
          "traits": [
            "Echte Magie: Feuer & Luft (Level 1): Casting spells of these two elements requires no components.",
            "Luftklingen-Ward (Level 1): When you Dash or move 6 m in a straight line, use reaction to gain +2 AC for 1 round. Melee attackers take 1d4 piercing damage. PB times per long rest. Scales to 1d6 at level 10, 1d8 at level 13.",
            "Geschärfte Sinne (Level 1): Proficient in Perception. Advantage on Wisdom (Perception) checks relying on smell.",
            "Waffenführung (Knüppel) (Level 1): Proficient with blunt melee weapons.",
            "Instinktgebundene Magie (Level 1, Flaw): True Magic only works with Fire and Air elements. Other elements require normal components and have disadvantage on attack rolls.",
            "Geschwindigkeitsschub (Level 3): Bonus action, +6 m speed for 1 minute. Once per short or long rest.",
            "Luftklingen-Verbesserung (Level 7): Air Blade Ward damage increases to 1d6.",
            "Evolution — Skoll (Level 11): Gain flying speed 12 m, Lebensesser (temp HP on kill), Wilde Jagd (see invisibility, +6 m speed, advantage on attacks for 1 min, 1/long rest)."
          ],
          "languages": ["Common"]
        }
      },
      {
        "type": "class",
        "id": "Mage",
        "operation": "add",
        "payload": {
          "name": "Mage",
          "description": "The standard path of all magically gifted citizens of the Griffon Kingdom. Mages channel ambient world energy through memorized runic patterns, hand signs, and verbal incantations. Their mana cores grow naturally with age and practice.",
          "hitDice": "d6",
          "primaryAbility": "int",
          "savingThrows": ["int", "wis"],
          "armorProficiencies": [],
          "weaponProficiencies": ["Simple weapons"],
          "toolProficiencies": [],
          "spellcastingAbility": "int",
          "spellcaster": true,
          "spellcastingSystem": "mana-dice",
          "numSkillChoices": 2,
          "skillChoices": ["Arcana", "History", "Investigation", "Medicine", "Nature", "Perception", "Insight", "Persuasion"],
          "spellcastingProgression": "full",
          "featuresByLevel": {
            "1": ["Cantrips (3)", "Mana Dice Pool (4d6)", "Formula Preparation", "Mage Foundation (1st)"],
            "2": ["Mage Foundation (2nd)"],
            "3": ["Mage Foundation (3rd)"],
            "4": ["Cantrip Improvement (+1 cantrip)", "Ability Score Improvement"],
            "5": [],
            "6": ["Overcasting", "Academic Specialization (Apprentice)"],
            "7": [],
            "8": ["Ability Score Improvement"],
            "9": [],
            "10": ["Specialization (Practitioner) or Dual Specialization"],
            "11": [],
            "12": ["Ability Score Improvement"],
            "13": [],
            "14": [],
            "15": ["Specialization (Master)"],
            "16": ["Ability Score Improvement"],
            "17": [],
            "18": [],
            "19": ["Ability Score Improvement"],
            "20": []
          }
        }
      }
    ]
  }
];

const PACK_ID_REGEX = /^[a-z0-9](?:[a-z0-9_.-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9_.-]{0,61}[a-z0-9])?)*$/;
const SEMVER_REGEX = /^([0-9]+\.){2}[0-9]+$/;
const URL_REGEX = /^(https?:\/\/)[^\s]+$/i;
const ALLOWED_RECORD_TYPES = new Set([
  'class',
  'subclass',
  'feat',
  'background',
  'spell',
  'item',
  'generator-table',
  'class-resource',
  'class-equipment-choice',
  'class-equipment-default',
  'class-starting-gold',
  'beast',
  'artificer-infusion',
  'note',
  'race',
  'subrace',
  'fighting-style',
  'pact-boon',
  'eldritch-invocation',
  'metamagic'
]);
const ALLOWED_OPERATIONS = new Set(['add', 'replace', 'remove']);
const GENERATOR_TABLES = new Set(['loot', 'shop', 'tavern', 'npc', 'name']);
const ASSET_USAGES = new Set(['token', 'portrait', 'map-overlay', 'handout']);

const hasWindow = typeof window !== 'undefined';

function deepClone(value) {
  if (typeof structuredClone === 'function') {
    try {
      return structuredClone(value);
    } catch (err) {
      console.warn('structuredClone failed, falling back to JSON.clone', err);
    }
  }
  if (value === undefined) {
    return undefined;
  }
  return JSON.parse(JSON.stringify(value));
}

function trimString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(',')}]`;
  }
  if (isPlainObject(value)) {
    const keys = Object.keys(value).sort();
    return `{${keys.map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(',')}}`;
  }
  return JSON.stringify(value);
}

async function computeSha256(text) {
  try {
    if (typeof crypto !== 'undefined' && crypto.subtle && typeof TextEncoder !== 'undefined') {
      const encoder = new TextEncoder();
      const data = encoder.encode(text);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(hashBuffer))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
    }
  } catch (err) {
    console.warn('SHA-256 computation failed', err);
  }
  return null;
}

function parsePackInput(input) {
  if (typeof ArrayBuffer !== 'undefined' && input instanceof ArrayBuffer) {
    if (typeof TextDecoder === 'undefined') {
      return { error: 'TextDecoder is not available to read ArrayBuffer input' };
    }
    const decoder = new TextDecoder();
    return parsePackInput(decoder.decode(new Uint8Array(input)));
  }

  if (typeof Blob !== 'undefined' && input instanceof Blob) {
    return { error: 'Blob/File inputs must be read as text before importing' };
  }

  if (typeof input === 'string') {
    const trimmed = input.trim();
    if (!trimmed) {
      return { error: 'Content pack input is empty' };
    }
    try {
      const pack = JSON.parse(trimmed);
      return { pack, rawText: trimmed };
    } catch (err) {
      return { error: `Invalid JSON: ${err.message}` };
    }
  }

  if (isPlainObject(input)) {
    try {
      const cloned = deepClone(input);
      return { pack: cloned, rawText: JSON.stringify(cloned, null, 2) };
    } catch (err) {
      return { error: `Unable to clone content pack: ${err.message}` };
    }
  }

  return { error: 'Unsupported content pack input type' };
}

function validateContentPack(pack) {
  const errors = [];
  const warnings = [];

  if (!isPlainObject(pack)) {
    return { valid: false, errors: ['Content pack must be a JSON object'], warnings };
  }

  validateMetadata(pack.metadata, errors);
  validateDependencies(pack.dependencies, errors);
  validateAllowlist(pack.allowlist, errors);
  validateRecords(pack.records, errors, warnings);
  validateAssets(pack.assets, errors);

  if (pack.notes != null && typeof pack.notes !== 'string') {
    errors.push('notes must be a string if provided');
  }

  return { valid: errors.length === 0, errors, warnings };
}

function validateMetadata(metadata, errors) {
  if (!isPlainObject(metadata)) {
    errors.push('metadata is required');
    return;
  }

  const id = trimString(metadata.id);
  const name = trimString(metadata.name);
  const version = trimString(metadata.version);
  const license = trimString(metadata.license);
  const toolVersion = trimString(metadata.toolVersion);

  if (!id) {
    errors.push('metadata.id is required');
  } else if (!PACK_ID_REGEX.test(id)) {
    errors.push('metadata.id must be a reverse-domain identifier (e.g., com.example.pack)');
  }

  if (!name) {
    errors.push('metadata.name is required');
  }

  if (!version) {
    errors.push('metadata.version is required');
  } else if (!SEMVER_REGEX.test(version)) {
    errors.push('metadata.version must follow semantic versioning (e.g., 1.0.0)');
  }

  if (!license) {
    errors.push('metadata.license is required');
  }

  if (!toolVersion) {
    errors.push('metadata.toolVersion is required');
  } else if (!SEMVER_REGEX.test(toolVersion)) {
    errors.push('metadata.toolVersion must follow semantic versioning (e.g., 2.0.5)');
  }

  if (metadata.description != null && typeof metadata.description !== 'string') {
    errors.push('metadata.description must be a string if provided');
  }

  if (metadata.authors != null) {
    if (!Array.isArray(metadata.authors) || metadata.authors.length === 0) {
      errors.push('metadata.authors must be a non-empty array of names when provided');
    } else {
      metadata.authors.forEach((author, index) => {
        if (typeof author !== 'string' || !author.trim()) {
          errors.push(`metadata.authors[${index}] must be a non-empty string`);
        }
      });
    }
  }

  if (metadata.source != null && typeof metadata.source !== 'string') {
    errors.push('metadata.source must be a string if provided');
  }

  if (metadata.homepage != null) {
    if (typeof metadata.homepage !== 'string' || !URL_REGEX.test(metadata.homepage)) {
      errors.push('metadata.homepage must be a valid URL');
    }
  }

  const created = trimString(metadata.created);
  const updated = trimString(metadata.updated);
  if (created && Number.isNaN(Date.parse(created))) {
    errors.push('metadata.created must be an ISO timestamp');
  }
  if (updated && Number.isNaN(Date.parse(updated))) {
    errors.push('metadata.updated must be an ISO timestamp');
  }
}

function validateDependencies(dependencies, errors) {
  if (dependencies == null) {
    return;
  }
  if (!Array.isArray(dependencies)) {
    errors.push('dependencies must be an array');
    return;
  }
  dependencies.forEach((dep, index) => {
    if (!isPlainObject(dep)) {
      errors.push(`dependencies[${index}] must be an object`);
      return;
    }
    const id = trimString(dep.id);
    if (!id) {
      errors.push(`dependencies[${index}].id is required`);
    } else if (!PACK_ID_REGEX.test(id)) {
      errors.push(`dependencies[${index}].id must use reverse-domain notation`);
    }
    if (dep.minVersion != null) {
      const minVersion = trimString(dep.minVersion);
      if (!SEMVER_REGEX.test(minVersion)) {
        errors.push(`dependencies[${index}].minVersion must be semantic (e.g., 1.0.0)`);
      }
    }
  });
}

function validateAllowlist(allowlist, errors) {
  if (allowlist == null) {
    return;
  }
  if (!isPlainObject(allowlist)) {
    errors.push('allowlist must be an object');
    return;
  }
  Object.entries(allowlist).forEach(([type, values]) => {
    if (!Array.isArray(values)) {
      errors.push(`allowlist.${type} must be an array of ids`);
      return;
    }
    values.forEach((value, index) => {
      if (typeof value !== 'string' || !value.trim()) {
        errors.push(`allowlist.${type}[${index}] must be a non-empty string`);
      }
    });
  });
}

function validateRecords(records, errors, warnings) {
  if (records == null) {
    return;
  }
  if (!Array.isArray(records)) {
    errors.push('records must be an array');
    return;
  }

  const seenKeys = new Set();

  records.forEach((record, index) => {
    if (!isPlainObject(record)) {
      errors.push(`records[${index}] must be an object`);
      return;
    }

    const type = trimString(record.type);
    const id = trimString(record.id);
    const operation = trimString(record.operation) || 'add';

    if (!type) {
      errors.push(`records[${index}].type is required`);
    } else if (!ALLOWED_RECORD_TYPES.has(type)) {
      errors.push(`records[${index}].type '${type}' is not supported`);
    }

    if (!id) {
      errors.push(`records[${index}].id is required`);
    }

    if (!ALLOWED_OPERATIONS.has(operation)) {
      errors.push(`records[${index}].operation '${operation}' is invalid`);
    }

    const duplicateKey = `${type}:${id}`;
    if (seenKeys.has(duplicateKey) && operation !== 'remove') {
      errors.push(`records[${index}] duplicates ${duplicateKey}`);
    }
    seenKeys.add(duplicateKey);

    if (operation === 'remove') {
      if (record.payload !== undefined) {
        warnings.push(`records[${index}] ignores payload because operation is remove`);
      }
      return;
    }

    if (record.payload == null || typeof record.payload !== 'object') {
      errors.push(`records[${index}].payload is required for '${operation}'`);
      return;
    }

    validateRecordPayload(type, record.payload, errors, warnings, index);
  });
}

function validateRecordPayload(type, payload, errors, warnings, index) {
  switch (type) {
    case 'class':
      requireStringField(payload, 'hitDice', errors, index, 'records');
      requireStringField(payload, 'primaryAbility', errors, index, 'records');
      requireArrayField(payload, 'savingThrows', errors, index, { min: 2, max: 2 });
      requireObjectField(payload, 'featuresByLevel', errors, index);
      break;
    case 'subclass':
      requireStringField(payload, 'parentClass', errors, index, 'records');
      requireObjectField(payload, 'featuresByLevel', errors, index);
      break;
    case 'spell':
      ['title', 'casting', 'range', 'components', 'duration'].forEach((field) => {
        requireStringField(payload, field, errors, index, 'records');
      });
      requireNumericField(payload, 'level', errors, index, 0, 9);
      break;
    case 'background':
      requireStringField(payload, 'name', errors, index, 'records');
      requireObjectField(payload, 'proficiencies', errors, index);
      break;
    case 'feat':
      requireStringField(payload, 'name', errors, index, 'records');
      requireStringField(payload, 'summary', errors, index, 'records');
      break;
    case 'item':
      requireStringField(payload, 'name', errors, index, 'records');
      requireStringField(payload, 'category', errors, index, 'records');
      break;
    case 'generator-table':
      if (!GENERATOR_TABLES.has(payload.table)) {
        errors.push(`records[${index}].payload.table '${payload.table}' is not supported`);
      }
      requireArrayField(payload, 'entries', errors, index, { min: 1 });
      break;
    case 'race':
      requireStringField(payload, 'name', errors, index, 'records');
      break;
    case 'subrace':
      requireStringField(payload, 'name', errors, index, 'records');
      requireStringField(payload, 'race', errors, index, 'records');
      break;
    case 'fighting-style':
      requireStringField(payload, 'name', errors, index, 'records');
      break;
    case 'pact-boon':
      requireStringField(payload, 'name', errors, index, 'records');
      break;
    case 'eldritch-invocation':
      requireStringField(payload, 'name', errors, index, 'records');
      break;
    case 'metamagic':
      requireStringField(payload, 'name', errors, index, 'records');
      break;
    default:
      break;
  }

  if (typeof payload.description === 'string' && payload.description.length > 4000) {
    warnings.push(`records[${index}].payload.description is very long (${payload.description.length} chars)`);
  }
}

function requireStringField(payload, field, errors, index, prefix) {
  const value = payload[field];
  if (typeof value !== 'string' || !value.trim()) {
    errors.push(`${prefix}[${index}].payload.${field} must be a non-empty string`);
  }
}

function requireNumericField(payload, field, errors, index, min, max) {
  const num = Number(payload[field]);
  if (Number.isNaN(num)) {
    errors.push(`records[${index}].payload.${field} must be a number`);
    return;
  }
  if (num < min || num > max) {
    errors.push(`records[${index}].payload.${field} must be between ${min} and ${max}`);
  }
}

function requireArrayField(payload, field, errors, index, { min = 0, max = Infinity } = {}) {
  const value = payload[field];
  if (!Array.isArray(value)) {
    errors.push(`records[${index}].payload.${field} must be an array`);
    return;
  }
  if (value.length < min) {
    errors.push(`records[${index}].payload.${field} must contain at least ${min} entries`);
  }
  if (value.length > max) {
    errors.push(`records[${index}].payload.${field} must contain no more than ${max} entries`);
  }
}

function requireObjectField(payload, field, errors, index) {
  if (!isPlainObject(payload[field])) {
    errors.push(`records[${index}].payload.${field} must be an object`);
  }
}

function validateAssets(assets, errors) {
  if (assets == null) {
    return;
  }
  if (!Array.isArray(assets)) {
    errors.push('assets must be an array');
    return;
  }
  assets.forEach((asset, index) => {
    if (!isPlainObject(asset)) {
      errors.push(`assets[${index}] must be an object`);
      return;
    }
    if (typeof asset.id !== 'string' || !asset.id.trim()) {
      errors.push(`assets[${index}].id is required`);
    }
    if (!ASSET_USAGES.has(asset.usage)) {
      errors.push(`assets[${index}].usage must be one of ${Array.from(ASSET_USAGES).join(', ')}`);
    }
    if (typeof asset.data !== 'string' || !asset.data.trim()) {
      errors.push(`assets[${index}].data must be a base64 string or data URL`);
    }
  });
}

function normalizeMetadata(metadata = {}) {
  const normalized = {
    id: trimString(metadata.id),
    name: trimString(metadata.name),
    version: trimString(metadata.version),
    license: trimString(metadata.license),
    toolVersion: trimString(metadata.toolVersion)
  };

  if (metadata.description != null) {
    normalized.description = trimString(metadata.description);
  }
  if (Array.isArray(metadata.authors)) {
    normalized.authors = metadata.authors
      .map((author) => trimString(author))
      .filter(Boolean);
  }
  if (metadata.source != null) {
    normalized.source = trimString(metadata.source);
  }
  if (metadata.homepage != null) {
    normalized.homepage = trimString(metadata.homepage);
  }
  if (metadata.created) {
    normalized.created = trimString(metadata.created);
  }
  if (metadata.updated) {
    normalized.updated = trimString(metadata.updated);
  }

  return normalized;
}

function normalizeAllowlist(allowlist = {}) {
  if (!isPlainObject(allowlist)) {
    return {};
  }
  const normalized = {};
  Object.entries(allowlist).forEach(([type, values]) => {
    if (!Array.isArray(values)) {
      return;
    }
    const deduped = Array.from(
      new Set(
        values
          .map((value) => trimString(value))
          .filter(Boolean)
      )
    );
    if (deduped.length) {
      normalized[type] = deduped;
    }
  });
  return normalized;
}

function normalizeDependencies(dependencies = []) {
  if (!Array.isArray(dependencies)) {
    return [];
  }
  return dependencies
    .filter((dep) => isPlainObject(dep))
    .map((dep) => ({
      id: trimString(dep.id),
      minVersion: dep.minVersion ? trimString(dep.minVersion) : undefined
    }))
    .filter((dep) => dep.id);
}

function normalizeRecords(records = []) {
  if (!Array.isArray(records)) {
    return [];
  }
  return records
    .filter((record) => isPlainObject(record))
    .map((record) => {
      const normalized = {
        type: trimString(record.type),
        id: trimString(record.id),
        operation: trimString(record.operation) || 'add'
      };
      if (normalized.operation !== 'remove' && record.payload != null) {
        normalized.payload = deepClone(record.payload);
      }
      return normalized;
    });
}

function normalizeAssets(assets = []) {
  if (!Array.isArray(assets)) {
    return [];
  }
  return assets
    .filter((asset) => isPlainObject(asset))
    .map((asset) => ({
      id: trimString(asset.id),
      usage: trimString(asset.usage),
      data: trimString(asset.data),
      description: asset.description ? trimString(asset.description) : undefined
    }))
    .filter((asset) => asset.id && asset.usage && asset.data);
}

function normalizePack(pack) {
  return {
    metadata: normalizeMetadata(pack.metadata),
    allowlist: normalizeAllowlist(pack.allowlist),
    dependencies: normalizeDependencies(pack.dependencies),
    records: normalizeRecords(pack.records),
    assets: normalizeAssets(pack.assets),
    notes: typeof pack.notes === 'string' ? pack.notes.trim() : ''
  };
}

function mergeAllowlists(packs) {
  const merged = {};
  packs.forEach((pack) => {
    Object.entries(pack.pack.allowlist || {}).forEach(([type, values]) => {
      if (!Array.isArray(values) || !values.length) {
        return;
      }
      if (!merged[type]) {
        merged[type] = new Set();
      }
      values.forEach((value) => merged[type].add(value));
    });
  });
  return Object.fromEntries(
    Object.entries(merged).map(([type, set]) => [type, Array.from(set)])
  );
}

function indexRecords(packs) {
  const index = {};
  packs.forEach((pack) => {
    const packId = pack.id;
    (pack.pack.records || []).forEach((record) => {
      if (!record.type) {
        return;
      }
      if (!index[record.type]) {
        index[record.type] = [];
      }
      index[record.type].push({
        packId,
        operation: record.operation,
        id: record.id,
        payload: record.payload ? deepClone(record.payload) : undefined
      });
    });
  });
  return index;
}

function collectAssets(packs) {
  const allAssets = [];
  packs.forEach((pack) => {
    (pack.pack.assets || []).forEach((asset) => {
      allAssets.push({
        packId: pack.id,
        id: asset.id,
        usage: asset.usage,
        data: asset.data,
        description: asset.description || undefined
      });
    });
  });
  return allAssets;
}

function createEmptyContext() {
  return {
    allowlist: {},
    recordsByType: {},
    assets: []
  };
}

function cloneForPublic(pack) {
  const cloned = deepClone(pack);
  delete cloned.rawText;
  return cloned;
}

function createMemoryDriver() {
  const cache = [];
  return {
    kind: 'memory',
    async loadAll() {
      return deepClone(cache);
    },
    async saveAll(packs) {
      cache.length = 0;
      cache.push(...deepClone(packs));
    }
  };
}

function createLocalStorageDriver(storageKey) {
  if (!hasWindow || !window.localStorage) {
    return createMemoryDriver();
  }
  return {
    kind: 'localStorage',
    async loadAll() {
      const raw = window.localStorage.getItem(storageKey);
      if (!raw) {
        return [];
      }
      try {
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
      } catch (err) {
        console.warn('Failed to parse stored content packs', err);
        return [];
      }
    },
    async saveAll(packs) {
      window.localStorage.setItem(storageKey, JSON.stringify(packs));
    }
  };
}

function createIndexedDbDriver() {
  const DB_NAME = 'DMToolboxContentPacks';
  const STORE_NAME = 'packs';
  const DB_VERSION = 1;

  if (!hasWindow || typeof window.indexedDB === 'undefined') {
    return Promise.reject(new Error('IndexedDB is not available'));
  }

  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(request.error || new Error('Failed to open IndexedDB for content packs'));
    };

    request.onupgradeneeded = (event) => {
      const upgradeRequest = /** @type {IDBOpenDBRequest | null} */ (event.target);
      const db = upgradeRequest?.result;
      if (!db) {
        return;
      }
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      resolve({
        kind: 'indexedDB',
        async loadAll() {
          return new Promise((res, rej) => {
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const getAllRequest = store.getAll();
            getAllRequest.onsuccess = () => {
              res(getAllRequest.result || []);
            };
            getAllRequest.onerror = () => {
              rej(getAllRequest.error);
            };
          });
        },
        async saveAll(packs) {
          return new Promise((res, rej) => {
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const clearRequest = store.clear();
            clearRequest.onerror = () => rej(clearRequest.error);
            clearRequest.onsuccess = () => {
              if (!packs.length) {
                res(true);
                return;
              }
              let remaining = packs.length;
              packs.forEach((pack) => {
                const putRequest = store.put(pack);
                putRequest.onerror = () => {
                  rej(putRequest.error);
                };
                putRequest.onsuccess = () => {
                  remaining -= 1;
                  if (!remaining) {
                    res(true);
                  }
                };
              });
            };
          });
        },
        close() {
          db.close();
        }
      });
    };
  });
}

export function createContentPackManager(userOptions = {}) {
  const options = { ...DEFAULT_OPTIONS, ...userOptions };
  let storageDriver = null;
  let driverPromise = null;
  let packsCache = [];
  let runtimeContext = createEmptyContext();
  let summary = {
    totalPacks: 0,
    enabledPacks: 0,
    totalRecords: 0,
    enabledRecords: 0,
    storageDriver: 'memory'
  };
  const listeners = new Set();
  let initialized = false;
  let initPromise = null;

  function notify(reason) {
    if (!listeners.size) {
      return;
    }
    const payload = {
      summary: { ...summary },
      packs: getPacks(),
      context: getMergedContext(),
      reason
    };
    listeners.forEach((listener) => {
      try {
        listener(payload);
      } catch (err) {
        console.warn('ContentPackManager listener error', err);
      }
    });
  }

  function rebuildContext() {
    const enabled = packsCache.filter((pack) => pack.enabled);
    runtimeContext = {
      allowlist: mergeAllowlists(enabled),
      recordsByType: indexRecords(enabled),
      assets: collectAssets(enabled)
    };
    summary = {
      totalPacks: packsCache.length,
      enabledPacks: enabled.length,
      totalRecords: packsCache.reduce((count, pack) => count + (pack.pack.records?.length || 0), 0),
      enabledRecords: enabled.reduce((count, pack) => count + (pack.pack.records?.length || 0), 0),
      storageDriver: storageDriver ? storageDriver.kind : 'memory'
    };
  }

  async function ensureDriver() {
    if (storageDriver) {
      return storageDriver;
    }
    if (!driverPromise) {
      driverPromise = createIndexedDbDriver()
        .catch((err) => {
          console.warn('IndexedDB unavailable for content packs, falling back to localStorage', err);
          return createLocalStorageDriver(options.storageKey);
        })
        .catch((err) => {
          console.warn('localStorage unavailable for content packs, falling back to memory', err);
          return createMemoryDriver();
        })
        .then((driver) => {
          storageDriver = driver;
          return driver;
        });
    }
    return driverPromise;
  }

  async function persist() {
    const driver = await ensureDriver();
    try {
      await driver.saveAll(packsCache);
    } catch (err) {
      console.warn('Failed to persist content packs, switching to memory driver', err);
      storageDriver = createMemoryDriver();
      packsCache = deepClone(packsCache);
      await storageDriver.saveAll(packsCache);
    }
  }

  async function ensureInitialized() {
    if (initialized) {
      return;
    }
    if (!initPromise) {
      initPromise = (async () => {
        const driver = await ensureDriver();
        try {
          const stored = await driver.loadAll();
          packsCache = Array.isArray(stored) ? stored : [];
        } catch (err) {
          console.warn('Failed to load stored content packs, starting fresh', err);
          packsCache = [];
        }
        rebuildContext();
        await seedBuiltInPacks();
        initialized = true;
      })();
    }
    return initPromise;
  }

  async function seedBuiltInPacks() {
    for (const raw of BUILT_IN_PACKS) {
      const id = raw.metadata.id;
      const existing = packsCache.findIndex((entry) => entry.id === id);
      if (existing >= 0) continue;

      try {
        const normalized = normalizePack(structuredClone(raw));
        const canonicalText = stableStringify(normalized);
        const hash = await computeSha256(canonicalText);
        const now = new Date().toISOString();

        packsCache.push({
          id: normalized.metadata.id,
          pack: normalized,
          rawText: JSON.stringify(raw, null, 2),
          sha256: hash,
          enabled: true,
          recordCount: normalized.records.length,
          importedAt: now,
          updatedAt: now,
          sourceName: '(built-in)',
          warnings: []
        });

        console.log(`📦 Auto-loaded built-in content pack: ${normalized.metadata.name} v${normalized.metadata.version}`);
      } catch (err) {
        console.error(`❌ Failed to seed built-in pack "${raw.metadata?.name || id}":`, err);
      }
    }
    if (BUILT_IN_PACKS.length > 0) {
      const allSeeded = BUILT_IN_PACKS.every(raw =>
        packsCache.some(entry => entry.id === raw.metadata.id)
      );
      if (!allSeeded) {
        console.warn(
          '%c⚠ Built-in pack seeding incomplete. Run ContentPackManager.debugSeed() in the console to retry with verbose logging.',
          'font-weight: bold; color: #ff6b35; font-size: 14px;'
        );
      }
      rebuildContext();
      await persist();
    }
  }

  async function debugSeed() {
    await ensureInitialized();
    console.group('🔍 Built-in Pack Debug');
    console.log('BUILT_IN_PACKS count:', BUILT_IN_PACKS.length);
    for (const raw of BUILT_IN_PACKS) {
      const id = raw.metadata.id;
      const existing = packsCache.findIndex((entry) => entry.id === id);
      console.log(`Pack "${id}": ${existing >= 0 ? '✅ already in cache' : '❌ NOT in cache — attempting to seed...'}`);
      if (existing < 0) {
        try {
          const normalized = normalizePack(structuredClone(raw));
          const hash = await computeSha256(stableStringify(normalized));
          packsCache.push({
            id: normalized.metadata.id,
            pack: normalized,
            rawText: JSON.stringify(raw, null, 2),
            sha256: hash,
            enabled: true,
            recordCount: normalized.records.length,
            importedAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            sourceName: '(built-in)',
            warnings: []
          });
          console.log('  ✅ Seeded successfully');
        } catch (err) {
          console.error('  ❌ Seeding failed:', err);
        }
      }
    }
    rebuildContext();
    await persist();
    console.log('Context rebuilt and persisted.');
    console.groupEnd();
    return { success: true };
  }

  function getPublicPackById(id) {
    const pack = packsCache.find((entry) => entry.id === id);
    return pack ? cloneForPublic(pack) : null;
  }

  function getPacks() {
    return packsCache.map((pack) => cloneForPublic(pack));
  }

  function getMergedContext() {
    return deepClone(runtimeContext);
  }

  function getSummary() {
    return { ...summary };
  }

  function subscribe(listener, { immediate = false } = {}) {
    if (typeof listener !== 'function') {
      throw new Error('ContentPackManager.subscribe expects a function');
    }
    listeners.add(listener);
    if (immediate) {
      listener({ summary: getSummary(), packs: getPacks(), context: getMergedContext(), reason: 'init' });
    }
    return () => listeners.delete(listener);
  }

  /**
   * @param {unknown} input
   * @param {{ autoEnable?: boolean, onConflict?: 'replace' | 'reject', sourceName?: string }} [importOptions]
   */
  async function importPack(input, importOptions = {}) {
    const {
      autoEnable = options.autoEnable,
      onConflict = 'replace',
      sourceName
    } = importOptions;
    await ensureInitialized();
    const parsed = parsePackInput(input);
    if (parsed.error) {
      return { success: false, errors: [parsed.error], warnings: [] };
    }

    const validation = validateContentPack(parsed.pack);
    if (!validation.valid) {
      return { success: false, errors: validation.errors, warnings: validation.warnings };
    }

    const normalized = normalizePack(parsed.pack);
    const canonicalText = stableStringify(normalized);
    const hash = await computeSha256(canonicalText);
    const now = new Date().toISOString();
    const packRecord = {
      id: normalized.metadata.id,
      pack: normalized,
      rawText: parsed.rawText || JSON.stringify(parsed.pack, null, 2),
      sha256: hash,
      enabled: Boolean(autoEnable),
      recordCount: normalized.records.length,
      importedAt: now,
      updatedAt: now,
      sourceName: sourceName || null,
      warnings: validation.warnings
    };

    const existingIndex = packsCache.findIndex((entry) => entry.id === packRecord.id);
    if (existingIndex >= 0) {
      if (onConflict === 'reject') {
        return { success: false, errors: [`Content pack '${packRecord.id}' already exists`], warnings: [] };
      }
      const previous = packsCache[existingIndex];
      packRecord.enabled = autoEnable === undefined ? previous.enabled : Boolean(autoEnable);
      packRecord.importedAt = previous.importedAt;
      packsCache[existingIndex] = packRecord;
    } else {
      packsCache.push(packRecord);
    }

    rebuildContext();
    await persist();
    notify('import');

    return { success: true, pack: cloneForPublic(packRecord), warnings: validation.warnings };
  }

  async function togglePack(id, enabled) {
    await ensureInitialized();
    const pack = packsCache.find((entry) => entry.id === id);
    if (!pack) {
      return { success: false, error: `Content pack '${id}' not found` };
    }
    const nextState = Boolean(enabled);
    if (pack.enabled === nextState) {
      return { success: true, pack: cloneForPublic(pack) };
    }
    pack.enabled = nextState;
    pack.updatedAt = new Date().toISOString();
    rebuildContext();
    await persist();
    notify('toggle');
    return { success: true, pack: cloneForPublic(pack) };
  }

  async function removePack(id) {
    await ensureInitialized();
    const index = packsCache.findIndex((entry) => entry.id === id);
    if (index === -1) {
      return { success: false, error: `Content pack '${id}' not found` };
    }
    const [removed] = packsCache.splice(index, 1);
    rebuildContext();
    await persist();
    notify('remove');
    return { success: true, pack: cloneForPublic(removed) };
  }

  async function exportPack(id, { pretty = true } = {}) {
    await ensureInitialized();
    const pack = packsCache.find((entry) => entry.id === id);
    if (!pack) {
      return { success: false, error: `Content pack '${id}' not found` };
    }
    const text = pack.rawText || JSON.stringify(pack.pack, null, pretty ? 2 : 0);
    return { success: true, text, sha256: pack.sha256, metadata: deepClone(pack.pack.metadata) };
  }

  async function clearAll() {
    packsCache = [];
    rebuildContext();
    await persist();
    notify('clear');
    return { success: true };
  }

  return {
    initialize: ensureInitialized,
    getPacks,
    getPackById: getPublicPackById,
    getMergedContext,
    getSummary,
    subscribe,
    importPack,
    togglePack,
    removePack,
    exportPack,
    clearAll,
    debugSeed
  };
}

export const ContentPackManager = createContentPackManager();
if (hasWindow) {
  const globalWindow = /** @type {Window & typeof globalThis & { ContentPackManager?: ReturnType<typeof createContentPackManager> }} */ (window);
  globalWindow.ContentPackManager = ContentPackManager;
}
