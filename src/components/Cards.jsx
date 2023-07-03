import React from "react";
import { SiTailwindcss, SiXampp, SiReact } from 'react-icons/si'

const Cards = () => {

    return (
        <section className="w-full p-16 bg-white" id="cards">
            <h2 className="text-[#00df9a] font-bold text-2xl uppercase text-center">Tech Stack</h2>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
                <div className="w-full shadow-xl flex flex-col items-center p-4 md:my-4 rounded-lg hover:scale-105 duration-300">
                    <SiReact size={100} color="#61dafb" />
                    <p className="text-gray-500 text-sm pt-4">
                        React.js is a powerful JavaScript library used for building interactive and dynamic user interfaces. With its component-based architecture and virtual DOM, React enables developers to create reusable UI components and efficiently update them when the underlying data changes. It provides a declarative approach to UI development, making it easier to describe how the UI should look based on the application state. React's versatility and extensive ecosystem of tools and libraries have made it a popular choice for developing scalable and responsive web applications.
                    </p>
                </div>
                <div className="w-full shadow-xl flex flex-col items-center p-4 md:my-4 rounded-lg hover:scale-105 duration-300">
                    <SiTailwindcss size={100} color="#01b7d6" />
                    <p className="text-gray-500 text-sm pt-4">
                        Tailwind CSS is a utility-first CSS framework that provides a comprehensive set of pre-built classes to rapidly build modern and responsive user interfaces. It promotes a highly customizable and low-level approach to styling, allowing developers to easily compose and design their UI components. With Tailwind CSS, you can quickly apply utility classes directly in your HTML markup, eliminating the need for writing custom CSS. It offers a wide range of utility classes for spacing, typography, flexbox, grid layouts, and more, giving developers great flexibility and efficiency in crafting unique designs. By leveraging Tailwind CSS, developers can streamline their styling workflow, achieve consistent designs, and build visually appealing and responsive web applications.
                    </p>
                </div>
                <div className="w-full shadow-xl flex flex-col items-center p-4 md:my-4 rounded-lg hover:scale-105 duration-300">
                    <SiXampp size={100} color="#fb7a24" />
                    <p className="text-gray-500 text-sm pt-4">
                        XAMPP is a cross-platform software package that provides an easy-to-install and all-in-one solution for setting up a local web server environment. The name XAMPP stands for Apache, MySQL/MariaDB, PHP, and Perl, which are the core components included in the package. XAMPP is widely used by developers for local web development and testing purposes. It provides a user-friendly control panel to start and stop the server services, and it also includes additional tools like phpMyAdmin for managing databases and FileZilla FTP server for file transfer. With XAMPP, developers can quickly create a local server environment on their computer, enabling them to develop, debug, and test their web applications efficiently before deploying them to a live server.
                    </p>
                </div>
            </div>
        </section>
    )

}

export default Cards