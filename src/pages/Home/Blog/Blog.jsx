import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col p-5 lg:px-48 lg:py-11 bg-gray-300">
      <div className="card bg-base-100 shadow-xl p-5 mb-10">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl mb-2">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="my-3">
            An access token is a security credential issued to a client
            application by an authentication server, granting access to
            protected resources. It typically contains user information and
            permissions. A refresh token is a token used to obtain a new access
            token once the current one expires, maintaining user sessions
            without requiring re-authentication. Access tokens are short-lived,
            while refresh tokens are long-lived and securely stored on the
            client-side. Together, they facilitate secure access to resources in
            distributed systems and APIs. <br />
            <br />
            Access tokens authenticate clients to access protected resources,
            while refresh tokens obtain new access tokens upon expiration.
            Access tokens are included in HTTP requests' Authorization headers,
            granting access based on user permissions. Refresh tokens securely
            request new access tokens. Access tokens should be stored in memory
            or browser storage with limited lifespan, while refresh tokens are
            best stored in HttpOnly cookies to prevent XSS attacks, ensuring
            security on the client-side.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl p-5 mb-10">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl mb-2">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="my-3">
            SQL databases, structured with tables, use SQL for querying and are
            vertically scalable, suitable for complex queries and transactions.
            They enforce a predefined schema for data consistency. In contrast,
            NoSQL databases are non-relational, allowing flexible data models
            like key-value pairs or documents, and are horizontally scalable,
            making them ideal for distributed systems. NoSQL databases offer
            dynamic schemas and are suited for applications with large volumes
            of unstructured or semi-structured data, such as social media or
            IoT. While SQL ensures strong consistency and ACID transactions,
            NoSQL provides scalability and flexibility, making the choice
            dependent on specific application requirements.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl p-5 mb-10">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl mb-2">
            What is express js? What is Nest JS?
          </h2>
          <p className="my-3">
            Express.js is a minimalist web application framework for Node.js,
            designed to build web applications and APIs quickly and efficiently.
            It provides a robust set of features for web and mobile
            applications, including routing, middleware support, template
            engines, and HTTP utility methods. Express.js follows the middleware
            pattern, allowing developers to create modular, maintainable, and
            scalable applications. <br /> <br />
            NestJS is a progressive Node.js framework for building efficient,
            reliable, and scalable server-side applications. It is built with
            TypeScript and heavily inspired by Angular, leveraging its modular
            design and dependency injection system. NestJS provides a powerful
            CLI, a modular architecture, built-in support for TypeScript, and
            out-of-the-box integration with other libraries and tools like
            TypeORM, GraphQL, and WebSocket. It aims to provide a productive and
            enjoyable development experience for building enterprise-grade
            applications.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl p-5 mb-10">
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl mb-2">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="my-3">
            MongoDB's aggregate is a versatile feature designed for performing
            advanced data processing and analysis tasks on collections within
            MongoDB. It offers a powerful aggregation framework that operates
            through a pipeline of stages, each stage processing documents as
            they traverse through the pipeline. Users can construct complex
            aggregation pipelines comprising various stages such as filtering,
            grouping, sorting, projecting, and mathematical operations. This
            pipeline-based approach allows for a wide range of data manipulation
            tasks, including transformations, calculations, and aggregations,
            all executed efficiently within the database engine. <br /> <br />
            The aggregation pipeline facilitates the creation of sophisticated
            data processing workflows by allowing users to chain together
            multiple stages, with each stage taking input from the previous one
            and passing its output to the next. With stages like $match for
            filtering, $group for aggregation, and $project for reshaping
            documents, users can craft intricate data processing pipelines
            tailored to their specific requirements. MongoDB's aggregate feature
            thus empowers developers to perform complex analytics, generate
            insightful reports, and derive valuable insights from their data
            directly within the database environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
