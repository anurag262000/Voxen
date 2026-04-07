import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-1 items-center justify-center p-6">
      <div className="glass-container glass-border p-8 md:p-12 shadow-glow-kinetic max-w-md w-full">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-transparent shadow-none p-0",
              headerTitle: "text-textMain text-2xl font-bold",
              headerSubtitle: "text-ghost",
              socialButtonsBlockButton: "bg-logic/10 border-logic/20 text-textMain hover:bg-logic/20",
              formButtonPrimary: "bg-kinetic text-void hover:bg-kinetic/90 shadow-glow-kinetic transition-all",
              formFieldInput: "bg-void/50 border-ghost/20 text-textMain focus:border-kinetic outline-none transition-all",
              dividerLine: "bg-ghost/10",
              dividerText: "text-ghost",
              footerActionLink: "text-kinetic hover:text-kinetic/80 underline-offset-4",
              formFieldErrorText: "text-red-400",
              identityPreviewText: "text-textMain",
              identityPreviewEditButtonIcon: "text-kinetic",
            }
          }}
        />
      </div>
    </div>
  );
}
