const hakubaData = [
  {
    date: '30 Dec',
    location: 'Singapore',
    plan:
      '05:35–10:45 PER→SIN; 11:30 Hotel check-in; 13:00 Hawker lunch; 16:00 Pool/rest; 19:00 Easy dinner; 21:30 Sleep',
    food: 170,
    focus: null,
    hint:
      'Tripadvisor/Reddit: confirm early check-in; set up Grab/Pay; get SIM/eSIM or pocket Wi-Fi.'
  },
  {
    date: '31 Dec',
    location: 'Singapore',
    plan:
      '09:00 Wake; 09:30 Brunch; 12:30 Short outing; 16:00 Rest; 18:30 Early NYE dinner; 21:30 Sleep (no late night)',
    food: 170,
    focus: null,
    hint:
      'Keep NYE mellow per family posts; avoid big crowds with kids; hydrate in SG heat.'
  },
  {
    date: '1 Jan',
    location: 'Singapore',
    plan:
      '09:30 New Year wake; 10:00 Breakfast; 12:00 Light walk; 14:00 Rest; 18:30 Dinner; 21:30 Sleep',
    food: 170,
    focus: null,
    hint: 'Rest and pack; forum tip: early transfer to airport reduces stress for dawn flights.'
  },
  {
    date: '2 Jan',
    location: 'Tokyo',
    plan:
      '03:30 Wake; 04:00 Airport transfer; 05:25–13:10 SIN→TYO; 15:00 Tokyo hotel check-in; 17:00 Short stroll/snacks; 19:00 Ramen dinner; 21:00 Sleep',
    food: 200,
    focus: null,
    hint:
      'Reddit: Suica/PASMO on phone; withdraw some yen at 7-Eleven; nap ASAP; ramen near hotel.'
  },
  {
    date: '3 Jan',
    location: 'Tokyo',
    plan:
      '09:00 Wake; 09:30 Breakfast; 11:00 Short Shinjuku/nearby walk; 13:00 Lunch; 15:00 Hotel rest (nap/quiet time); 18:30 Simple dinner; 21:00 Sleep',
    food: 200,
    focus: null,
    hint: 'Book shinkansen seats (Tokyo→Nagano) per JapanGuide; light stroll only.'
  },
  {
    date: '4 Jan',
    location: 'Tokyo→Hakuba',
    plan:
      '08:30 Breakfast; 10:00 Tokyo Station (buy ekiben); 11:00–12:30 Shinkansen Tokyo→Nagano; 13:00–14:00 Bus Nagano→Hakuba; 15:00–16:00 Check-in & rentals; 18:30 Onsen; 19:30 Dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint:
      'SnowJapan/Tripadvisor: reserve Nagano→Hakuba bus; carry cash for lockers; arrive Tokyo Station early for ekiben.'
  },
  {
    date: '5 Jan',
    location: 'Hakuba',
    plan:
      '07:30 Breakfast; 08:30 Shuttle to lifts; 09:00–12:00 Ski + Day 1 lessons (beginners) / reds (interm); 12:00–13:00 Lunch; 13:00–15:00 Easy laps; 16:30 Onsen; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Sakka/Paradise/Iimori; Interm: Panorama/Riesen, 47/Goryu reds',
    hint:
      'Book Day 1 lessons (Evergreen/ESS) per Snowheads; rentals (Rhythm/Spicy) day before if possible.'
  },
  {
    date: '6 Jan',
    location: 'Hakuba',
    plan:
      '07:30 Breakfast; 08:30 Lifts; 09:00–12:00 Ski familiar greens/reds; 12:00–13:00 Lunch; 13:00–15:00 Optional laps or café/onsen; 16:30 Onsen; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Sakka/Paradise/Iimori; Interm: Panorama/Riesen, 47/Goryu reds',
    hint: 'Stick to familiar runs; adjust gear if needed; check wind/holds (SnowJapan tips).'
  },
  {
    date: '7 Jan',
    location: 'Hakuba',
    plan:
      '08:30 Wake; 09:00 Breakfast; 10:30 Village walk/sledding; 13:00 Lunch; 15:00 Onsen + room rest; 18:30 Early dinner; 21:00 Sleep (full rest day)',
    food: 200,
    focus: null,
    hint:
      'True rest day; onsen etiquette (wash first, no swimwear) per forum advice; laundry if needed.'
  },
  {
    date: '8 Jan',
    location: 'Hakuba',
    plan:
      '07:30 Breakfast; 08:30 Transfer to Tsugaike; 09:00–12:00 Ski huge greens (family); 12:00–13:00 Lunch; 13:00–15:00 Short afternoon ski; 16:30 Onsen; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Tsugaike greens; Interm: Han-no-ki/Champion',
    hint:
      'Tsugaike: big greens for kids; bring cash for lockers/food; regroup often per family trip reports.'
  },
  {
    date: '9 Jan',
    location: 'Hakuba',
    plan:
      '07:30 Breakfast; 08:30 To Iwatake; 09:00–12:00 View runs (Sunny Valley + reds); 12:00–13:00 Lunch; 13:00–15:00 Favourite laps; 16:30 Onsen; 19:00 Farewell Hakuba dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Sunny Valley; Interm: View A/B, South',
    hint: 'Iwatake: summit views; watch last lifts; cafés at top (forum recs).'
  },
  {
    date: '10 Jan',
    location: 'Hakuba',
    plan:
      '08:00 Wake; 08:30 Breakfast; 10:00 Final Hakuba stroll or short ski if energy; 13:00 Lunch; 15:00 Onsen/rest; 19:00 Light dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Sakka/Paradise/Iimori; Interm: Panorama/Riesen, 47/Goryu reds',
    hint:
      'Return rentals if done; confirm Snow Monkey tour details and luggage plan (Yamato) per Reddit.'
  },
  {
    date: '11 Jan',
    location: 'Hakuba→Tokyo',
    plan:
      '07:00 Breakfast; 08:00 Depart Hakuba; 10:30 Jigokudani Snow Monkeys; 13:00 Lunch en route; Afternoon train/bus to Tokyo; 18:30 Tokyo hotel check-in; 19:30 Light dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint:
      'Monkeys: grippy shoes, towel, hand warmers (Tripadvisor); lockers at trailhead; drop bags at Tokyo hotel.'
  },
  {
    date: '12 Jan',
    location: 'Tokyo',
    plan:
      '09:30 Wake; 10:00 Breakfast; 11:00 Asakusa & Senso-ji; 13:00 Tsukiji snacks/sushi; 16:00 River/Skytree view; 19:30 Dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint:
      'Asakusa/Tsukiji: small shops often cash; IC cards handy; avoid peak tour times.'
  },
  {
    date: '13 Jan',
    location: 'Tokyo',
    plan:
      '09:30 Breakfast; 11:00 Shibuya Crossing + Shibuya Sky; 13:30 Harajuku crepes; 15:00 Omotesando/arcades; 18:30 Dinner; 20:30 Pack; 22:00 Sleep',
    food: 200,
    focus: null,
    hint:
      'Shibuya Sky: prebook slot (common forum advice); split briefly for shopping if needed.'
  },
  {
    date: '14 Jan',
    location: 'Tokyo',
    plan:
      '10:00 Late wake; 10:30 Brunch; 12:30 Optional Kamakura/Yokohama or café day; 16:00 Return/rest; 19:30 Dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint:
      'Pick Kamakura/Yokohama OR full rest; avoid overstacking with kids per family forums.'
  },
  {
    date: '15 Jan',
    location: 'Tokyo',
    plan:
      '09:30 Breakfast; 11:00 Souvenir/shopping time; 14:00 Rest in hotel; 18:30 Final Tokyo dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Souvenirs; consider Yamato luggage ship if heavy; early night.'
  },
  {
    date: '16 Jan',
    location: 'Tokyo',
    plan:
      '09:00 Breakfast; 10:30 Short café/park stroll; 13:00 Light lunch; 15:00 Final packing; 17:05–23:45 TYO→SIN; 01:00 Hotel check-in Singapore; 01:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Airport rail timing; liquids/power bank rules; eat before flight (Reddit common tip).'
  },
  {
    date: '17 Jan',
    location: 'Tokyo→Singapore',
    plan:
      '09:30 Wake; 10:00 Brunch; 13:00 Pool/rest; 16:00 Nap/quiet time; 19:00 Chilli crab dinner; 21:30 Sleep',
    food: 170,
    focus: null,
    hint: 'Book chilli crab table; keep day light; hydrate (SG heat).'
  },
  {
    date: '18 Jan',
    location: 'Singapore',
    plan:
      '09:00 Breakfast; 11:30 Light sightseeing/mall; 14:00 Rest in AC; 17:00 Pool; 20:00 Dinner; 21:30 Sleep',
    food: 170,
    focus: null,
    hint: 'Gardens by the Bay e-tickets; stay in AC mid-day.'
  },
  {
    date: '19 Jan',
    location: 'Singapore',
    plan:
      '08:30 Breakfast; 10:00 Souvenir shopping; 13:00 Lunch; 15:00 Pool/nap; 20:00 Early night; 21:30 Sleep',
    food: 170,
    focus: null,
    hint: 'Final pack; pool/nap; early dinner before travel day.'
  },
  {
    date: '20 Jan',
    location: 'Perth',
    plan:
      '08:00 Breakfast; 09:00 Check-out; 11:15–16:30 SIN→PER; 18:00 Light dinner at home; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Arrive airport 2–3h early; meds/snacks in carry-on; keep kids comfy.'
  }
];

