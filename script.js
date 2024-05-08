// document.getElementById("nvidiaBtn").addEventListener("click", function() {
//     document.getElementById("dropdownContainer").classList.remove("hidden");
//     document.getElementById("insightsOptions").classList.add("hidden");
//     document.getElementById("visualizationsOptions").classList.add("hidden");
//     populateInsights("Nvidia");
// });

// document.getElementById("googleBtn").addEventListener("click", function() {
//     document.getElementById("dropdownContainer").classList.remove("hidden");
//     document.getElementById("insightsOptions").classList.add("hidden");
//     document.getElementById("visualizationsOptions").classList.add("hidden");
//     populateInsights("Google");
// });

// document.getElementById("dropdown").addEventListener("change", function() {
//     var selectedOption = document.getElementById("dropdown").value;
//     if (selectedOption === "insights") {
//         document.getElementById("insightsOptions").classList.remove("hidden");
//         document.getElementById("visualizationsOptions").classList.add("hidden");
//     } else if (selectedOption === "visualizations") {
//         document.getElementById("visualizationsOptions").classList.remove("hidden");
//         document.getElementById("insightsOptions").classList.add("hidden");
//     }
// });











// function populateInsights(company) {
//     var insightsDiv = document.querySelector(".insights");
//     insightsDiv.innerHTML = "";

//     // Object containing insight names and their corresponding output text for each company
//     var insightsData = {
//         "nvidia": {
//             insightNames: [
//                 "Financial Statements",
//                 "Services & Revenue",
//                 "Market & Distribution",
//                 "Competitive Landscape",
//                 "Research and Development",
//                 "Operating Expenses",
//                 "Risk Factor",
//                 "Political and Economic factor",
//                 "Legal matters",
//                 "Future Prospects"
//             ],
//             insightTexts: {
//                 "Financial Statements": "\n\nThe revenue from significant customers, those representing 10% or more of the total revenue for the respective dates, is summarized as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Revenue: | | | |\n| Customer A | $11 | % | $13 | % | $11 | % |\n| Customer B | $10 | % | $9 | % | $7 | % |\n\nAdditionally, the gross profit and gross margin for each year are as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Gross Profit: | | | |\n| Customer A | $8 | % | $9 | % | $8 | % |\n| Customer B | $7 | % | $6 | % | $5 | % |\n| Gross Margin: | | | |\n| Customer A | 73 | % | 69 | % | 73 | % |\n| Customer B | 70 | % | 67 | % | 71 | % |\n\nIt should be noted that the revenue from significant customers, as well as the gross profit and gross",
//                 "Services & Revenue": "\nOur business model consists of three main components: creating and selling NVIDIA-branded products and services, providing our processors to original equipment manufacturers (OEMs), and licensing our valuable intellectual property. \n\nNVIDIA-branded products and services refer to our visual computing platforms, which cater to four major markets: Gaming, Enterprise, High Performance Computing (HPC) & Cloud, and Automotive.",
//                 "Market & Distribution": "Competition have affected our business\n\nAs NVIDIA’s business has evolved from primarily focusing on gaming products to expanding into broader markets and transitioning from chips to platforms and complete systems to software, our avenues to market have also evolved. In addition to sales to customers in our partner network, we also utilize e-tail channels and sell directly to cloud service providers and enterprise customers. However, our business has been affected by seasonality and competition.",
//                 "Competitive Landscape": "\n\nOur current competitors include suppliers and licensors of discrete and integrated GPUs, as well as accelerated computing processing solutions. These solutions may include chipsets that incorporate 3D graphics functionality as part of their existing offerings. Some of our competitors in this space include Advanced Micro Devices (AMD), ARM Holdings plc, Imagination Technologies Group plc, Intel Corporation (Intel), and Xilinx, Inc.",
//                 "Research and Development": "\n\nWe strongly believe that in order to maintain our future success, it is crucial to continuously introduce new and improved products that incorporate cutting-edge accelerated computing technology. To achieve this, our research and development strategy is centered around a unified hardware and software architecture. Our product development process is a lengthy one, taking several years to design and launch, and we simultaneously work on multiple generations of our architecture. Our research and development efforts encompass various aspects such as software engineering, which includes the development of our CUDA platform, as well as hardware engineering for our GPUs, Tegra processors, and systems. Additionally, we also have a team dedicated to very large scale integration design engineering, process engineering, and architecture and algorithms. These combined efforts allow us to consistently deliver top-of-the-line products to our customers.",
//                 "Operating Expenses": "\nThe gross margin for fiscal year 2018 was reported at 59.9%, which showed an increase from the previous year's margin of 58.8%. This growth can be attributed to various factors such as a favorable shift in product mix, the strong performance of our GeForce gaming GPUs, and the expanding demand for our GPU computing platform in areas such as cloud computing, deep learning, AI, and graphics virtualization. However, this growth was partially offset by the conclusion of our patent license agreement with Intel.\n\nIn terms of operating expenses, the company reported a total of $2.61 billion for fiscal year 2018, which was a significant increase from the $2.13 billion recorded in the previous year. This rise can be attributed to the growth of our workforce and related costs, as well as investments in various growth initiatives, including gaming, AI, and autonomous driving. These investments demonstrate our commitment to expanding our presence in these areas and driving future growth for the company. ",
//                 "Risk Factor": "\n-Our dependence on a few key customers for a significant portion of our revenue, and the potential loss of these customers or reduction in their demand for our products.\n-The highly competitive and rapidly changing market for our products, which may result in decreased demand, pricing pressure, or loss of market share.\n-Our reliance on third-party suppliers for critical components and potential disruptions or delays in their delivery, which could impact our ability to meet customer demand.\n-Our vulnerability to fluctuations in the global economy and changes in consumer spending habits, which could lead to reduced demand for our products.\n-Our exposure to potential intellectual property disputes or patent infringement claims, which could result in costly legal proceedings and damage to our reputation.\n-Our dependence on key personnel and the potential loss of their services, which could disrupt our operations and harm our business.\n-Our reliance on strategic partnerships and joint ventures, which may not result in the expected benefits or could be terminated, impacting our ability to grow and compete.\n-Our exposure to cybersecurity threats and data breaches, which could compromise our sensitive information and harm our business operations.\n-Our compliance with various laws and regulations, and any failure to comply could result in penalties and damage to our reputation.\n-Changes in government policies and regulations, particularly in the areas of trade",
//                 "Political and Economic factor": "\nthe potential impact of political and economic factors on our business operations in various countries.\n\n- The commercial significance of our operations, as well as our competitors' operations, in specific countries and regions is important.\n- Our products are manufactured in various locations.\n- Our strategic technology and product directions may vary in different countries.\n- We must consider the potential impact of political and economic factors on our business operations in different countries.",
//                 "Legal matters": " \n\nIn September 2014, NVIDIA filed complaints against Qualcomm, Inc. and various Samsung entities in both the United States International Trade Commission (ITC) and the United States District Court for the District of Delaware. These complaints alleged that Qualcomm and the Samsung entities had infringed upon certain patents related to graphics processing. \n\nIn response, in November 2014, Samsung filed complaints against NVIDIA in the ITC and the United States District Court for the Eastern District of Virginia. These complaints alleged that NVIDIA had also infringed upon certain patents. \n\nThe ITC is an independent, quasi-judicial federal agency responsible for investigating and determining the impact of imports on U.S. industries. The United States District Court is a federal court system that handles both civil and criminal cases. \n\nThese legal actions, known as litigation, are ongoing and involve multiple parties. Litigation is a legal process where parties present their arguments and evidence to a court or other legal authority in order to resolve a dispute. In this case, the dispute is regarding the alleged patent infringement by both Qualcomm and NVIDIA. \n\nThe outcome of this litigation will have significant implications for both companies and the technology industry as a whole. It will determine the validity of the patents in question and could result in financial damages or injunctions",
//                 "Future Prospects": "'\n\nIn recent years, our company has made significant strides in our GPU business. In fiscal year 2015, we proudly announced and successfully shipped our highly anticipated GeForce GPUs, which were based on our innovative Maxwell architecture. This launch was met with great success, as we were able to surpass a milestone of fifty million installations of our GeForce Experience client. This client offers valuable features such as game-ready drivers, optimized play settings, and the ability to stream and share gameplay experiences.\n\nLooking towards the future, we are excited to share that we have already begun working on our next generation of GPUs. Our Pascal architecture is set to succeed Maxwell and we are confident that it will push the boundaries of what is possible in the world of graphics processing. Some of the exciting features that Pascal is expected to offer include 3D memory and NVLink interconnect technology. These advancements will allow for even more impressive and immersive graphics capabilities.\n\nWhile we are proud of our recent achievements and have high hopes for the future, we also recognize that there will be challenges ahead. As technology continues to advance at a rapid pace, we must stay at the forefront of innovation and constantly adapt to the changing needs and demands of our customers. We are committed to meeting these challenges head on and continuing to push the boundaries of'"

