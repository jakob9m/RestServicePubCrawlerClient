RestServicePubCrawlerClient
Overview
RestServicePubCrawlerClient is a sophisticated web application designed to demonstrate the effective use of modern Java EE technologies in building scalable, robust,
and maintainable web services. While the application offers a thematic user interface centered around pubs and beers, its core value lies in the underlying architecture,
clean code practices, and the integration of diverse technologies.

Technical Features
Robust Backend Architecture
Java EE Ecosystem: Utilizes Java Servlets for handling web requests and Enterprise Java Beans (EJB) for transaction management, persistence, and business logic.
Modular Design: Structured into multiple modules (PubCrawlerClient, PubCrawlerProject, PubCrawlerRestClient) promoting a clean separation of concerns and enhancing maintainability.
Data Persistence: Implements the Java Persistence API (JPA) for efficient database operations and interaction, supported by a well-defined persistence layer in PubCrawlerEAOImpl.

Advanced Frontend Technologies
Interactive Web Pages: Leverages JavaServer Pages (JSP) for dynamic content generation, creating an engaging and interactive user interface.
Responsive Web Design: Ensures a seamless user experience across various devices and screen sizes using custom CSS and JavaScript.

Integration and Services
RESTful Services: Features a RESTful serverlet, PubCrawlerRestServerlet, providing a platform to expose application functionalities as RESTful web services.
Weather API Integration: Incorporates real-time weather data, showcasing the capability to integrate external APIs and services.

Development Best Practices
MVC Pattern: Adheres strictly to the Model-View-Controller (MVC) pattern, ensuring a clear separation of concerns and improving code manageability.
Configuration Management: Utilizes XML-based configuration for web and EJB modules, promoting flexibility and environment-independent deployment.
