
import React from 'react';
import Title from '@/components/Title';
import Transitions from '@/components/Transition';
import './styles.scss';

const Bentley: React.FC = () => (
  <>
    <Transitions>
      <Title
        title="Bentley"
        subtitle="The Pinnacle of British Luxury"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Overall History</h3>
            <p>Founded in 1919 by W.O. Bentley in Cricklewood, London, Bentley Motors emerged as a beacon of luxury and performance. Initially focused on racing, Bentley’s early models, like the 1921 3 Litre, blended speed with opulence. The marque’s dominance at Le Mans in the 1920s, with five victories between 1924 and 1930, defined its legacy. After financial struggles, Rolls-Royce acquired Bentley in 1931, shifting its focus to refined grand tourers. Iconic models like the 1952 R-Type Continental and 1998 Arnage solidified its prestige. By 1999, Bentley had produced around 50,000 cars, celebrated at events like the <a href="https://allbritishmotorshow.com/" target="_blank" rel="noopener noreferrer">All British Motor Show</a>.</p>
            <p>Despite ownership changes, Bentley’s commitment to craftsmanship and power endured, making it a symbol of British motoring excellence, revered by enthusiasts and collectors.</p>

            <h3>Engineering Innovations and Technical Milestones</h3>
            <p>Bentley pioneered high-performance engineering with the 1921 3 Litre’s 4-cylinder engine, featuring four valves per cylinder and overhead camshafts, producing 70 bhp. The 1926 6½ Litre introduced a straight-six engine, delivering 147 bhp. The 1930 8 Litre, with its 7.9-liter engine, offered 220 bhp, rivaling Bugatti’s Royale. Post-Rolls-Royce, the 1952 R-Type Continental used a 4.6-liter six-cylinder engine and lightweight aluminum body, achieving 120 mph.</p>
            <p>The 1991 Turbo R’s 6.75-liter V8, with fuel injection and turbocharging, produced 320 bhp, setting a standard for luxury performance. Bentley’s use of monocoque construction in the 1965 T-Series improved rigidity. These innovations balanced speed and refinement, influencing modern luxury cars.</p>

            <h3>Great Racing Achievements and Drivers</h3>
            <p>Bentley’s racing glory peaked in the 1920s at Le Mans, where the “Bentley Boys”—wealthy racers like Woolf Barnato, Tim Birkin, and Glen Kidston—secured victories in 1924, 1927, 1928, 1929, and 1930. The 1929 Speed Six, driven by Barnato and Birkin, won at 83 mph, a record pace. John Duff and Frank Clement claimed Bentley’s first Le Mans win in 1924 with a 3 Litre. The 1928 4½ Litre, supercharged by Birkin, set a Brooklands lap record at 138 mph.</p>
            <p>These triumphs, driven by daring aristocrats, showcased Bentley’s durability and speed, cementing its motorsport legend status.</p>

            <h3>Racing Rivalries and Motorsport Legacy</h3>
            <p>Bentley’s Le Mans rivalries pitted it against Alfa Romeo, Bugatti, and Lorraine-Dietrich. The 1927–1930 victories saw Bentley’s Speed Six and 4½ Litre outpace Bugatti Type 35s and Alfa 6Cs, with Barnato’s duels against Rudolf Caracciola’s Mercedes SSK legendary. Post-1930, Bentley’s racing waned under Rolls-Royce, but its legacy inspired 1980s Turbo R rally entries.</p>
            <p>The marque’s motorsport heritage lives on in vintage racing, with 4½ Litres and Speed Sixes starring at Goodwood Revival. Bentley’s Le Mans dominance remains a benchmark for luxury performance, celebrated by enthusiasts.</p>

            <h3>Unique and Unusual Trivia and Adventures</h3>
            <p>In 1925, a Bentley 3 Litre was driven from London to Monte Carlo in 26 hours, beating the Blue Train express, a feat immortalized by Woolf Barnato. A 1928 4½ Litre was fitted with a boat hull for a promotional race across the English Channel, narrowly losing to a motorboat. During World War II, Bentley built Merlin aero engines for Spitfires. A 1930 8 Litre, once owned by a maharaja, was buried to hide it from invaders, later unearthed in 1960.</p>
            <p>These tales, blending audacity and luxury, captivate enthusiasts, highlighting Bentley’s adventurous spirit at vintage events.</p>

            <h3>Cultural Impact and Media Presence</h3>
            <p>Bentley’s opulent image graced 1920s society, featured in *The Great Gatsby* novel and later films. *Autocar* and *The Motor* lauded the Speed Six’s Le Mans wins, while 1950s ads showcased the R-Type Continental’s elegance. The 1995 Azure convertible appeared in *The Avengers* TV series. Books like *Bentley: The Story* by Andrew Frankel chronicled its legacy. The Bentley Boys’ playboy antics shaped the marque’s glamorous aura.</p>
            <p>Today, Bentleys star in concours and films, embodying timeless luxury at the <a href="https://allbritishmotorshow.com/" target="_blank" rel="noopener noreferrer">All British Motor Show</a>, evoking Britain’s golden age.</p>

            <h3>Famous Owners</h3>
            <p>Bentley attracted royalty and celebrities. King George VI owned a 1935 3½ Litre, while Queen Elizabeth II used a 1995 Continental R. Actor Clark Gable drove a 1952 R-Type, and musician Eric Clapton owned a 1990 Turbo R. Woolf Barnato, a Bentley Boy, kept a personal 8 Litre. Indian maharajas, like the Maharaja of Bikaner, commissioned bespoke 6½ Litres with ornate interiors.</p>
            <p>The Bentley Drivers Club preserves these stories, connecting owners who cherish the marque’s heritage of luxury and performance.</p>

            <h3>Automobile and Motorcycle Models</h3>
            <p>Bentley focused on automobiles, producing the 1921 3 Litre (3.0-liter four-cylinder), 1926 6½ Litre (6.6-liter six-cylinder), and 1928 4½ Litre (4.4-liter four-cylinder). The 1930 8 Litre (7.9-liter six-cylinder) was a flagship. Post-Rolls-Royce, the 1952 R-Type Continental (4.6-liter six-cylinder), 1965 T1 (6.2-liter V8), and 1991 Turbo R (6.75-liter V8) defined luxury. The 1998 Arnage used a BMW-sourced V8.</p>
            <p>Other models included the 1933 3½ Litre and 1955 S1, blending grandeur with performance. These cars epitomized Bentley’s elite status.</p>

            <h3>Restoration Challenges and Techniques</h3>
            <p><a href="/restoration" target="_blank" rel="noopener noreferrer">Restoration</a> of Bentleys is intricate due to bespoke craftsmanship. Pre-war 4½ Litres require rare crankshafts and Vanden Plas coachwork, often hand-fabricated. Post-war R-Types need Connolly leather and Wilton carpets, sourced via specialists. The 8 Litre’s massive engine demands precision machining. <a href="/restoration" target="_blank" rel="noopener noreferrer">Restoration</a> techniques include using original blueprints and laser-cutting for chassis repairs.</p>
            <p>The Bentley Drivers Club and RREC provide archives. <a href="/restoration" target="_blank" rel="noopener noreferrer">Restoration</a> costs are steep, but concours-quality Speed Sixes and Turbo Rs shine, rewarding dedication.</p>

            <h3>Global Influence and Export Success</h3>
            <p>Bentley’s export success targeted Europe, the U.S., and Commonwealth nations. The R-Type Continental was popular in the U.S., with 30% of 1950s production exported there. Australia and India embraced the 3½ Litre, often customized for colonial elites. The Turbo R competed with Mercedes in Europe. Bentley’s Le Mans fame boosted global prestige.</p>
            <p>The marque’s legacy endures at international concours, with restored 8 Litres and Arnages displayed at Pebble Beach, reflecting Bentley’s worldwide allure.</p>

            <h3>Status Among Collectors Today and Place in History</h3>
            <p>Bentley is a collector’s prize, with 4½ Litres and Speed Sixes fetching millions at auctions. The 8 Litre and R-Type Continental are coveted for rarity. The Bentley Drivers Club and RREC support <a href="/restoration" target="_blank" rel="noopener noreferrer">restoration</a>, offering chassis records. Bentley’s place in history is as a pioneer of luxury performance, dominating Le Mans and defining grand touring.</p>
            <p>Collectors showcase Bentleys at Villa d’Este and the <a href="https://allbritishmotorshow.com/" target="_blank" rel="noopener noreferrer">All British Motor Show</a>, honoring a marque synonymous with British elegance.</p>

            <h3>Standout Models That Made the Marque Great</h3>
            <p>The 1929 Speed Six secured Le Mans victories, blending power and durability. The 1928 4½ Litre, supercharged by Birkin, set speed records. The 1930 8 Litre rivaled the world’s finest. The 1952 R-Type Continental redefined grand touring with its sleek design.</p>
            <p>These models, marrying luxury and performance, cemented Bentley’s reputation as an automotive icon, revered by enthusiasts.</p>

            <h3>Conclusion</h3>
            <p>Bentley’s legacy is one of unrivaled luxury and racing triumph, from the Bentley Boys’ Le Mans victories to the R-Type Continental’s elegance. Its craftsmanship and power define British motoring excellence. Restoring these masterpieces preserves a storied heritage, celebrated in collector circles. Experience Bentley’s majestic legacy at the <a href="https://allbritishmotorshow.com/" target="_blank" rel="noopener noreferrer">All British Motor Show</a>, where its grandeur continues to captivate.</p>
          </div>
        </div>
      </div>
    </Transitions>
  </>
);

export default Bentley;