//             }
//         },
//         "google": {
//             insightNames: [
//                 "Financial Statements",
//                 "Services & Revenue",
//                 "Market & Distribution",
//                 "Competitive Landscape",
//                 "Operating Expenses and R&D",
//                 "Risk Factor",
//                 "Political and Economic factor",
//                 "Legal matters",
//                 "Future Prospects"
//             ],
//             insightTexts: {
//                 "Financial Statements": "",
//                 "Services & Revenue": "Actual output text for Nvidia Market Trends",
//                 "Market & Distribution": "Actual output text for Nvidia Product Development",
//                 "Competitive Landscape": "Competitors in Google's space offer similar products and services, such as search engines, cloud computing solutions, mobile operating systems, and digital advertising platforms. Major competitors include Microsoft (Bing, Azure), Amazon (AWS), Apple (Safari, iCloud), and Facebook (Facebook Ads, Instagram).",
//                 "Research and Development": "Google invests heavily in research and development to innovate across its product lines. Areas of focus include artificial intelligence (AI), machine learning, natural language processing, quantum computing, and other emerging technologies. R&D efforts aim to enhance existing products and develop new technologies to maintain a competitive edge.",
//                 "Operating Expenses": "Google's operating expenses include costs related to sales and marketing, research and development, and general administration. These expenses cover employee salaries, advertising expenses, facility costs, and other overheads. Despite these costs, Google aims to manage expenses efficiently while continuing to invest in growth opportunities.",
//                 "Risk Factor": "Google faces various risks including regulatory challenges, competition, cybersecurity threats, and changes in consumer behavior. Additionally, dependence on advertising revenue and reliance on data collection for targeted advertising pose regulatory and reputational risks. Navigating these risks is crucial for Google's continued success.",
//                 "Political and Economic factor": "Google operates globally and is influenced by political and economic factors in various countries. Political instability, trade policies, and economic fluctuations can impact Google's business operations, revenue, and profitability. Adapting to regulatory environments and geopolitical dynamics is essential for Google's sustained growth.",
//                 "Legal matters": " Google has faced legal challenges related to antitrust, privacy, intellectual property, and other areas. Past litigation includes cases involving copyright infringement, data privacy violations, and regulatory fines. Google continues to monitor legal developments and defend its interests through litigation and compliance efforts.",
//                 "Future Prospects": "Google remains optimistic about its future prospects, focusing on innovation, expansion into new markets, and strategic acquisitions. Investments in emerging technologies like AI, cloud computing, and autonomous vehicles are expected to drive long-term growth. Google aims to continue delivering value to its users, customers, and shareholders while adapting to evolving market dynamics and technological advancements."

//             }
//         }
//     };

//     var companyInsights = insightsData[company.toLowerCase()];

//     for (var i = 0; i < companyInsights.insightNames.length; i++) {
//         var btn = document.createElement("button");
//         // btn.textContent = company + " " + companyInsights.insightNames[i];
//         btn.textContent = companyInsights.insightNames[i];
//         btn.setAttribute("id", company.toLowerCase() + companyInsights.insightNames[i].replace(" ", "") + "Btn");
//         insightsDiv.appendChild(btn);

//         // Add event listener to display the corresponding output text
//         btn.addEventListener("click", function(event) {
//             // Retrieve insight name from the button text
//             var insightName = event.target.textContent.replace(company + " ", "");
//             var insightText = companyInsights.insightTexts[insightName]; // Retrieve actual output text
//             document.getElementById("insightsOutput").textContent = insightText || "No output text available";
//         });
//     }
// }



// New things from here

// document.addEventListener("DOMContentLoaded", function () {
//     const nvidiaBtn = document.getElementById("nvidiaBtn");
//     const googleBtn = document.getElementById("googleBtn");
//     const dropdownContainer = document.getElementById("dropdownContainer");
//     const insightsOptions = document.getElementById("insightsOptions");
//     const visualizationsOptions = document.getElementById("visualizationsOptions");
//     const nvidiaVisualizations = document.getElementById("nvidiaVisualizations");
//     const googleVisualizations = document.getElementById("googleVisualizations");

//     nvidiaBtn.addEventListener("click", function () {
//         dropdownContainer.classList.remove("hidden");
//         insightsOptions.classList.add("hidden");
//         visualizationsOptions.classList.add("hidden");
//         populateInsights("Nvidia");
//     });

//     googleBtn.addEventListener("click", function () {
//         dropdownContainer.classList.remove("hidden");
//         insightsOptions.classList.add("hidden");
//         visualizationsOptions.classList.add("hidden");
//         populateInsights("Google");
//     });

//     document.getElementById("dropdown").addEventListener("change", function () {
//         var selectedOption = document.getElementById("dropdown").value;
//         if (selectedOption === "insights") {
//             insightsOptions.classList.remove("hidden");
//             visualizationsOptions.classList.add("hidden");
//         } else if (selectedOption === "visualizations") {
//             insightsOptions.classList.add("hidden");
//             visualizationsOptions.classList.remove("hidden");
//         }
//     });

//     function populateInsights(company) {
//         var insightsDiv = document.querySelector(".insights");
//         insightsDiv.innerHTML = "";