const januaryPlan = [
  {
    date: '8 Jan',
    location: 'Perth → Tokyo (via Singapore)',
    plan:
      '04:30 Wake; 05:35–10:45 PER→SIN; 12:30–20:55 SIN→HND/NRT; 21:30 Hotel check-in; 22:00 Light dinner; 23:00 Sleep',
    food: 200,
    focus: null,
    hint: 'Keep meds/snacks in carry-on; load Suica/PASMO on arrival.'
  },
  {
    date: '9 Jan',
    location: 'Tokyo (Shinjuku base)',
    plan:
      '08:30 Wake; 09:00 Breakfast; 11:00 Shinjuku Gyoen walk; 13:00 Ramen; 15:00 Rest at hotel; 18:30 Omoide/depachika dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Set up Suica on phones; grab JR tickets Tokyo→Nagano for Hakuba.'
  },
  {
    date: '10 Jan',
    location: 'Tokyo (prep + light sightseeing)',
    plan:
      '08:30 Breakfast; 10:00 Asakusa/Senso-ji; 12:30 Tsukiji street snacks; 15:00 TeamLab booking/pack for snow; 18:30 Early dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Buy Nagano→Hakuba bus seats; keep luggage ready for early train.'
  },
  {
    date: '11 Jan',
    location: 'Tokyo → Hakuba',
    plan:
      '07:30 Breakfast; 09:30 Tokyo Station (ekiben); 10:30–11:55 Shinkansen to Nagano; 12:15–13:30 Bus to Hakuba; 14:00 Check-in; 15:00 Rentals; 18:30 Onsen; 20:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Arrive early for lockers; Rhythm/Spicy rentals; confirm lesson times.'
  },
  {
    date: '12 Jan',
    location: 'Hakuba (Ski day 1)',
    plan:
      '07:15 Breakfast; 08:15 Shuttle to lifts; 09:00–12:00 Lessons + greens; 12:00–13:00 Lunch; 13:00–15:00 Easy laps; 16:30 Onsen; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Sakka/Iimori; Interm: Panorama/47/Goryu reds',
    hint: 'Book lessons; stay on mellow runs to warm up.'
  },
  {
    date: '13 Jan',
    location: 'Hakuba (Ski day 2)',
    plan:
      '07:15 Breakfast; 08:15 Lifts; 09:00–12:00 Ski; 12:00–13:00 Lunch; 13:00–15:00 Technique laps; 16:30 Onsen; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Greens; Interm: Reds/rollers',
    hint: 'Swap/adjust boots early if needed; watch wind holds.'
  },
  {
    date: '14 Jan',
    location: 'Hakuba (Rest + village)',
    plan:
      '08:30 Wake; 09:00 Breakfast; 10:30 Village stroll/sledding; 12:30 Lunch; 14:30 Laundry/rest; 17:00 Onsen; 19:00 Izakaya dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'True rest day; onsen etiquette (wash first, no swimwear).'
  },
  {
    date: '15 Jan',
    location: 'Hakuba (Ski day 3 · Tsugaike)',
    plan:
      '07:15 Breakfast; 08:15 Transfer to Tsugaike; 09:00–12:00 Huge greens/family zone; 12:00–13:00 Lunch; 13:00–15:00 Afternoon laps; 16:30 Onsen; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Tsugaike greens; Interm: Han-no-ki/Champion',
    hint: 'Carry cash for lockers/food; set meet-up points.'
  },
  {
    date: '16 Jan',
    location: 'Hakuba (Ski day 4 · Iwatake)',
    plan:
      '07:30 Breakfast; 08:30 To Iwatake; 09:00–12:00 View runs/Sunny Valley; 12:00–13:00 Lunch at summit cafés; 13:00–15:00 Favourite laps; 16:30 Onsen; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Sunny Valley; Interm: View A/B + South',
    hint: 'Check lift closures; enjoy summit views/photos.'
  },
  {
    date: '17 Jan',
    location: 'Hakuba (Rest/Snow Monkeys)',
    plan:
      '08:30 Wake; 09:00 Breakfast; 10:30 Jigokudani Snow Monkeys or local walk; 13:00 Lunch; 15:00 Onsen/nap; 19:00 Dinner; 21:00 Sleep',
    food: 200,
    focus: null,
    hint: 'Snow boots/microspikes; lockers at trailhead; bring towel.'
  },
  {
    date: '18 Jan',
    location: 'Hakuba (Ski day 5 wrap)',
    plan:
      '07:30 Breakfast; 08:30 Lifts; 09:00–12:00 Favourite terrain; 12:00–13:00 Lunch; 13:00–15:00 Short laps/photo runs; 16:30 Return rentals; 19:00 Farewell dinner; 21:30 Sleep',
    food: 200,
    focus: 'Beg: Greens/Blues; Interm: Goryu/47 reds',
    hint: 'Return rentals tonight to ease travel day.'
  },
  {
    date: '19 Jan',
    location: 'Hakuba → Tokyo',
    plan:
      '07:30 Breakfast; 08:30 Depart Hakuba; 10:30 Bus/train to Nagano; 11:45–13:15 Shinkansen to Tokyo; 14:30 Hotel check-in; 16:00 Rest; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Ship bulky bags if needed; grab ekiben for train.'
  },
  {
    date: '20 Jan',
    location: 'Tokyo (Asakusa + Skytree)',
    plan:
      '09:00 Breakfast; 10:30 Asakusa/Senso-ji; 12:30 Tsukiji snacks; 15:00 Sumida/Skytree views; 19:00 Dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Cash handy for street food; avoid peak tour groups.'
  },
  {
    date: '21 Jan',
    location: 'Tokyo (Shibuya/Harajuku)',
    plan:
      '09:00 Breakfast; 11:00 Shibuya Crossing + Sky; 13:00 Harajuku crepes; 15:00 Meiji Jingu/Omotesando; 18:30 Dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Prebook Shibuya Sky; split briefly for shopping if needed.'
  },
  {
    date: '22 Jan',
    location: 'Tokyo (Odaiba/teamLab)',
    plan:
      '09:00 Breakfast; 11:00 Odaiba promenade; 13:00 teamLab Planets slot; 15:00 Mall/arcade break; 18:30 Dinner; 21:30 Pack',
    food: 200,
    focus: null,
    hint: 'Secure teamLab tickets; pack snow gear into checked bags.'
  },
  {
    date: '23 Jan',
    location: 'Tokyo (flex day)',
    plan:
      '09:00 Brunch; 11:30 Day trip to Yokohama/Kamakura or Ueno museums; 16:30 Return + rest; 19:30 Final Tokyo dinner; 22:00 Sleep',
    food: 200,
    focus: null,
    hint: 'Choose one big outing; keep buffer for next-day flight.'
  },
  {
    date: '24 Jan',
    location: 'Tokyo → Singapore',
    plan:
      '07:30 Wake; 08:00 Breakfast; 10:30 Checkout + airport train; 13:00 Airport lunch; 17:05–23:45 TYO→SIN; 00:30 Settle with family/friends; 01:00 Sleep',
    food: 170,
    focus: null,
    hint: 'Eat before boarding; confirm airport rail timing; passports/immigration cards ready.'
  },
  {
    date: '25 Jan',
    location: 'Singapore (decompress)',
    plan:
      '09:30 Wake; 10:00 Brunch; 12:30 Pool/rest; 16:00 Nap; 19:00 Hawker dinner; 22:00 Sleep',
    food: 170,
    focus: null,
    hint: 'No hotel needed—sync with host; hydrate in heat.'
  },
  {
    date: '26 Jan',
    location: 'Singapore (Gardens/Marina)',
    plan:
      '09:00 Breakfast; 11:00 Gardens by the Bay (prebook); 14:00 AC break; 17:00 Marina Bay stroll; 20:00 Dinner; 22:00 Sleep',
    food: 170,
    focus: null,
    hint: 'Book Gardens timed entry; wear light clothes.'
  },
  {
    date: '27 Jan',
    location: 'Singapore (Sentosa option)',
    plan:
      '09:00 Breakfast; 10:30 Sentosa (SEA Aquarium/Adventure Cove) or mall; 15:00 Rest; 19:00 Dinner with friends; 22:30 Sleep',
    food: 170,
    focus: null,
    hint: 'Prebook Sentosa tickets; sunscreen + swimsuits for kids.'
  },
  {
    date: '28 Jan',
    location: 'Singapore (food crawl)',
    plan:
      '09:00 Breakfast; 11:00 Chinatown/Little India food crawl; 15:00 Rest/AC; 19:30 Night market desserts; 22:30 Sleep',
    food: 170,
    focus: null,
    hint: 'Use Grab/metro; pace spice for kids.'
  },
  {
    date: '29 Jan',
    location: 'Singapore (pack + chill)',
    plan:
      '09:30 Brunch; 12:00 Souvenir stops; 14:00 Pack; 17:00 Pool; 20:00 Early dinner; 22:00 Sleep',
    food: 170,
    focus: null,
    hint: 'Check passports/visas; weigh bags for flight.'
  },
  {
    date: '30 Jan',
    location: 'Singapore → Perth',
    plan:
      '07:30 Wake; 08:00 Breakfast; 09:30 Airport transfer; 11:15–16:30 SIN→PER; 18:30 Home dinner; 21:30 Sleep',
    food: 200,
    focus: null,
    hint: 'Arrive 2–3h early; keep meds/chargers handy.'
  }
];

