# GEU Fee Module Icon Pack

Professional 3D icon system designed for the GEU Student Portal Fee module.

## Contents

- `compact/`: 12 transparent WebP assets, 256×256 canvas, for service cards and KPI cards.
- `empty-states/`: 6 transparent WebP assets, 384×384 canvas, for tables and empty-state panels.
- `fee-icons.manifest.json`: stable semantic keys, paths, roles and recommended display sizes.
- `GEU_Fee_Icon_Pack_Preview.png`: visual overview of the complete set.

All 18 production assets use actual alpha transparency. Compact files are approximately 6–9 KB each; empty-state files are approximately 10–16 KB each.

## Implementation rules

1. Use these images only for decorative service, KPI and empty-state artwork.
2. Continue using the existing SVG/Lucide system for functional controls such as back, search, filter, close, calendar picker, download and chevrons.
3. Render with `object-fit: contain`; never use `cover`.
4. Keep the image canvas centered. Do not add individual arbitrary margins.
5. Use an empty `alt` value when visible adjacent text already communicates the same state.
6. Do not place these assets inside additional colored circles.

Recommended CSS:

```css
.fee-icon {
  display: block;
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.fee-empty-illustration {
  display: block;
  width: clamp(120px, 18vw, 168px);
  height: auto;
  margin-inline: auto;
  object-fit: contain;
}
```

## Visual source

The set follows the supplied GEU Fee desktop/mobile references: soft 3D clay/Fluent styling, GEU blue and navy, restrained gold/green/orange/purple accents, rounded professional forms and transparent backgrounds.