//         // Object containing insight names and their corresponding output text for each company
//         var insightsData = {
//             "nvidia": {
//                 insightNames: [
//                     "Financial Statements",
//                     "Services & Revenue",
//                     "Market & Distribution",
//                     "Competitive Landscape",
//                     "Research and Development",
//                     "Operating Expenses",
//                     "Risk Factor",
//                     "Political and Economic factor",
//                     "Legal matters",
//                     "Future Prospects"
//                 ],
//                 insightTexts: {
                    // "Financial Statements": "\n\nThe revenue from significant customers, those representing 10% or more of the total revenue for the respective dates, is summarized as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Revenue: | | | |\n| Customer A | $11 | % | $13 | % | $11 | % |\n| Customer B | $10 | % | $9 | % | $7 | % |\n\nAdditionally, the gross profit and gross margin for each year are as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Gross Profit: | | | |\n| Customer A | $8 | % | $9 | % | $8 | % |\n| Customer B | $7 | % | $6 | % | $5 | % |\n| Gross Margin: | | | |\n| Customer A | 73 | % | 69 | % | 73 | % |\n| Customer B | 70 | % | 67 | % | 71 | % |\n\nIt should be noted that the revenue from significant customers, as well as the gross profit and gross",
                    // "Services & Revenue": "\nOur business model consists of three main components: creating and selling NVIDIA-branded products and services, providing our processors to original equipment manufacturers (OEMs), and licensing our valuable intellectual property. \n\nNVIDIA-branded products and services refer to our visual computing platforms, which cater to four major markets: Gaming, Enterprise, High Performance Computing (HPC) & Cloud, and Automotive.",
                    // "Market & Distribution": "Competition have affected our business\n\nAs NVIDIA’s business has evolved from primarily focusing on gaming products to expanding into broader markets and transitioning from chips to platforms and complete systems to software, our avenues to market have also evolved. In addition to sales to customers in our partner network, we also utilize e-tail channels and sell directly to cloud service providers and enterprise customers. However, our business has been affected by seasonality and competition.",
                    // "Competitive Landscape": "\n\nOur current competitors include suppliers and licensors of discrete and integrated GPUs, as well as accelerated computing processing solutions. These solutions may include chipsets that incorporate 3D graphics functionality as part of their existing offerings. Some of our competitors in this space include Advanced Micro Devices (AMD), ARM Holdings plc, Imagination Technologies Group plc, Intel Corporation (Intel), and Xilinx, Inc.",
                    // "Research and Development": "\n\nWe strongly believe that in order to maintain our future success, it is crucial to continuously introduce new and improved products that incorporate cutting-edge accelerated computing technology. To achieve this, our research and development strategy is centered around a unified hardware and software architecture. Our product development process is a lengthy one, taking several years to design and launch, and we simultaneously work on multiple generations of our architecture. Our research and development efforts encompass various aspects such as software engineering, which includes the development of our CUDA platform, as well as hardware engineering for our GPUs, Tegra processors, and systems. Additionally, we also have a team dedicated to very large scale integration design engineering, process engineering, and architecture and algorithms. These combined efforts allow us to consistently deliver top-of-the-line products to our customers.",
                    // "Operating Expenses": "\nThe gross margin for fiscal year 2018 was reported at 59.9%, which showed an increase from the previous year's margin of 58.8%. This growth can be attributed to various factors such as a favorable shift in product mix, the strong performance of our GeForce gaming GPUs, and the expanding demand for our GPU computing platform in areas such as cloud computing, deep learning, AI, and graphics virtualization. However, this growth was partially offset by the conclusion of our patent license agreement with Intel.\n\nIn terms of operating expenses, the company reported a total of $2.61 billion for fiscal year 2018, which was a significant increase from the $2.13 billion recorded in the previous year. This rise can be attributed to the growth of our workforce and related costs, as well as investments in various growth initiatives, including gaming, AI, and autonomous driving. These investments demonstrate our commitment to expanding our presence in these areas and driving future growth for the company. ",
                    // "Risk Factor": "\n-Our dependence on a few key customers for a significant portion of our revenue, and the potential loss of these customers or reduction in their demand for our products.\n-The highly competitive and rapidly changing market for our products, which may result in decreased demand, pricing pressure, or loss of market share.\n-Our reliance on third-party suppliers for critical components and potential disruptions or delays in their delivery, which could impact our ability to meet customer demand.\n-Our vulnerability to fluctuations in the global economy and changes in consumer spending habits, which could lead to reduced demand for our products.\n-Our exposure to potential intellectual property disputes or patent infringement claims, which could result in costly legal proceedings and damage to our reputation.\n-Our dependence on key personnel and the potential loss of their services, which could disrupt our operations and harm our business.\n-Our reliance on strategic partnerships and joint ventures, which may not result in the expected benefits or could be terminated, impacting our ability to grow and compete.\n-Our exposure to cybersecurity threats and data breaches, which could compromise our sensitive information and harm our business operations.\n-Our compliance with various laws and regulations, and any failure to comply could result in penalties and damage to our reputation.\n-Changes in government policies and regulations, particularly in the areas of trade",
                    // "Political and Economic factor": "\nthe potential impact of political and economic factors on our business operations in various countries.\n\n- The commercial significance of our operations, as well as our competitors' operations, in specific countries and regions is important.\n- Our products are manufactured in various locations.\n- Our strategic technology and product directions may vary in different countries.\n- We must consider the potential impact of political and economic factors on our business operations in different countries.",
                    // "Legal matters": " \n\nIn September 2014, NVIDIA filed complaints against Qualcomm, Inc. and various Samsung entities in both the United States International Trade Commission (ITC) and the United States District Court for the District of Delaware. These complaints alleged that Qualcomm and the Samsung entities had infringed upon certain patents related to graphics processing. \n\nIn response, in November 2014, Samsung filed complaints against NVIDIA in the ITC and the United States District Court for the Eastern District of Virginia. These complaints alleged that NVIDIA had also infringed upon certain patents. \n\nThe ITC is an independent, quasi-judicial federal agency responsible for investigating and determining the impact of imports on U.S. industries. The United States District Court is a federal court system that handles both civil and criminal cases. \n\nThese legal actions, known as litigation, are ongoing and involve multiple parties. Litigation is a legal process where parties present their arguments and evidence to a court or other legal authority in order to resolve a dispute. In this case, the dispute is regarding the alleged patent infringement by both Qualcomm and NVIDIA. \n\nThe outcome of this litigation will have significant implications for both companies and the technology industry as a whole. It will determine the validity of the patents in question and could result in financial damages or injunctions",
                    // "Future Prospects": "'\n\nIn recent years, our company has made significant strides in our GPU business. In fiscal year 2015, we proudly announced and successfully shipped our highly anticipated GeForce GPUs, which were based on our innovative Maxwell architecture. This launch was met with great success, as we were able to surpass a milestone of fifty million installations of our GeForce Experience client. This client offers valuable features such as game-ready drivers, optimized play settings, and the ability to stream and share gameplay experiences.\n\nLooking towards the future, we are excited to share that we have already begun working on our next generation of GPUs. Our Pascal architecture is set to succeed Maxwell and we are confident that it will push the boundaries of what is possible in the world of graphics processing. Some of the exciting features that Pascal is expected to offer include 3D memory and NVLink interconnect technology. These advancements will allow for even more impressive and immersive graphics capabilities.\n\nWhile we are proud of our recent achievements and have high hopes for the future, we also recognize that there will be challenges ahead. As technology continues to advance at a rapid pace, we must stay at the forefront of innovation and constantly adapt to the changing needs and demands of our customers. We are committed to meeting these challenges head on and continuing to push the boundaries of'"
    
