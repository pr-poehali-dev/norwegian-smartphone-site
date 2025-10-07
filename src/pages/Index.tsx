import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('alle');

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '15 999',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702452',
      category: 'premium',
      features: ['5G', 'NFC', '256GB']
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra',
      price: '14 499',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-s928-sm-s928bzkgeub-thumb-539573178?$472_472_PNG$',
      category: 'premium',
      features: ['5G', 'NFC', '512GB']
    },
    {
      id: 3,
      name: 'Google Pixel 8 Pro',
      price: '11 999',
      image: 'https://lh3.googleusercontent.com/hdF4ovDMqE5LRkkPaU-PU-nR19C12aQR1fSbL_B03DoCGLc7HdtD2QOBqRy0s3tVJrWqAqFBW7h8xKSJZ6KJcMjZUOWJYQ=rw-e365-w1200',
      category: 'premium',
      features: ['5G', 'NFC', '128GB']
    },
    {
      id: 4,
      name: 'OnePlus 12',
      price: '8 999',
      image: 'https://oasis.opstatics.com/content/dam/oasis/page/2024/global/product/12/12-overview/images/v1/spec/Silky-Black.png',
      category: 'mid',
      features: ['5G', 'NFC', '256GB']
    },
    {
      id: 5,
      name: 'Xiaomi 14 Pro',
      price: '9 499',
      image: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1707729816.67642238.png',
      category: 'mid',
      features: ['5G', 'NFC', '512GB']
    },
    {
      id: 6,
      name: 'Samsung Galaxy A54',
      price: '4 999',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/uk/sm-a546blvceub/gallery/uk-galaxy-a54-5g-sm-a546-sm-a546blvceub-thumb-535893698?$344_344_PNG$',
      category: 'mid',
      features: ['5G', 'NFC', '128GB']
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Lars Andersen',
      rating: 5,
      text: 'Fantastisk service! Fikk min nye iPhone levert på under 24 timer. Meget fornøyd med kjøpet.',
      date: '2 dager siden'
    },
    {
      id: 2,
      name: 'Emma Olsen',
      rating: 5,
      text: 'Beste priser på markedet og veldig kunnskapsrik kundeservice. Anbefales på det sterkeste!',
      date: '1 uke siden'
    },
    {
      id: 3,
      name: 'Henrik Berg',
      rating: 4,
      text: 'Bra utvalg av telefoner. Rask levering og god kommunikasjon under hele prosessen.',
      date: '2 uker siden'
    }
  ];

  const categories = [
    { id: 'alle', name: 'Alle', icon: 'Smartphone' },
    { id: 'premium', name: 'Premium', icon: 'Crown' },
    { id: 'mid', name: 'Mellomklasse', icon: 'Star' }
  ];

  const features = [
    { icon: 'Zap', title: '5G Hastighet', description: 'Lynrask internett overalt' },
    { icon: 'Battery', title: 'Lang batteritid', description: 'Opptil 48 timers bruk' },
    { icon: 'Smartphone', title: 'OLED Display', description: 'Skarp og levende skjerm' },
    { icon: 'Shield', title: '2 års garanti', description: 'Full trygghet inkludert' }
  ];

  const filteredProducts = selectedCategory === 'alle' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-dark via-secondary to-tech-dark text-white">
      <nav className="fixed top-0 w-full bg-tech-dark/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Smartphone" className="text-primary" size={32} />
            <span className="text-2xl font-bold">SMARTTELEFONER</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-white hover:text-primary">
              <Icon name="Search" size={20} className="mr-2" />
              Søk
            </Button>
            <Button variant="ghost" className="text-white hover:text-primary">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Handlekurv
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Fremtidens Telefoner
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Oppdag de nyeste smarttelefonene med 5G, kraftige kameraer og innovativ teknologi
          </p>
          <div className="flex justify-center gap-4 animate-scale-in">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Icon name="ShoppingBag" size={20} className="mr-2" />
              Handle nå
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Les mer
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-tech-dark/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Våre Fordeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Utforsk Vårt Utvalg</h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                className={selectedCategory === cat.id 
                  ? 'bg-primary text-white' 
                  : 'border-white/20 text-white hover:bg-white/10'
                }
              >
                <Icon name={cat.icon} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-white">
                    Nyhet
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {product.features.map((feat, i) => (
                      <Badge key={i} variant="outline" className="border-primary/50 text-primary">
                        {feat}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price} kr</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                      Kjøp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Hva Kundene Våre Sier</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{review.name}</h3>
                      <div className="flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{review.text}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-t from-tech-dark to-transparent">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-primary" />
              <h2 className="text-4xl font-bold mb-4 text-white">Få Eksklusiv Tilbud</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Meld deg på vårt nyhetsbrev og få 10% rabatt på ditt første kjøp
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Din e-postadresse"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-primary"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Meld deg på
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Smartphone" size={28} className="text-primary" />
                <span className="text-xl font-bold">SMARTTELEFONER</span>
              </div>
              <p className="text-gray-400">Din pålitelige partner for de nyeste smarttelefonene</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Kundeservice</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary cursor-pointer transition-colors">Kontakt oss</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Leveringsinformasjon</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Returpolicy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Kontakt Oss</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} className="text-primary" />
                  <span>+47 123 45 678</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} className="text-primary" />
                  <span>post@smarttelefoner.no</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} className="text-primary" />
                  <span>Oslo Sentrum, Norge</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Clock" size={18} className="text-primary" />
                  <span>Man-Fre: 09:00-18:00</span>
                </li>
              </ul>
              <div className="flex gap-4 mt-6">
                <Icon name="Facebook" size={24} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Instagram" size={24} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
                <Icon name="Twitter" size={24} className="text-gray-400 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-white/10">
            © 2024 Smarttelefoner. Alle rettigheter reservert.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;