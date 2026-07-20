type AuthLayoutProps = {
  children: React.ReactNode;
};

function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B1120] px-6">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>

    </main>
  );
}

export default AuthLayout;