//                     // Insight texts for Nvidia
//                 }
//             },
//             "google": {
//                 insightNames: [
//                     "Financial Statements",
//                     "Services & Revenue",
//                     "Market & Distribution",
//                     "Competitive Landscape",
//                     "Research and Development",
//                     "Operating Expenses",
//                     "Risk Factor",
//                     "Political and Economic factor",
//                     "Legal matters",
//                     "Future Prospects"
//                 ],
//                 insightTexts: {
                    // "Financial Statements": "",
                    // "Services & Revenue": "Actual output text for Nvidia Market Trends",
                    // "Market & Distribution": "Actual output text for Nvidia Product Development",
                    // "Competitive Landscape": "Competitors in Google's space offer similar products and services, such as search engines, cloud computing solutions, mobile operating systems, and digital advertising platforms. Major competitors include Microsoft (Bing, Azure), Amazon (AWS), Apple (Safari, iCloud), and Facebook (Facebook Ads, Instagram).",
                    // "Research and Development": "Google invests heavily in research and development to innovate across its product lines. Areas of focus include artificial intelligence (AI), machine learning, natural language processing, quantum computing, and other emerging technologies. R&D efforts aim to enhance existing products and develop new technologies to maintain a competitive edge.",
                    // "Operating Expenses": "Google's operating expenses include costs related to sales and marketing, research and development, and general administration. These expenses cover employee salaries, advertising expenses, facility costs, and other overheads. Despite these costs, Google aims to manage expenses efficiently while continuing to invest in growth opportunities.",
                    // "Risk Factor": "Google faces various risks including regulatory challenges, competition, cybersecurity threats, and changes in consumer behavior. Additionally, dependence on advertising revenue and reliance on data collection for targeted advertising pose regulatory and reputational risks. Navigating these risks is crucial for Google's continued success.",
                    // "Political and Economic factor": "Google operates globally and is influenced by political and economic factors in various countries. Political instability, trade policies, and economic fluctuations can impact Google's business operations, revenue, and profitability. Adapting to regulatory environments and geopolitical dynamics is essential for Google's sustained growth.",
                    // "Legal matters": " Google has faced legal challenges related to antitrust, privacy, intellectual property, and other areas. Past litigation includes cases involving copyright infringement, data privacy violations, and regulatory fines. Google continues to monitor legal developments and defend its interests through litigation and compliance efforts.",
                    // "Future Prospects": "Google remains optimistic about its future prospects, focusing on innovation, expansion into new markets, and strategic acquisitions. Investments in emerging technologies like AI, cloud computing, and autonomous vehicles are expected to drive long-term growth. Google aims to continue delivering value to its users, customers, and shareholders while adapting to evolving market dynamics and technological advancements."
    
//                 }
//             }
//         };

//         var companyInsights = insightsData[company.toLowerCase()];

//         for (var i = 0; i < companyInsights.insightNames.length; i++) {
//             var btn = document.createElement("button");
//             btn.textContent = companyInsights.insightNames[i];
//             btn.setAttribute("id", company.toLowerCase() + companyInsights.insightNames[i].replace(" ", "") + "Btn");
//             insightsDiv.appendChild(btn);

//             // Add event listener to display the corresponding output text
//             btn.addEventListener("click", function (event) {
//                 // Retrieve insight name from the button text
//                 var insightName = event.target.textContent;
//                 var insightText = companyInsights.insightTexts[insightName]; // Retrieve actual output text
//                 document.getElementById("insightsOutput").textContent = insightText || "No output text available";
//             });
//         }
//     }
// });






//this is new code


// document.getElementById("nvidiaBtn").addEventListener("click", function() {
//     document.getElementById("dropdownContainer").classList.remove("hidden");
//     document.getElementById("insightsOptions").classList.add("hidden");
//     document.getElementById("visualizationsOptions").classList.add("hidden");
//     populateInsights("Nvidia");
// });

// document.getElementById("googleBtn").addEventListener("click", function() {
//     document.getElementById("dropdownContainer").classList.remove("hidden");
//     document.getElementById("insightsOptions").classList.add("hidden");
//     document.getElementById("visualizationsOptions").classList.add("hidden");
//     populateInsights("Google");
// });

// document.getElementById("dropdown").addEventListener("change", function() {
//     var selectedOption = document.getElementById("dropdown").value;
//     if (selectedOption === "insights") {
//         document.getElementById("insightsOptions").classList.remove("hidden");
//         document.getElementById("visualizationsOptions").classList.add("hidden");
//     } else if (selectedOption === "visualizations") {
//         var company = document.querySelector(".options button.selected").textContent;
//         displayVisualizations(company);
//     }
// });

// // function populateInsights(company) {
// //     // Populate insights...
// // }
// function populateInsights(company) {
//     var insightsDiv = document.querySelector(".insights");
//     insightsDiv.innerHTML = "";

