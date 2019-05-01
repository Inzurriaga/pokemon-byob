const pokemon = [
    {
        "pokedexNumber": "#001",
        "name": "Bulbasaur",
        "description": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        "height": "2' 04\"",
        "weight": "15.2 lbs",
        "type": ["grass", "poison"]
    },
    {
        "pokedexNumber": "#002",
        "name": "Ivysaur",
        "description": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
        "height": "3' 03\"",
        "weight": "28.7 lbs",
        "type": ["grass", "poison"]
    },
    {
        "pokedexNumber": "#003",
        "name": "Venusaur",
        "description": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
        "height": "6' 07\"",
        "weight": "220.5 lbs",
        "type": ["grass", "poison"]
    },
    {
        "pokedexNumber": "#004",
        "name": "Charmander",
        "description": "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        "height": "2' 00\"",
        "weight": "18.7 lbs",
        "type": ["fire"]
    },
    {
        "pokedexNumber": "#005",
        "name": "Charmeleon",
        "description": "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
        "height": "3' 07\"",
        "weight": "41.9 lbs",
        "type": ["fire"]
    },
    {
        "pokedexNumber": "#006",
        "name": "Charizard",
        "description": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
        "height": "5' 07\"",
        "weight": "199.5 lbs",
        "type": ["fire", "flying"]
    },
    {
        "pokedexNumber": "#007",
        "name": "Squirtle",
        "description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
        "height": "1' 08\"",
        "weight": "19.8 lbs",
        "type": ["water"]
    },
    {
        "pokedexNumber": "#008",
        "name": "Wartortle",
        "description": "ts tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler.",
        "height": "3' 03\"",
        "weight": "49.6 lbs",
        "type": ["water"]
    },
    {
        "pokedexNumber": "#009",
        "name": "Blastoise",
        "description": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
        "height": "5' 03\"",
        "weight": "188.5 lbs",
        "type": ["water"]
    },
    {
        "pokedexNumber": "#010",
        "name": "Caterpie",
        "description": "Caterpie has a voracious appetite. It can devour leaves bigger than its body right before your eyes. From its antenna, this Pokémon releases a terrifically strong odor.",
        "height": "1' 00\"",
        "weight": "6.4 lbs",
        "type": ["bug"]
    },
    {
        "pokedexNumber": "#011",
        "name": "Metapod",
        "description": "The shell covering this Pokémon's body is as hard as an iron slab. Metapod does not move very much. It stays still because it is preparing its soft innards for evolution inside the hard shell.",
        "height": "2' 04\"",
        "weight": "21.8 lbs",
        "type": ["bug"]
    },
    {
        "pokedexNumber": "#012",
        "name": "Butterfree",
        "description": "Butterfree has a superior ability to search for delicious honey from flowers. It can even search out, extract, and carry honey from flowers that are blooming over six miles from its nest.",
        "height": "3' 07\"",
        "weight": "70.5 lbs",
        "type": ["bug", "flying"]
    },
    {
        "pokedexNumber": "#013",
        "name": "Weedle",
        "description": "Weedle has an extremely acute sense of smell. It is capable of distinguishing its favorite kinds of leaves from those it dislikes just by sniffing with its big red proboscis (nose)",
        "height": "1' 00\"",
        "weight": "7.1 lbs",
        "type": ["bug", "poison"]
    },
    {
        "pokedexNumber": "#014",
        "name": "Kakuna",
        "description": "Kakuna remains virtually immobile as it clings to a tree. However, on the inside, it is extremely busy as it prepares for its coming evolution. This is evident from how hot the shell becomes to the touch.",
        "height": "2' 00\"",
        "weight": "22.0 lbs",
        "type": ["bug", "poison"]
    },
    {
        "pokedexNumber": "#015",
        "name": "Beedrill",
        "description": "Beedrill is extremely territorial. No one should ever approach its nest—this is for their own safety. If angered, they will attack in a furious swarm.",
        "height": "3' 03\"",
        "weight": "65.0 lbs",
        "type": ["bug", "poison"]
    },
    {
        "pokedexNumber": "#016",
        "name": "Pidgey",
        "description": "Pidgey has an extremely sharp sense of direction. It is capable of unerringly returning home to its nest, however far it may be removed from its familiar surroundings.",
        "height": "1' 00\"",
        "weight": "4.0 lbs",
        "type": ["normal", "flying"]
    },
    {
        "pokedexNumber": "#017",
        "name": "Pidgeotto",
        "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
        "height": "3' 07\"",
        "weight": "66.1 lbs",
        "type": ["normal", "flying"]
    },
    {
        "pokedexNumber": "#018",
        "name": "Pidgeot",
        "description": "This Pokémon has a dazzling plumage of beautifully glossy feathers. Many Trainers are captivated by the striking beauty of the feathers on its head, compelling them to choose Pidgeot as their Pokémon.",
        "height": "4' 11\"",
        "weight": "87.1 lbs",
        "type": ["normal", "flying"]
    },
    {
        "pokedexNumber": "#019",
        "name": "Rattata",
        "description": "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
        "height": "1' 00\"",
        "weight": "7.7 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#020",
        "name": "Raticate",
        "description": "Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.",
        "height": "2' 04\"",
        "weight": "40.8 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#021",
        "name": "Spearow",
        "description": "Spearow has a very loud cry that can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.",
        "height": "1' 00\"",
        "weight": "4.4 lbs",
        "type": ["normal", "flying"]
    },
    {
        "pokedexNumber": "#022",
        "name": "Fearow",
        "description": "Fearow is recognized by its long neck and elongated beak. They are conveniently shaped for catching prey in soil or water. It deftly moves its long and skinny beak to pluck prey.",
        "height": "3' 11\"",
        "weight": "83.8 lbs",
        "type": ["normal", "flying"]
    },
    {
        "pokedexNumber": "#023",
        "name": "Ekans",
        "description": "Ekans curls itself up in a spiral while it rests. Assuming this position allows it to quickly respond to a threat from any direction with a glare from its upraised head.",
        "height": "6' 07\"",
        "weight": "15.2 lbs",
        "type": ["poison"]
    },
    {
        "pokedexNumber": "#024",
        "name": "Arbok",
        "description": "This Pokémon is terrifically strong in order to constrict things with its body. It can even flatten steel oil drums. Once Arbok wraps its body around its foe, escaping its crunching embrace is impossible.",
        "height": "11' 06\"",
        "weight": "143.3 lbs",
        "type": ["poison"]
    },
    {
        "pokedexNumber": "#025",
        "name": "Pikachu",
        "description": "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
        "height": "1' 04\"",
        "weight": "13.2 lbs",
        "type": ["eletric"]
    },
    {
        "pokedexNumber": "#026",
        "name": "Raichu",
        "description": "If the electrical sacs become excessively charged, Raichu plants its tail in the ground and discharges. Scorched patches of ground will be found near this Pokémon's nest.",
        "height": "2' 07\"",
        "weight": "66.1 lbs",
        "type": ["eletric"]
    },
    {
        "pokedexNumber": "#027",
        "name": "Sandshrew",
        "description": "Sandshrew's body is configured to absorb water without waste, enabling it to survive in an arid desert. This Pokémon curls up to protect itself from its enemies.",
        "height": "2' 00\"",
        "weight": "26.5 lbs",
        "type": ["ground"]
    },
    {
        "pokedexNumber": "#028",
        "name": "Sandslash",
        "description": "Sandslash's body is covered by tough spikes, which are hardened sections of its hide. Once a year, the old spikes fall out, to be replaced with new spikes that grow out from beneath the old ones.",
        "height": "3' 03\"",
        "weight": "65.0 lbs",
        "type": ["ground"]
    },
    {
        "pokedexNumber": "#029",
        "name": "Nidoran♀",
        "description": "Nidoran♀ has barbs that secrete a powerful poison. They are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.",
        "height": "1' 04\"",
        "weight": "15.4 lbs",
        "type": ["poison"]
    },
    {
        "pokedexNumber": "#030",
        "name": "Nidorina",
        "description": "When Nidorina are with their friends or family, they keep their barbs tucked away to prevent hurting each other. This Pokémon appears to become nervous if separated from the others.",
        "height": "2' 07\"",
        "weight": "44.1 lbs",
        "type": ["poison"]
    },
    {
        "pokedexNumber": "#031",
        "name": "Nidoqueen",
        "description": "Nidoqueen's body is encased in extremely hard scales. It is adept at sending foes flying with harsh tackles. This Pokémon is at its strongest when it is defending its young.",
        "height": "4' 03\"",
        "weight": "132.3 lbs",
        "type": ["poison", "ground"]
    },
    {
        "pokedexNumber": "#032",
        "name": "Nidoran♂",
        "description": "Nidoran♂ has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this Pokémon's notice.",
        "height": "1' 08\"",
        "weight": "19.8 lbs",
        "type": ["poison"]
    },
    {
        "pokedexNumber": "#033",
        "name": "Nidorino",
        "description": "Nidorino has a horn that is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.",
        "height": "2' 11\"",
        "weight": "43.0 lbs",
        "type": ["poison"]
    },
    {
        "pokedexNumber": "#034",
        "name": "Nidoking",
        "description": "Nidoking's thick tail packs enormously destructive power. With one swing, it can topple a metal transmission tower. Once this Pokémon goes on a rampage, there is no stopping it.",
        "height": "4' 07\"",
        "weight": "136.7 lbs",
        "type": ["poison", "ground"]
    },
    {
        "pokedexNumber": "#035",
        "name": "Clefairy",
        "description": "On every night of a full moon, groups of this Pokémon come out to play. When dawn arrives, the tired Clefairy return to their quiet mountain retreats and go to sleep nestled up against each other.",
        "height": "2' 00\"",
        "weight": "16.5 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#036",
        "name": "Clefable",
        "description": "Clefable moves by skipping lightly as if it were flying using its wings. Its bouncy step lets it even walk on water. It is known to take strolls on lakes on quiet, moonlit nights.",
        "height": "4' 03\"",
        "weight": "88.2 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#037",
        "name": "Vulpix",
        "description": "At the time of its birth, Vulpix has one white tail. The tail separates into six if this Pokémon receives plenty of love from its Trainer. The six tails become magnificently curled.",
        "height": "2' 00\"",
        "weight": "21.8 lbs",
        "type": ["fire"]
    },
    {
        "pokedexNumber": "#038",
        "name": "Ninetales",
        "description": "Ninetales casts a sinister light from its bright red eyes to gain total control over its foe's mind. This Pokémon is said to live for a thousand years.",
        "height": "3' 07\"",
        "weight": "43.9 lbs",
        "type": ["fire"]
    },
    {
        "pokedexNumber": "#039",
        "name": "Jigglypuff",
        "description": "Jigglypuff's vocal cords can freely adjust the wavelength of its voice. This Pokémon uses this ability to sing at precisely the right wavelength to make its foes most drowsy.",
        "height": "1' 08\"",
        "weight": "12.1 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#040",
        "name": "Wigglytuff",
        "description": "Wigglytuff has large, saucerlike eyes. The surfaces of its eyes are always covered with a thin layer of tears. If any dust gets in this Pokémon's eyes, it is quickly washed away.",
        "height": "3' 03\"",
        "weight": "26.5 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#041",
        "name": "Zubat",
        "description": "Zubat remains quietly unmoving in a dark spot during the bright daylight hours. It does so because prolonged exposure to the sun causes its body to become slightly burned.",
        "height": "2' 07\"",
        "weight": "16.5 lbs",
        "type": ["poison", "flying"]
    },
    {
        "pokedexNumber": "#042",
        "name": "Golbat",
        "description": "Golbat loves to drink the blood of living things. It is particularly active in the pitch black of night. This Pokémon flits around in the night skies, seeking fresh blood.",
        "height": "5' 03\"",
        "weight": "121.3 lbs",
        "type": ["poison", "flying"]
    },
    {
        "pokedexNumber": "#043",
        "name": "Oddish",
        "description": "During the daytime, Oddish buries itself in soil to absorb nutrients from the ground using its entire body. The more fertile the soil, the glossier its leaves become.",
        "height": "1' 08\"",
        "weight": "11.9 lbs",
        "type": ["poison", "grass"]
    },
    {
        "pokedexNumber": "#044",
        "name": "Gloom",
        "description": "Gloom releases a foul fragrance from the pistil of its flower. When faced with danger, the stench worsens. If this Pokémon is feeling calm and secure, it does not release its usual stinky aroma.",
        "height": "2' 07\"",
        "weight": "19.0 lbs",
        "type": ["poison", "grass"]
    },
    {
        "pokedexNumber": "#045",
        "name": "Vileplume",
        "description": "Vileplume's toxic pollen triggers atrocious allergy attacks. That's why it is advisable never to approach any attractive flowers in a jungle, however pretty they may be.",
        "height": "3' 11\"",
        "weight": "41.0 lbs",
        "type": ["poison", "grass"]
    },
    {
        "pokedexNumber": "#046",
        "name": "Paras",
        "description": "Paras has parasitic mushrooms growing on its back called tochukaso. They grow large by drawing nutrients from this Bug Pokémon host. They are highly valued as a medicine for extending life.",
        "height": "1' 00\"",
        "weight": "11.9 lbs",
        "type": ["bug", "grass"]
    },
    {
        "pokedexNumber": "#047",
        "name": "Parasect",
        "description": "Parasect is known to infest large trees en masse and drain nutrients from the lower trunk and roots. When an infested tree dies, they move onto another tree all at once.",
        "height": "3' 03\"",
        "weight": "65.0 lbs",
        "type": ["bug", "grass"]
    },
    {
        "pokedexNumber": "#048",
        "name": "Venonat",
        "description": "Venonat is said to have evolved with a coat of thin, stiff hair that covers its entire body for protection. It possesses large eyes that never fail to spot even minuscule prey.",
        "height": "3' 03\"",
        "weight": "66.1 lbs",
        "type": ["poison", "bug"]
    },
    {
        "pokedexNumber": "#049",
        "name": "Venomoth",
        "description": "Venomoth is nocturnal—it is a Pokémon that only becomes active at night. Its favorite prey are small insects that gather around streetlights, attracted by the light in the darkness.",
        "height": "4' 11\"",
        "weight": "27.6 lbs",
        "type": ["poison", "bug"]
    },
    {
        "pokedexNumber": "#050",
        "name": "Diglett",
        "description": "Diglett are raised in most farms. The reason is simple— wherever this Pokémon burrows, the soil is left perfectly tilled for planting crops. This soil is made ideal for growing delicious vegetables.",
        "height": "0' 08\"",
        "weight": "1.8 lbs",
        "type": ["ground"]
    },
    {
        "pokedexNumber": "#051",
        "name": "Dugtrio",
        "description": "Dugtrio are actually triplets that emerged from one body. As a result, each triplet thinks exactly like the other two triplets. They work cooperatively to burrow endlessly.",
        "height": "2' 04\"",
        "weight": "73.4 lbs",
        "type": ["ground"]
    },
    {
        "pokedexNumber": "#052",
        "name": "Meowth",
        "description": "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
        "height": "1' 04\"",
        "weight": "9.3 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#053",
        "name": "Persian",
        "description": "Persian has six bold whiskers that give it a look of toughness. The whiskers sense air movements to determine what is in the Pokémon's surrounding vicinity. It becomes docile if grabbed by the whiskers.",
        "height": "3' 03\"",
        "weight": "70.5 lbs",
        "type": ["normal"]
    },
    {
        "pokedexNumber": "#054",
        "name": "Psyduck",
        "description": "Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
        "height": "2' 07\"",
        "weight": "43.2 lbs",
        "type": ["water"]
    },
    {
        "pokedexNumber": "#055",
        "name": "Golduck",
        "description": "The webbed flippers on its forelegs and hind legs and the streamlined body of Golduck give it frightening speed. This Pokémon is definitely much faster than even the most athletic swimmer.",
        "height": "5' 07\"",
        "weight": "168.9 lbs",
        "type": ["water"]
    },
    {
        "pokedexNumber": "#056",
        "name": "Mankey",
        "description": "When Mankey starts shaking and its nasal breathing turns rough, it's a sure sign that it is becoming angry. However, because it goes into a towering rage almost instantly, it is impossible for anyone to flee its wrath.",
        "height": "1' 08\"",
        "weight": "61.7 lbs",
        "type": ["fighting"]
    },
    {
        "pokedexNumber": "#057",
        "name": "Primeape",
        "description": "When Primeape becomes furious, its blood circulation is boosted. In turn, its muscles are made even stronger. However, it also becomes much less intelligent at the same time.",
        "height": "3' 03\"",
        "weight": "70.5 lbs",
        "type": ["fighting"]
    },
    {
        "pokedexNumber": "#058",
        "name": "Growlithe",
        "description": "Growlithe has a superb sense of smell. Once it smells anything, this Pokémon won't forget the scent, no matter what. It uses its advanced olfactory sense to determine the emotions of other living things.",
        "height": "2' 04\"",
        "weight": "41.9 lbs",
        "type": ["fire"]
    },
    {
        "pokedexNumber": "#059",
        "name": "Arcanine",
        "description": "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
        "height": "6' 03\"",
        "weight": "341.7 lbs",
        "type": ["fire"]
    },
    {
        "pokedexNumber": "#060",
        "name": "Poliwag",
        "description": "Poliwag has a very thin skin. It is possible to see the Pokémon's spiral innards right through the skin. Despite its thinness, however, the skin is also very flexible. Even sharp fangs bounce right off it.",
        "height": "2' 00\"",
        "weight": "27.3 lbs",
        "type": ["water"]
    },
    {
        "pokedexNumber": "#061",
        "name": "Poliwhirl",
        "description": "The surface of Poliwhirl's body is always wet and slick with a slimy fluid. Because of this slippery covering, it can easily slip and slide out of the clutches of any enemy in battle.",
        "height": "3' 03\"",
        "weight": "44.1 lbs",
        "type": ["water"]
    },
    {
        "pokedexNumber": "#062",
        "name": "Poliwrath",
        "description": "Poliwrath's highly developed, brawny muscles never grow fatigued, however much it exercises. It is so tirelessly strong, this Pokémon can swim back and forth across the ocean without effort.",
        "height": "4' 03\"",
        "weight": "119.0 lbs",
        "type": ["water", "fighting"]
    },
    {
        "pokedexNumber": "#063",
        "name": "Abra",
        "description": "Abra sleeps for eighteen hours a day. However, it can sense the presence of foes even while it is sleeping. In such a situation, this Pokémon immediately teleports to safety.",
        "height": "2' 11\"",
        "weight": "43.0 lbs",
        "type": ["psychic"]
    },
    {
        "pokedexNumber": "#064",
        "name": "Kadabra",
        "description": "Kadabra emits a peculiar alpha wave if it develops a headache. Only those people with a particularly strong psyche can hope to become a Trainer of this Pokémon.",
        "height": "4' 03\"",
        "weight": "124.6 lbs",
        "type": ["psychic"]
    },
    {
        "pokedexNumber": "#065",
        "name": "Alakazam",
        "description": "Alakazam's brain continually grows, making its head far too heavy to support with its neck. This Pokémon holds its head up using its psychokinetic power instead.",
        "height": "4' 11\"",
        "weight": "105.8 lbs",
        "type": ["psychic"]
    }
]

const types = [
    {
        "name": "grass",
        "weakness": ["bug", "fire", "flying", "poison"]
    },
    {
        "name": "fire",
        "weakness": ["ground", "rock", "water"]
    },
    {
        "name": "water",
        "weakness": ["electric", "grass"]
    },
    {
        "name": "poison",
        "weakness": ["bug", "ground", "psychic"]
    },
    {
        "name": "flying",
        "weakness": ["electric", "ice", "rock"]
    },
    {
        "name": "normal",
        "weakness": ["fighting"]
    },
    {
        "name": "bug",
        "weakness": ["flying", "fire", "rock"]
    },
    {
        "name": "eletric",
        "weakness": ["ground"]
    },
    {
        "name": "fighting",
        "weakness": ["flying", "psychic"]
    },
    {
        "name": "psychic",
        "weakness": ["bug"]
    },
    {
        "name": "ground",
        "weakness": ["ice", "water", "ghost"]
    }
]

module.exports = { pokemon, types }