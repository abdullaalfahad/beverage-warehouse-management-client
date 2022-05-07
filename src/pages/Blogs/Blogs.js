import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='blog p-4 mb-4'>
                <h5>Q1: Difference between javascript and nodejs.</h5>
                <p>Answer: JavaScript is a programming language, which runs in web browsers. Whereas Node.js is an interpreter or running environment for JavaScript, which holds a lot of requiring libraries and all. JavaScript is basically one standard defining programming language; it can run any browser with a default browser running environment. It is a very strong language normally used for a web application on any verification or any specific business logic. We need to append in the screen without page refreshing. JavaScript also helps to use Ajax at any time, which helps us call any server-side script for given dynamic data based on the requirement. It also helps with generating dynamic HTML tables based on business requirement. JQuery is one of the popular libraries to make comfortable use of JavaScript by avoiding to write a lot of code.

                    Node.js also holds a lot of relative libraries, which we normally use in javascript for general purpose programming language. It is actually a kind of environment or interpreter that can represent JavaScript or run any javascript program. It mainly helps us execute some non-blocking operation like some operating system special information like certificate details or hardware details; we may use node js on the same, which help us do it, and JavaScript normal programming will not help us on the same. Normally all browsers have a JavaScript engine that helps us to run javascript in a web browser. Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome) are some popular javascript engine using verities browsers. But node js is using the V8 engine directly, with some libraries to do some I/O or networking operations. It actually helps us use JavaScript from outside of the browser, like creating, writing or executing one shell script, some back-end services, or running on hardware. Let us understand  JavaScript vs Node JS in detail.</p>
            </div>
            <div className='blog p-4 mb-4'>
                <h5>Q2: When should you use nodejs and when should you use mongodb.</h5>
                <p>Answer: Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.
                    <br /><br />
                    If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.
                </p>
            </div>
            <div className='blog p-4 mb-4'>
                <h5>Q3: Differences between SQL and noSQL databases.</h5>
                <p>Answer: The five critical differences between SQL vs NoSQL are:</p>
                <ul>
                    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li>SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable</li>
                    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </ul>
            </div>
            <div className='blog p-4 mb-4'>
                <h5>Q4: What is the purpose of jwt and how does it work?</h5>
                <p>Answer: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    <br /><br />
                    <strong>How it works: </strong>
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you will get two JSON strings:
                    <ul>
                        <li>The header and the payload.</li>
                        <li>The signature.</li>
                    </ul>

                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting. There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                    The signature ensures that the token hasn't been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>
        </div>
    );
};

export default Blogs;