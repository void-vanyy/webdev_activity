import type { ReactNode } from 'react';

type Props = {
    title: string;
    children: ReactNode;
};

export default function AuthSplitLayout({ title, children }: Props) {
    return (
        <>
            <div className="auth-bg-blobs">
                <div className="art-blob art-blob-1" />
                <div className="art-blob art-blob-2" />
                <div className="art-blob art-blob-3" />
                <div className="art-blob art-blob-4" />
                <div className="art-blob art-blob-5" />
                <div className="art-blob art-blob-6" />
            </div>

            <div className="auth-card-container">
                <div className="auth-form-wrapper">
                    <div className="auth-card">
                        <h1 className="auth-title">{title}</h1>
                        {children}
                    </div>
                </div>
            </div>

            <style>{`
                html, body, #app {
                    overflow: hidden !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    max-width: 100vw !important;
                }

                @keyframes blobFloat1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -40px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.95); }
                }
                @keyframes blobFloat2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(-25px, 15px) scale(1.08); }
                    50% { transform: translate(15px, -30px) scale(1.12); }
                    75% { transform: translate(-10px, 25px) scale(0.98); }
                }
                @keyframes blobFloat3 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(20px, 30px) scale(1.15); }
                }

                .auth-bg-blobs {
                    position: fixed;
                    inset: 0;
                    z-index: 0;
                    overflow: hidden;
                    background: linear-gradient(160deg, #0c0a1a 0%, #150e28 40%, #1a1032 70%, #0f0c1f 100%);
                }

                .art-blob {
                    position: absolute;
                    border-radius: 50%;
                }

                .art-blob-1 {
                    width: 50vw;
                    height: 50vw;
                    top: -10%;
                    left: -10%;
                    background: radial-gradient(circle, #f97316 0%, #ea580c 30%, transparent 65%);
                    filter: blur(80px);
                    opacity: 0.8;
                    animation: blobFloat1 15s ease-in-out infinite;
                }

                .art-blob-2 {
                    width: 45vw;
                    height: 45vw;
                    top: 15%;
                    right: -8%;
                    background: radial-gradient(circle, #22d3ee 0%, #0891b2 30%, transparent 65%);
                    filter: blur(90px);
                    opacity: 0.75;
                    animation: blobFloat2 18s ease-in-out infinite;
                }

                .art-blob-3 {
                    width: 40vw;
                    height: 40vw;
                    bottom: -8%;
                    left: 8%;
                    background: radial-gradient(circle, #a855f7 0%, #7c3aed 30%, transparent 65%);
                    filter: blur(85px);
                    opacity: 0.7;
                    animation: blobFloat3 20s ease-in-out infinite;
                }

                .art-blob-4 {
                    width: 35vw;
                    height: 35vw;
                    top: 50%;
                    left: 30%;
                    background: radial-gradient(circle, #e11d48 0%, #be123c 30%, transparent 65%);
                    filter: blur(75px);
                    opacity: 0.6;
                    animation: blobFloat2 22s ease-in-out infinite reverse;
                }

                .art-blob-5 {
                    width: 30vw;
                    height: 30vw;
                    top: 5%;
                    left: 45%;
                    background: radial-gradient(circle, #22c55e 0%, #16a34a 30%, transparent 65%);
                    filter: blur(70px);
                    opacity: 0.55;
                    animation: blobFloat1 17s ease-in-out infinite reverse;
                }

                .art-blob-6 {
                    width: 25vw;
                    height: 25vw;
                    bottom: 15%;
                    right: 12%;
                    background: radial-gradient(circle, #3b82f6 0%, #2563eb 30%, transparent 65%);
                    filter: blur(65px);
                    opacity: 0.65;
                    animation: blobFloat3 14s ease-in-out infinite reverse;
                }

                .auth-card-container {
                    position: fixed;
                    inset: 0;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 6%;
                }

                .auth-form-wrapper {
                    width: 100%;
                    max-width: 560px;
                }

                .auth-title {
                    font-size: 2.25rem;
                    font-weight: 800;
                    text-align: center;
                    margin-bottom: 1.75rem;
                    letter-spacing: 0.08em;
                    font-family: 'Instrument Sans', system-ui, sans-serif;
                    color: #1c1917;
                }

                /* Card */
                .auth-card {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(30px) saturate(1.2);
                    -webkit-backdrop-filter: blur(30px) saturate(1.2);
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 1.5rem;
                    padding: 2.5rem 2rem;
                    box-shadow:
                        0 4px 6px -1px rgba(0, 0, 0, 0.03),
                        0 10px 15px -3px rgba(0, 0, 0, 0.05),
                        0 20px 25px -5px rgba(0, 0, 0, 0.04),
                        inset 0 1px 0 rgba(255, 255, 255, 0.4);
                }

                .auth-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                }

                .auth-form .grid.gap-2,
                .auth-form .grid.gap-6 {
                    display: flex;
                    flex-direction: column;
                    gap: 1.125rem;
                }

                .auth-form label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #44403c;
                }

                .auth-form input[type="email"],
                .auth-form input[type="text"],
                .auth-form input[type="password"],
                .auth-form input:not([type]) {
                    width: 100%;
                    padding: 0.875rem 1rem;
                    border: 1.5px solid rgba(255, 255, 255, 0.25);
                    border-radius: 0.875rem;
                    background: rgba(255, 255, 255, 0.15);
                    font-size: 0.9375rem;
                    color: #1c1917;
                    transition: all 0.25s ease;
                    outline: none;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
                }

                .auth-form input::placeholder {
                    color: #57534e;
                }

                .auth-form input:hover {
                    border-color: rgba(0, 0, 0, 0.2);
                    background: rgba(255, 255, 255, 0.3);
                }

                .auth-form input:focus {
                    border-color: rgba(0, 0, 0, 0.3);
                    background: rgba(255, 255, 255, 0.35);
                    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06);
                }

                /* Submit button */
                .auth-submit-btn {
                    width: 100%;
                    margin: 0.5rem 0 0;
                    padding: 0.8125rem 2rem;
                    border: none;
                    border-radius: 0.875rem;
                    background: rgba(255, 255, 255, 0.15);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    color: #1c1917;
                    font-size: 0.9375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    letter-spacing: 0.03em;
                }

                .auth-submit-btn:hover {
                    background: rgba(255, 255, 255, 0.25);
                    transform: translateY(-1px);
                }

                .auth-submit-btn:active {
                    transform: translateY(0);
                }

                .auth-submit-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                    transform: none;
                }

                /* Footer */
                .auth-footer {
                    text-align: center;
                    margin-top: 1.25rem;
                    font-size: 0.8125rem;
                    color: #1c1917 !important;
                }

                .auth-footer a,
                .auth-footer [data-test] {
                    color: #0c0a09 !important;
                    font-weight: 600 !important;
                    text-decoration: none !important;
                    transition: color 0.2s ease;
                }

                .auth-footer a:hover {
                    color: #0c0a09;
                    text-decoration: underline;
                    text-underline-offset: 3px;
                }

                /* Passkey button override */
                .auth-card button[type="button"][data-slot="button"] {
                    background: rgba(255, 255, 255, 0.15) !important;
                    backdrop-filter: blur(10px) !important;
                    -webkit-backdrop-filter: blur(10px) !important;
                    color: #1c1917 !important;
                    border: 1px solid rgba(0, 0, 0, 0.1) !important;
                    border-radius: 0.875rem !important;
                    transition: all 0.3s ease !important;
                    font-weight: 600 !important;
                    padding: 0.8125rem 2rem !important;
                }

                .auth-card button[type="button"][data-slot="button"]:hover {
                    background: rgba(255, 255, 255, 0.25) !important;
                    transform: translateY(-1px);
                }

                .auth-card button[type="button"][data-slot="button"]:disabled {
                    opacity: 0.5 !important;
                }

                /* Separator override */
                .auth-card .relative.my-6 .relative.flex span {
                    background: transparent !important;
                    color: #44403c !important;
                    font-weight: 500 !important;
                    letter-spacing: 0.05em !important;
                    font-size: 0.6875rem !important;
                }

                .auth-card .relative.my-6 .absolute.inset-0 div {
                    background: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.25) 50%, transparent 100%) !important;
                    height: 1px !important;
                }

                @media (max-width: 480px) {
                    .auth-form-wrapper {
                        max-width: 100%;
                    }
                    .auth-card {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </>
    );
}
