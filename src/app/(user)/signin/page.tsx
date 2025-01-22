import { signIn } from "@/auth";
import Container from "@/components/Container";
import { SignInForm } from "@/components/SignInForm";
import googleImage from "@/assets/googleImage.png";
import githubImage from "@/assets/githubImage.png";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/manageSession";

const SignInPage = async () => {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <Container className="py-20 flex flex-col items-center justify-center">
      <div className="max-w-[500px] w-full bg-bgLight p-6 sm:p-10 rounded-lg shadow-sm shadow-darkOr/50">
        <div className="mb-6">
          <h2 className="text-lg sm:text-xl font-bold">Oauth sign in</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
            {/* Google Sign-in */}
            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/" });
              }}
              className="flex items-center gap-2 border border-blue-500 font-semibold bg-blue-50 px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white duration-300 ease-in-out w-full sm:w-auto"
            >
              <Image
                src={googleImage}
                alt="googleImage"
                className="w-6 sm:w-8"
              />
              <button type="submit" className="text-sm sm:text-base">
                Sign in with Google
              </button>
            </form>

            {/* Github Sign-in */}
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/" });
              }}
              className="flex items-center gap-2 border border-slate-500 font-semibold bg-slate-50 px-4 py-2 rounded-md hover:bg-slate-200 duration-300 ease-in-out w-full sm:w-auto"
            >
              <Image
                src={githubImage}
                alt="githubImage"
                className="w-6 sm:w-8"
              />
              <button type="submit" className="text-sm sm:text-base">
                Sign in with Github
              </button>
            </form>
          </div>
        </div>

        {/* Sign-in Form */}
        <SignInForm />
      </div>
    </Container>
  );
};

export default SignInPage;
