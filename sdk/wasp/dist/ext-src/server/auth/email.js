export const getVerificationEmailContent = ({ verificationLink }) => ({
    subject: 'Verify your email',
    text: `Click the link below to verify your email: ${verificationLink}`,
    html: `
        <p>Click the link below to verify your email</p>
        <a href="${verificationLink}">Verify email</a>
    `,
});
export const getPasswordResetEmailContent = ({ passwordResetLink }) => ({
    subject: 'Password reset',
    text: `Click the link below to reset your password: ${passwordResetLink}`,
    html: `
        <p>Click the link below to reset your password</p>
        <a href="${passwordResetLink}">Reset password</a>
    `,
});
//# sourceMappingURL=email.js.map