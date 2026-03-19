import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, Star, Clock, MapPin, Phone, Mail, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-1.5 rounded-lg">
            <Sparkles className="text-white size-5" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? "text-slate-900" : "text-white"}`}>
            Pristine<span className="text-emerald-500">Pro</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Reviews", "FAQ"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-medium hover:text-emerald-500 transition-colors ${isScrolled ? "text-slate-600" : "text-white/90"}`}>
              {item}
            </a>
          ))}
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            Book Now
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={isScrolled ? "text-slate-900" : "text-white"} /> : <Menu className={isScrolled ? "text-slate-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
        >
          {["Services", "About", "Reviews", "FAQ"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-600 font-medium py-2 border-b border-slate-100" onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          ))}
          <button className="bg-emerald-500 text-white w-full py-3 rounded-xl font-bold mt-2">
            Book Now
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Pristine luxury living room" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 px-3 py-1 rounded-full mb-6">
            <ShieldCheck className="text-emerald-400 size-4" />
            <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Bonded & Fully Insured</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.1] mb-6">
            Come home to a <span className="italic text-emerald-400">spotless</span> space.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
            Experience the gold standard in commercial and residential cleaning. We handle the details so you can focus on what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 group active:scale-95">
              Book in 60 Seconds
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all active:scale-95">
              View Pricing
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Customer" 
                  className="size-10 rounded-full border-2 border-slate-900 object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="size-4 fill-current" />)}
              </div>
              <p className="text-slate-300 text-sm font-medium">Trusted by 2,000+ local clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  const badges = [
    { icon: ShieldCheck, title: "Bonded & Insured", desc: "Full coverage for your peace of mind" },
    { icon: CheckCircle2, title: "Background Checked", desc: "Every cleaner is vetted and verified" },
    { icon: Clock, title: "24h Guarantee", desc: "Not happy? We'll re-clean for free" },
    { icon: Sparkles, title: "Eco-Friendly", desc: "Safe for pets, kids, and the planet" },
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-4 border border-slate-100">
                <badge.icon className="text-emerald-500 size-8" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{badge.title}</h3>
              <p className="text-xs text-slate-500 leading-tight max-w-[150px]">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuotingSection = () => {
  const [sqft, setSqft] = useState(1500);
  const [frequency, setFrequency] = useState("weekly");
  const [type, setType] = useState("residential");

  const basePrice = type === "residential" ? 0.12 : 0.18;
  const frequencyDiscount = frequency === "weekly" ? 0.8 : frequency === "biweekly" ? 0.9 : 1;
  const estimatedPrice = Math.round(sqft * basePrice * frequencyDiscount);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
              Instant Pricing, <br /><span className="text-emerald-500">No Surprises.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Get an automated quote in seconds. Our transparent pricing model ensures you know exactly what to expect before we even arrive.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="text-emerald-600 size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">No Hidden Fees</h4>
                  <p className="text-slate-500 text-sm">What you see is what you pay. Tax included.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg mt-1">
                  <CheckCircle2 className="text-emerald-600 size-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Flexible Scheduling</h4>
                  <p className="text-slate-500 text-sm">Reschedule or cancel up to 24 hours before.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16 blur-3xl" />
            
            <h3 className="text-2xl font-bold text-white mb-8">Quote Calculator</h3>
            
            <div className="space-y-8">
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Service Type</label>
                <div className="grid grid-cols-2 gap-3">
                  {["residential", "commercial"].map((t) => (
                    <button 
                      key={t}
                      onClick={() => setType(t)}
                      className={`py-3 rounded-xl font-bold transition-all border ${type === t ? "bg-emerald-500 border-emerald-500 text-white" : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"}`}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Approx. Square Footage: <span className="text-white ml-2">{sqft.toLocaleString()} sqft</span></label>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="100" 
                  value={sqft} 
                  onChange={(e) => setSqft(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Frequency</label>
                <div className="grid grid-cols-3 gap-3">
                  {["weekly", "biweekly", "one-time"].map((f) => (
                    <button 
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`py-2 px-1 rounded-xl text-sm font-bold transition-all border ${frequency === f ? "bg-emerald-500 border-emerald-500 text-white" : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600"}`}
                    >
                      {f.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-slate-800">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-slate-400 font-medium">Estimated Quote</span>
                  <div className="text-right">
                    <span className="text-4xl font-bold text-white">${estimatedPrice}</span>
                    <span className="text-slate-500 text-sm block">per visit</span>
                  </div>
                </div>
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg transition-all active:scale-[0.98]">
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Sarah Jenkins", role: "Homeowner", text: "I've tried many services, but PristinePro is on another level. The attention to detail is remarkable. My house has never felt so fresh.", rating: 5 },
    { name: "Marcus Chen", role: "Office Manager", text: "Reliable, professional, and thorough. They've been cleaning our 5,000 sqft office for a year now and we couldn't be happier.", rating: 5 },
    { name: "Elena Rodriguez", role: "Real Estate Agent", text: "I use them for all my move-out cleans. They make my listings look brand new every single time. Highly recommended!", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Don't just take our word for it. We've built our reputation on thousands of spotless spaces and happy clients.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="size-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-xs">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-emerald-500 p-1.5 rounded-lg">
                <Sparkles className="text-white size-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Pristine<span className="text-emerald-500">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Setting the standard for immaculate spaces. Premium commercial and residential cleaning services you can trust.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="size-8 bg-slate-800 rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer" />
              <div className="size-8 bg-slate-800 rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer" />
              <div className="size-8 bg-slate-800 rounded-lg hover:bg-emerald-500 transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Residential Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Commercial Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Deep Cleaning</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Move In/Out</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3"><Phone className="size-4 text-emerald-500" /> (555) 123-4567</li>
              <li className="flex items-center gap-3"><Mail className="size-4 text-emerald-500" /> hello@pristinepro.com</li>
              <li className="flex items-center gap-3"><MapPin className="size-4 text-emerald-500" /> 123 Clean St, Suite 100</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 PristinePro Cleaning Services. All rights reserved.</p>
          <p>Designed with excellence.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <QuotingSection />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
