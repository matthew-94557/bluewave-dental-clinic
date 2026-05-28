export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  quote: string;
  rating: number;
  highlight: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, bonding, and full smile makeovers.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600',
    iconName: 'Sparkles',
  },
  {
    id: 'invisalign',
    title: 'Invisalign & Braces',
    description: 'Straighten your teeth comfortably with clear aligners or braces.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600',
    iconName: 'Activity',
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth. Restore your confidence.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    iconName: 'Shield',
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Brighten your smile safely and effectively with our professional treatments.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
    iconName: 'Sun',
  },
];

export const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: 'dentists',
    title: 'Experienced & Certified Dentists',
    description: 'Skilled professionals with years of advanced training and expertise.',
    iconName: 'UserCheck',
  },
  {
    id: 'tech',
    title: 'Modern & Painless Technology',
    description: 'We use the latest technology for comfortable, faster, and better results.',
    iconName: 'Cpu',
  },
  {
    id: 'care',
    title: 'Friendly & Gentle Patient Care',
    description: 'We listen, we care, and we make every visit stress-free.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'pricing',
    title: 'Transparent Pricing & Plans',
    description: 'Honest pricing, clear treatment plans, and no hidden fees.',
    iconName: 'FileText',
  },
];

export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Sarah M.',
    quote: 'I used to be so nervous about going to the dentist. The team at BlueWave Dental Clinic made me feel so comfortable and my smile has never looked better!',
    rating: 5,
    highlight: 'Friendly and comforting',
  },
  {
    id: 'test-2',
    name: 'James T.',
    quote: 'The implant procedure was painless and the results are incredible. I can eat, smile, and live with total confidence again!',
    rating: 5,
    highlight: 'Highly professional care',
  },
];
