import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { InboxIcon, SparklesIcon } from '@heroicons/react/24/outline';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import homeFeaturesImage from '../images/homeFeatures.png';
import homeRewardsImage from '../images/homeRewards.png';
import homeHero from '../images/homeHero.jpg';
import homeMetricsImage from '../images/homeMetricsImage.jpg';


const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Real Estate Agencies', rest: 'use Home to track repair needs.' },
    { id: 2, stat: '25K+', emphasis: 'Homes sold', rest: 'with Home as the proprietary maintenance manager.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'when using Home to help sell their house.' },
    { id: 4, stat: '12M+', emphasis: 'Users', rest: 'in multiple countries.' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Landingpage() {
    return (
        <div className="bg-white">
            <main>
                {/* Hero section */}
                <div className="relative mt-8">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                            <div className="absolute inset-0">
                                <img
                                    className="h-full w-full object-cover"
                                    src={homeHero}
                                    alt="People working on laptops"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                            </div>
                            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                    <span className="block text-white">Take control of</span>
                                    <span className="block text-indigo-200">Your Home</span>
                                </h1>
                                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                                    Track the service needed for your home with ease, all in one place.
                                </p>
                                <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                                        <Link to={'/signup'} className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-indigo-50 sm:px-8">
                                            New here? Get started
                                        </Link>
                                        <Link to={'/login'} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8">
                                            Log in
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logo Cloud */}
                <div className="bg-gray-100">
                    <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-base font-semibold text-gray-500">
                            Trusted by over 5 very average small businesses
                        </p>
                        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                    alt="StaticKit"
                                />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                    alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                <img
                                    className="h-12"
                                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                    alt="Workcation"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alternating Feature Sections */}
                <div className="relative overflow-hidden pt-16 pb-32">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                    <div className="relative">
                        <div className="lg:mx-4 lg:grid lg:max-w-8xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-8 lg:px-8">
                            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                                <div>
                                    <div>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Earn rewards by keeping your home up to date</h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Do you like to be rewarded for keeping your home up to date? We do too. By keeping track of changes needed within your home, earn special discounts on brands, services, or donate to charity.
                                        </p>
                                        <div className="mt-6">
                                            <Link to={'/signup'} className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                                                Get Started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-gray-200 pt-6">
                                    <blockquote>
                                        <div>
                                            <p className="text-base text-gray-500">
                                                &ldquo;Home assists me in keeping track of my properties and the maintenance needed. Easily the most rewarding and engaging real estate based app on the market today.&rdquo;
                                            </p>
                                        </div>
                                        <footer className="mt-3">
                                            <div className="flex items-center space-x-3">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-6 w-6 rounded-full"
                                                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="text-base font-medium text-gray-700">
                                                    Marcia Hill, Real Estate Mogul
                                                </div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className=" px-4 sm:pl-6 lg:relative lg:m-0 lg:h-full lg:px-0">
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={homeRewardsImage}
                                        alt="Rewards market page and list of rewards"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24">
                        <div className="2xl:mx-auto 2xl:grid 2xl:max-w-8xl 2xl:grid-flow-col-dense 2xl:grid-cols-2 2xl:gap-8 lg:px-8">
                            <div className="mx-auto max-w-xl px-4 sm:px-6 2xl:col-start-2 2xl:mx-0 2xl:max-w-none 2xl:py-32 2xl:px-0">
                                <div>
                                    <div>
                                        <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6">
                                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                                            All the details you need, when you need it.
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Simplifying your home feature data is our mission. Here, you can add, remove, or update each individual feature based on how you want.
                                        </p>
                                        <div className="mt-6">
                                            <Link to={'/signup'} className="inline-flex rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                                                Get started
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 2xl:col-start-1 2xl:mt-0">
                                <div className=" px-4 sm:pr-6  lg:relative  2xl:h-full 2xl:px-0">
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 2xl:absolute 2xl:right-0 2xl:h-full 2xl:w-auto lg:max-w-none"
                                        src={homeFeaturesImage}
                                        alt="Home features user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="relative bg-gray-900">
                    <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
                        <div className="h-full w-full xl:grid xl:grid-cols-2">
                            <div className="h-full xl:relative xl:col-start-2">
                                <img
                                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                    src={homeMetricsImage}
                                    alt="Two women sitting on a bed with a dog"
                                />
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                        <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                            <h2 className="text-base font-semibold">
                                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                                    Valuable Metrics
                                </span>
                            </h2>
                            <p className="mt-3 text-3xl font-bold tracking-tight text-white">
                                Get actionable data that will help visualize maintenance needs.
                            </p>
                            <p className="mt-5 text-lg text-gray-300">
                                With Home, homeowners, sellers, real estate agencies, and interested parties can see the state of a home and the services needed. Take a look at our stats:
                            </p>
                            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                                {metrics.map((item) => (
                                    <p key={item.id}>
                                        <span className="block text-2xl font-bold text-white">{item.stat}</span>
                                        <span className="mt-1 block text-base text-gray-300">
                                            <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-white">
                    <div className="mx-auto max-w-4xl py-16 px-4 sm:px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to get started?</span>
                            <span className="-mb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text pb-1 text-transparent">
                                Get in touch or create an account.
                            </span>
                        </h2>
                        <div className="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                            <Link to={'/signup'} className="flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-indigo-700">
                                Learn more
                            </Link>
                            <Link to={'/signup'} className="flex items-center justify-center rounded-md border border-transparent bg-indigo-50 px-4 py-3 text-base font-medium text-indigo-800 shadow-sm hover:bg-indigo-100">
                                Get started
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
