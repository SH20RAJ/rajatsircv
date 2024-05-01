/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/j2HSKdjkkuT
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
export function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 min-h-screen">
      <div className="container px-4 md:px-6">
        <div className="space-y-6">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Research Projects</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl leading-relaxed lg:text-base leading-relaxed xl:text-xl leading-relaxed dark:text-gray-400">
              Explore our ongoing and completed research projects in blockchain technology and cryptography.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="card p-2">
              <CardHeader>
                <CardTitle>Blockchain Technology Fit Assessment Framework for Health Care</CardTitle>
                <CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <WalletIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">Seed Grant (TEQIP-3)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">Dr. R S Goswami</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">2019 - 2020</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">₹2 Lakh</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ClipboardCheckIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">Ongoing</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This project aims to develop a framework for assessing the fit of blockchain technology within
                  healthcare settings, enhancing security and efficiency.
                </p>
              </CardContent>
            </Card>
            <Card className="card p-2">
              <CardHeader>
                <CardTitle>Study and Analysis on KVNBB Technique in AVK Cryptography</CardTitle>
                <CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <WalletIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">NIT Arunachal Pradesh</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">Dr. R S Goswami, Dr. M P Dutta, Dr. S K Chakraborty</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">2016 - 2017</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">₹5 Lakh</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ClipboardCheckIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-500 dark:text-gray-400">Completed</span>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  This completed project explored the New Technique Key Variation with Noise Burst Bit (KVNBB) in
                  Automatic Variable Key (AVK) systems in cryptography to improve security protocols against various
                  cyber threats.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}


function CalendarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>)
  );
}


function ClipboardCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>)
  );
}


function DollarSignIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>)
  );
}


function UserIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}


function WalletIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>)
  );
}