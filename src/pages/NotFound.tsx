import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
            <h1 className="gradient-text mb-4 text-3xl font-semibold">Page introuvable</h1>
            <Link to="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
    );
}