# Pulsar

A circular rhythm game: notes rush towards a star from eight directions. Turn the shield around the star to catch the blue notes, and hit the shrinking pink rings at the right moment. Play the 200 tracks from the Rythme plugin, or your own music.

*Version française : [README.md](README.md)*

## How to play

- **Blue notes**: they arrive along one of the eight lanes. Put the **shield** on their lane when they touch the ring, with the **mouse** (the shield follows its direction) or the **← →** arrows. A white marker lights up at the end of the next note's lane; on tightly packed notes, the shield never has an impossible U-turn to make.
- **Pink rings**: they shrink towards the shield's circle, which lights up pink when one approaches. Hit with **Space**, **click**, **F** or **J** when the ring lands on it: everything turns white and "SPACE!" appears at the right moment. Rings come from the track's long notes and chords.
- **Space**: play · **P**: pause · **Full screen** during the game.

## Accuracy and points

Rings are judged by how far they are from the right moment: **Perfect** (about ±90 ms), **Good** (±180 ms), **OK** (±280 ms), otherwise a miss; they are twice as forgiving as in Rythme. Blue notes are caught if the shield is on their lane when they arrive.

A note's points rise by 1 % per note of combo, up to double at 100 notes in a row; a miss resets the combo. At the end, accuracy gives a grade: **S** from 95 %, **A** at 90 %, **B** at 80 %, **C** at 70 %, **D** below.

## Songs and difficulty

The **Songs** tab offers the 200 Rythme tracks. Each level's difficulty is worked out from its notes (density, busy passages, shield movements), from 1 to 10 stars.

## My music

In **My music**, create a level from an imported **audio file** or a track from your **NeoMusic** library: the game finds its tempo and strong beats and turns them into a level, at the chosen **difficulty** (1 to 10 stars).

## Settings

- Music **volume**.
- **Hit sound**: the sound played on each note you hit, one of 10 (Soft, Clap, Wood, Kick, Crystal, Pop, Hi-hat, Snare, Pluck, Tock) or none. Losing a combo of 10 or more plays a « combo break » sound.
- **Offset** (−300 to +300 ms): it adjusts itself after each game based on your average lateness or earliness; you can also change it by hand.

## Data and sync

Your scores and grades per level and your settings are stored by NeoDex, backed up and synced between your PCs when sync is on.

## Install

In NeoDex: **NeoStore → Discover → Pulsar → Install**.

Building a plugin: see the [NeoDex SDK](https://github.com/NDesumeur/neodex-sdk).
