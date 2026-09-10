import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    const { auth, currentTeam } = usePage().props;
    const dashboardUrl = currentTeam ? dashboard(currentTeam.slug) : '/';

    return (
        <>
            <Head title="Welcome" />

            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(160deg, #faf8f5 0%, #f5f0eb 50%, #ede6df 100%)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
            }}>
                {/* Decorative blurry colors */}
                <div style={{
                    position: 'absolute',
                    top: '-200px',
                    right: '-100px',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: '#f97316',
                    filter: 'blur(120px)',
                    opacity: 0.25,
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-250px',
                    left: '-150px',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    background: '#06b6d4',
                    filter: 'blur(130px)',
                    opacity: 0.2,
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    left: '-100px',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: '#e11d48',
                    filter: 'blur(120px)',
                    opacity: 0.15,
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '-50px',
                    width: '450px',
                    height: '450px',
                    borderRadius: '50%',
                    background: '#8b5cf6',
                    filter: 'blur(110px)',
                    opacity: 0.15,
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '30%',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: '#22c55e',
                    filter: 'blur(130px)',
                    opacity: 0.12,
                    pointerEvents: 'none',
                }} />

                {/* Navbar */}
                <header style={{
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: '1rem',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    {auth.user ? (
                        <Link
                            href={dashboardUrl}
                            style={{
                                padding: '0.625rem 1.5rem',
                                borderRadius: '0.5rem',
                                background: 'linear-gradient(135deg, #3d2b1f 0%, #574033 50%, #3d2b1f 100%)',
                                color: '#ffffff',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                textDecoration: 'none',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={login()}
                                style={{
                                    padding: '0.625rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    border: '1.5px solid #d6d3d1',
                                    background: 'transparent',
                                    color: '#57534e',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                Log in
                            </Link>
                            <Link
                                href={register()}
                                style={{
                                    padding: '0.625rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    background: 'linear-gradient(135deg, #3d2b1f 0%, #574033 50%, #3d2b1f 100%)',
                                    color: '#ffffff',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </header>

                {/* Main Content */}
                <main style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    <div style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                    }}>
                        {/* Logo */}
                        <div style={{
                            width: '80px',
                            height: '80px',
                            margin: '0 auto 2rem',
                            borderRadius: '1.25rem',
                            background: 'linear-gradient(135deg, #3d2b1f 0%, #574033 50%, #3d2b1f 100%)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(61, 43, 31, 0.2)',
                        }}>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>

                        <h1 style={{
                            fontSize: '3rem',
                            fontWeight: 800,
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            fontFamily: "'Instrument Sans', system-ui, sans-serif",
                            background: 'linear-gradient(135deg, #292524 0%, #57534e 50%, #292524 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Welcome
                        </h1>

                        <p style={{
                            fontSize: '1.125rem',
                            color: '#78716c',
                            lineHeight: 1.7,
                            marginBottom: '2.5rem',
                        }}>
                            A beautiful starter kit built with Laravel, React, and Inertia.js.
                            Manage your teams with ease.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}>
                            {auth.user ? (
                                <Link
                                    href={dashboardUrl}
                                    style={{
                                        padding: '0.875rem 2rem',
                                        borderRadius: '0.75rem',
                                        background: 'linear-gradient(135deg, #3d2b1f 0%, #574033 50%, #3d2b1f 100%)',
                                        color: '#ffffff',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        boxShadow: '0 2px 8px rgba(61, 43, 31, 0.2)',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        style={{
                                            padding: '0.875rem 2rem',
                                            borderRadius: '0.75rem',
                                            background: 'linear-gradient(135deg, #3d2b1f 0%, #574033 50%, #3d2b1f 100%)',
                                            color: '#ffffff',
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            textDecoration: 'none',
                                            boxShadow: '0 2px 8px rgba(61, 43, 31, 0.2)',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        href={register()}
                                        style={{
                                            padding: '0.875rem 2rem',
                                            borderRadius: '0.75rem',
                                            border: '1.5px solid #d6d3d1',
                                            background: 'rgba(255, 255, 255, 0.6)',
                                            color: '#57534e',
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        Create Account
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer style={{
                    padding: '1.5rem 2rem',
                    textAlign: 'center',
                    fontSize: '0.8125rem',
                    color: '#a8a29e',
                    position: 'relative',
                    zIndex: 1,
                }}>
                    Built with Laravel & React
                </footer>
            </div>
        </>
    );
}
