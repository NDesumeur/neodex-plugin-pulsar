// lancé par le test « local » de NeoDex : un morceau lancé, l'étoile centrale qui suit la musique (halo et couleur), puis l'écran de fin et sa courbe de précision
// (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  const fs = require('fs'), dir = process.env.NEO_SHOTS;
  const shot = async n => { if (!dir) return; const u = await pj(`document.getElementById('gc').toDataURL('image/png')`); fs.writeFileSync(require('path').join(dir, 'pulsar-' + n + '.png'), Buffer.from(u.split(',')[1], 'base64')); };
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); addEventListener('unhandledrejection', e => __e.push(String(e.reason))); 0`);
  for (let i = 0; i < 30 && await pj(`!document.querySelector('.rhBar') || !document.querySelector('.rhBar').hidden`) === false; i++) await sleep(500);
  await sleep(6000);  // le morceau intégré se prépare (rendu du son)
  await pj(`[...document.querySelectorAll('.rhSong')].find(c => c.textContent.includes('Lever de néon'))?.querySelector('button')?.click(), 0`);
  for (let i = 0; i < 40 && await pj(`document.querySelector('.rhBar')?.hidden === false`); i++) await sleep(500);
  await sleep(1500); await shot('0-pret');
  await pj(`document.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true })), 0`); const seen = [], lv = [];
  for (let k = 0; k < 28; k++) { await sleep(500); const s = await pj(`document.getElementById('gc').__rh.star()`); seen.push(s.hue); lv.push(s.lvl); if (k === 10) await shot('1-partie'); if (k === 22) await shot('1-partie-b'); }
  const hues = new Set(seen).size, top = Math.max(...lv);
  if (hues < 2) throw new Error("l'étoile ne change pas de couleur : " + seen.join());
  if (top < .05) throw new Error("le halo ne suit pas le son : " + lv.map(x => x.toFixed(2)).join());
  // une partie inventée : juste au début, des ratés au milieu, juste à la fin
  await pj(`(() => { const T = document.getElementById('gc').__rh, rh = T.st(), L = rh.c.len, h = []; for (let i = 0; i < 200; i++) { const t = i / 200 * L, mid = t > L * .4 && t < L * .6; h.push([t, mid ? (i % 3 ? 1 : 0) : (i % 7 ? 3 : 2)]); } T.finish(h); return 0; })()`);
  await sleep(800); await shot('2-fin');
  await pj(`document.fullscreenElement && document.exitFullscreen(), 0`);
  const end = await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); return [rh.mode, rh.hist.length, rh.grade].join(','); })()`);
  if (!/^over,200,[SABCD]$/.test(end)) throw new Error('écran de fin : ' + end);
  const errs = await pj(`__e`); if (errs.length) throw new Error(errs.join(' | '));
  return hues + ' couleurs d’étoile, halo jusqu’à ' + top.toFixed(2) + ' · écran de fin avec la courbe : ' + end;
};
