import { Form, Head } from '@inertiajs/react';
import { Mail } from 'lucide-react';
import AuthSplitLayout from '@/layouts/auth/auth-split-layout';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { login } from '@/routes';
import { email } from '@/routes/password';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthSplitLayout title="Forgot Password">
            <Head title="Forgot password" />

            {status && (
                <div className="mb-4 text-center text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="auth-card">
                <Form {...email.form()} className="auth-form">
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email address</Label>
                                <div style={{ position: 'relative' }}>
                                    <Mail style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', width: '1.125rem', height: '1.125rem', color: '#a8a29e', pointerEvents: 'none', zIndex: 10 }} />
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        autoFocus
                                        placeholder="email@example.com"
                                        style={{ paddingLeft: '3rem' }}
                                    />
                                </div>
                                <InputError message={errors.email} />
                            </div>

                            <Button
                                type="submit"
                                className="auth-submit-btn"
                                disabled={processing}
                                data-test="email-password-reset-link-button"
                            >
                                {processing && <Spinner />}
                                Email password reset link
                            </Button>
                        </>
                    )}
                </Form>
            </div>

            <div className="auth-footer">
                Or, return to{' '}
                <TextLink href={login()}>log in</TextLink>
            </div>
        </AuthSplitLayout>
    );
}