const planCosts = [
  {
    plan: 'Hakuba',
    flights: '$8k–$10k',
    lodging: '$4.5k–$5.7k',
    lifts: '$1.8k–$2.3k',
    rentals: '$1.0k–$1.5k',
    transport: '$1.5k–$1.9k',
    food: '$2.4k–$3.6k',
    activities: '$600–$1.3k',
    notes: 'No car needed; Snow Monkeys optional'
  }
];

const foodBudget = [
  {
    location: 'Japan (Tokyo/Hakuba/Furano/Sapporo)',
    lean: '$120–$150',
    mid: '$180–$230',
    splurge: '$300–$400+',
    notes: 'Lean = combini/casual; Mid = ramen/izakaya + nicer dinner; Splurge = sushi/steak/omakase'
  },
  {
    location: 'Singapore',
    lean: '$100–$130',
    mid: '$150–$200',
    splurge: '$250–$320+',
    notes: 'Lean = hawker; Mid = hawker + casual restaurant; Splurge = chilli crab/seafood'
  }
];

const skillSplit = [
  {
    group: 'Beginners (2)',
    plan:
      'Day 1 lesson + greens (Tsugaike/Iimori/Sakka). Keep to greens/blues; add half-day lesson if needed.'
  },
  {
    group: 'Intermediates (3)',
    plan: 'Mix reds at Happo/47/Goryu/Iwatake; one guided/lesson day for technique or off-piste intro.'
  },
  {
    group: 'Shared days',
    plan:
      'Pick resorts with easy + intermediate overlap (Tsugaike, Iwatake, Goryu/47). Finish together on wide lower runs.'
  },
  {
    group: 'Lessons',
    plan:
      'Book Day 1 group/semi-private; optional Day 3 tune-up. Kids-friendly instructors available at Hakuba.'
  }
];