//     // Object containing insight names and their corresponding output text for each company
//     var insightsData = {
//         "nvidia": {
//             insightNames: [
//                 "Financial Statements",
//                 "Services & Revenue",
//                 "Market & Distribution",
//                 "Competitive Landscape",
//                 "Research and Development",
//                 "Operating Expenses",
//                 "Risk Factor",
//                 "Political and Economic factor",
//                 "Legal matters",
//                 "Future Prospects"
//             ],
//             insightTexts: {
//                 "Financial Statements": "\n\nThe revenue from significant customers, those representing 10% or more of the total revenue for the respective dates, is summarized as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Revenue: | | | |\n| Customer A | $11 | % | $13 | % | $11 | % |\n| Customer B | $10 | % | $9 | % | $7 | % |\n\nAdditionally, the gross profit and gross margin for each year are as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Gross Profit: | | | |\n| Customer A | $8 | % | $9 | % | $8 | % |\n| Customer B | $7 | % | $6 | % | $5 | % |\n| Gross Margin: | | | |\n| Customer A | 73 | % | 69 | % | 73 | % |\n| Customer B | 70 | % | 67 | % | 71 | % |\n\nIt should be noted that the revenue from significant customers, as well as the gross profit and gross",
//                 "Services & Revenue": "\nOur business model consists of three main components: creating and selling NVIDIA-branded products and services, providing our processors to original equipment manufacturers (OEMs), and licensing our valuable intellectual property. \n\nNVIDIA-branded products and services refer to our visual computing platforms, which cater to four major markets: Gaming, Enterprise, High Performance Computing (HPC) & Cloud, and Automotive.",
//                 "Market & Distribution": "Competition have affected our business\n\nAs NVIDIA’s business has evolved from primarily focusing on gaming products to expanding into broader markets and transitioning from chips to platforms and complete systems to software, our avenues to market have also evolved. In addition to sales to customers in our partner network, we also utilize e-tail channels and sell directly to cloud service providers and enterprise customers. However, our business has been affected by seasonality and competition.",
//                 "Competitive Landscape": "\n\nOur current competitors include suppliers and licensors of discrete and integrated GPUs, as well as accelerated computing processing solutions. These solutions may include chipsets that incorporate 3D graphics functionality as part of their existing offerings. Some of our competitors in this space include Advanced Micro Devices (AMD), ARM Holdings plc, Imagination Technologies Group plc, Intel Corporation (Intel), and Xilinx, Inc.",
//                 "Research and Development": "\n\nWe strongly believe that in order to maintain our future success, it is crucial to continuously introduce new and improved products that incorporate cutting-edge accelerated computing technology. To achieve this, our research and development strategy is centered around a unified hardware and software architecture. Our product development process is a lengthy one, taking several years to design and launch, and we simultaneously work on multiple generations of our architecture. Our research and development efforts encompass various aspects such as software engineering, which includes the development of our CUDA platform, as well as hardware engineering for our GPUs, Tegra processors, and systems. Additionally, we also have a team dedicated to very large scale integration design engineering, process engineering, and architecture and algorithms. These combined efforts allow us to consistently deliver top-of-the-line products to our customers.",
//                 "Operating Expenses": "\nThe gross margin for fiscal year 2018 was reported at 59.9%, which showed an increase from the previous year's margin of 58.8%. This growth can be attributed to various factors such as a favorable shift in product mix, the strong performance of our GeForce gaming GPUs, and the expanding demand for our GPU computing platform in areas such as cloud computing, deep learning, AI, and graphics virtualization. However, this growth was partially offset by the conclusion of our patent license agreement with Intel.\n\nIn terms of operating expenses, the company reported a total of $2.61 billion for fiscal year 2018, which was a significant increase from the $2.13 billion recorded in the previous year. This rise can be attributed to the growth of our workforce and related costs, as well as investments in various growth initiatives, including gaming, AI, and autonomous driving. These investments demonstrate our commitment to expanding our presence in these areas and driving future growth for the company. ",
//                 "Risk Factor": "\n-Our dependence on a few key customers for a significant portion of our revenue, and the potential loss of these customers or reduction in their demand for our products.\n-The highly competitive and rapidly changing market for our products, which may result in decreased demand, pricing pressure, or loss of market share.\n-Our reliance on third-party suppliers for critical components and potential disruptions or delays in their delivery, which could impact our ability to meet customer demand.\n-Our vulnerability to fluctuations in the global economy and changes in consumer spending habits, which could lead to reduced demand for our products.\n-Our exposure to potential intellectual property disputes or patent infringement claims, which could result in costly legal proceedings and damage to our reputation.\n-Our dependence on key personnel and the potential loss of their services, which could disrupt our operations and harm our business.\n-Our reliance on strategic partnerships and joint ventures, which may not result in the expected benefits or could be terminated, impacting our ability to grow and compete.\n-Our exposure to cybersecurity threats and data breaches, which could compromise our sensitive information and harm our business operations.\n-Our compliance with various laws and regulations, and any failure to comply could result in penalties and damage to our reputation.\n-Changes in government policies and regulations, particularly in the areas of trade",
//                 "Political and Economic factor": "\nthe potential impact of political and economic factors on our business operations in various countries.\n\n- The commercial significance of our operations, as well as our competitors' operations, in specific countries and regions is important.\n- Our products are manufactured in various locations.\n- Our strategic technology and product directions may vary in different countries.\n- We must consider the potential impact of political and economic factors on our business operations in different countries.",
//                 "Legal matters": " \n\nIn September 2014, NVIDIA filed complaints against Qualcomm, Inc. and various Samsung entities in both the United States International Trade Commission (ITC) and the United States District Court for the District of Delaware. These complaints alleged that Qualcomm and the Samsung entities had infringed upon certain patents related to graphics processing. \n\nIn response, in November 2014, Samsung filed complaints against NVIDIA in the ITC and the United States District Court for the Eastern District of Virginia. These complaints alleged that NVIDIA had also infringed upon certain patents. \n\nThe ITC is an independent, quasi-judicial federal agency responsible for investigating and determining the impact of imports on U.S. industries. The United States District Court is a federal court system that handles both civil and criminal cases. \n\nThese legal actions, known as litigation, are ongoing and involve multiple parties. Litigation is a legal process where parties present their arguments and evidence to a court or other legal authority in order to resolve a dispute. In this case, the dispute is regarding the alleged patent infringement by both Qualcomm and NVIDIA. \n\nThe outcome of this litigation will have significant implications for both companies and the technology industry as a whole. It will determine the validity of the patents in question and could result in financial damages or injunctions",
//                 "Future Prospects": "'\n\nIn recent years, our company has made significant strides in our GPU business. In fiscal year 2015, we proudly announced and successfully shipped our highly anticipated GeForce GPUs, which were based on our innovative Maxwell architecture. This launch was met with great success, as we were able to surpass a milestone of fifty million installations of our GeForce Experience client. This client offers valuable features such as game-ready drivers, optimized play settings, and the ability to stream and share gameplay experiences.\n\nLooking towards the future, we are excited to share that we have already begun working on our next generation of GPUs. Our Pascal architecture is set to succeed Maxwell and we are confident that it will push the boundaries of what is possible in the world of graphics processing. Some of the exciting features that Pascal is expected to offer include 3D memory and NVLink interconnect technology. These advancements will allow for even more impressive and immersive graphics capabilities.\n\nWhile we are proud of our recent achievements and have high hopes for the future, we also recognize that there will be challenges ahead. As technology continues to advance at a rapid pace, we must stay at the forefront of innovation and constantly adapt to the changing needs and demands of our customers. We are committed to meeting these challenges head on and continuing to push the boundaries of'"

//                 // Insight texts for Nvidia
//             }
//         },
//         "google": {
//             insightNames: [
//                 "Financial Statements",
//                 "Services & Revenue",
//                 "Market & Distribution",
//                 "Competitive Landscape",
//                 "Research and Development",
//                 "Operating Expenses",
//                 "Risk Factor",
//                 "Political and Economic factor",
//                 "Legal matters",
//                 "Future Prospects"
//             ],
//             insightTexts: {
//                 "Financial Statements": "",
//                 "Services & Revenue": "Actual output text for Nvidia Market Trends",
//                 "Market & Distribution": "Actual output text for Nvidia Product Development",
//                 "Competitive Landscape": "Competitors in Google's space offer similar products and services, such as search engines, cloud computing solutions, mobile operating systems, and digital advertising platforms. Major competitors include Microsoft (Bing, Azure), Amazon (AWS), Apple (Safari, iCloud), and Facebook (Facebook Ads, Instagram).",
//                 "Research and Development": "Google invests heavily in research and development to innovate across its product lines. Areas of focus include artificial intelligence (AI), machine learning, natural language processing, quantum computing, and other emerging technologies. R&D efforts aim to enhance existing products and develop new technologies to maintain a competitive edge.",
//                 "Operating Expenses": "Google's operating expenses include costs related to sales and marketing, research and development, and general administration. These expenses cover employee salaries, advertising expenses, facility costs, and other overheads. Despite these costs, Google aims to manage expenses efficiently while continuing to invest in growth opportunities.",
//                 "Risk Factor": "Google faces various risks including regulatory challenges, competition, cybersecurity threats, and changes in consumer behavior. Additionally, dependence on advertising revenue and reliance on data collection for targeted advertising pose regulatory and reputational risks. Navigating these risks is crucial for Google's continued success.",
//                 "Political and Economic factor": "Google operates globally and is influenced by political and economic factors in various countries. Political instability, trade policies, and economic fluctuations can impact Google's business operations, revenue, and profitability. Adapting to regulatory environments and geopolitical dynamics is essential for Google's sustained growth.",
//                 "Legal matters": " Google has faced legal challenges related to antitrust, privacy, intellectual property, and other areas. Past litigation includes cases involving copyright infringement, data privacy violations, and regulatory fines. Google continues to monitor legal developments and defend its interests through litigation and compliance efforts.",
//                 "Future Prospects": "Google remains optimistic about its future prospects, focusing on innovation, expansion into new markets, and strategic acquisitions. Investments in emerging technologies like AI, cloud computing, and autonomous vehicles are expected to drive long-term growth. Google aims to continue delivering value to its users, customers, and shareholders while adapting to evolving market dynamics and technological advancements."

