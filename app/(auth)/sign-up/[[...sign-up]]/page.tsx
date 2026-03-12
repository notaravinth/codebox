import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid w-full place-items-center bg-black px-4 font-game">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 uppercase mb-2">
            CodeBox
          </h1>
          <p className="text-sm text-yellow-400/70 uppercase tracking-widest">
            Create your account
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-black border-4 border-yellow-400 shadow-[8px_8px_0_0_#fbbf24] font-game",
              headerTitle: "text-2xl font-bold text-yellow-400 uppercase",
              headerSubtitle: "text-yellow-400/60 uppercase text-xs",
              socialButtonsBlockButton:
                "bg-yellow-400 text-black border-2 border-yellow-400 shadow-[4px_4px_0_0_#000] hover:bg-yellow-300 font-bold uppercase",
              formButtonPrimary:
                "bg-yellow-400 border-2 border-yellow-400 shadow-[4px_4px_0_0_#000] hover:bg-yellow-300 text-black font-bold uppercase",
              formFieldInput:
                "bg-black border-2 border-yellow-400 shadow-[3px_3px_0_0_#fbbf24] focus:border-yellow-300 text-yellow-400 placeholder:text-yellow-400/30",
              formFieldLabel: "text-yellow-400 font-bold uppercase text-xs",
              footerActionLink:
                "text-yellow-400 font-bold underline hover:text-yellow-300",
              dividerLine: "bg-yellow-400/20",
              dividerText: "text-yellow-400/40 font-bold uppercase text-xs",
              identityPreviewEditButton: "text-yellow-400 border-yellow-400",
              formFieldInputShowPasswordButton:
                "text-yellow-400 hover:text-yellow-300",
            },
          }}
        />
      </div>
    </div>
  );
}