const galleryMap = {
  Singapore: ['singapore.jpg', 'ramen.jpg'],
  Tokyo: ['tokyo.jpg', 'sushi.jpg'],
  'Tokyo→Hakuba': ['tokyo.jpg', 'hakuba.jpg'],
  Hakuba: ['hakuba.jpg', 'snowmonkey.jpg'],
  'Hakuba→Tokyo': ['hakuba.jpg', 'otaru.jpg'],
  'Tokyo→Singapore': ['tokyo.jpg', 'singapore.jpg'],
  Perth: ['ramen.jpg', 'singapore.jpg']
};

const energyMap = {
  '8 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '9 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '10 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Low', '7yo': 'Low' },
  '11 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Low' },
  '12 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '13 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '14 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Low', '7yo': 'Low' },
  '15 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '16 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '17 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Low', '7yo': 'Low' },
  '18 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '19 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '20 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '21 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '22 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '23 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '24 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '25 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '26 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '27 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '28 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '29 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '30 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' }
};

const routePoints = [
  { lat: -31.95, lng: 115.86, label: 'Perth' },
  { lat: 1.35, lng: 103.82, label: 'Singapore' },
  { lat: 35.68, lng: 139.76, label: 'Tokyo' },
  { lat: 36.69, lng: 137.83, label: 'Hakuba' }
];

