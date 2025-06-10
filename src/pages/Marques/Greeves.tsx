
import React from 'react';
import { Link } from 'react-router-dom';
import Title from '@/components/Title';
import Transitions from '@/components/Transition';
import './styles.scss';

const Greeves: React.FC = () => (
  <>
    <Transitions>
      <Title
        title="Greeves"
        subtitle="Dominating British Off-Road Legacy"
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Overall History</h3>
            <p>Founded by Bert Greeves in 1946 as Invacar Ltd. in Thundersley, Essex, Greeves Motorcycles emerged in 1953, diversifying from three-wheeled invalid carriages. A 1952 Ministry of Pensions contract funded the motorcycle venture, with production starting in 1954. Known for trials, scrambles, and road racing bikes, Greeves used Villiers and British Anzani engines initially, later developing proprietary engines. The company thrived in the 1960s with a strong US export market but ceased trading after a 1975 factory fire, closing in 1977, per <a href="https://www.greeves-riders.org.uk/history" target="_blank" rel="noopener noreferrer">Greeves Riders Association</a>. A new Greeves company revived the name in 1999, focusing on trials bikes.</p>
            <p>Greeves’ innovative designs and competition success cemented its place in British motorcycling history, cherished by enthusiasts.</p>

            <h3>Engineering Innovations and Technical Milestones</h3>
            <p>Greeves introduced a patented rubber-in-torsion suspension in 1954, used in both front “Banana Leading Link” forks and rear pivoted forks, enhancing off-road performance, per <a href="https://www.cybermotorcycle.com/marques/greeves/greeves-history.htm" target="_blank" rel="noopener noreferrer">Cyber Motorcycle</a>. The 1953 frame featured a cast-aluminum I-section down beam, improving rigidity. The 1964 Challenger debuted a Greeves-designed 250cc engine with an Albion gearbox, replacing Villiers units. By 1967, a 360cc version emerged, boosting power for scrambles.</p>
            <p>The Silverstone (1963) road racer adopted a five-speed gearbox and twin-leading-shoe brakes by 1966, showcasing Greeves’ engineering prowess in lightweight, competitive designs.</p>

            <h3>Great Racing Achievements and Drivers</h3>
            <p>Greeves excelled in trials and scrambles. Brian Stonebridge earned second in the 1958–59 FIM 250cc motocross Coupe d’Europe, followed by Dave Bickers winning the 1960–61 European Championships. Don Smith won the 1964 and 1967 European Trials Championships on Scottish and Anglian models, respectively. Gordon Keith’s 1964 Manx Grand Prix win on a Silverstone 250cc was a landmark, per <a href="https://www.motorsportmagazine.com/archive" target="_blank" rel="noopener noreferrer">Motorsport Magazine</a>.</p>
            <p>Bill Wilkinson’s 1960 British Experts Trial victory, the first on a two-stroke, highlighted Greeves’ trials dominance, inspiring off-road enthusiasts.</p>

            <h3>Racing Rivalries and Motorsport Legacy</h3>
            <p>Greeves rivaled BSA, Triumph, and European marques like Jawa in 1960s scrambles, with Bickers’ 246cc Challenger outperforming heavier bikes. In trials, Greeves’ lightweight Scottish and Anglian models challenged BSA and Ariel, often dominating local events. The Silverstone competed with Norton in 250cc road racing, earning reliability accolades.</p>
            <p>Greeves’ legacy lies in revolutionizing lightweight off-road bikes, influencing US trail biking with models like the Ranger, and shaping modern motocross, per <a href="https://www.roadracingworld.com/news/historic-racebike-illustrations-1966-greeves-silverstone" target="_blank" rel="noopener noreferrer">Roadracing World</a>.</p>

            <h3>Unique and Unusual Trivia and Adventures</h3>
            <p>Bert Greeves invented the Invacar by fitting a lawnmower engine to his cousin Derry Preston-Cobb’s wheelchair, sparking the company’s origin. Derry’s souped-up Invacar overtook cars on Southend roads, promoting Greeves’ motorcycles. In 1960, a Hawkstone scrambler was customized for desert racing, beating larger US bikes. A 1968 Silverstone was used by the Mortimer Road-Racing School for its reliability, per <a href="https://www.greevesguru.com/history" target="_blank" rel="noopener noreferrer">Greeves Guru</a>.</p>
            <p>These stories highlight Greeves’ innovative and adventurous spirit, captivating vintage motorcycle fans.</p>

            <h3>Cultural Impact and Media Presence</h3>
            <p>Greeves symbolized British off-road prowess, featured in *Motor Cycle* and *Cycle World* for its trials and motocross successes. The Silverstone appeared in 1960s racing broadcasts, while Hawkstone scramblers starred in US desert racing documentaries. The Ranger trail bike, launched in 1965, popularized off-road biking in America, per <a href="https://www.benfleethistory.org.uk/content/topics/sports_and_leisure/greeves_motorcycles" target="_blank" rel="noopener noreferrer">Benfleet Community Archive</a>.</p>
            <p>Greeves’ niche appeal endures in vintage rallies and magazines, reflecting its competition heritage.</p>

            <h3>Famous Owners</h3>
            <p>Specific famous owners are poorly documented, as Greeves targeted enthusiasts. Racers like Dave Bickers, Don Smith, and Gordon Keith were prominent, with Bickers a European champion. Some sources suggest actor Steve McQueen owned a Hawkstone for desert racing, though unconfirmed. Greeves’ appeal was its accessibility to club racers, per <a href="https://www.classictrial.ch/greeves-story" target="_blank" rel="noopener noreferrer">Classic Trial</a>.</p>
            <p>Collectors now preserve Greeves’ legacy through dedicated <Link to="/restoration">restoration</Link> at vintage events.</p>

            <h3>Automobile and Motorcycle Models</h3>
            <p>Greeves produced only motorcycles, starting with the 1954 20T Trials and 20S Scrambles (197cc Villiers). The Fleetwing (1954, 247cc British Anzani) was a roadster, followed by the 1962 Sports Twin (250cc Villiers). The Silverstone (1963, 250cc) excelled in road racing, while the Challenger (1964, 250cc–360cc) dominated scrambles. The Scottish (1960) and Anglian (1966) were trials icons, per <a href="https://www.greeves-riders.org.uk/history" target="_blank" rel="noopener noreferrer">Greeves Riders Association</a>.</p>
            <p>These models, from roadsters to competition bikes, showcased Greeves’ versatility.</p>

            <h3>Restoration Challenges and Techniques</h3>
            <p>Restoring Greeves motorcycles is challenging due to scarce parts, especially for Villiers and early Greeves engines. Aluminum down beams suffer corrosion, and leading-link forks require custom rubber torsion units. Restorers use sandblasting and powder coating for frames, with reproduction parts from Greeves Motorsport, per <a href="https://www.greeves-motorsport.com" target="_blank" rel="noopener noreferrer">Greeves Motorsport</a>. Engine rebuilds need specialist machining for Challenger and Silverstone units.</p>
            <p>These <Link to="/restoration">restoration</Link> efforts ensure Greeves’ classics shine at vintage rallies.</p>

            <h3>Global Influence and Export Success</h3>
            <p>Greeves exported heavily to the USA, where Hawkstone and Challenger models dominated desert racing from 1959–1969, per <a href="https://www.dirtbikes.com/friday-flashback-the-greeves-motorcycle-story-part-1" target="_blank" rel="noopener noreferrer">Dirt Bikes</a>. The Ranger trail bike (1965) sparked America’s off-road craze. Exports to Europe and Australia bolstered Greeves’ reputation, with trials models popular in Scandinavia.</p>
            <p>Greeves’ lightweight designs influenced global motocross and trail biking, leaving a lasting international legacy.</p>

            <h3>Status Among Collectors Today and Place in History</h3>
            <p>Greeves’ Challenger and Silverstone models are collector favorites, fetching £5,000–£15,000, with trials bikes like the Anglian valued at £3,000–£7,000, per <a href="https://www.classiccarsforsale.co.uk/greeves" target="_blank" rel="noopener noreferrer">Classic Cars for Sale</a>. The Greeves Riders Association supports <Link to="/restoration">restoration</Link>. Greeves’ historical significance lies in its off-road dominance and innovative engineering, shaping lightweight motorcycle design.</p>
            <p>Its legacy endures in classic motocross and trials events.</p>

            <h3>Standout Models That Made the Marque Great</h3>
            <p>The Scottish (1960, 197cc Villiers) won multiple trials, including the 1964 European Championship. The Challenger (1964, 250cc–360cc) dominated scrambles and desert racing. The Silverstone (1963, 250cc) secured the 1964 Manx Grand Prix. The Anglian (1966, 246cc) was a trials icon, winning the 1967 European Championship.</p>
            <p>These models, embodying Greeves’ competition focus, remain celebrated at vintage events.</p>

            <h3>Conclusion</h3>
            <p>Greeves’ legacy as a pioneer of lightweight, competition-ready motorcycles endures, from the Scottish’s trials triumphs to the Challenger’s motocross dominance. Its innovative suspension and engines shaped off-road biking globally. Collectors preserve these classics through meticulous <Link to="/restoration">restoration</Link>, celebrating Greeves’ heritage. Experience this legacy at the <a href="https://allbritishmotorshow.com/" target="_blank" rel="noopener noreferrer">All British Motor Show</a>, where Greeves’ iconic models captivate enthusiasts.</p>
          </div>
        </div>
      </div>
    </Transitions>
  </>
);

export default Greeves;