//             }
//         }
//     };

// function displayVisualizations(company) {
//     var nvidiaVisualizations = document.getElementById("nvidiaVisualizations");
//     var googleVisualizations = document.getElementById("googleVisualizations");

//     if (company.toLowerCase() === "nvidia") {
//         nvidiaVisualizations.style.display = "block";
//         googleVisualizations.style.display = "none";
//     } else if (company.toLowerCase() === "google") {
//         nvidiaVisualizations.style.display = "none";
//         googleVisualizations.style.display = "block";
//     }
// }











document.getElementById("nvidiaBtn").addEventListener("click", function() {
    document.getElementById("dropdownContainer").classList.remove("hidden");
    document.getElementById("insightsOptions").classList.add("hidden");
    document.getElementById("visualizationsOptions").classList.add("hidden");
    document.getElementById("nvidiaVisualizations").classList.remove("hidden");
    document.getElementById("googleVisualizations").classList.add("hidden");
    populateInsights("Nvidia");
});

document.getElementById("googleBtn").addEventListener("click", function() {
    document.getElementById("dropdownContainer").classList.remove("hidden");
    document.getElementById("insightsOptions").classList.add("hidden");
    document.getElementById("visualizationsOptions").classList.add("hidden");
    document.getElementById("googleVisualizations").classList.remove("hidden");
    document.getElementById("nvidiaVisualizations").classList.add("hidden");
    populateInsights("Google");
});

document.getElementById("dropdown").addEventListener("change", function() {
    var selectedOption = document.getElementById("dropdown").value;
    if (selectedOption === "insights") {
        document.getElementById("insightsOptions").classList.remove("hidden");
        document.getElementById("visualizationsOptions").classList.add("hidden");
        populateInsights(document.querySelector(".options button.active").id);
    } else if (selectedOption === "visualizations") {
        document.getElementById("visualizationsOptions").classList.remove("hidden");
        document.getElementById("insightsOptions").classList.add("hidden");
    }
});

document.querySelectorAll(".options button").forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelector(".options button.active").classList.remove("active");
        this.classList.add("active");
        populateInsights(this.id);
        if (this.id === "nvidiaBtn") {
            document.getElementById("nvidiaVisualizations").classList.remove("hidden");
            document.getElementById("googleVisualizations").classList.add("hidden");
        } else if (this.id === "googleBtn") {
            document.getElementById("googleVisualizations").classList.remove("hidden");
            document.getElementById("nvidiaVisualizations").classList.add("hidden");
        }
    });
});