const routeArcs = [
  { startLat: -31.95, startLng: 115.86, endLat: 1.35, endLng: 103.82, label: 'Perth → Singapore' },
  { startLat: 1.35, startLng: 103.82, endLat: 35.68, endLng: 139.76, label: 'Singapore → Tokyo' },
  { startLat: 35.68, startLng: 139.76, endLat: 36.69, endLng: 137.83, label: 'Tokyo → Hakuba' },
  { startLat: 36.69, startLng: 137.83, endLat: 35.68, endLng: 139.76, label: 'Hakuba → Tokyo' },
  { startLat: 35.68, startLng: 139.76, endLat: 1.35, endLng: 103.82, label: 'Tokyo → Singapore' },
  { startLat: 1.35, startLng: 103.82, endLat: -31.95, endLng: 115.86, label: 'Singapore → Perth' }
];

const actions = [
  {
    title: 'Flights PER→SIN→HND/NRT→SIN→PER',
    detail: 'Multi-city search for 8 Jan outbound and 30 Jan return; pick seats together and align the SIN transit.',
    link: 'https://www.skyscanner.com/transport/flights'
  },
  {
    title: 'Tokyo hotel (Shinjuku/Ginza)',
    detail: 'Family rooms/quad near JR or metro for easy ramen runs and Shinkansen access.',
    link: 'https://www.booking.com/region/jp/tokyo.en.html'
  },
  {
    title: 'Hakuba stay near lifts',
    detail: 'Wadano/Happo or Goryu/47 for walk-to-lifts and shuttle pickups with breakfast.',
    link: 'https://www.booking.com/region/jp/hakuba.html'
  },
  {
    title: 'Hakuba rentals',
    detail: 'Reserve skis/boards at Rhythm or Spicy; book fittings the afternoon you arrive.',
    link: 'https://www.rhythmjapan.com/hakuba/'
  },
  {
    title: 'Hakuba lessons (EN instructors)',
    detail: 'Evergreen or ESS for Day 1 + optional tune-up; ask for kid-friendly instructors.',
    link: 'https://www.evergreen-hakuba.com/'
  },
  {
    title: 'Onsen evenings (Hakuba + Tokyo)',
    detail: 'Book family-friendly onsen: Wadano/Obinata in Hakuba and Oedo Onsen/thermae in Tokyo.',
    link: 'https://www.japan-guide.com/e/e2293.html'
  },
  {
    title: 'Food + ramen holds',
    detail: 'Grab ramen/sushi shortlists (TimeOut/Tabelog) and reserve one special Tokyo dinner + Hakuba izakaya.',
    link: 'https://tabelog.com/en/tokyo/'
  },
  {
    title: 'Snow Monkey day',
    detail: 'Reserve Jigokudani lockers/shuttle or join a guided half-day from Nagano/Hakuba.',
    link: 'https://www.japan-guide.com/e/e6028.html'
  },
  {
    title: 'Luggage forwarding + JR tickets',
    detail: 'Ship ski bags via Yamato and prebook Tokyo→Nagano bus/train seats at Tokyo Station.',
    link: 'https://www.kuronekoyamato.co.jp/ytc/en/send/services/airport/'
  }
];

