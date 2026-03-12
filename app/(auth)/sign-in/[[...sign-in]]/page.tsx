import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid w-full place-items-center bg-yellow-400 px-4 font-game">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black uppercase mb-2">
            CodeBox
          </h1>
          <p className="text-sm text-black/70 uppercase tracking-widest">
            Sign in to continue
          </p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-white border-4 border-black shadow-[8px_8px_0_0_#000] font-game",
              headerTitle: "text-2xl font-bold text-black uppercase",
              headerSubtitle: "text-black/60 uppercase text-xs",
              socialButtonsBlockButton:
                "bg-black text-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#fbbf24] hover:bg-yellow-400 hover:text-black font-bold uppercase",
              formButtonPrimary:
                "bg-yellow-400 border-2 border-black shadow-[4px_4px_0_0_#000] hover:bg-yellow-300 text-black font-bold uppercase",
              formFieldInput:
                "border-2 border-black shadow-[3px_3px_0_0_#000] focus:border-yellow-400 focus:shadow-[3px_3px_0_0_#fbbf24]",
              formFieldLabel: "text-black font-bold uppercase text-xs",
              footerActionLink:
                "text-black font-bold underline hover:text-yellow-600",
              dividerLine: "bg-black/20",
              dividerText: "text-black/40 font-bold uppercase text-xs",
              identityPreviewEditButton: "text-black border-black",
              formFieldInputShowPasswordButton:
                "text-black hover:text-yellow-600",
            },
          }}
        />
      </div>
    </div>
  );
}
