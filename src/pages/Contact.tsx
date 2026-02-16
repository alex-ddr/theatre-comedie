import { useState } from "react";
import Hero from "@/components/layout/Hero";
import { siteData } from "@/lib/content";

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleFormChange = (e: React.FormEvent<HTMLFormElement>) => {
        const form = e.currentTarget;
        setIsFormValid(form.checkValidity());
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        
        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const messageText = formData.get('message') as string;

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                    name: `${firstName} ${lastName.toUpperCase()}`,
                    email: email,
                    phone: phone,
                    message: `
${messageText}`.trim(),
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage('Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
                (e.target as HTMLFormElement).reset();
                setIsFormValid(false);
            } else {
                throw new Error('Échec de l\'envoi');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.');
        }
    };

    return (
        <div>
            <Hero 
                title="Contactez-moi" 
                subtitle="Une question sur une pièce ? Besoin d'informations pour une représentation ? N'hésitez pas à me contacter."
            />

            <section className="relative bg-[#0b0b12]/55 ">
                <div className="mx-auto max-w-5xl px-4 py-16">
                    {/* Informations de contact */}
                    <div className="mb-12 grid gap-6 md:grid-cols-2 ">
                        {/* Email */}
                        <a
                            href={`mailto:${siteData.email}`}
                            className=" glass group flex flex-col items-center rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(255,122,24,0.15)]"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500 shadow-lg">
                                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white/90">Email</h3>
                            <p className="text-center text-pink-400 transition-colors group-hover:text-pink-300">
                                {siteData.email}
                            </p>
                        </a>

                        {/* Téléphone */}
                        <a
                            href={`tel:${siteData.phone.replace(/\s/g, '')}`}
                            className="glass group flex flex-col items-center rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08] hover:shadow-[0_8px_40px_rgba(255,122,24,0.15)]"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-pink-500 shadow-lg">
                                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="mb-2 text-xl font-semibold text-white/90">Téléphone</h3>
                            <p className="text-center text-pink-400 transition-colors group-hover:text-pink-300">
                                {siteData.phone}
                            </p>
                        </a>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="glass rounded-3xl p-8">
                        <h2 className="gradient-text mb-6 text-2xl font-bold">Envoyez-moi un message</h2>
                        
                        {/* Messages de statut */}
                        {status === 'success' && (
                            <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                                {message}
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                                {message}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit} onChange={handleFormChange}>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-white/80">
                                        Prénom <span className="text-pink-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-colors focus:border-pink-500/50 focus:bg-white/10 focus:outline-none"
                                        placeholder="Votre prénom"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-white/80">
                                        Nom <span className="text-pink-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-colors focus:border-pink-500/50 focus:bg-white/10 focus:outline-none"
                                        placeholder="Votre nom"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                                        Email <span className="text-pink-400">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-colors focus:border-pink-500/50 focus:bg-white/10 focus:outline-none"
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white/80">
                                        Téléphone <span className="text-pink-400">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-colors focus:border-pink-500/50 focus:bg-white/10 focus:outline-none"
                                        placeholder="Votre numéro de téléphone"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                                    Message <span className="text-pink-400">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 backdrop-blur-sm transition-colors focus:border-pink-500/50 focus:bg-white/10 focus:outline-none"
                                    placeholder="Votre message..."
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={!isFormValid || status === 'loading'}
                                className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-500/25 transition-all enabled:hover:scale-[1.02] enabled:hover:shadow-xl enabled:hover:shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}