const slopeMaps = [
  {
    title: 'Hakuba Happo-one trail map',
    area: 'Hakuba',
    link: 'https://www.happo-one.jp/wp/wp-content/uploads/2022/10/happo_trailmap_en.pdf',
    image: 'hakuba.jpg'
  },
  {
    title: 'Hakuba 47 / Goryu trail map',
    area: 'Hakuba',
    link: 'https://www.hakuba47.co.jp/wp/wp-content/themes/hakuba47/pdf/2024trailmap_en.pdf',
    image: 'hakuba.jpg'
  },
  {
    title: 'Tsugaike Kogen trail map',
    area: 'Hakuba / Otari',
    link: 'https://www.tsugaike.gr.jp/wp/wp-content/uploads/2023/12/map_en.pdf',
    image: 'hakuba.jpg'
  },
  {
    title: 'Iwatake trail map',
    area: 'Hakuba',
    link: 'https://www.nsd-hakuba.jp/iwatake/wp-content/uploads/sites/11/2022/12/iwatake_trailmap_en.pdf',
    image: 'hakuba.jpg'
  }
];

const flightOptions = [
  {
    leg: 'PER → SIN',
    dates: '8 Jan',
    carrier: 'Singapore Airlines SQ214 (example)',
    times: 'Dep 05:35 · Arr 10:45',
    duration: '5h 10m',
    price: 'from ~AUD 820 (econ)',
    note: 'Morning arrival for same-day SIN→TYO connection'
  },
  {
    leg: 'SIN → TYO (NRT/HND)',
    dates: '8 Jan',
    carrier: 'SQ634/638 (example)',
    times: 'Dep 12:30–14:00 · Arr 20:30–22:00',
    duration: '7h–7h30m',
    price: 'from ~AUD 980 (econ)',
    note: 'Same-day connection to Tokyo; aim for HND if possible'
  },
  {
    leg: 'TYO → SIN',
    dates: '24 Jan',
    carrier: 'SQ633 (HND→SIN)',
    times: 'Dep 17:05 · Arr 23:45',
    duration: '7h 40m',
    price: 'from ~AUD 930 (econ)',
    note: 'Evening flight after Tokyo wrap-up; lands late night in SIN'
  },
  {
    leg: 'SIN → PER',
    dates: '30 Jan',
    carrier: 'SQ225',
    times: 'Dep 11:15 · Arr 16:30',
    duration: '5h 15m',
    price: 'from ~AUD 820 (econ)',
    note: 'Daytime return after Singapore stay; relaxed checkout'
  }
];

