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

const furanoData = [
  {
    date: '27 Dec',
    location: 'Singapore',
    plan: 'Arrive PER→SIN (~5h); hawker dinner; overnight buffer',
    food: 170,
    focus: null
  },
  {
    date: '28 Dec',
    location: 'Singapore',
    plan: 'Buffer day; light sights; rest',
    food: 170,
    focus: null
  },
  {
    date: '29 Dec',
    location: 'Singapore',
    plan: 'Buffer day',
    food: 170,
    focus: null
  },
  {
    date: '30 Dec',
    location: 'Singapore',
    plan: 'Buffer day',
    food: 170,
    focus: null
  },
  {
    date: '31 Dec',
    location: 'Singapore',
    plan: 'Buffer day',
    food: 170,
    focus: null
  },
  {
    date: '1 Jan',
    location: 'Singapore',
    plan: 'Buffer day',
    food: 170,
    focus: null
  },
  {
    date: '2 Jan',
    location: 'Singapore',
    plan: 'Buffer day',
    food: 170,
    focus: null
  },
  {
    date: '3 Jan',
    location: 'Singapore',
    plan: 'Buffer day',
    food: 170,
    focus: null
  },
  {
    date: '4 Jan',
    location: 'Tokyo',
    plan: 'Fly SIN→TYO (~7h); overnight buffer',
    food: 200,
    focus: null
  },
  {
    date: '5 Jan',
    location: 'Sapporo',
    plan: 'Fly TYO→CTS (~1.5h); JR/bus to Sapporo (~1h); soup curry',
    food: 200,
    focus: null
  },
  {
    date: '6 Jan',
    location: 'Furano',
    plan: 'Bus/JR via Asahikawa (~2.5–3h); check-in; rentals',
    food: 200,
    focus: null
  },
  {
    date: '7 Jan',
    location: 'Furano',
    plan:
      'Ski day 1 (Beg: Kitanomine Family/Romance; Interm: Sailer/Spies/Downhill); Day 1 lessons',
    food: 200,
    focus: 'Beg: Kitanomine Family/Romance; Interm: Sailer/Spies, Downhill'
  },
  {
    date: '8 Jan',
    location: 'Furano',
    plan: 'Ski day 2; onsen evening',
    food: 200,
    focus: 'Beg: Kitanomine Family/Romance; Interm: Sailer/Spies, Downhill'
  },
  {
    date: '9 Jan',
    location: 'Furano',
    plan: 'Ski day 3; interm explore Furano Zone; kids greens',
    food: 200,
    focus: 'Beg: Kitanomine Family/Romance; Interm: Sailer/Spies, Downhill'
  },
  {
    date: '10 Jan',
    location: 'Furano',
    plan: 'Ski day 4; optional tune-up lesson',
    food: 200,
    focus: 'Beg: Kitanomine Family/Romance; Interm: Sailer/Spies, Downhill'
  },
  {
    date: '11 Jan',
    location: 'Furano',
    plan: 'Ski day 5; early night',
    food: 200,
    focus: 'Beg: Kitanomine Family/Romance; Interm: Sailer/Spies, Downhill'
  },
  {
    date: '12 Jan',
    location: 'Sapporo',
    plan: 'Biei Blue Pond + Asahiyama Zoo tour; back to Sapporo',
    food: 200,
    focus: null
  },
  {
    date: '13 Jan',
    location: 'Sapporo/Otaru',
    plan: 'Ramen Alley brunch; Otaru canal + sushi',
    food: 200,
    focus: null
  },
  {
    date: '14 Jan',
    location: 'Tokyo',
    plan: 'Fly CTS→TYO (~1.5h); buffer night',
    food: 200,
    focus: null
  },
  {
    date: '15 Jan',
    location: 'Tokyo',
    plan: 'Asakusa/Senso-ji; Tsukiji street bites',
    food: 200,
    focus: null
  },
  {
    date: '16 Jan',
    location: 'Tokyo→Singapore',
    plan: 'Fly TYO→SIN (~7h); light evening',
    food: 170,
    focus: null
  },
  {
    date: '17 Jan',
    location: 'Singapore',
    plan: 'Buffer; chilli crab option',
    food: 170,
    focus: null
  },
  {
    date: '18 Jan',
    location: 'Singapore',
    plan: 'Buffer; rest/light sightseeing',
    food: 170,
    focus: null
  },
  {
    date: '19 Jan',
    location: 'Singapore',
    plan: 'Buffer; packing',
    food: 170,
    focus: null
  },
  {
    date: '20 Jan',
    location: 'Perth',
    plan: 'Fly SIN→PER (~5h)',
    food: 200,
    focus: null
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
  },
  {
    plan: 'Furano/Sapporo',
    flights: '$8k–$10k',
    lodging: '$3.2k–$6.0k',
    lifts: '$1.8k–$2.4k',
    rentals: '$1.0k–$1.6k',
    transport: '$1.3k–$1.7k',
    food: '$2.4k–$3.6k',
    activities: '$600–$1.1k',
    notes: 'Keep CTS buffers; Biei/Zoo tour'
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
  },
  {
    group: 'Furano (Beginners/Intermediates)',
    plan:
      'Beg: Kitanomine greens (Family/Romance) + Day 1 lesson. Interm: Sailer/Spies, Furano Downhill, Premium Zone when open.'
  },
  {
    group: 'Shared days',
    plan:
      'Use wide Kitanomine groomers; finish together on lower runs. Add a Day 3 tune-up lesson if needed.'
  },
  {
    group: 'Lessons',
    plan:
      'Book Day 1 group/semi-private for beginners; intermediates optional technique session. Kid-friendly schools available at Furano.'
  }
];

