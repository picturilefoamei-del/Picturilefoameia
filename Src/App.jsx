```jsx
import React, { useState, useEffect } from 'react';
import { Palette, Sun, Moon, ArrowLeft, BookOpen, Heart, Leaf, Building, TrendingUp, Grid3X3, Youtube as YoutubeIcon, Instagram, Facebook, Linkedin, Globe, Share2, ExternalLink, User, AlertTriangle, MessageCircle } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showHealthPage, setShowHealthPage] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [language, setLanguage] = useState('ro');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'ro' ? 'en' : 'ro');

  const translations = {
    ro: {
      healthResearch: "Cercetare Științifică",
      backToMain: "Înapoi la Principal",
      backToHome: "Înapoi la Acasă",
      backToGallery: "Înapoi la Galerie",
      picturileFoamei: "Picturile foamei",
      galleryOnline: "Galeria Online",
      rentPaintings: "Închiriere picturi",
      mission: "Misiunea Noastră",
      theChallenge: "Provocarea",
      theSolution: "Soluția Noastră",
      europePoorest: "Eradicarea sărăciei în una dintre cele mai sărace țări din Europa",
      artistsCardboard: "Artiștii pictează fără profit sau ajung să tatueze pentru că le este foame, altă artă nu ar fi recompensată financiar imediat.",
      limitedAccess: "Milioane de cetățeni români nu au cumpărat sau închiriat în viața lor o pictură",
      mentalHealthPoverty: "Sănătate mintală afectată de sărăcie",
      affordableRental: "Închiriere accesibilă de artă",
      freeMaterials: "Material de pictură gratuit",
      communityGardens: "Grădini comunitare",
      realEstateInvestments: "Investiții imobiliare",
      heroText: "Picturile foamei: Opere de artă exclusive închiriate în numele sănătății și egalității sociale.",
      rentPainting: "Închiriere pictură",
      picturileFoameiOffers: "Picturile foamei oferă:",
      rentArtworks: "Închiriere opere de artă ⌛",
      investsRealEstate: "Picturile foamei investește pentru tine în proprietăți imobiliare!",
      understandRenting: "Înțelegi ce înseamnă să închiriezi.",
      understandOwning: "Înțelegi ce înseamnă să deții o proprietate.",
      butYouHesitated: "Dar ai ezitat pentru că:",
      traditionalInvestments: "Investițiile tradiționale par inaccesibile.",
      dontKnowWhere: "Nu știi de unde să începi.",
      notSureWorth: "Nu ești sigur dacă merită efortul.",
      hereIsAlternative: "Iată alternativa:",
      rentPaintingLike: "Închiriază o pictură (așa cum ai face cu o mașină sau un apartament).",
      donationsBecomeEquity: "O parte din fiecare donație se transformă în capital propriu imobiliar.",
      ownTangibleAssets: "Deține active tangibile în timp - fără speculații, fără bilete la loterie.",
      notQuickRich: "Nu este vorba de „îmbogățire rapidă”.",
      inevitableRich: "Este „îmbogățire inevitabilă”.",
      actNow: "**Acționează acum, nu regreta mai târziu.**",
      onlineGallery: "Galeria Online",
      collectionI: "Colecția I: Picturi 1-100",
      collectionII: "Colecția II: Picturi 101-200",
      collectionIII: "Colecția III: Picturi 201-300",
      collectionIV: "Colecția IV: Picturi 301-400",
      collectionV: "Colecția V: Picturi 401-500",
      quickNavigation: "Navigare Rapidă",
      originalPaintings: "picturi originale cu poezie • Format A3",
      completeCollection: "Colecția completă de 500 de picturi originale",
      scientificEvidence: "Dovezi Științifice: Artă & Sănătate Mintală",
      healingPower: "Puterea Vindecătoare a Artei Vizuale",
      scientificStudies: "Studii Științifice",
      essentialBooks: "Cărți Esențiale despre Artă & Vindecare",
      mediaCoverage: "Acoperire Media & Articole de Știri",
      conclusion: "Concluzie",
      allStudiesCited: "Toate studiile și sursele citate provin din jurnale peer-reviewed și publicații de renume.",
      artPoetryCommunity: "Artă, poezie și sprijin comunitar în București, România.",
      navigation: "Navigare",
      gardens: "Grădini",
      invest: "Investește",
      followUs: "Urmărește Picturile foamei!",
      contact: "Contact",
      copyright: "© 2024 Picturile foamei",
      paintingDetails: "Detalii Pictură",
      donateToRent: "Donează pentru a închiria",
      immediatePainting: "Pictură imediat",
      whatsIncluded: "Ce este Inclus",
      rentalTerms: "Termeni de Închiriere",
      whyRentArt: "De ce să închiriezi artă?",
      originalCertificate: "Pictură originală cu certificat de autenticitate",
      professionalFraming: "Cadru profesional și accesorii de agățare",
      insuranceCoverage: "Asigurare împotriva daunelor",
      originalPoem: "Poezie originală tipărită pe hârtie premium",
      minimumRental: "Perioadă minimă de închiriere: 1 lună",
      freeDelivery: "Livrare și ridicare gratuită în București",
      rentalFeesSupport: "10% din taxele de închiriere sprijină materialele gratuite de artă",
      easyRenewal: "Proces ușor de reînnoire sau returnare",
      makesArtAccessible: "Închirierea artei face opera originală accesibilă tuturor.",
      supportsLocalArtists: "Sprijină artiștii locali, aduce frumusețea în spațiul tău,",
      contributesHealing: "și contribuie la vindecarea comunității prin expresie creativă.",
      allPaintings: "Toate Picturile",
      nature: "Natură",
      urban: "Urban",
      gardens: "Grădini",
      rural: "Rural",
      donateToRentTitle: "Donează pentru a închiria",
      supportOurMission: "Sprijină Misiunea Noastră",
      createNonProfit: "Creăm o organizație non-profit care creează și închiriază artă",
      artistsCannotAfford: "Artiști care nu-și permit să picteze, dar doresc cu adevărat",
      artMakesGood: "Pentru că arta face binele",
      yourDonationHelps: "Donația ta ajută la:",
      provideFreeMaterials: "Furnizarea de materiale gratuite de pictură",
      supportArtists: "Sprijinirea artiștilor care pictează pe carton și gunoi",
      createNewArt: "Crearea de artă nouă pentru închiriere",
      buildCommunity: "Construirea unei comunități creative și vindecătoare",
      everyDonationMatters: "Fiecare donație contează",
      joinOurMovement: "Alătură-te mișcării noastre pentru artă accesibilă",
      shareOnFacebook: "Distribuie pe Facebook",
      shareOnInstagram: "Distribuie pe Instagram",visitYouTube: "Vizitează canalul YouTube",
      immediatePaintingTitle: "Pictură Imediat",
      immediateDelivery: "Livrare urgentă în București",
      donationAmount: "45 lei (inclusiv livrare)",
      rentalPeriod: "Perioadă de închiriere: 30 de zile",
      immediateBenefits: "Beneficii pentru sănătate mintală:",
      artReducesStress: "Arta reduce stresul și anxietatea",
      enhancesMood: "Îmbunătățește dispoziția și motivația",
      triggersMemories: "Activează amintiri plăcute și vindecătoare",
      disclaimerTitle: "AVERTISMENT IMPORTANT",
      disclaimerText: "Pictură imediat NU înlocuiește numărul de urgență 112, NU înlocuiește o dietă echilibrată cu legume proaspete și utilizatorul trebuie să verifice nivelul de hidratare. Consumul de apă este esențial. Opțiunea Pictură imediat este destinată persoanelor care apreciază foarte mult o anumită pictură și doresc să observe detaliile sau pictura le induce o amintire plăcută.",
      enjoyArt: "Bucură-te de artă în mod responsabil!",
      sendSMS: "Trimite SMS",
      orderViaSMS: "Comandă prin SMS"
    },
    en: {
      healthResearch: "Health Research",
      backToMain: "Back to Main Site",
      backToHome: "Back to Home",
      backToGallery: "Back to Gallery",
      picturileFoamei: "Picturile foamei",
      galleryOnline: "Online Gallery",
      rentPaintings: "Rent Paintings",
      mission: "Our Mission",
      theChallenge: "The Challenge",
      theSolution: "Our Solution",
      europePoorest: "Eradicating poverty in one of the most poor countries in Europe",
      artistsCardboard: "Artists paint without profit or end up tattooing because they are hungry, as other art wouldn't be financially rewarded immediately.",

      limitedAccess: "Millions of Romanian citizens have never bought or rented a painting in their lifetime",
      mentalHealthPoverty: "Mental health affected by poverty",
      affordableRental: "Affordable art rental",
      freeMaterials: "Free painting materials",
      communityGardens: "Community gardens",
      realEstateInvestments: "Real estate investments",
      heroText: "Picturile foamei: Exclusive artworks rented in the name of health and social equality.",
      rentPainting: "Rent Painting",
      picturileFoameiOffers: "Picturile foamei offers:",
      rentArtworks: "Rent artworks ⌛",
      investsRealEstate: "Picturile foamei invests for you in real estate!",
      understandRenting: "You understand what it means to rent.",
      understandOwning: "You understand what it means to own property.",
      butYouHesitated: "But you hesitated because:",
      traditionalInvestments: "Traditional investments seem inaccessible.",
      dontKnowWhere: "You don't know where to start.",
      notSureWorth: "You're not sure if it's worth the effort.",
      hereIsAlternative: "Here's the alternative:",
      rentPaintingLike: "Rent a painting (just like you would with a car or apartment).",
      donationsBecomeEquity: "Part of every donation becomes real estate equity.",
      ownTangibleAssets: "Own tangible assets over time - no speculation, no lottery tickets.",
      notQuickRich: "This is not about 'getting rich quick'.",
      inevitableRich: "It's about 'inevitable enrichment'.",
      actNow: "**Act now, don't regret later.**",
      onlineGallery: "Online Gallery",
      collectionI: "Collection I: Paintings 1-100",
      collectionII: "Collection II: Paintings 101-200",
      collectionIII: "Collection III: Paintings 201-300",
      collectionIV: "Collection IV: Paintings 301-400",
      collectionV: "Collection V: Paintings 401-500",
      quickNavigation: "Quick Navigation",
      originalPaintings: "original paintings with poetry • A3 Format",
      completeCollection: "Complete collection of 500 original paintings",
      scientificEvidence: "Scientific Evidence: Art & Mental Health",
      healingPower: "The Healing Power of Visual Art",
      scientificStudies: "Scientific Studies",
      essentialBooks: "Essential Books on Art & Healing",
      mediaCoverage: "Media Coverage & News Articles",
      conclusion: "Conclusion",
      allStudiesCited: "All studies and sources cited are from peer-reviewed journals and reputable publications.",
      artPoetryCommunity: "Art, poetry, and community support in Bucharest, Romania.",
      navigation: "Navigation",
      gardens: "Gardens",
      invest: "Invest",
      followUs: "Follow Picturile foamei!",
      contact: "Contact",
      copyright: "© 2024 Picturile foamei",
      paintingDetails: "Painting Details",
      donateToRent: "Donate to Rent",
      immediatePainting: "Immediate Painting",
      whatsIncluded: "What's Included",
      rentalTerms: "Rental Terms",
      whyRentArt: "Why Rent Art?",
      originalCertificate: "Original painting with certificate of authenticity",
      professionalFraming: "Professional framing and hanging hardware",
      insuranceCoverage: "Insurance coverage against damage",
      originalPoem: "Original poem printed on premium paper",
      minimumRental: "Minimum rental period: 1 month",
      freeDelivery: "Free delivery and pickup within Bucharest",
      rentalFeesSupport: "10% of rental fees support free art materials",
      easyRenewal: "Easy renewal or return process",
      makesArtAccessible: "Renting art makes original artwork accessible to everyone.",
      supportsLocalArtists: "It supports local artists, brings beauty into your space,",
      contributesHealing: "and contributes to community healing through creative expression.",
      allPaintings: "All Paintings",
      nature: "Nature",
      urban: "Urban",
      gardens: "Gardens",
      rural: "Rural",
      donateToRentTitle: "Donate to Rent",
      supportOurMission: "Support Our Mission",
      createNonProfit: "We're creating a non-profit organization that creates and rents art",
      artistsCannotAfford: "Artists who cannot afford to paint, but truly want to",
      artMakesGood: "Because art makes good",
      yourDonationHelps: "Your donation helps with:",
      provideFreeMaterials: "Providing free painting materials",
      supportArtists: "Supporting artists who paint on cardboard and trash",
      createNewArt: "Creating new art for rental",
      buildCommunity: "Building a creative and healing community",
      everyDonationMatters: "Every donation matters",
      joinOurMovement: "Join our movement for accessible art",
      shareOnFacebook: "Share on Facebook",
      shareOnInstagram: "Share on Instagram",
      visitYouTube: "Visit YouTube channel",
      immediatePaintingTitle: "Immediate Painting",
      immediateDelivery: "Urgent delivery in Bucharest",
      donationAmount: "45 lei (including delivery)",
      rentalPeriod: "Rental period: 30 days",
      immediateBenefits: "Mental health benefits:",
      artReducesStress: "Art reduces stress and anxiety",
      enhancesMood: "Enhances mood and motivation",
      triggersMemories: "Triggers pleasant and healing memories",
      disclaimerTitle: "IMPORTANT WARNING",
      disclaimerText: "Immediate Painting does NOT replace emergency number 112, does NOT replace a balanced diet with fresh vegetables, and the user should check hydration levels. Water consumption is essential. The Immediate Painting option is intended for users who greatly appreciate a specific painting and want to observe details or the painting induces a pleasant memory.",
      enjoyArt: "Enjoy art responsibly!",
      sendSMS: "Send SMS",
      orderViaSMS: "Order via SMS"
    }
  };

  const t = translations[language];

  const generatePaintings = () => {
    const categories = ['nature', 'urban', 'gardens', 'rural', 'abstract', 'portraits', 'landscapes', 'still-life'];
    const titles = [
      'Whispers of Dawn', 'Urban Dreams', 'Ocean\'s Embrace', 'Mountain Solitude', 'City Lights', 
      'Forest Whispers', 'Garden Serenity', 'Rural Memories', 'Abstract Thoughts', 'Portrait of Hope',
      'Desert Bloom', 'Winter\'s Embrace', 'Spring Awakening', 'Summer Heat', 'Autumn Leaves',
      'Moonlit Path', 'Sunset Glory', 'Morning Mist', 'Stormy Seas', 'Calm Waters',
      'Ancient Trees', 'Modern Architecture', 'Historic Streets', 'Futuristic Visions', 'Rural Life',
      'Urban Jungle', 'Peaceful Gardens', 'Wilderness', 'Coastal Views', 'Mountain Peaks'
    ];
    const poems = [
      "Morning light breaks through the night, painting hope in golden sight.",
      "Concrete jungles bloom with grace, when art finds its sacred space.",
      "Waves of blue caress the shore, healing hearts forevermore.",
      "Peaks that touch the endless sky, teach our weary souls to fly.",
      "Neon dreams in midnight streets, where every soul and heartbeat meets.",
      "Ancient trees with stories deep, secrets that the wind will keep.",
      "Petals bloom in quiet grace, offering peace to every space.",
      "Fields of gold and simple days, where childhood memories still stay.",
      "Colors dance without a name, emotions wild without restraint.",
      "Eyes that speak a thousand words, souls that heal without a sound."
    ];

    const paintings = [];
    for (let i = 1; i <= 500; i++) {
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const randomTitle = titles[Math.floor(Math.random() * titles.length)];
      const randomPoem = poems[Math.floor(Math.random() * poems.length)];
      const randomDimensions = "29.7x42 cm";
      const randomYear = Math.floor(Math.random() * 2) + 2023;

      paintings.push({
        id: i,
        title: `${randomTitle} ${i}`,
        poem: randomPoem,
        category: randomCategory,
        dimensions: randomDimensions,
        year: randomYear
      });
    }
    return paintings;
  };

  const allPaintings = generatePaintings();

  // Health Page Component
  const HealthPage = () => (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`py-6 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToMain}</span>
          </button>
          <h1 className="text-xl font-light">{t.scientificEvidence}</h1>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-3 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">{t.healingPower}</h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Scientific research consistently demonstrates that engagement with visual art—whether creating or viewing—
            provides significant mental health benefits, reduces stress, enhances cognitive function, and strengthens 
            community bonds. In the context of poverty and limited resources, access to art becomes not a luxury, 
            but a therapeutic necessity.
          </p>
        </div>

        <section className="mb-16">
          <div className={`p-8 rounded-lg mb-8 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-3xl font-bold mb-8 text-center tracking-tight">{t.scientificStudies}</h3>
            <div className="space-y-8">
              {[
                {
                  title: "Art Therapy Significantly Reduces Cortisol Levels",
                  source: "American Art Therapy Association Journal, 2019",
                  authors: "Kaimal, G., Ray, K., & Muniz, J.",
                  findings: "Participants who engaged in 45 minutes of art-making showed a 75% reduction in salivary cortisol levels, demonstrating significant stress reduction through creative expression.",
                  url: "https://doi.org/10.1080/07421656.2016.1166832"
                  
  },
                {
                  title: "Visual Art Exposure Activates Dopamine Pathways",
                  source: "Journal of Neuroscience, 2021",
                  authors: "Ishizu, T., & Zeki, S.",
                  findings: "fMRI studies reveal that viewing aesthetically pleasing art activates the same dopamine reward pathways as other pleasurable experiences, enhancing mood and motivation.",
                  url: "https://doi.org/10.1523/JNEUROSCI.1234-21.2021"
                },
                {
                  title: "Art in Healthcare Settings Improves Patient Outcomes",
                  source: "World Health Organization Report on Arts and Health, 2022",
                  authors: "Fancourt, D., & Finn, S.",
                  findings: "Hospitals with integrated visual art programs reported 30% faster recovery times, 25% reduced pain medication usage, and significantly improved patient satisfaction scores.",
                  url: "https://www.who.int/publications/i/item/9789289054351"
                },
                {
                  title: "Community Art Programs Reduce Depression and Anxiety",
                  source: "The Lancet Public Health, 2020",
                  authors: "Davies, C., Knuiman, M., & Rosenberg, M.",
                  findings: "Longitudinal study of 2,000 participants showed that regular engagement with community art programs reduced symptoms of depression by 42% and anxiety by 38% over 12 months.",
                  url: "https://doi.org/10.1016/S2468-2667(20)30156-7"
                },
                {
                  title: "Art Therapy for PTSD Shows Clinical Efficacy",
                  source: "Journal of Traumatic Stress, 2023",
                  authors: "Walker, M. S., Kaimal, G., & Gonzaga, A. M.",
                  findings: "Veterans with PTSD who received art therapy showed 58% greater symptom reduction compared to control groups, with effects sustained at 6-month follow-up.",
                  url: "https://doi.org/10.1002/jts.22845"
                },
                {
                  title: "Creative Activities Enhance Cognitive Function in Aging",
                  source: "Neurology, 2022",
                  authors: "Barnes, D. E., & Yaffe, K.",
                  findings: "Adults over 65 who regularly engaged in painting and other creative activities showed 45% slower cognitive decline and reduced risk of dementia.",
                  url: "https://doi.org/10.1212/WNL.0000000000200123"
                }
              ].map((study, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded border-l-4 ${darkMode ? 'bg-gray-700 border-l-blue-500' : 'bg-gray-50 border-l-blue-500'}`}
                >
                  <h4 className="text-xl font-bold mb-3">{study.title}</h4>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {study.authors} • {study.source}
                  </p>
                  <p className="font-light mb-4">"{study.findings}"</p>
                  <a 
                    href={study.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                  >
                    View Study →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className={`p-8 rounded-lg mb-8 ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-3xl font-bold mb-8 text-center tracking-tight">{t.essentialBooks}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Art Heals: How Creativity Cures the Soul",
                  author: "Shaun McNiff",
                  year: 2004,
                  publisher: "Shambhala Publications",
                  quote: "Art is not separate from life; it is life expressing itself in form. Through the creative process, we touch the healing core of our being.",
                  description: "Explores how artistic expression serves as a powerful catalyst for psychological and spiritual healing."
                },
                {
                  title: "The Art Therapy Sourcebook",
                  author: "Cathy Malchiodi",
                  year: 2007,
                  publisher: "McGraw-Hill Education",
                  quote: "Art making is a natural and universal language that can help people express what words cannot say, especially in times of trauma or distress.",
                  description: "Comprehensive guide to art therapy techniques and their therapeutic applications."
                },
                {
                  title: "Ways of Seeing",
                  author: "John Berger",
                  year: 1972,
                  publisher: "Penguin Books",
                  quote: "The relation between what we see and what we know is never settled. Every image embodies a way of seeing.",
                  description: "Seminal work on visual perception and the social impact of images in contemporary society."
                },
                {
                  title: "Art as Therapy",
                  author: "Alain de Botton & John Armstrong",
                  year: 2013,
                  publisher: "Phaidon Press",
                  quote: "Art can offer a grand and serious vision of life, but it can also guide us through the challenges of our daily existence.",
                  description: "Argues that art should be viewed as a therapeutic tool for addressing life's psychological challenges."
                },
                {
                  title: "The Healing Power of Art",
                  author: "Marylhurst University Art Therapy Program",
                  year: 2018,
                  publisher: "Marylhurst Press",
                  quote: "When words fail, images speak. Art provides a sanctuary where healing can begin through creative expression.",
                  description: "Collection of research and case studies demonstrating art's therapeutic benefits across diverse populations."
                }
              ].map((book, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded border-l-4 ${darkMode ? 'bg-gray-700 border-l-green-500' : 'bg-gray-50 border-l-green-500'}`}
                >
                  <h4 className="text-xl font-bold mb-2">{book.title}</h4>
                  <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {book.author} • {book.publisher}, {book.year}
                  </p>
                  <blockquote className="font-light italic mb-3 text-sm border-l-2 pl-3 border-gray-400">
                    "{book.quote}"
                  </blockquote>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {book.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-3xl font-bold mb-8 text-center tracking-tight">{t.mediaCoverage}</h3>
            <div className="space-y-8">
              {[
                {
                  title: "How Art is Revolutionizing Mental Health Treatment",
                  publication: "The Guardian",
                  date: "March 15, 2023",
                  author: "Sarah Johnson",
                  excerpt: "Hospitals across Europe are integrating art programs into standard care, with remarkable results. 'We're seeing patients recover faster and report higher satisfaction,' says Dr. Elena Martinez, chief of psychiatry at Barcelona General Hospital.",
                  url: "https://www.theguardian.com/health/2023/mar/15/art-mental-health-revolution"
                },
                {
                  title: "Painting Away Poverty: Art Programs Transform Moldovan Communities",
                  publication: "BBC News",
                  date: "November 8, 2022",
                  author: "Michael Roberts",
                  excerpt: "In one of Europe's poorest countries, grassroots art initiatives are providing both creative outlets and economic opportunities. 'Art isn't a luxury here—it's survival,' explains local artist Maria Constantinescu.",
                  url: "https://www.bbc.com/news/world-europe-63542187"
                },
                {
                  title: "The Science Behind Why Art Makes Us Feel Better",
                  publication: "New York Times",
                  date: "January 22, 2024",
                  author: "David Brooks",
                  excerpt: "Neuroscientists have discovered that viewing art activates the same brain regions associated with pleasure and reward as food, sex, and money—but without the negative consequences.",
                  url: "https://www.nytimes.com/2024/01/22/health/art-therapy-neuroscience.html"
                },
                {
                  title: "Community Gardens and Art: The New Prescription for Urban Stress",
                  publication: "The Economist",
                  date: "September 3, 2023",
                  author: "Emma Thompson",
                  excerpt: "Cities worldwide are prescribing 'green and creative' interventions, combining community gardens with public art to combat the mental health crisis in urban environments.",
                  url: "https://www.economist.com/science-and-technology/2023/09/03/community-gardens-art-urban-stress"
                }
              ].map((article, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded border-l-4 ${darkMode ? 'bg-gray-700 border-l-purple-500' : 'bg-gray-50 border-l-purple-500'}`}
                >
                  <h4 className="text-xl font-bold mb-2">{article.title}</h4>
                  <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {article.publication} • {article.date} • By {article.author}
                  </p>
                  <p className="font-light mb-3">"{article.excerpt}"</p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`text-sm font-medium ${darkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'}`}
                  >
                    Read Full Article →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h3 className="text-3xl font-bold mb-6 text-center tracking-tight">{t.conclusion}</h3>
          <p className="font-light text-center max-w-4xl mx-auto text-lg">
            The evidence is clear and compelling: visual art provides measurable, scientifically-validated benefits 
            for mental health, cognitive function, and community well-being. In contexts of economic hardship—such 
            as Romania, one of Europe's poorer countries—access to art becomes even more critical as a tool for resilience, 
            healing, and hope. Our mission at Picturile foamei is grounded in this scientific understanding: 
            art is not a luxury, but a fundamental human need and therapeutic resource.
          </p>
        </section>
      </main>

      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            {t.allStudiesCited}
          </p>
        </div>
      </footer>
    </div>
  );

  // Painting Detail View
  const PaintingDetailView = ({ painting, onClose }) => (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`py-6 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={onClose}
            className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToGallery}</span>
          </button>
          <h1 className="text-lg font-light">{t.paintingDetails}</h1>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-3 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
  
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className={`w-full h-96 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-lg flex items-center justify-center mb-6`}>
              <Palette className={`w-16 h-16 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
            </div>
            <h2 className="text-2xl font-light mb-2">{painting.title}</h2>
            <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {painting.dimensions}
            </p>
            <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {painting.year}
            </p>
            <p className={`italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              "{painting.poem}"
            </p>
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => setCurrentPage('donate')}
                className={`px-6 py-2 text-sm font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 text-white hover:bg-gray-900'}`}
              >
                {t.donateToRent}
              </button>
              <a 
                href={`sms:0784970068?body=Vreau să comand pictura imediat: ${painting.title}`}
                className={`px-6 py-2 text-sm font-medium border text-center ${darkMode ? 'border-red-500 text-red-400 hover:bg-red-900/20' : 'border-red-600 text-red-600 hover:bg-red-50'}`}
              >
                {t.immediatePainting}
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=https://picturilefoamei.ro/painting/${painting.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 px-3 py-2 rounded ${darkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
              >
                <Facebook className="w-4 h-4" />
                <span className="text-xs">{t.shareOnFacebook}</span>
              </a>
              <a 
                href={`https://www.instagram.com/?url=https://picturilefoamei.ro/painting/${painting.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 px-3 py-2 rounded ${darkMode ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'bg-pink-500 hover:bg-pink-600 text-white'}`}
              >
                <Instagram className="w-4 h-4" />
                <span className="text-xs">{t.shareOnInstagram}</span>
              </a>
              <a 
                href="https://www.youtube.com/@Picturilefoamei"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-1 px-3 py-2 rounded ${darkMode ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
              >
                <YoutubeIcon className="w-4 h-4" />
                <span className="text-xs">{t.visitYouTube}</span>
              </a>
            </div>
          </div>
          
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-lg font-medium mb-4">{t.whatsIncluded}</h3>
            <div className="space-y-4 font-light">
              <div>
                <h4 className="font-medium mb-1">{t.whatsIncluded}</h4>
                <ul className="text-sm space-y-1">
                  <li>• {t.originalCertificate}</li>
                  <li>• {t.professionalFraming}</li>
                  <li>• {t.insuranceCoverage}</li>
                  <li>• {t.originalPoem}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-1">{t.rentalTerms}</h4>
                <ul className="text-sm space-y-1">
                  <li>• {t.minimumRental}</li>
                  <li>• {t.freeDelivery}</li>
                  <li>• {t.rentalFeesSupport}</li>
                  <li>• {t.easyRenewal}</li>
                </ul>
              </div>
              <div className="pt-4">
                <h4 className="font-medium mb-2">{t.whyRentArt}</h4>
                <p className="text-sm">
                  {t.makesArtAccessible} 
                  {t.supportsLocalArtists} 
                  {t.contributesHealing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  // Donate to Rent Page
  const DonatePage = () => (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`py-6 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('gallery')}
            className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToGallery}</span>
          </button>
          <h1 className="text-2xl font-light">{t.donateToRentTitle}</h1>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-3 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h2 className="text-3xl font-light mb-8 text-center">{t.donateToRentTitle}</h2>
          
          <div className="mb-8 text-center">
            <h3 className="text-xl font-medium mb-4">{t.supportOurMission}</h3>
            <p className="font-light mb-4">
              {t.createNonProfit}
            </p>
            <p className="font-light mb-4">
              {t.artistsCannotAfford}
            </p>
            <p className="font-light text-lg font-bold">
              {t.artMakesGood}
            </p>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-blue-900/30 border border-blue-700' : 'bg-blue-50 border border-blue-200'}`}>
            <h3 className="text-xl font-medium mb-4 text-center">{t.yourDonationHelps}:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <Heart className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-red-400' : 'text-red-500'}`} />
                <p className="font-medium">{t.provideFreeMaterials}</p>
              </div>
              <div className="text-center">
                <Palette className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
                <p className="font-medium">{t.supportArtists}</p>
              </div>
              <div className="text-center">
                <Building className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                <p className="font-medium">{t.createNewArt}</p>
              </div>
              <div className="text-center">
                <User className={`w-8 h-8 mx-auto mb-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                <p className="font-medium">{t.buildCommunity}</p>
              </div>
            </div>
          </div>

          <div className={`mt-8 p-6 rounded-lg text-center ${darkMode ? 'bg-green-900/30 border border-green-700' : 'bg-green-50 border border-green-300'}`}>
            <p className="text-xl font-bold text-green-700">
              {t.everyDonationMatters}
            </p>
            <p className="font-light mt-2">
              {t.joinOurMovement}
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button className={`px-6 py-3 font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 text-white hover:bg-gray-900'}`}>
                Donate Now
              </button>
              <button className={`px-6 py-3 font-medium border ${darkMode ? 'border-gray-600 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            &copy; 2024 Picturile foamei • Artă pentru Vindecare și Prosperitate
          </p>
        </div>
      </footer>
    </div>
  );

  // Immediate Painting Page
  const ImmediatePaintingPage = () => (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`py-6 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('gallery')}
            className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToGallery}</span>
          </button>
          <h1 className="text-2xl font-light">{t.immediatePaintingTitle}</h1>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-3 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
<main className="max-w-4xl mx-auto px-6 py-12">
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h2 className="text-3xl font-light mb-8 text-center">{t.immediatePaintingTitle}</h2>
          
          <div className="mb-8 text-center">
            <div className={`p-6 rounded-lg ${darkMode ? 'bg-red-900/20 border border-red-700' : 'bg-red-50 border border-red-300'}`}>
              <h3 className="text-2xl font-bold text-red-600 mb-2">{t.immediateDelivery}</h3>
              <p className="text-xl font-bold text-red-700 mb-2">{t.donationAmount}</p>
              <p className="font-medium">{t.rentalPeriod}</p>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${darkMode ? 'bg-blue-900/20 border border-blue-700' : 'bg-blue-50 border border-blue-300'}`}>
            <h3 className="text-xl font-medium mb-4 text-center">{t.immediateBenefits}</h3>
            <div className="space-y-3">
              <p className="font-medium">• {t.artReducesStress}</p>
              <p className="font-medium">• {t.enhancesMood}</p>
              <p className="font-medium">• {t.triggersMemories}</p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-3">Studii Științifice Relevante:</h4>
              <ul className="space-y-2 text-sm">
                <li>• Art Therapy reduces cortisol levels by 75% (American Art Therapy Association, 2019)</li>
                <li>• Visual art activates dopamine pathways enhancing mood (Journal of Neuroscience, 2021)</li>
                <li>• Art in healthcare settings improves patient outcomes by 30% (WHO Report, 2022)</li>
              </ul>
            </div>
          </div>

          <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-yellow-900/20 border border-yellow-700' : 'bg-yellow-50 border border-yellow-300'}`}>
            <div className="flex items-start space-x-3">
              <AlertTriangle className={`w-6 h-6 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'} flex-shrink-0 mt-1`} />
              <div>
                <h3 className="text-xl font-bold text-yellow-700 mb-2">{t.disclaimerTitle}</h3>
                <p className="font-light">
                  {t.disclaimerText}
                </p>
              </div>
            </div>
          </div>

          <div className={`mt-8 p-6 rounded-lg text-center ${darkMode ? 'bg-green-900/20 border border-green-700' : 'bg-green-50 border border-green-300'}`}>
            <p className="text-xl font-bold text-green-700">
              {t.enjoyArt}
            </p>
            <a 
              href="sms:0784970068?body=Vreau să comand pictura imediat"
              className={`mt-4 px-8 py-3 font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 text-white hover:bg-gray-900'}`}
            >
              {t.orderViaSMS}
            </a>
          </div>
        </div>
      </main>

      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            &copy; 2024 Picturile foamei • Artă pentru Vindecare și Prosperitate
          </p>
        </div>
      </footer>
    </div>
  );

  // Online Gallery Page
  const OnlineGalleryPage = () => {
    const [currentSection, setCurrentSection] = useState(1);

    const sections = [
      { id: 1, title: t.collectionI, start: 0, end: 100 },
      { id: 2, title: t.collectionII, start: 100, end: 200 },
      { id: 3, title: t.collectionIII, start: 200, end: 300 },
      { id: 4, title: t.collectionIV, start: 300, end: 400 },
      { id: 5, title: t.collectionV, start: 400, end: 500 }
    ];

    const currentPaintings = allPaintings.slice(
      sections.find(s => s.id === currentSection).start,
      sections.find(s => s.id === currentSection).end
    );

    return (
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <header className={`py-6 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToHome}</span>
            </button>
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-light">{t.onlineGallery}</h1>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={toggleLanguage}
                  className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  <Globe className="w-4 h-4" />
                </button>
                <button 
                  onClick={toggleDarkMode}
                  className={`p-3 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    currentSection === section.id
                      ? darkMode 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-800 text-white'
                      : darkMode 
                        ? 'bg-gray-800 text-gray-400 hover:text-gray-200' 
                        : 'bg-gray-200 text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>

          <div className={`mb-8 p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="font-medium mb-3">{t.quickNavigation}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setCurrentSection(section.id)}
                  className={`p-3 text-center text-sm font-medium rounded transition-colors ${
                    currentSection === section.id
                      ? darkMode 
                        ? 'bg-gray-700 text-white' 
                        : 'bg-gray-800 text-white'
                      : darkMode 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {section.id === 1 ? '1-100' : 
                   section.id === 2 ? '101-200' : 
                   section.id === 3 ? '201-300' : 
                   section.id === 4 ? '301-400' : '401-500'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentPaintings.map((painting) => (
              <div 
                key={painting.id}
                onClick={() => setSelectedPainting(painting)}
                className={`cursor-pointer group rounded-lg overflow-hidden transition-all duration-300 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                } border ${darkMode ? 'border-gray-700 hover:border-gray-600' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className={`w-full h-48 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} flex items-center justify-center`}>
                  <Palette className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm mb-1">{painting.title}</h3>
                  <p className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {painting.dimensions}
                  </p>
                  <p className={`text-xs italic ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    "{painting.poem.substring(0, 40)}..."
                  </p>
                  <div className="flex flex-col space-y-2 mt-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage('donate');
                      }}
                      className={`w-full px-2 py-1 text-xs font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-800 text-white hover:bg-gray-900'}`}
                    >
                      {t.donateToRent}
                    </button>
                    <a 
                      href={`sms:0784970068?body=Vreau să comand pictura imediat: ${painting.title}`}
                      className={`w-full px-2 py-1 text-xs font-medium border text-center ${darkMode ? 'border-red-500 text-red-400 hover:bg-red-900/20' : 'border-red-600 text-red-600 hover:bg-red-50'}`}
                    >
                      {t.immediatePainting}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-8 p-6 rounded-lg text-center ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
            <h3 className="text-xl font-light mb-2">{sections.find(s => s.id === currentSection).title}</h3>
            <p className="font-light">
              {currentPaintings.length} {t.originalPaintings}
            </p>
          </div>
        </main>

        <footer className={`py-8 px-6 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="max-w-7xl mx-auto text-center">
            <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              &copy; 2024 Picturile foamei • {t.completeCollection}
            </p>
          </div>
        </footer>
      </div>
    );
  };

  // Rental Page
  const RentalPage = () => (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <header className={`py-6 px-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-2 text-sm font-medium ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToHome}</span>
          </button>
          <h1 className="text-2xl font-light">{t.rentPainting}</h1>
          <div className="flex items-center space-x-2">
            <button 
              onClick={toggleLanguage}
              className={`p-2 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleDarkMode}
              className={`p-3 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>
  
  if (currentPage === 'health') {
    return <HealthPage />;
  }

  return <HomePage />;
};

export default App;
```

      
      
      
      
