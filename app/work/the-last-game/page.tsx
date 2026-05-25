"use client";
import Link from "next/link";
import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

// --- 3D COMPONENT: THE CHESS PIECES ---
function ChessPiece({ type, isBlack, x, z }) {
  const posX = x - 3.5;
  const posZ = z - 3.5;
  
  const material = isBlack ? (
    <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.8} emissive="#5a0000" emissiveIntensity={0.5} />
  ) : (
    <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.1} />
  );

  switch (type) {
    case 'p': return <mesh position={[posX, 0.1 + 0.6/2, posZ]}><coneGeometry args={[0.3, 0.6, 4]} />{material}</mesh>;
    case 'r': return <mesh position={[posX, 0.1 + 0.8/2, posZ]}><boxGeometry args={[0.5, 0.8, 0.5]} />{material}</mesh>;
    case 'n': return <mesh position={[posX, 0.1 + 0.9/2, posZ]}><cylinderGeometry args={[0.2, 0.4, 0.9, 3]} />{material}</mesh>;
    case 'b': return <mesh position={[posX, 0.1 + 1.0/2, posZ]}><cylinderGeometry args={[0.1, 0.4, 1.0, 4]} />{material}</mesh>;
    case 'q': return <mesh position={[posX, 0.1 + 1.3/2, posZ]}><cylinderGeometry args={[0.25, 0.4, 1.3, 8]} />{material}</mesh>;
    case 'k': return <mesh position={[posX, 0.1 + 1.5/2, posZ]}><boxGeometry args={[0.35, 1.5, 0.35]} />{material}</mesh>;
    default: return null;
  }
}

// --- 3D COMPONENT: PROCEDURAL CHESSBOARD ---
function ProceduralChessboard() {
  const squares: React.ReactElement[] = [];
  const pieces: React.ReactElement[] = [];
  
  const boardSetup = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ];

  for (let z = 0; z < 8; z++) {
    for (let x = 0; x < 8; x++) {
      const isBlackSq = (x + z) % 2 === 1;
      squares.push(
        <mesh key={`sq-${x}-${z}`} position={[x - 3.5, 0.05, z - 3.5]}>
          <boxGeometry args={[0.96, 0.1, 0.96]} /> 
          <meshStandardMaterial color={isBlackSq ? "#050505" : "#a1a1aa"} roughness={0.7} metalness={0.1} />
        </mesh>
      );

      const pieceChar = boardSetup[z][x];
      if (pieceChar !== '') {
        pieces.push(
          <ChessPiece key={`pc-${x}-${z}`} type={pieceChar.toLowerCase()} isBlack={pieceChar === pieceChar.toLowerCase()} x={x} z={z} />
        );
      }
    }
  }

  return (
    <group>
      <group position={[0, 0, 0]}>{squares}</group>
      <group position={[0, 0, 0]}>{pieces}</group>
      <mesh position={[0, -0.05, 0]}>
        <boxGeometry args={[8.4, 0.1, 8.4]} />
        <meshStandardMaterial color="#000000" roughness={0.9} />
      </mesh>
      <mesh position={[0, -0.15, 0]}>
        <boxGeometry args={[9, 0.3, 9]} />
        <meshStandardMaterial color="#450a0a" roughness={0.8} /> 
      </mesh>
    </group>
  );
}