const galleryMap = {
  Singapore: ['singapore.jpg', 'ramen.jpg'],
  Tokyo: ['tokyo.jpg', 'sushi.jpg'],
  'Tokyo→Hakuba': ['tokyo.jpg', 'hakuba.jpg'],
  Hakuba: ['hakuba.jpg', 'snowmonkey.jpg'],
  'Hakuba→Tokyo': ['hakuba.jpg', 'otaru.jpg'],
  'Tokyo→Singapore': ['tokyo.jpg', 'singapore.jpg'],
  Sapporo: ['sapporo.jpg', 'otaru.jpg'],
  Furano: ['furano.jpg', 'sapporo.jpg'],
  'Sapporo/Otaru': ['sapporo.jpg', 'otaru.jpg'],
  Perth: ['ramen.jpg', 'singapore.jpg']
};

const energyMap = {
  '27 Dec': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '28 Dec': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '29 Dec': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '30 Dec': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '31 Dec': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '1 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '2 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '3 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Low' },
  '4 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Low' },
  '5 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '6 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '7 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Low' },
  '8 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '9 Jan': { adults: 'High', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '10 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Low', '7yo': 'Low' },
  '11 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '12 Jan': { adults: 'Medium', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '13 Jan': { adults: 'Medium', '18yo': 'High', '14yo': 'Medium', '7yo': 'Medium' },
  '14 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Low', '7yo': 'Low' },
  '15 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '16 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' },
  '17 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '18 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '19 Jan': { adults: 'Medium', '18yo': 'Medium', '14yo': 'Medium', '7yo': 'Medium' },
  '20 Jan': { adults: 'Low', '18yo': 'Low', '14yo': 'Low', '7yo': 'Low' }
};

const routePoints = [
  { lat: -31.95, lng: 115.86, label: 'Perth' },
  { lat: 1.35, lng: 103.82, label: 'Singapore' },
  { lat: 35.68, lng: 139.76, label: 'Tokyo' },
  { lat: 36.69, lng: 137.83, label: 'Hakuba' },
  { lat: 43.07, lng: 141.35, label: 'Sapporo' },
  { lat: 43.34, lng: 142.37, label: 'Furano' },
  { lat: 43.20, lng: 140.99, label: 'Otaru' }
];

const routeArcs = [
  { startLat: -31.95, startLng: 115.86, endLat: 1.35, endLng: 103.82, label: 'Perth → Singapore' },
  { startLat: 1.35, startLng: 103.82, endLat: 35.68, endLng: 139.76, label: 'Singapore → Tokyo' },
  { startLat: 35.68, startLng: 139.76, endLat: 36.69, endLng: 137.83, label: 'Tokyo → Hakuba' },
  { startLat: 36.69, startLng: 137.83, endLat: 35.68, endLng: 139.76, label: 'Hakuba → Tokyo' },
  { startLat: 35.68, startLng: 139.76, endLat: 1.35, endLng: 103.82, label: 'Tokyo → Singapore' },
  { startLat: 1.35, startLng: 103.82, endLat: -31.95, endLng: 115.86, label: 'Singapore → Perth' },
  { startLat: 35.68, startLng: 139.76, endLat: 43.07, endLng: 141.35, label: 'Tokyo → Sapporo' },
  { startLat: 43.07, startLng: 141.35, endLat: 43.34, endLng: 142.37, label: 'Sapporo → Furano' },
  { startLat: 43.34, startLng: 142.37, endLat: 43.20, endLng: 140.99, label: 'Furano → Otaru' }
];

