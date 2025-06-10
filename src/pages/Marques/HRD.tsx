
import React from 'react';
import { Link } from 'react-router-dom';
import Title from '@/components/Title';
import Transitions from '@/components/Transition';
import './styles.scss';

const HRD: React.FC = () => (
  <>
    <Transitions>
      <Title
        title="HRD"
        subtitle="Built by a Rider for Performance"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Overall History</h3>
            <p>HRD Motors Ltd., founded in 1924 by Howard Raymond Davies in Wolverhampton, produced high-performance motorcycles until 1928. A former AJS racer and TT winner, Davies aimed to create reliable, quality bikes, using the slogan “Built by a Rider.” With E.J. Massey, HRD debuted at the 1924 Olympia Show, showcasing JAP-engined models. Despite racing success, including Davies’ 1925 Isle of Man TT Senior win, the undercapitalized company struggled financially. After moving to larger premises in Fryer Street, HRD entered voluntary liquidation in January 1928. Ernest Humphries of OK-Supreme bought the firm, selling the name and assets to Philip Vincent for £450 in May 1928, forming Vincent HRD, per <a href="https://www.cybermotorcycle.com/marques/hrd/hrd-motorcycles.htm" target="_blank" rel="noopener noreferrer">Cyber Motorcycle</a>.</p>
            <p>HRD’s brief but impactful run left a legacy of performance, cherished by vintage enthusiasts.</p>

            <h3>Engineering Innovations and Technical Milestones</h3>
            <p>HRD motorcycles featured JAP engines (350cc–600cc), Burman close-ratio gearboxes, and Webb or Druid forks, prioritizing quality components. The HD90 and Super 90 models introduced saddle tanks and twin-port engines, achieving speeds near 100 mph. The 1925 HD Super 90 included a Smith’s speedometer and Lucas lighting, rare for the era, per <a href="https://www.britishclassicmotorcycles.com/hrd-history" target="_blank" rel="noopener noreferrer">British Classic Motorcycles</a>. HRD’s focus on lightweight frames and robust handling set it apart.</p>
            <p>While not revolutionary, HRD’s meticulous assembly of premium parts delivered superior performance, influencing later marques like Vincent HRD.</p>

            <h3>Great Racing Achievements and Drivers</h3>
            <p>HRD’s racing pinnacle was the 1925 Isle of Man TT, where Howard Davies won the Senior race and placed second in the Junior on 500cc and 350cc models, respectively. In September 1925, Bert le Vack set a speed record of 104.41 mph at Brooklands. Freddie Dixon’s 1927 Junior TT win on an HRD averaged 67.19 mph. Riders like Harry Harris, Clarry Wood, and Kenneth Twemlow also competed, with Wood finishing fifth in the 1926 Senior TT, per <a href="https://www.motorsportmagazine.com/archive" target="_blank" rel="noopener noreferrer">Motorsport Magazine</a>.</p>
            <p>These achievements showcased HRD’s reliability and speed, boosting its reputation.</p>

            <h3>Racing Rivalries and Motorsport Legacy</h3>
            <p>HRD competed with Brough Superior, AJS, and Norton in the 1920s, targeting affluent riders with performance bikes. Its rivalry with Rex-Acme was notable, with Wal Handley’s 1925 Junior TT win over Davies’ HRD sparking fierce competition. HRD’s lightweight design challenged Norton’s heavier models in Senior races. Its TT successes influenced Vincent HRD’s racing focus, per <a href="https://www.greevesguru.com/history" target="_blank" rel="noopener noreferrer">Greeves Guru</a>.</p>
            <p>HRD’s legacy lies in proving small manufacturers could excel in motorsport, inspiring boutique marques.</p>

            <h3>Unique and Unusual Trivia and Adventures</h3>
            <p>Howard Davies, reported dead during World War I, survived as a POW, conceiving HRD’s concept in captivity. In 1925, an HRD was road-tested by *The Motor Cycle*, praised for climbing Porlock Hill without faltering, a feat for the era. A 1926 publicity stunt saw an HRD navigate Wolverhampton’s narrowest alley, proving its handling. The HD90’s gold-lined black finish earned it the nickname “Black Gold,” per <a href="https://www.britishclassicmotorcycles.com/hrd-history" target="_blank" rel="noopener noreferrer">British Classic Motorcycles</a>.</p>
            <p>These tales highlight HRD’s bold engineering and charisma.</p>

            <h3>Cultural Impact and Media Presence</h3>
            <p>HRD’s racing successes featured in *Motor Cycle* and *Motor Cycling*, with its 1925 TT win widely celebrated. The marque’s premium image appealed to mechanically minded enthusiasts, appearing in period advertisements as a rider’s dream. While not in films, HRD’s Brooklands record and TT triumphs were covered in newsreels, per <a href="https://www.cybermotorcycle.com/marques/hrd/hrd-motorcycles.htm" target="_blank" rel="noopener noreferrer">Cyber Motorcycle</a>.</p>
            <p>HRD’s niche appeal endures in vintage motorcycle magazines and rallies, reflecting its racing pedigree.</p>

            <h3>Famous Owners</h3>
            <p>Records of famous HRD owners are scarce, as the marque targeted affluent enthusiasts. Howard Davies and Freddie Dixon, both racers, were prominent figures. Some sources suggest wealthy British motorists, like local gentry, owned HRDs for their exclusivity, though unconfirmed. HRD’s high cost (66–83 guineas) limited ownership to dedicated riders.</p>
            <p>Collectors now preserve HRD’s legacy through meticulous <Link to="/restoration">restoration</Link>, showcasing bikes at vintage events.</p>

            <h3>Automobile and Motorcycle Models</h3>
            <p>HRD produced only motorcycles, debuting four models in 1924: HD70 (500cc JAP sidevalve, 70 mph), HD70/S (500cc or 600cc, sidecar option), HD80 (350cc JAP overhead-valve), and HD90 (500cc JAP). The 1925 HD Super 90 (500cc twin-port, 100 mph) was the flagship, fitted with advanced electrics. All featured Burman gearboxes and saddle tanks, per <a href="https://www.britishclassicmotorcycles.com/hrd-history" target="_blank" rel="noopener noreferrer">British Classic Motorcycles</a>.</p>
            <p>These models, built for performance, remain rare collector items.</p>

            <h3>Restoration Challenges and Techniques</h3>
            <p>Restoring HRD motorcycles is daunting due to their rarity and bespoke components. JAP engines and Burman gearboxes require specialist machining, and Webb forks are scarce. Frames suffer corrosion, needing sandblasting and powder coating. Restorers source parts from vintage clubs or fabricate them, guided by HRD Owners Club manuals, per <a href="https://www.classic-motorbikes.net/hrd-motorcycles" target="_blank" rel="noopener noreferrer">Classic Motorbikes</a>.</p>
            <p>These <Link to="/restoration">restoration</Link> efforts preserve HRD’s craftsmanship for concours displays.</p>

            <h3>Global Influence and Export Success</h3>
            <p>HRD’s small production limited exports, but its TT and Brooklands fame attracted European buyers, particularly in France and Belgium. The HD90 and Super 90 were marketed to affluent riders abroad, though exact figures are unknown. HRD’s racing success influenced Vincent HRD’s export strategy, per <a href="https://www.cybermotorcycle.com/marques/hrd/hrd-motorcycles.htm" target="_blank" rel="noopener noreferrer">Cyber Motorcycle</a>.</p>
            <p>HRD’s performance focus inspired global boutique manufacturers, despite its brief run.</p>

            <h3>Status Among Collectors Today and Place in History</h3>
            <p>HRD motorcycles are exceptionally rare, with fewer than 100 believed extant. Pristine HD90s or Super 90s fetch £20,000–£40,000 at auctions, per <a href="https://www.classiccarsforsale.co.uk/motorcycles/hrd" target="_blank" rel="noopener noreferrer">Classic Cars for Sale</a>. The HRD Owners Club supports <Link to="/restoration">restoration</Link>. HRD’s historical significance lies in its racing triumphs and quality ethos, influencing Vincent HRD.</p>
            <p>Its legacy endures in vintage motorcycle communities.</p>

            <h3>Standout Models That Made the Marque Great</h3>
            <p>The HD90 (1924, 500cc JAP) set HRD’s performance standard, excelling in the 1925 TT. The HD Super 90 (1925, 500cc twin-port) reached 100 mph, featuring advanced electrics. The HD80 (350cc) secured a 1927 Junior TT win. These models, built for speed and reliability, defined HRD’s brief but brilliant run.</p>
            <p>They remain prized at vintage rallies for their racing heritage.</p>

            <h3>Conclusion</h3>
            <p>HRD’s short-lived pursuit of performance, led by Howard Davies, produced motorcycles that triumphed at the Isle of Man TT and Brooklands. Its quality components and racing pedigree influenced Vincent HRD and beyond. Collectors preserve these rare machines through dedicated <Link to="/restoration">restoration</Link>, celebrating HRD’s legacy. Discover HRD’s storied past at the <a href="https://allbritishmotorshow.com/" target="_blank" rel="noopener noreferrer">All British Motor Show</a>, where its performance heritage shines.</p>
          </div>
        </div>
      </div>
    </Transitions>
  </>
);

export default HRD;