const travelLinks = [
  {
    title: 'Skyscanner multi-city search',
    detail:
      'PER→SIN→HND/NRT→SIN→PER (8–30 Jan) with same-day SIN transit outbound; filter for Qantas/SQ/Scoot and keep layovers tight.',
    link: 'https://www.skyscanner.com/transport/flights'
  },
  {
    title: 'Singapore Airlines picks',
    detail:
      'Use the SQ app to lock PER 05:35 → SIN + SIN→HND/NRT on 8 Jan, HND→SIN on 24 Jan, and SIN→PER on 30 Jan; check youth fares/extra legroom.',
    link: 'https://www.singaporeair.com/'
  },
  {
    title: 'Hakuba lodging + shuttle bundle',
    detail:
      'SnowJapan/booking portals list Happo/Wadano/Goryu condos with shuttle pickup, breakfast, and onsen options.',
    link: 'https://snowjapan.com/guide/hakuba'
  }
];

const tripSummary = {
  period: '8–30 Jan · Perth ↔ Tokyo/Hakuba ↔ Singapore (family stay)',
  travellers: '2 adults · 18yo · 14yo · 7yo',
  skiDays: 5,
  bufferDays: 6,
  focus: '16 days in Japan with jet-lag buffers and Hakuba rest days, then Singapore wind-down'
};


const newsFeeds = [
  {
    title: 'Japan travel advisories',
    detail: 'MOFA/official updates for inbound travelers and transport notices.',
    link: 'https://www.japan.travel/en/practical-coronavirus-information/'
  },
  {
    title: 'JR East service alerts',
    detail: 'Current rail service status for Tokyo/Nagano lines.',
    link: 'https://www.jreast.co.jp/e/customer_support/traffic_advisory.html'
  },
  {
    title: 'Hakuba local updates',
    detail: 'Snow/road conditions and village notices (Hakuba Valley official).',
    link: 'https://www.hakubavalley.com/en/'
  },
  {
    title: 'Hokkaido tourism info',
    detail: 'Weather/roads/events for Sapporo/Furano/Otaru area.',
    link: 'https://www.hokkaidolikers.com/en'
  }
];

const slopeCams = [
  {
    title: 'Happo-one live cam',
    detail: 'Upper slopes + village view',
    link: 'https://www.happo-one.jp/en/webcam/'
  },
  {
    title: 'Hakuba 47 / Goryu live cams',
    detail: 'Base and mid-mountain views',
    link: 'https://www.hakuba47.co.jp/winter/en/livecamera/'
  },
  {
    title: 'Tsugaike Kogen live cam',
    detail: 'Tsuga-no-mori / lower area view',
    link: 'https://www.tsugaike.gr.jp/english/live-camera/'
  },
  {
    title: 'Iwatake live cam',
    detail: 'Summit panorama cam',
    link: 'https://www.nsd-hakuba.jp/iwatake/smartphone/iwatake/livecamera/'
  }
];

