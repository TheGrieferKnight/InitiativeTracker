---
type: rasse
kampagne: supreme-magus
system: dnd5e-homebrew
erstellt: 2026-05-18
tags:
  - rasse
  - supreme-magus
  - abomination
  - possessed
---

# Besessener Mensch (Abomination)

*Shared body with a dormant Puppeteer Abomination. Unstable shapeshifter with a dark secret.*

## 📋 Kurzübersicht

| Feld | Wert |
|------|------|
| **Typ** | Humanoid (Aberration) |
| **Größe** | Mittel |
| **Bewegungsrate** | 9 m |
| **Attributsbonus** | +1 Stärke, +1 Konstitution |
| **Primäraffinitäten** | Dunkelheit (primär) + eine freie Wahl |
| **Sekundäraffinität** | — |
| **Mechanik** | Instabile Mutationen, Chaos-Erfülltes Wirken |

---

## 🎭 Identität der Rasse

*Ein Mensch, dessen Körper mit einem schlafenden Puppenspieler-Abomination geteilt wird. Die Grenzen zwischen Mensch und Monster verschwimmen mit jedem Einsatz der verborgenen Kräfte. Ständige Gefahr der Entdeckung und Kontrollverlust prägen den Alltag dieser gepeinigten Existenz.*

---

## ⚙️ Rassenmerkmale

### Stufe 1  — Grundmerkmale

<!-- feature
uses:
  formula: 1
  recharge: kurze Rast
effects:
  - kind: stat
    target: ac
    mode: add
    value: 2
    label: "Chitinpanzer: +2 RK, -3 m Bewegungsrate"
  - kind: movement
    target: walk
    mode: add
    value: -10
    unit: ft
    label: "Chitinpanzer: -3 m / -10 ft Bewegungsrate"
  - kind: formula
    target: Eldritch-Gliedmaßen
    value: 1
    label: Waffenloser Schaden 1W6
-->
#### Abartige Anpassungen
**Freischaltung:** Stufe 1
Bonus action, 1 minute duration. Choose one:

- **Chitinpanzer:** +2 AC, speed -3 m.
- **Eldritch-Gliedmaßen:** Unarmed strikes deal 1d6 damage (piercing/slashing/bludgeoning, chosen per transformation). Cannot hold items with these limbs.

<!-- feature
uses:
  formula: 1
  recharge: kurze Rast
effects:
  - kind: custom
    label: Komponentenloser Zauber; löst sofort Instabile Mutationen aus
-->
#### Chaos-Erfülltes Wirken
**Freischaltung:** Stufe 1
Once per short rest, cast any known spell without components. Doing so immediately forces a roll on the Unstable Mutations table.

<!-- feature -->
#### Instabile Mutationen (NACHTEIL)
**Freischaltung:** Stufe 1 · **NACHTEIL**
Each dawn, make a DC 10 Con save. On success, the anomaly is suppressed for the day. On failure OR whenever you roll a natural 1-2 on any d20 test, roll on the Unstable Mutations table below. The DC increases by 2 for each consecutive daily success, resetting after a failure.

---

### Stufe 5–6  — Freischaltungen

<!-- feature -->
#### Transformation Stufe 2
**Freischaltung:** Stufe 5–6
Choose one boon:

- **Effizienter Mörder:** Your Eldritch Limbs and unarmed attacks are greatly enhanced.
- **Jenseitige Tentakel:** Gain a tentacle attack and access to toxic spray, constrict, or hypnotic trance.
- **Situative Evolution:** Gain a climb speed, swim speed + water breathing, or biological regeneration.
- **Überirdische Sinne:** Gain darkvision (18-36 m), keen senses, or a third eye that sees invisible targets.

<!-- feature -->
#### Schreckliches Erscheinungsbild (NACHTEIL)
**Freischaltung:** Stufe 5–6 · **NACHTEIL**
Your horrific true nature is revealed under extreme stress:
- When you lose spell concentration
- When unconscious
- On hallowed ground
- Voluntarily

Non-evil witnesses immediately become hostile. You must concentrate to suppress this form outside of combat.

---

## 🧩 Einzigartiges System: Instabile Mutationen

### Auslöser
- Fehlgeschlagener täglicher Con-Save (DC 10, steigt bei Erfolg um 2)
- Natürliche 1-2 auf einen beliebigen d20-Test
- Einsatz von Chaos-Erfülltem Wirken

### Mutationstabelle (W100)

| W100 | Effekt |
|------|--------|
| 01-10 | **Peitschende Tentakel:** A tentacle lashes out. Each creature within 3 m must make a Dex save (DC 10 + Prof) or take 1d4 bludgeoning damage. |
| 11-20 | **Unkontrolliertes Wachstum:** Your body swells. You are restrained for 1 round. |
| 21-30 | **Biestiges Brüllen:** You emit a guttural roar. All creatures within 9 m must make a Wis save (DC 10 + Prof) or be frightened until the end of your next turn. |
| 31-40 | **Säureaustritt:** Acidic fluid leaks from your pores. The first creature to hit you with a melee attack before your next turn takes 1d6 acid damage. |
| 41-50 | **Sprießende Augen:** Eyes open across your body. You gain darkvision 18 m for 1 hour (if you didn't already have it). |
| 51-60 | **Phantomschmerz:** Your nerves misfire. You take 1d4 psychic damage. |
| 61-70 | **Stimmverzerrung:** Your voice shifts unnaturally. Disadvantage on Charisma checks for 10 minutes. |
| 71-80 | **Verwesungsgeruch:** A foul odor emanates from you. Creatures within 3 m have disadvantage on Perception checks relying on smell for 10 minutes. |
| 81-90 | **Kleine Regeneration:** You regain 1d4 HP immediately as flesh knits itself. |
| 91-100 | **Eldritch-Flüstern:** The abomination stirs. You gain a vague insight — the DM may reveal a hint about a current mystery or threat. |

---

## 🔮 Fortschrittsübersicht

| Stufe | Stufenbereich | Neue Freischaltungen |
|----------|---------------|----------------------|
| 🔴 Rot (1.) | 1–2 | Abartige Anpassungen, Chaos-Erfülltes Wirken, Instabile Mutationen |
| 🟠 Orange (2.) | 3–4 | — |
| 🟡 Gelb (3.) | 5–6 | Transformation Stufe 2, Schreckliches Erscheinungsbild |
| 🟢 Grün (4.) | 7–8 | — |
| 🔵 Cyan (5.) | 9–10 | — |
| 🔷 Blau (6.) | 11–12 | — |
| 🟣 Violett (7.) | 13–14 | — |
| ⚪ Weiß (8.) | 15+ | — |

---

## ⚠️ Schwächen / Nachteile

- **Instabile Mutationen:** Täglicher Con-Save, um die Bestie zu unterdrücken. Fehlschläge und kritische Fehler lösen Mutationen aus.
- **Schreckliches Erscheinungsbild:** Ab Stufe 5–6 droht bei jedem Kontrollverlust die Enttarnung.
- **Chaos-Erfülltes Wirken:** Jede komponentenlose Zauberauslösung erzwingt eine Mutation.

---

## 🏷️ Tags

#rasse #supreme-magus #abomination #possessed
