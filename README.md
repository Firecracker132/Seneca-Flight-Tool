# Seneca Flight Planner v1.38

## Baron POH chart-digitized performance engine

This build advances the Baron performance module from exact-example recognition to an **interpolating chart-digitized estimate engine**, with a rendering/state fix that restores the live calculations and nomogram library.

The B58 and G58 Section 5 nomograms supplied with the project are used as the visual source. The engine approximates the shape of the published curve families, interpolates between them, and anchors the surfaces to published POH worked examples and published sea-level reference values.

### v1.38 fixes / carried-forward fixes
- Fixed a Baron performance rendering error that prevented the performance calculation block and nomogram library from completing their initialization.
- Pressure altitude, density altitude, HWC and XWC now populate immediately from the entered conditions.
- Baron performance inputs are persisted with the performance state so switching modules/aircraft does not unnecessarily erase them.
- The actual POH nomogram library is rendered again below the performance cards.

### Automated calibration points
- G58: 15 C / 5653 ft PA / 5500 lb / 10 kt HWC -> 2200 ft ground, 3775 ft over 50 ft, 3960 ft accelerate-stop, 4870 lb take-off-weight chart result.
- G58: 15 C / 5653 ft PA / 4700 lb / 10 kt HWC -> 3760 ft accelerate-go ground, 9400 ft accelerate-go total, 2.6% OEI gradient.
- B58: 15 C / 5650 ft PA / 5400 lb / 9.5 kt HWC -> 1900 ft ground, 3090 ft over 50 ft, 3960 ft accelerate-stop, 4850 lb take-off-weight chart result.
- B58: 15 C / 5650 ft PA / 4850 lb / 9.5 kt HWC -> 1775 ft accelerate-go ground, 8071 ft total, 2.1% OEI gradient.
- B58/G58 landing: 25 C / 3965 ft PA / 5039 lb / 9.5 kt HWC -> 1450 ft ground, 2500 ft over 50 ft, 91 kt approach.

### Important safety boundary
The outputs are **estimates from digitized POH curve shapes**, not certified replacements for the aircraft POH. The app labels the result accordingly and keeps the actual nomogram available beside the calculated fields. For operational flight planning, verify the result against the applicable aircraft POH.

The digitization is deliberately conservative: no generic aircraft-performance equation is presented as an official Beechcraft value, and the engine is limited to the published chart ranges.

### Nomogram library
The applicable B58 or G58 Section 5 nomograms remain embedded locally in the Performance page and can be opened full size.


### v1.36 Baron performance additions
- Added digitized-estimate S.E. rate-of-climb from the POH Climb — One Engine Inoperative nomogram, calibrated to the published 405 fpm / 3.5% example at 10°C, 4,000 ft, 4,700 lb.
- Added automatic Flight Data climb estimates for time, fuel and distance using the POH Time, Fuel and Distance to Cruise Climb nomogram. The published 5 min / 3.9 gal / 11.5 NM and 13 min / 9.5 gal / 32 NM examples are used as calibration anchors.
- Single-engine service ceiling is also populated as a chart-digitized estimate.
- MP/RPM, KTAS, KIAS and available flight time remain manual planning entries because they depend on the selected cruise power/profile and flight-plan assumptions.

## v1.37 performance expansion

## v1.38 deployment build
- Prepared for static hosting such as GitHub Pages.
- Added PWA service-worker registration and install metadata.
- Updated service-worker cache version to v1.38.
- Added digitized/interpolated two-engine climb-rate estimate from the Baron Section 5 climb chart, anchored to the published 5,500 lb / 11,500 ft / -5 C / 800 fpm example.
- Added selectable cruise-power tables for 25/2500 Rich, 25/2500 Lean, 23/2300 Rich, and 23/2300 Lean.
- Cruise MP, RPM, KIAS, KTAS and fuel flow now interpolate across the POH ISA-20 / ISA / ISA+20 bands and pressure-altitude rows.
- Available flight time is calculated from loaded fuel less destination fuel, using the selected POH cruise fuel flow for both engines.
- These values are chart/table digitized estimates and must be verified against the applicable POH before operational use.
