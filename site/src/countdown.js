// Counting, the way Timity does: whole calendar days to (or since) a date, and the exact time left
// broken into weeks, days, hours, minutes and seconds.

const DAY = 86_400_000;

const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

/** Calendar days from today to the date: positive ahead, negative behind, 0 on the day itself. */
export const calendarDays = (target, now = new Date()) => Math.round((startOfDay(target) - startOfDay(now)) / DAY);

/** The exact time between now and the target, as weeks, days, hours, minutes and seconds. */
export function breakdown(target, now = new Date()) {
  let rest = Math.floor(Math.abs(target - now) / 1000);
  const parts = {};
  for (const [unit, size] of [['week', 604_800], ['day', 86_400], ['hour', 3600], ['minute', 60], ['second', 1]]) {
    parts[unit] = Math.floor(rest / size);
    rest %= size;
  }
  return parts;
}

/** Monday-to-Friday days, and weekends, from today up to the day before the date (or since it). */
function weekdayCounts(target, now) {
  let from = startOfDay(now);
  let to = startOfDay(target);
  if (to < from) [from, to] = [to, from];
  let workdays = 0;
  let weekends = 0;
  for (let day = new Date(from); day < to; day.setDate(day.getDate() + 1)) {
    const weekday = day.getDay();
    if (weekday === 6) weekends += 1;
    if (weekday !== 0 && weekday !== 6) workdays += 1;
  }
  return { workdays, weekends };
}

/** The next occurrence of a preset, as Timity's ready-made events define them. */
function presetDate(id, christmasDay, now = new Date()) {
  const year = now.getFullYear();
  const upcoming = (month, day, hour = 0) => {
    const date = new Date(year, month, day, hour);
    return date > now ? date : new Date(year + 1, month, day, hour);
  };
  switch (id) {
    case 'newYear':
      return new Date(year + 1, 0, 1);
    case 'christmas':
      return upcoming(11, christmasDay);
    case 'summer':
      // The June solstice.
      return upcoming(5, 21);
    case 'weekend': {
      // Friday at 17:00.
      const friday = new Date(year, now.getMonth(), now.getDate() + ((5 - now.getDay() + 7) % 7), 17);
      return friday > now ? friday : new Date(friday.getFullYear(), friday.getMonth(), friday.getDate() + 7, 17);
    }
    default:
      return upcoming(0, 1);
  }
}

const isoDate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

export function initMaker(root) {
  if (!root) return;
  const lang = root.dataset.lang;
  const strings = JSON.parse(root.querySelector('[data-maker-strings]').textContent);
  const plural = new Intl.PluralRules(lang);
  const number = new Intl.NumberFormat(lang);
  const compact = new Intl.NumberFormat(lang, { notation: 'compact', maximumFractionDigits: 1 });
  const dateFormat = new Intl.DateTimeFormat(lang, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
  const timeFormat = new Intl.DateTimeFormat(lang, { hour: 'numeric', minute: '2-digit' });
  const pick = (forms, n) => forms[plural.select(n)] ?? forms.other;
  const fill = (forms, n, text = number.format(n)) => pick(forms, n).replace('{n}', text);

  const card = root.querySelector('[data-card]');
  const nameInput = root.querySelector('[data-name]');
  const dateInput = root.querySelector('[data-date]');
  const presetButtons = [...root.querySelectorAll('[data-preset]')];
  const swatches = [...root.querySelectorAll('[data-color]')];
  const el = (selector) => root.querySelector(selector);

  let target = presetDate('newYear', strings.christmasDay);
  let presetName = strings.presets.newYear;

  function render() {
    const now = new Date();
    const days = calendarDays(target, now);
    const parts = breakdown(target, now);
    el('[data-title]').textContent = nameInput.value.trim() || nameInput.placeholder;
    const hasTime = target.getHours() !== 0 || target.getMinutes() !== 0;
    el('[data-when]').textContent = dateFormat.format(target) + (hasTime ? ` · ${timeFormat.format(target)}` : '');
    el('[data-days]').textContent = number.format(Math.abs(days));
    el('[data-days-label]').textContent = days === 0 ? strings.today : pick(days > 0 ? strings.toGo : strings.ago, Math.abs(days));
    for (const [unit, value] of Object.entries(parts)) {
      el(`[data-unit="${unit}"]`).textContent = number.format(value);
      el(`[data-unit-label="${unit}"]`).textContent = pick(strings.units[unit], value);
    }
    const { workdays, weekends } = weekdayCounts(target, now);
    el('[data-also="workdays"]').textContent = fill(strings.workdays, workdays);
    el('[data-also="weekends"]').textContent = fill(strings.weekends, weekends);
    // About 70 beats a minute.
    const beats = Math.round((Math.abs(target - now) / 60_000) * 70);
    el('[data-also="heartbeats"]').textContent = strings.heartbeats.replace('{n}', compact.format(beats));
  }

  function choosePreset(id) {
    target = presetDate(id, strings.christmasDay);
    dateInput.value = isoDate(target);
    // Name the countdown after the preset, unless the visitor named it themselves.
    const name = nameInput.value.trim();
    if (!name || name === presetName) nameInput.value = strings.presets[id];
    presetName = strings.presets[id];
    presetButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.preset === id)));
    render();
  }

  dateInput.value = isoDate(target);
  dateInput.addEventListener('input', () => {
    const [year, month, day] = dateInput.value.split('-').map(Number);
    if (!year) return;
    target = new Date(year, month - 1, day);
    presetButtons.forEach((button) => button.setAttribute('aria-pressed', 'false'));
    render();
  });
  nameInput.addEventListener('input', render);
  presetButtons.forEach((button) => button.addEventListener('click', () => choosePreset(button.dataset.preset)));
  swatches.forEach((swatch) =>
    swatch.addEventListener('click', () => {
      swatches.forEach((other) => other.setAttribute('aria-checked', String(other === swatch)));
      card.className = card.className.replace(/countdown--\w+/, `countdown--${swatch.dataset.color}`);
    }),
  );

  render();
  setInterval(render, 1000);
}

/** The hero's live chip: the time left until the New Year, to the second. */
export function initLive(chip) {
  if (!chip) return;
  const dayForms = JSON.parse(chip.dataset.dayForms);
  const plural = new Intl.PluralRules(chip.dataset.lang);
  const value = chip.querySelector('[data-live-value]');
  const two = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const now = new Date();
    const { week, day, hour, minute, second } = breakdown(new Date(now.getFullYear() + 1, 0, 1), now);
    const days = week * 7 + day;
    value.textContent = `${days} ${dayForms[plural.select(days)] ?? dayForms.other} · ${two(hour)}:${two(minute)}:${two(second)}`;
  };
  tick();
  chip.hidden = false;
  setInterval(tick, 1000);
}
