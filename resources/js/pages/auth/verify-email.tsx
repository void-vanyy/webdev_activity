import { Form, Head } from '@inertiajs/react';
import AuthSplitLayout from '@/layouts/auth/auth-split-layout';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { logout } from '@/routes';
import { send } from '@/routes/verification';

export default function VerifyEmail({ status }: { status?: string }) {
    return (
        <AuthSplitLayout title="Verify Email">
            <Head title="Email verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    A new verification link has been sent to the email address
                    you provided during registration.
                </div>
            )}

            <div className="auth-card">
                <Form {...send.form()} className="auth-form" style={{ textAlign: 'center' }}>
                    {({ processing }) => (
                        <>
                            <p style={{ color: '#78716c', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                                Please verify your email address by clicking on the link we just emailed to you.
                            </p>

                            <Button disabled={processing} className="auth-submit-btn">
                                {processing && <Spinner />}
                                Resend verification email
                            </Button>
                        </>
                    )}
                </Form>
            </div>

            <div className="auth-footer">
                <TextLink
                    href={logout()}
                >
                    Log out
                </TextLink>
            </div>
        </AuthSplitLayout>
    );
}