const actions = [
  {
    title: 'Family Flights',
    detail:
      'Use Skyscanner multi-city (PER→SIN→TYO→SIN→PER) and lock in the 30 Dec outbound / 20 Jan inbound window with morning buffer.',
    link: 'https://www.skyscanner.com/transport/flights'
  },
  {
    title: 'Hakuba Base',
    detail: 'Book around Happo-one or Wadano for ski-on access and easy shuttle pickups.',
    link: 'https://www.booking.com/region/jp/hakuba.html'
  },
  {
    title: 'Hakuba Rentals',
    detail: 'Reserve boots and boards at Rhythm or Spicy; ask for kid-friendly adjustments.',
    link: 'https://www.rhythm.co.jp/'
  },
  {
    title: 'Hakuba Lessons',
    detail: 'Evergreen or ESS offer English-speaking instructors for the 2 beginners and tune-up day.',
    link: 'https://www.evergreenhakuba.com/'
  },
  {
    title: 'Snow Monkey + Bus',
    detail: 'Jigokudani trailheads need lockers; grab bus reservations at Nagano Station.',
    link: 'https://www.japan-guide.com/e/e6033.html'
  },
  {
    title: 'Tokyo & teamLab',
    detail: 'Reserve teamLab Planets + Shibuya Sky early to avoid crowds and maintain jet-lag buffer.',
    link: 'https://www.teamlab.art/'
  },
  {
    title: 'Onsen Evenings',
    detail: 'Book a family-friendly onsen in Hakuba (e.g. Wadano Onsen) and Tokyo (Oedo Onsen).',
    link: 'https://www.japan-guide.com/e/e2293.html'
  },
  {
    title: 'Food & Ramen Picks',
    detail: 'Try ramen alley, sushi counters, and soup curry; keep a food budget of $180–$230 AUD/day in Japan.',
    link: 'https://www.timeout.com/tokyo/restaurants'
  },
  {
    title: 'Transport & Passes',
    detail: 'JR Pass + local passes cover Tokyo→Nagano→Hakuba; add Narita Express + Limousine Bus buffer.',
    link: 'https://www.japanrailpass.net/'
  }
];

const travelLinks = [
  {
    title: 'Skyscanner multi-city search',
    detail:
      'PER→SIN→TYO→SIN→PER (27 Dec – 20 Jan) with morning buffers; filter for Qantas, Scoot, or Singapore Airlines and compare transfer/layover durations.',
    link: 'https://www.skyscanner.com/transport/flights'
  },
  {
    title: 'Singapore Airlines PER→SIN + SIN→TYO',
    detail:
      'Use the SQ app to lock in the PER 05:35 departure and the overnight SIN→TYO flight; watch for youth fares and extra legroom seats for the 14yo.',
    link: 'https://www.singaporeair.com/'
  },
  {
    title: 'Hakuba lodging + shuttle bundle',
    detail:
      'SnowJapan’s booking portal lists south-side family condos that include shuttle pickup, onsen access, and easy rental dropoffs (Happo/Wadano).',
    link: 'https://snowjapan.com/guide/hakuba'
  },
  {
    title: 'Furano/Sapporo base',
    detail:
      'Check the Furano Resort official site for promotions on Kitanomine condos + Furano Zone lift bundles; include JR tickets via Hokkaido Resort pass.',
    link: 'https://www.furano.ne.jp/en/'
  }
];

const tripSummary = {
  period: '30 Dec → 20 Jan · Perth ↔ Singapore ↔ Tokyo/Hakuba',
  travellers: '2 adults · 18yo · 14yo · 7yo',
  skiDays: 5,
  bufferDays: 7,
  focus: 'Sleep buffer after flights, rest days around ski zone, jet-lag friendly pacing'
};

window.TripData = {
  hakuba: hakubaData,
  furano: furanoData,
  planCosts,
  foodBudget,
  skillSplit,
  galleryMap,
  energyMap,
  routePoints,
  routeArcs,
  actions,
  travelLinks,
  summary: tripSummary
};