const emergencyInfo = [
  {
    title: 'General emergency',
    detail: 'Police 110 · Ambulance/Fire 119 (works from any phone in Japan)',
    link: ''
  },
  {
    title: 'On-slope ski patrol',
    detail: 'Use patrol number on your lift ticket/map or ask any liftie/patrol hut to call; if unsure, dial 119 and state the resort name clearly.',
    link: ''
  },
  {
    title: 'Hakuba local help',
    detail: 'Hakuba Valley bases can patch you to patrol; nearest hospitals reached via 119 dispatch.',
    link: 'https://www.hakubavalley.com/en/'
  },
  {
    title: 'Consular support (Tokyo)',
    detail: 'Keep your embassy/consulate number handy for passport/legal issues; Tokyo missions list.',
    link: 'https://www.mofa.go.jp/about/emb_cons/mofaserv.html'
  }
];

const gearTips = [
  {
    title: 'Pocket Wi-Fi / eSIM',
    detail: 'Grab a JR-friendly eSIM or pocket Wi-Fi on arrival in SIN/TPY to keep Suica/PASMO working.',
    link: 'https://www.japan-wireless.com/'
  },
  {
    title: 'Onsen kit',
    detail: 'Light towel + hair tie + small bag; no swimwear. Perfect post-ski recovery.',
    link: 'https://www.japan-guide.com/e/e2292_how.html'
  },
  {
    title: 'Ski socks & hand warmers',
    detail: 'Thin merino socks + disposable warmers for the 7yo and 14yo to avoid cold toes.',
    link: 'https://www.montbell.jp/english/'
  },
  {
    title: 'Power/charging',
    detail: 'Type A/B plugs; bring a GaN charger + spare cables for flights and trains.',
    link: 'https://www.amazon.com.au/s?k=usb+c+gan+charger'
  },
  {
    title: 'Snow boots & traction',
    detail: 'Light snow boots plus optional microspikes for icy walkways in Hakuba.',
    link: 'https://www.snowjapan.com/japan-daily-snow-weather-reports'
  }
];

const stays = [
  {
    title: 'Hakuba Goryu (Escal Plaza)',
    area: 'Walk-to-lifts · rentals/lockers at base',
    detail: 'Condos/lodges 5–10 min to Escal Plaza; easiest for kids and Day 1 lessons.',
    link: 'https://www.booking.com/landmark/jp/hakuba-goryu1.en.html',
    image: 'hakuba.jpg'
  },
  {
    title: 'Hakuba Iimori side',
    area: 'Quieter greens · shuttle to Escal',
    detail: 'Great for beginners; mellow laps outside the door, quick hop to main Goryu base.',
    link: 'https://www.snowjapan.com/japan-ski-resorts/hakuba-goryu',
    image: 'hakuba.jpg'
  },
  {
    title: 'Happo/Wadano',
    area: 'Ski-in/out options · steeper terrain nearby',
    detail: 'More dining and ski schools; longer shuttle to Goryu/47 but lively village feel.',
    link: 'https://www.booking.com/landmark/jp/happo-one.en.html',
    image: 'hakuba.jpg'
  },
  {
    title: 'Echoland (Hakuba)',
    area: 'Food/nightlife hub · shuttle to lifts',
    detail: 'Best for dining variety; trade-off is morning bus to Goryu/47.',
    link: 'https://www.booking.com/district/jp/hakuba/echoland.en.html',
    image: 'hakuba.jpg'
  },
  {
    title: 'Tokyo Shinjuku/Shibuya',
    area: 'Easy rail to everywhere',
    detail: 'Pick a hotel near JR/Yamanote; fast access to restaurants and shinkansen booking.',
    link: 'https://www.booking.com/region/jp/tokyo.en.html',
    image: 'tokyo.jpg'
  },
  {
    title: 'Tokyo family-friendly',
    area: 'Two rooms or family quad',
    detail: 'Look for family rooms near Shinjuku/Ginza; easy airport train + food options.',
    link: 'https://www.booking.com/family/city/jp/tokyo.en.html',
    image: 'tokyo.jpg'
  }
];

window.TripData = {
  hakuba: hakubaData,
  januaryPlan,
  planCosts,
  foodBudget,
  skillSplit,
  galleryMap,
  energyMap,
  routePoints,
  routeArcs,
  actions,
  slopeMaps,
  slopeCams,
  newsFeeds,
  gearTips,
  emergencyInfo,
  stays,
  flightOptions,
  travelLinks,
  summary: tripSummary
};