function populateInsights(company) {
    var insightsDiv = document.querySelector(".insights");
    insightsDiv.innerHTML = "";

    var companyInsights = {
        "nvidia": {
            insightNames: [
                "Financial Statements",
                "Services & Revenue",
                "Market & Distribution",
                "Competitive Landscape",
                "Research & Development",
                "Operating Expenses",
                "Risk Factor",
                "Political and Economic factor",
                "Legal matters",
                "Future Prospects",
                "Overall Analysis"
            ],
            insightTexts: {
                "Financial Statements": "\n\nThe revenue from significant customers, those representing 10% or more of the total revenue for the respective dates, is summarized as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Revenue: | | | |\n| Customer A | $11 | % | $13 | % | $11 | % |\n| Customer B | $10 | % | $9 | % | $7 | % |\n\nAdditionally, the gross profit and gross margin for each year are as follows:\n\n| Year Ended | January 26, 2014 | January 27, 2013 | January 29, 2012 |\n| Gross Profit: | | | |\n| Customer A | $8 | % | $9 | % | $8 | % |\n| Customer B | $7 | % | $6 | % | $5 | % |\n| Gross Margin: | | | |\n| Customer A | 73 | % | 69 | % | 73 | % |\n| Customer B | 70 | % | 67 | % | 71 | % |\n\nIt should be noted that the revenue from significant customers, as well as the gross profit and gross",
                "Services & Revenue": "\nOur business model consists of three main components: creating and selling NVIDIA-branded products and services, providing our processors to original equipment manufacturers (OEMs), and licensing our valuable intellectual property. \n\nNVIDIA-branded products and services refer to our visual computing platforms, which cater to four major markets: Gaming, Enterprise, High Performance Computing (HPC) & Cloud, and Automotive.",
                "Market & Distribution": "Competition have affected our business\n\nAs NVIDIA’s business has evolved from primarily focusing on gaming products to expanding into broader markets and transitioning from chips to platforms and complete systems to software, our avenues to market have also evolved. In addition to sales to customers in our partner network, we also utilize e-tail channels and sell directly to cloud service providers and enterprise customers. However, our business has been affected by seasonality and competition.",
                "Competitive Landscape": "\n\nOur current competitors include suppliers and licensors of discrete and integrated GPUs, as well as accelerated computing processing solutions. These solutions may include chipsets that incorporate 3D graphics functionality as part of their existing offerings. Some of our competitors in this space include Advanced Micro Devices (AMD), ARM Holdings plc, Imagination Technologies Group plc, Intel Corporation (Intel), and Xilinx, Inc.",
                "Research & Development": "\n\nWe strongly believe that in order to maintain our future success, it is crucial to continuously introduce new and improved products that incorporate cutting-edge accelerated computing technology. To achieve this, our research and development strategy is centered around a unified hardware and software architecture. Our product development process is a lengthy one, taking several years to design and launch, and we simultaneously work on multiple generations of our architecture. Our research and development efforts encompass various aspects such as software engineering, which includes the development of our CUDA platform, as well as hardware engineering for our GPUs, Tegra processors, and systems. Additionally, we also have a team dedicated to very large scale integration design engineering, process engineering, and architecture and algorithms. These combined efforts allow us to consistently deliver top-of-the-line products to our customers.",
                "Operating Expenses": "\nThe gross margin for fiscal year 2018 was reported at 59.9%, which showed an increase from the previous year's margin of 58.8%. This growth can be attributed to various factors such as a favorable shift in product mix, the strong performance of our GeForce gaming GPUs, and the expanding demand for our GPU computing platform in areas such as cloud computing, deep learning, AI, and graphics virtualization. However, this growth was partially offset by the conclusion of our patent license agreement with Intel.\n\nIn terms of operating expenses, the company reported a total of $2.61 billion for fiscal year 2018, which was a significant increase from the $2.13 billion recorded in the previous year. This rise can be attributed to the growth of our workforce and related costs, as well as investments in various growth initiatives, including gaming, AI, and autonomous driving. These investments demonstrate our commitment to expanding our presence in these areas and driving future growth for the company. ",
                "Risk Factor": "\n-Our dependence on a few key customers for a significant portion of our revenue, and the potential loss of these customers or reduction in their demand for our products.\n-The highly competitive and rapidly changing market for our products, which may result in decreased demand, pricing pressure, or loss of market share.\n-Our reliance on third-party suppliers for critical components and potential disruptions or delays in their delivery, which could impact our ability to meet customer demand.\n-Our vulnerability to fluctuations in the global economy and changes in consumer spending habits, which could lead to reduced demand for our products.\n-Our exposure to potential intellectual property disputes or patent infringement claims, which could result in costly legal proceedings and damage to our reputation.\n-Our dependence on key personnel and the potential loss of their services, which could disrupt our operations and harm our business.\n-Our reliance on strategic partnerships and joint ventures, which may not result in the expected benefits or could be terminated, impacting our ability to grow and compete.\n-Our exposure to cybersecurity threats and data breaches, which could compromise our sensitive information and harm our business operations.\n-Our compliance with various laws and regulations, and any failure to comply could result in penalties and damage to our reputation.\n-Changes in government policies and regulations, particularly in the areas of trade",
                "Political and Economic factor": "\nthe potential impact of political and economic factors on our business operations in various countries.\n\n- The commercial significance of our operations, as well as our competitors' operations, in specific countries and regions is important.\n- Our products are manufactured in various locations.\n- Our strategic technology and product directions may vary in different countries.\n- We must consider the potential impact of political and economic factors on our business operations in different countries.",
                "Legal matters": " \n\nIn September 2014, NVIDIA filed complaints against Qualcomm, Inc. and various Samsung entities in both the United States International Trade Commission (ITC) and the United States District Court for the District of Delaware. These complaints alleged that Qualcomm and the Samsung entities had infringed upon certain patents related to graphics processing. \n\nIn response, in November 2014, Samsung filed complaints against NVIDIA in the ITC and the United States District Court for the Eastern District of Virginia. These complaints alleged that NVIDIA had also infringed upon certain patents. \n\nThe ITC is an independent, quasi-judicial federal agency responsible for investigating and determining the impact of imports on U.S. industries. The United States District Court is a federal court system that handles both civil and criminal cases. \n\nThese legal actions, known as litigation, are ongoing and involve multiple parties. Litigation is a legal process where parties present their arguments and evidence to a court or other legal authority in order to resolve a dispute. In this case, the dispute is regarding the alleged patent infringement by both Qualcomm and NVIDIA. \n\nThe outcome of this litigation will have significant implications for both companies and the technology industry as a whole. It will determine the validity of the patents in question and could result in financial damages or injunctions",
                "Future Prospects": "'\n\nIn recent years, our company has made significant strides in our GPU business. In fiscal year 2015, we proudly announced and successfully shipped our highly anticipated GeForce GPUs, which were based on our innovative Maxwell architecture. This launch was met with great success, as we were able to surpass a milestone of fifty million installations of our GeForce Experience client. This client offers valuable features such as game-ready drivers, optimized play settings, and the ability to stream and share gameplay experiences.\n\nLooking towards the future, we are excited to share that we have already begun working on our next generation of GPUs. Our Pascal architecture is set to succeed Maxwell and we are confident that it will push the boundaries of what is possible in the world of graphics processing. Some of the exciting features that Pascal is expected to offer include 3D memory and NVLink interconnect technology. These advancements will allow for even more impressive and immersive graphics capabilities.\n\nWhile we are proud of our recent achievements and have high hopes for the future, we also recognize that there will be challenges ahead. As technology continues to advance at a rapid pace, we must stay at the forefront of innovation and constantly adapt to the changing needs and demands of our customers. We are committed to meeting these challenges head on and continuing to push the boundaries of",
                "Overall Analysis": "'\n\nOverall, Nvidia is a leading company in the technology industry, specifically in the graphics processing unit (GPU) market. They have a strong presence in both the gaming and data center industries, with their products being used in a wide range of applications such as artificial intelligence, self-driving cars, and virtual reality.\n\nOne of the key strengths of Nvidia is their dominance in the GPU market, with their products being known for their high performance and efficiency. They also have a strong track record of innovation, constantly pushing the boundaries of what is possible in the technology space. This has allowed them to maintain a competitive edge and stay ahead of their competitors.\n\nIn terms of financial performance, Nvidia has consistently shown strong growth over the past few years. Their revenue has been steadily increasing, and they have a healthy balance sheet with low debt levels. They also have a strong cash position, which allows them to invest in future growth opportunities.\n\nHowever, there are some potential risks to consider before investing in Nvidia. One of the main concerns is their reliance on the gaming industry for a significant portion of their revenue. Any downturn in the gaming market could have a significant impact on their financial performance. Additionally, they face competition from other players in the GPU market, such as AMD and Intel.\n\nIn conclusion, Nvidia'"

            }
        },
        "google": {
            insightNames: [
                "Financial Statements",
                "Services & Revenue",
                "Market & Distribution",
                "Competitive Landscape",
                "Research & Development",
                "Operating Expenses",                
                "Risk Factor",
                "Political and Economic factor",
                "Legal matters",
                "Future Prospects",
                "Overall Analysis"
            ],
            insightTexts: {
                "Financial Statements": "' \nGoogle Cloud | 13,055 | | | 19,580 | \nOther Bets | 657 | | | 1,202 | \nTotal revenues | $ | 182,347 | | | $ | 258,311\n\nThe financial results for the company show a significant increase in revenues from 2020 to 2021. The table above presents the breakdown of revenues by type, in millions, for the years ending December 31, 2020 and 2021. \n\nIn 2020, Google Search & other generated $104,062 million in revenues, which increased to $148,951 million in 2021. Similarly, revenues from YouTube ads increased from $19,772 million in 2020 to $28,845 million in 2021. Revenues from the Google Network also showed an upward trend, increasing from $23,090 million in 2020 to $31,701 million in 2021. \n\nThe total revenues from Google advertising, including Search & other, YouTube ads, and the Google Network, increased from $146,924 million in 2020 to $209,497 million in 2021. Revenues from other Google services, such as Google Cloud, also saw a significant increase'",
                "Services & Revenue": "'\n\n1.Google Services offer a wide range of tools and applications for users to enhance their online experience.\n\n2. From email and cloud storage to navigation and productivity tools, Google Services has something for everyone.\n\n3. One of the most popular Google Services is Gmail, a free email service that allows users to communicate and manage their emails efficiently.\n\n4. Google Drive, a cloud storage service, allows users to store and share documents, photos, and other files with ease.\n\n5. Google Maps, a navigation tool, provides accurate and detailed maps, real-time traffic updates, and directions to help users navigate their way around.\n\n6. Google Calendar, a productivity tool, helps users stay organized by scheduling and managing their events, appointments, and tasks.\n\n7. Another useful Google Service is Google Translate, which offers translations between languages and helps users communicate with people from different parts of the world.\n\n8. Google Photos, a photo storage and sharing service, allows users to back up their photos and videos, organize them into albums, and share them with others.\n\n9. Google Play, a digital distribution service, offers a wide range of apps, games, music, movies, and books for Android users to download and enjoy.\n\n10. With its vast array of services, Google has become an'",
                "Market & Distribution": "'\n\nAt Google, our innovations in search and advertising have made our website widely used and our brand one of the most recognized in the world. Our primary source of revenue is through online advertising, which we deliver in a way that is both relevant to consumers and cost-effective for advertisers. Our core products, including Search, Android, Maps, Chrome, YouTube, Google Play, and Gmail, each have over one billion monthly active users. However, we believe that we have only just begun to tap into our full potential. Our vision at Google is to continue to be a hub of creativity and innovation, using our technical expertise to tackle major issues. Our Other Bets, while still in their early stages, are also making significant progress in their respective industries. Our ultimate goal for these ventures is for them to become thriving and successful businesses in the long term.'",
                "Competitive Landscape": "'\n\nWe have many competitors in various industries, such as general purpose search engines and information services, vertical search engines and e-commerce websites, social networks, and other forms of advertising and online advertising platforms and networks. Additionally, we face competition from companies that design, manufacture, and market consumer electronic products, as well as providers of enterprise cloud services and digital video services, and digital assistant providers.\n\nOur competitors include both domestic and international companies, ranging from well-established and large companies to emerging start-ups. These competitors may have longer operating histories and established relationships with customers and users, giving them an advantage in the market. They may also utilize their experiences and resources in ways that could impact our competitive position, such as through acquisitions, heavy investments in research and development, and aggressive initiation of intellectual property claims, whether or not they are meritorious. Furthermore, they may continue to compete aggressively for advertisers and websites.\n\nIn contrast, emerging start-ups may have the ability to innovate and provide products and services at a faster pace than we can. They may also have the foresight to anticipate consumer needs for products and services before we do. This could potentially give them an advantage in the market and pose a threat to our competitive position. '",
                "Research & Development": "\n\nWe are committed to continuously investing in research and development (R&D) in key areas that are critical to Google's success, including search, advertising, and machine learning. This also applies to our efforts in launching new products and services across both Google and Other Bets. Our capital expenditures have varied in the past and may continue to do so in the future as we make substantial investments in our systems, data centers, real estate, facilities, and information technology infrastructure. ",
                "Operating Expenses": "'\n\nGoogle Services reported an operating income of $48,999, which increased to $54,606 in the following period. However, in the same time frame, Google Cloud reported a loss of $4,645, which further decreased to $5,607 in the next period. Other Bets also experienced a loss, with $4,824 in the first period and $4,476 in the second period. Corporate costs, unallocated, also contributed to the overall operating loss, with $5,299 in the first period and $3,299 in the second period. Despite these losses, the total income from operations for the company was $34,231 in the first period and increased to $41,224 in the second period, reaching a total of $78,714.'",
                "Risk Factor": "Google is  aware of potential risks related to our trademarks. One such risk is the possibility that the term Google may become widely and commonly used to the point of being synonymous with the word search. In the event that this occurs, we may face a loss of protection for our trademark, potentially leading to other individuals or businesses using the term Google to describe their own products or services. This could ultimately result in a decrease in the strength and recognition of our brand. To mitigate this risk, we actively monitor the usage of our trademarks and take legal action when necessary to protect our intellectual property. Additionally, we strive to continuously innovate and expand our products and services to maintain our position as a leader in the search engine industry.",
                "Political and Economic factor": "'\n\nThe Internet is a powerful force that has the ability to equalize opportunities for people around the world. As a company, Google recognizes our responsibility to make this accessible to as many individuals as possible. From its inception, Google has been dedicated to providing information to people, and we believe that technology plays a crucial role in achieving this goal. Our belief in the democratizing power of technology drives us to empower individuals through access to information.\n\nTo achieve our mission, we are constantly striving to improve access to the Internet through tailored hardware and software experiences. Our efforts are primarily focused on emerging markets, where the need for connectivity is especially crucial. Through our Android and Chrome platforms, we are working towards bridging the digital divide and helping people get online.\n\nIn addition to our core Google products, we are also committed to making them fast and efficient for users in areas where connectivity and speed are major concerns. This ensures that everyone has an equal opportunity to access information and utilize our products.\n\nThe other companies under Alphabet are also actively pursuing initiatives with similar goals, furthering our commitment to making the Internet accessible for all. We believe that by working together, we can create a more inclusive and connected world.'",
                "Legal matters": " (collectively, Google) have been under investigation by the European Commission\'s Directorate General for Competition since November 2010 for alleged antitrust violations. The investigation was initiated based on complaints made against Google for anticompetitive behavior. On April 15, 2015, the European Commission issued a Statement of Objections, outlining their concerns and allegations against Google. The investigation is ongoing and Alphabet Inc. and Google Inc. are cooperating with the authorities. We take these allegations seriously and are committed to complying with all applicable antitrust laws and regulations. We are confident that, upon completion of the investigation, it will be determined that Google has not engaged in any anticompetitive behavior.",
                "Future Prospects": "Future is also a key focus for us as we aim to provide reliable and scalable cloud solutions for businesses of all sizes.\n\nWe are constantly looking towards the future and making strategic long-term investments to drive revenue growth beyond advertising. These investments include Google Play, hardware, and YouTube. Additionally, we are dedicating resources to research in the fields of AI and quantum computing to drive innovation across all of our businesses and create new opportunities.\n\nIn addition to these efforts, we are placing a strong emphasis on Google Cloud as we strive to offer dependable and scalable cloud solutions for businesses of all sizes. Our goal is to provide a reliable platform for businesses to leverage technology and drive success.'",
                "Overall Analysis": "\n\nAs a language model AI, I am not able to provide financial advice. However, here is an overall analysis of Google that can help you make an informed decision.\n\nGoogle, a subsidiary of Alphabet Inc., is a multinational technology company that specializes in internet-related services and products. It is one of the world's largest and most valuable companies, with a strong presence in various industries such as search engines, online advertising, cloud computing, hardware, and software development.\n\nStrengths:\n1. Dominant Market Position: Google is the leading search engine in the world, with over 90% market share. It also has a strong presence in other industries such as online advertising, cloud computing, and mobile operating systems.\n\n2. Innovative Technology: Google has a reputation for being one of the most innovative companies in the world. It constantly invests in research and development to come up with new and improved products and services.\n\n3. Strong Financial Performance: Google has consistently reported strong financial performance, with a steady increase in revenue and profits over the years. It also has a strong balance sheet with a significant amount of cash reserves.\n\n4. Diversified Business Portfolio: Google has a diverse range of products and services, which helps it to mitigate risks and generate revenue from multiple sources.\n\nWeak"
            }
        }
    };

    var insights = companyInsights[company.toLowerCase()];

    for (var i = 0; i < insights.insightNames.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = insights.insightNames[i];
        btn.addEventListener("click", function() {
            var insightName = this.textContent;
            var insightText = insights.insightTexts[insightName];
            document.getElementById("insightsOutput").textContent = insightText || "No output text available";
        });
        insightsDiv.appendChild(btn);
    }
}
