import React from "react";
import { render } from "react-dom";
import Glow from "../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <Glow colorTheme = 'lightblue' gradientCenter = 'steelblue' customStyling = {{fontSize: 50}}>Here is a demo of my React Component!</Glow>
      <Glow>This is a default setting with no props provided.</Glow>
      <Glow colorTheme = 'darkseagreen' gradientCenter = 'pink'>Here is a 'Rose' theme</Glow>
      <Glow colorTheme = 'mediumvioletred' gradientCenter = 'lightcoral' customStyling = {{font: '20px century, serif', padding: 15, width: 75, borderStyle: 'dotted', display: 'block' }}>This is a button with custom styling provided</Glow>
      <Glow colorTheme='orange' customStyling={{marginLeft: 700, marginBottom: 50, width: 100}} clickMode={2}>Here's one with the "clickMode" prop. You'll have to click this one to see it repeat twice!</Glow>
      <Glow colorTheme = 'mediumslateblue' gradientCenter = 'bisque' customStyling={{width: 160, display: 'block', margin: 'auto'}}>Next comes Moby Dick</Glow>
      <Glow className = 'dotted' colorTheme = 'slategray' gradientCenter = 'thistle' clickMode={3}>
      Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.

There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs—commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme downtown is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.

Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep. But these are all landsmen; of week days pent up in lath and plaster—tied to counters, nailed to benches, clinched to desks. How then is this? Are the green fields gone? What do they here?

But look! here come more crowds, pacing straight for the water, and seemingly bound for a dive. Strange! Nothing will content them but the extremest limit of the land; loitering under the shady lee of yonder warehouses will not suffice. No. They must get just as nigh the water as they possibly can without falling in. And there they stand—miles of them—leagues. Inlanders all, they come from lanes and alleys, streets and avenues—north, east, south, and west. Yet here they all unite. Tell me, does the magnetic virtue of the needles of the compasses of all those ships attract them thither?
      </Glow>
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