export default function TheLastGame() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState(null);
  const [fadeState, setFadeState] = useState("in"); 
  const [contrappasso, setContrappasso] = useState(null);
  const [history, setHistory] = useState([]);

  // L'engine traccia ogni peccato e stile di gioco
  const [scores, setScores] = useState({
    virtue: 0, limbo: 0, lust: 0, gluttony: 0, greed: 0,
    wrath: 0, heresy: 0, violence: 0, fraud: 0, treachery: 0, pride: 0
  });

  // --- THE 13 MOVES: STORYTELLING OVERHAUL ---
  const moves = [
    {
      id: 1,
      circle: "PHASE I: THE OPENING (VESTIBULE)",
      speaker: "The Shade",
      quote: "Therefore, for your own good, I think it well you follow me and I will be your guide.",
      narrative: "You sit at a table carved from a single, massive bone. Across from you sits a faceless Shade. It gestures toward the White pieces, then plays 1. e4 for Black. The air is entirely still. The journey must begin. How do you open the game?",
      choices: [
        { t: "1... e5. I meet him head-on in the center.", w: { virtue: 3 }, c: "Courage. You claim the center. Reason will be your lantern in the dark." },
        { t: "1... c5. The Sicilian Defense. I prepare an asymmetrical counter-attack.", w: { pride: 2, fraud: 1 }, c: "Arrogance. You believe your modern theories can outsmart the ancient guide from the very first breath." },
        { t: "I refuse to move my center pawns. A passive, closed defense.", w: { limbo: 5 }, c: "The Opportunist. You refuse to commit to the battle. Heaven casts you out, and Hell rejects your cowardice." }
      ]
    },
    {
      id: 2,
      circle: "PHASE I: THE OPENING (LIMBO)",
      speaker: "The Shade (Form of the Ancients)",
      quote: "They did not sin; and yet, though they have merits, that is not enough...",
      narrative: "The Shade’s face shifts, mirroring the marble busts of Homer and Ovid. It develops its Knights and Bishops flawlessly, strictly adhering to classical chess theory. There is no immediate threat, but no passion either. The board feels perfectly, suffocatingly stagnant.",
      choices: [
        { t: "I match their classical development. We draw the opening.", w: { limbo: 4, virtue: 1 }, c: "Desire without hope. You play a perfect, bloodless game, but a game without risk leads nowhere." },
        { t: "I launch a wild, uncalculated attack on the kingside.", w: { wrath: 3, lust: 2 }, c: "You cannot bear the stillness. You sacrifice a Knight blindly, just to force the board to bleed." },
        { t: "I play deeply positional chess, searching for a microscopic weakness.", w: { virtue: 3, pride: 1 }, c: "Cold logic. You respect the ancients, but you intend to systematically dismantle their legacy." }
      ]
    },
    {
      id: 3,
      circle: "PHASE I: THE OPENING (LUST)",
      speaker: "The Shade (Form of Francesca)",
      quote: "Love, that can quickly seize the gentle heart, took hold of him...",
      narrative: "The board begins to physically sink deeper into the earth. A black, roaring wind howls over the table. The Shade morphs into a weeping woman. She sweeps her Queen wildly across the ranks, exposed but alluring. She leaves a Bishop undefended, begging you to break your pawn structure to take it.",
      choices: [
        { t: "I abandon my pawn structure and chase the free material.", w: { lust: 5 }, c: "You are swept up by the black wind. You abandon the safety of your King to chase immediate, blinding desire." },
        { t: "I ignore the temptation, fortify my King, and castle.", w: { virtue: 3 }, c: "Restraint. You recognize the trap. You chain yourself to the mast of reason while the storm rages." },
        { t: "I pretend to take the bait, then trap her Queen in return.", w: { fraud: 3, pride: 2 }, c: "Predatory manipulation. You use her wild, reckless desire against her, closing the steel trap." }
      ]
    },
    {
      id: 4,
      circle: "PHASE II: THE MIDGAME (GLUTTONY)",
      speaker: "The Shade (Form of Ciacco)",
      quote: "Your city, which is so replete with envy that the sack already spills...",
      narrative: "The Opening is over. Freezing, putrid rain turns the board to slush. The Shade bloats, hanging a Pawn. Then another. He offers you endless free material, but capturing it will severely clutter your side of the board and ruin your mobility.",
      choices: [
        { t: "I gorge on every piece he offers. I want an absolute material advantage.", w: { gluttony: 5 }, c: "You bloat your position. Your pieces are now suffocated behind a wall of your own gluttonous excess." },
        { t: "I refuse the pawns. I keep my files open for the Rooks.", w: { virtue: 3 }, c: "Temperance. You reject the heavy, putrid slop and maintain your lethal tactical mobility." },
        { t: "I aggressively push the garbage back to his side of the board.", w: { pride: 3, wrath: 1 }, c: "Disgust. You look down upon the swine and force him to choke on his own scattered pieces." }
      ]
    },
    {
      id: 5,
      circle: "PHASE II: THE MIDGAME (HOARDERS)",
      speaker: "The Shade (Form of Plutus)",
      quote: "Pape Satàn, pape Satàn aleppe!",
      narrative: "The board becomes a claustrophobic, gridlocked nightmare. Neither side can attack without breaking a massive wall of pawns. The Shade shuffles a Rook back and forth, endlessly repeating the exact same useless move, hoarding its current position.",
      choices: [
        { t: "I endlessly shuffle my pieces too. A war of pure attrition.", w: { greed: 5 }, c: "You are trapped pushing boulders. You hoard your position, terrified of losing even a fraction of an advantage." },
        { t: "I sacrifice a high-value piece to violently break the pawn wall.", w: { violence: 2, virtue: 2 }, c: "You shatter the cycle of hoarding through a violent, irreversible sacrifice. The board opens." },
        { t: "I offer a draw to end the tedious suffering.", w: { limbo: 3 }, c: "A refusal to engage in the heavy lifting of breaking the deadlock. The game stagnates." }
      ]
    },
    {
      id: 6,
      circle: "PHASE II: THE MIDGAME (WRATH)",
      speaker: "The Shade (Form of Argenti)",
      quote: "Who are you, who come before your time?",
      narrative: "The bone table violently shakes. The Shade's features twist in pure rage. It plays a blatantly illegal, aggressive move—moving a Knight like a Bishop—just to provoke you, threatening to knock the pieces entirely onto the floor.",
      choices: [
        { t: "I slam the table back and attack him directly.", w: { wrath: 5, violence: 2 }, c: "You are consumed by the mud. You lose your composure, mirroring the beast's raw, screaming fury." },
        { t: "I coldly ignore the illegal move and quietly adjust my strategy.", w: { virtue: 4 }, c: "Righteous indignation. You do not let the beast drag you down into the swamp." },
        { t: "I silently refuse to play, glaring until he fixes it.", w: { wrath: 3, limbo: 2 }, c: "Sullenness. You swallow your dark anger, letting it rot you from the inside out as the clock ticks." }
      ]
    },
    {
      id: 7,
      circle: "PHASE II: THE MIDGAME (HERESY)",
      speaker: "The Shade (Form of Farinata)",
      quote: "Behold Farinata, who has risen upright...",
      narrative: "The board catches fire. The Shade's King is trapped in the corner, surrounded by virtual flames. Instead of defending, the opponent ignores his King's mortality and pushes his central pawns. 'The King does not die,' the Shade whispers. 'The game is eternal.'",
      choices: [
        { t: "I agree, and ignore his King to attack his pawns instead.", w: { heresy: 5 }, c: "Epicurean blindness. You deny the ultimate consequence of the game: Checkmate. You believe only in the present move." },
        { t: "I execute a ruthless forced mating net. The King is mortal.", w: { virtue: 4 }, c: "Orthodoxy. You enforce the absolute, unavoidable laws of the board upon him." },
        { t: "I mock his misguided strategy before launching my attack.", w: { pride: 4 }, c: "Hubris. You care more about flaunting your earthly intellect than the divine rules of the game." }
      ]
    },
    {
      id: 8,
      circle: "PHASE II: THE MIDGAME (VIOLENCE)",
      speaker: "The Shade (Form of Pier della Vigna)",
      quote: "Why do you tear me? Are you quite without the spirit of pity?",
      narrative: "Your Knight is heavily pinned to your King by an enemy Bishop. The piece is rooted to the square like a bleeding, gnarled tree. The only way to save your game is to violently snap the pin, sacrificing your own Knight to be slaughtered.",
      choices: [
        { t: "I sacrifice the Knight. It must bleed for the win.", w: { violence: 4 }, c: "Violence against your own. You willingly destroy a piece of yourself to harm your opponent." },
        { t: "I refuse to break the pin. I resign the position.", w: { violence: 5, pride: 1 }, c: "Violence against self. You destroy your own chances entirely rather than face the pain of loss." },
        { t: "I flip the pinned Knight off the board and curse the rules of chess.", w: { violence: 5, pride: 5 }, c: "Violence against God. Pure blasphemy on the burning sands." }
      ]
    },
    {
      id: 9,
      circle: "PHASE II: THE MIDGAME (FRAUD)",
      speaker: "The Shade (Form of Malacoda)",
      quote: "Cover yourselves! Don't let the demons see you!",
      narrative: "The board fractures into deep, stone ditches. The Shade sets up a 'Fork'—attacking your Rook and Bishop simultaneously. But it looks sloppy. It might be a feint, a complex trap disguised as a beginner's blunder.",
      choices: [
        { t: "I use a 'Skewer' to trap him back. Deception for deception.", w: { fraud: 5 }, c: "You have mastered the Malebolge. You are now just another demon swimming in the pitch." },
        { t: "I calculate the absolute mathematical truth of the position, ignoring his bluffs.", w: { virtue: 4 }, c: "The blinding light of pure reason pierces through the smog of deception." },
        { t: "I deliberately sacrifice a Pawn as a bribe to let my Rook escape.", w: { fraud: 3, greed: 3 }, c: "Graft and corruption. You try to buy your way out of a tactical nightmare." }
      ]
    },
    {
      id: 10,
      circle: "PHASE II: THE MIDGAME (THIEVES)",
      speaker: "The Shade (Form of Vanni Fucci)",
      quote: "Take that, O God, for I direct them at you!",
      narrative: "While you are calculating an intense defense, the Shade physically reaches over, illegally pockets one of your active Rooks, and replaces his own lost Bishop. It laughs and makes an obscene gesture at the ceiling.",
      choices: [
        { t: "I steal his Queen from the board while he blinks.", w: { fraud: 5 }, c: "The Thief. You shed your human form entirely, becoming a serpent biting its own tail." },
        { t: "I demand the Arbiter intervene, pointing out the stolen piece.", w: { virtue: 3 }, c: "You appeal to a higher moral order. But deep in Malebolge, order is a fragile illusion." },
        { t: "I say nothing. I adapt my strategy and crush him despite the handicap.", w: { pride: 4, virtue: 2 }, c: "Arrogance mixed with sheer skill. You prove your absolute superiority without stooping to his level." }
      ]
    },
    {
      id: 11,
      circle: "PHASE III: THE ENDGAME (FALSE COUNSEL)",
      speaker: "The Shade (Form of Ulysses)",
      quote: "Consider well the seed that gave you birth: you were not made to live your lives as brutes.",
      narrative: "The board is almost empty. We have entered the bitter Endgame. The Shade burns like a towering tongue of fire. It whispers: 'Launch a brilliant, unorthodox assault. Violate the boring endgame principles. Sail beyond the pillars of Hercules. It leads to eternal glory.'",
      choices: [
        { t: "I take his advice. I launch the brilliant, risky attack.", w: { fraud: 4, pride: 3 }, c: "The Mad Flight. You overextend your King, and the dark ocean of the board swallows you whole." },
        { t: "I ignore the flame. I play a solid, unglamorous defensive endgame.", w: { virtue: 3 }, c: "Caution. You do not let beautiful eloquence drag you into tactical ruin." },
        { t: "I pretend to take his advice, using his own gambit as a decoy.", w: { fraud: 5 }, c: "The ultimate counselor of fraud. You out-trick the trickster at the edge of the world." }
      ]
    },
    {
      id: 12,
      circle: "PHASE III: THE ENDGAME (TREACHERY)",
      speaker: "The Shade (Form of Count Ugolino)",
      quote: "Then fasting had more power than grief.",
      narrative: "The board is freezing solid. Frost creeps over the bone table. You are in 'Zugzwang'—any move you make will actively worsen your position. The Shade, gnawing on a captured Bishop, offers a deal: deliberately betray your King's safety to secure a guaranteed draw.",
      choices: [
        { t: "I refuse the deal. I play the best move, even if it leads to my defeat.", w: { virtue: 5 }, c: "Integrity in the ice. You accept the suffering of the board without betraying its fundamental laws." },
        { t: "I sacrifice my own pawns to save my King, cannibalizing my position.", w: { treachery: 4 }, c: "Betrayal of your own loyal forces. You survive for now, but you are utterly alone." },
        { t: "I offer him a handshake draw, then wait for his clock to run out.", w: { treachery: 5, fraud: 3 }, c: "Treachery against guests. Your soul plummets instantly to the ice; a demon takes your place at the table." }
      ]
    },
    {
      id: 13,
      circle: "PHASE III: THE ENDGAME (JUDECCA)",
      speaker: "LUCIFER",
      quote: "Vexilla regis prodeunt inferni...",
      narrative: "The Shade shatters into dust. True Hell is revealed. Satan himself sits across from you, trapped in the ice, beating his six massive wings. The freezing wind halts the clock. The position is Checkmate in One. To deliver the final blow and win, you must sacrifice your Queen directly into his mouth.",
      choices: [
        { t: "I sacrifice the Queen. CHECKMATE.", w: { virtue: 6 }, c: "The ultimate sacrifice. You traverse the frozen center of gravity and finally win the game." },
        { t: "I refuse to sacrifice. I stubbornly try to checkmate without losing her.", w: { pride: 5, treachery: 2 }, c: "Absolute Hubris. You refuse to lose material. In doing so, the game freezes forever." },
        { t: "I turn the board around. I play for Black.", w: { treachery: 6, pride: 5, fraud: 3, violence: 2 }, c: "The Ultimate Betrayal. You usurp the board itself." }
      ]
    }
  ];

  const handleBack = () => {
    if (step > 0 && history.length > 0) {
      const prevScores = history[history.length - 1]; 
      setScores(prevScores); 
      setHistory(history.slice(0, -1)); 
      setStep(step - 1); 
      setResult(null); 
    }
  };

  const handleChoice = (weight, commentary) => {
    setHistory([...history, scores]);
    setFadeState("out"); 
    setTimeout(() => {
      setContrappasso(commentary);
      setFadeState("in");
      const newScores = { ...scores };
      Object.keys(weight).forEach((key) => { newScores[key] = (newScores[key] || 0) + weight[key]; });
      setScores(newScores);
      setTimeout(() => { 
        setFadeState("out");
        setTimeout(() => {
          setContrappasso(null);
          if (step < moves.length - 1) { setStep(step + 1); } else { calculateEnding(newScores); }
          setFadeState("in"); 
        }, 500);
      }, 3000); 
    }, 500);
  };

  // --- REWRITTEN SPECIAL ENDINGS FOR MAXIMUM STORYTELLING IMPACT ---
  const calculateEnding = (s) => {
    
    // Ending 1: THE INFERNAL ARCHITECT (Manager dell'Inferno) - Triggers on high Pride + Fraud
    if (s.pride >= 10 && s.fraud >= 10) {
        return setResult({ 
            title: "THE INFERNAL ARCHITECT", 
            subtitle: "Hell is under New Management.", 
            desc: "You didn't just beat the Devil; you optimized him. Through a brilliant, manipulative, and coldly arrogant game of chess, you demonstrated that the ancient torments are inefficient. Satan has stepped aside, handing you the clipboard. You now oversee the geometry of Malebolge, calculating the exact metrics of human suffering. A game without end.", 
            color: "text-purple-500",
            link: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-11/"
        });
    }

    // Ending 2: THE FOURTH MOUTH (Schiavo di Satana) - Triggers on high Pride + Wrath/Violence
    if (s.pride >= 10 && (s.violence >= 10 || s.wrath >= 8)) {
        return setResult({ 
            title: "THE FOURTH MOUTH", 
            subtitle: "Satan's Battery.", 
            desc: "You thought you could conquer Hell with brute force and sheer arrogance. You aggressively sacrificed, flipped the board, and tried to out-monster the monsters. You failed to realize that Hell feeds on violence. You are not the victor; you are the fuel. Satan's three mouths chew on Judas, Brutus, and Cassius. The fourth mouth was waiting for you.", 
            color: "text-red-700",
            link: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-34/"
        });
    }

    // Ending 3: THE ASCENSION (Il Finale Canonico/Virtuoso)
    if (s.virtue >= 20) {
      return setResult({ 
        title: "THE ASCENSION", 
        subtitle: "And we came forth to see again the stars.", 
        desc: "You played a game of perfect reason, necessary sacrifice, and absolute integrity. You did not let the environment of Hell corrupt your strategy. By sacrificing your Queen directly into the jaws of the Emperor of Dolor, you achieved a flawless Checkmate. You leave the bone table behind, ascending from the darkness into the light.", 
        color: "text-zinc-300",
        link: "https://digitaldante.columbia.edu/dante/divine-comedy/purgatorio/purgatorio-1/"
      });
    }

    // Ending 4: THE VOID (Se il giocatore distrugge tutto)
    if (s.violence >= 14 || s.wrath >= 12) {
        return setResult({ 
            title: "THE VOID", 
            subtitle: "The Board is Shattered.", 
            desc: "Consumed by an uncontrollable rage, you did not finish the game—you destroyed it. You flipped the table of bone, snapped the pieces, and rejected the fundamental laws of reality. Neither Heaven nor Hell can contain a soul that refuses the rules of existence. You drift forever in an empty, starless void.", 
            color: "text-orange-600",
            link: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-3/" 
        });
    }

    // Ending 5: STALEMATE (Se gioca passivamente e resta nel Limbo)
    if (s.limbo >= 10) {
        return setResult({ 
            title: "ETERNAL STALEMATE", 
            subtitle: "Desire without Hope.", 
            desc: "You played too safely. You refused to commit, refused to sacrifice, and refused to risk anything of value. The game ends in a cold, stagnant draw. You are trapped in the Vestibule forever, analyzing a game that you were too afraid to actually play.", 
            color: "text-zinc-500",
            link: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-4/"
        });
    }

    // Ending 6: ASSIMILATION (Standard Game Over in base al peccato maggiore)
    const comp = { ...s }; 
    delete comp.virtue; delete comp.pride; 
    const max = Math.max(...Object.values(comp));
    const sin = Object.keys(comp).find(k => comp[k] === max);

    const endings = {
      lust: { t: "ASSIMILATION: LUST", s: "Swept away.", d: "You sacrificed your King's safety for immediate, blinding desire. You are now just another wooden piece, blown about forever by the black wind of the second circle.", c: "text-fuchsia-400", l: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-5/" },
      gluttony: { t: "ASSIMILATION: GLUTTONY", s: "Choking on the pieces.", d: "You bloated your position, taking every piece offered until you could no longer move. You lie paralyzed in the freezing slush.", c: "text-amber-700", l: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-6/" },
      greed: { t: "ASSIMILATION: GREED", s: "Gridlocked.", d: "You hoarded your advantage, terrified of losing material. You are doomed to push boulders in the dark, defending a position that can never win.", c: "text-yellow-600", l: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-7/" },
      treachery: { t: "ASSIMILATION: TREACHERY", s: "Frozen in the ice.", d: "You betrayed your own forces to survive the endgame. You won the battle, but your soul froze over. You are trapped in the ice of Cocytus.", c: "text-cyan-400", l: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-32/" },
      fraud: { t: "ASSIMILATION: FRAUD", s: "Lost in the ditches.", d: "You thought you could out-trick the demons. Instead, you were outplayed. You are plunged into the boiling pitch of Malebolge.", c: "text-stone-500", l: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-18/" }
    };
    
    const final = endings[sin] || { t: "ASSIMILATION", s: "Lost to the dark wood.", d: "You survived the opening, but Hell slowly corrupted your strategy. You are no longer the player; you are just another piece waiting for the next game.", c: "text-blue-500", l: "https://digitaldante.columbia.edu/dante/divine-comedy/inferno/inferno-1/" };
    
    setResult({ title: final.t, subtitle: final.s, desc: final.d, color: final.c, link: final.l });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans pb-20 flex flex-col overflow-x-hidden">
      
      {/* NAV */}
      <nav className="p-8 sticky top-0 bg-[#050505]/95 backdrop-blur-md z-50 border-b border-red-900/10 flex justify-between items-center">
        <Link href="/" className="text-[10px] uppercase tracking-widest font-bold hover:text-red-600 transition-colors">← Portfolio</Link>
        <div className="hidden md:block text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
            {result ? "JUDGMENT RENDERED" : `DESCENT: TURN ${step + 1} / 13`}
        </div>
      </nav>

      {/* --- SECTION 1: THE GAME --- */}
      <div className="flex-grow flex items-center justify-center p-6 min-h-[80vh]">
        <article className="max-w-3xl w-full text-center relative" aria-live="polite">
          <div className={`transition-opacity duration-500 ease-in-out ${fadeState === "out" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
            
            {!result && !contrappasso && (
              <>
                <div className="mb-10 flex flex-col md:flex-row items-center justify-center gap-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  <span className="text-red-600 font-bold">{moves[step]?.circle}</span>
                  <span className="hidden md:block text-zinc-700">|</span>
                  <span className="text-zinc-400">Opponent: {moves[step]?.speaker}</span>
                </div>
                <blockquote className="mb-12 border-l-2 border-red-900/50 pl-6 text-left mx-auto max-w-xl">
                  <p className="text-xl md:text-2xl font-serif italic text-zinc-400 leading-relaxed">"{moves[step]?.quote}"</p>
                </blockquote>
                <h2 className="text-lg md:text-xl font-medium text-white mb-12 leading-relaxed max-w-2xl mx-auto">{moves[step]?.narrative}</h2>
                <div className="grid gap-4 max-w-lg mx-auto">
                  {moves[step]?.choices.map((choice, i) => (
                    <button key={i} onClick={() => handleChoice(choice.w, choice.c)} className="group relative w-full py-5 px-6 border border-zinc-800 bg-zinc-900/20 hover:border-red-800 hover:bg-zinc-900 transition-all duration-300 text-left">
                      <div className="flex items-center gap-4">
                          <span className="font-mono text-red-600 text-xs">0{i+1}</span>
                          <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors uppercase tracking-wide">{choice.t}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {step > 0 && <button onClick={handleBack} className="mt-12 text-[10px] uppercase tracking-widest text-zinc-600 hover:text-white border-b border-zinc-800 pb-1">Undo Last Move</button>}
              </>
            )}

            {contrappasso && (
              <div className="py-20">
                  <div className="w-12 h-1 bg-red-900 mx-auto mb-8"></div>
                  <span className="text-red-800 font-mono text-[10px] uppercase tracking-widest block mb-6">The Consequence</span>
                  <p className="text-2xl md:text-3xl font-serif italic text-red-100 leading-snug max-w-xl mx-auto">"{contrappasso}"</p>
                  <div className="w-12 h-1 bg-red-900 mx-auto mt-8"></div>
              </div>
            )}

            {result && (
              <div className="py-10">
                <div className="w-24 h-24 mx-auto mb-8 bg-zinc-950 border border-zinc-800 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.2)]">
                   <span className="text-4xl text-zinc-500">♟</span>
                </div>
                <h2 className={`text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-2 ${result.color}`}>{result.title}</h2>
                <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest mb-10">{result.subtitle}</p>
                <div className="bg-zinc-900/50 border-l-4 border-red-900 p-8 mb-12 text-left max-w-xl mx-auto">
                  <p className="text-lg font-serif text-zinc-300 leading-relaxed">"{result.desc}"</p>
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
                  <button onClick={() => window.location.reload()} className="px-8 py-3 bg-red-900/10 text-red-500 hover:text-white border border-red-900/50 text-xs uppercase tracking-widest">Restart Timeline ↺</button>
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 text-xs uppercase tracking-widest"
                  >
                    Examine Lore ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </article>
      </div>

      {/* --- SECTION 2: THE ARCHIVES (Procedural Gothic 3D + PDF) --- */}
      <section className="border-t border-zinc-900 bg-[#080808] py-32 px-6">
        <div className="max-w-6xl mx-auto">
            <header className="mb-20 text-center">
                <span className="text-red-600 font-mono text-xs uppercase tracking-[0.3em] mb-4 block italic">Behind the Descent</span>
                <h3 className="text-3xl md:text-5xl font-black uppercase text-white italic">Project Artifacts</h3>
            </header>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
                
                {/* 1. PROCEDURAL CHESSBOARD */}
                <div className="space-y-6">
                    <div className="relative h-[600px] w-full bg-[#050505] border border-zinc-800 rounded-sm overflow-hidden shadow-2xl cursor-move">
                        
                        <Suspense fallback={<div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-mono text-xs z-10">Loading 3D Relic...</div>}>
                            <Canvas camera={{ position: [0, 8, 12], fov: 45 }}>
                                <color attach="background" args={['#050505']} />
                                <ambientLight intensity={2} />
                                <directionalLight position={[10, 10, 5]} intensity={3} color="#ffffff" />
                                <Center>
                                    <ProceduralChessboard />
                                </Center>
                                <OrbitControls makeDefault enableZoom={true} maxPolarAngle={Math.PI / 2.1} />
                            </Canvas>
                        </Suspense>
                        
                        <div className="absolute bottom-6 left-6 text-[10px] text-white font-mono uppercase tracking-widest pointer-events-none bg-black/80 px-4 py-2 border border-zinc-700 shadow-lg z-20">
                            Fig. 1: Infernal Chessboard (Procedural CSG)
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">The Digital Artifact</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            A coded reconstruction of the chessboard with brutalist pieces. Drag to rotate, scroll to zoom.
                        </p>
                    </div>
                </div>

                {/* 2. THE PDF */}
                <div className="space-y-6">
                    <div className="relative h-[600px] w-full bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl">
                        <iframe src="/the-last-game.pdf" className="w-full h-full bg-white" />
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white mb-2">The Original Logic</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                            The comprehensive concept deck. This document outlines the mapping of chess mechanics to Dante's theology.
                        </p>
                        <a
                          href="/the-last-game.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 bg-zinc-900 border border-zinc-700 hover:border-zinc-400 hover:text-white text-zinc-400 text-xs font-bold uppercase tracking-widest transition-colors"
                        >
                            Open PDF Fullscreen ↗
                        </a>
                    </div>
                </div>

            </div>
        </div>
      </section>

    </div>
  );
}
