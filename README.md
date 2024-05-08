# GeorgiaFinTechLab
Welcome to the Nvidia and Google Analysis Repository!

This repository provides a comprehensive analysis of Nvidia and Google based on their SEC 10-K filings spanning from 1995 to 2023. Leveraging the cutting-edge capabilities of OpenAI's Language Model (LLM), users can delve into valuable insights extracted from these filings. Our platform enables users to conduct retrieval-augmented generation, facilitating a deeper understanding of the financial landscape surrounding these tech giants.

Key Features:

Extensive Data Coverage: Access SEC 10-K filings dating back to 1995, offering a rich historical perspective on Nvidia and Google.
OpenAI LLM Integration: Utilize state-of-the-art natural language processing to extract and analyze key information from the filings.
Insightful Analysis: Gain valuable insights into the financial performance and conditions of Nvidia and Google through advanced analytics.
Visualization: Visualize the financial data in intuitive and informative formats, aiding in the interpretation of trends and patterns.

## Demo Video

Check out our demo video to see the platform in action:

[![Demo Video]()](https://youtu.be/CQXHkmRaeMQ)

## Tech Stack

1. Python - the programming language used was Python

2. edgartools - Used to extract the SEC data of form "10-k" of Nvidia and Google.
   This provides with an easy to use functionality package, hence this was used.

3. BeautifulSoup - Beautiful Soup is a Python package for parsing HTML and XML documents, including those with malformed markup. It creates a parse tree for documents that 
   can be used to extract data from HTML, which is useful for web scraping.

4. Langchain - LangChain is an open source framework for building applications based on large language models (LLMs).
   This provides us with easy to use libraries to handle the functionalities of LLMs.

5. OpenAI - OpenAI is an AI research and deployment company dedicated to ensuring that general-purpose artificial 
   intelligence benefits all of humanity.
   OpenAI embeddings - it was used to create embeddings of the text.
   The embedding is pretty decent and produces excellent result.
   OpenAI LLM - GPT-3.5-turbo model was used (Requires OpenAI api key)

6. FAISS - FAISS (Facebook AI Similarity Search) is a library that allows developers to quickly search for embeddings of 
   multimedia documents that are similar to each other.
   The results of this similarity search was best among its alternatives.

7. HTML - HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web 
   browser.

8. CSS - CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.

9. JavaScript - JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside 
   HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.

10. Streamlit - Streamlit is a promising open-source Python library, which enables developers to build attractive user 
    interfaces in no time. Streamlit is the easiest way especially for people with no front-end knowledge to put their code 
    into a web application


## INSIGHTS 

1. Financial Statements: This insight is crucial as it provides a comprehensive view of the company's financial health, including income statements, balance sheets, and cash flow statements. Analyzing these statements helps investors and stakeholders understand the company's profitability, liquidity, and overall financial performance.
   
2. Services & Revenue: Understanding the company's core services and revenue streams is essential for assessing its business model and growth prospects. This insight helps identify key sources of revenue and evaluate the company's ability to generate sustainable income.
   
3. Market & Distribution: Examining the company's target market and distribution channels is important for assessing its competitive position and growth opportunities. This insight provides insights into market dynamics, customer demographics, and distribution strategies.
   
4. Competitive Landscape: Analyzing the competitive landscape helps identify competitors, their strengths and weaknesses, and potential threats to the company's market share. This insight is crucial for strategic planning and assessing the company's competitive advantage.
   
5. Research & Development: Understanding the company's investment in research and development (R&D) provides insights into its innovation capabilities and long-term growth potential. This insight helps evaluate the company's ability to stay competitive and adapt to changing market trends.
   
6. Operating Expenses: Examining operating expenses helps assess the efficiency of the company's operations and identify areas for cost optimization. This insight is important for evaluating profitability and financial sustainability.
   
7. Risk Factors: Identifying and assessing risk factors helps investors and stakeholders understand the potential challenges and uncertainties facing the company. This insight is crucial for risk management and informed decision-making.
   
8. Political and Economic Factors: Analyzing political and economic factors helps assess the external environment's impact on the company's operations and growth prospects. This insight provides insights into regulatory changes, geopolitical risks, and economic trends.
   
9. Legal Matters: Understanding legal matters such as litigation, regulatory compliance, and intellectual property rights is important for assessing potential legal risks and liabilities. This insight helps investors and stakeholders evaluate the company's legal standing and exposure to legal challenges.
    
10. Future Prospects: Assessing the company's future prospects involves analyzing factors such as growth opportunities, market trends, and strategic initiatives. This insight helps investors gauge the company's potential for long-term success and value creation.
    
11. Overall Analysis: Summarizing and synthesizing insights from the above categories provides a holistic view of the company's performance, prospects, and risks. This insight helps stakeholders make informed decisions and assess the company's overall investment potential.


## Files

1.Extraction1.ipynb - Basic approach to extract the sec 10-k data using sec edgar and scrapping it using BeautifulSoup.
2.EdgarDataExtraction.ipynb - Use of edgartools library to extract the data.
3.RAG.ipynb - Contains the code to preprocess the data and generate valuable insights using RAG techniques
4.index.html - contains the deployment codes
5.styles.css - contains styling code
6.script.js - contains the code to manage the user interaction 
7.google.txt - contains the text file of sec 10-k data of Google from 1995 to 2023
8.nvidia.txt - contains the text file of sec 10-k data of Nvidia from 1995 to 2023
9.plots.ipynb - contains the code to generate visualizations based on the insight gained from the data
10.requirements.txt - contains required packages




   


   
