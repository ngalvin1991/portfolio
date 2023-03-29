import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faGithub
} from "@fortawesome/free-brands-svg-icons";


export default function ContactMe() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Get In Touch</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Insert text about contct .</p>
                <form action="#" class="space-y-8">
                    <div className="social-container justify-center">
                
                        <a href="https://github.com/ngalvin1991"
                            className="linkedin social">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="dark:text-gray-400"/>
                        </a>

                        <a href="https://www.linkedin.com/in/noel-galvin-58b602262/"
                            className="linkedin social">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>

                        <a href="https://www.instagram.com/noelgalvin/?hl=en"
                            className="instagram social">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>

                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your full name" required />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your email address" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="What should we talk about?" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your message goes here"></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </form>
            </div>
        </section>
    )
}