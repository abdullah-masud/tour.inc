import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <h1 className='my-3'>FAQ</h1>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h6>Difference between authorization and authentication</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Authentication is the process of confirming a person's identity, whereas authorization is the process of confirming a user's access to certain apps, files, and data.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h6>Why are you using firebase? What other options do you have to implement authentication?</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        Authentication is made easy using Firebase. We can easily authenticate with Google, Facebook, Github, or email passwords. We can also deploy our sites using firebase and many more.
                        <br /><br />
                        firebase alternatives: <br />
                        <code>Auth0</code><br /> <code>Okta</code><br /> <code>Back4App</code><br /><code>Parse</code><br /><code> AWS Amplify</code><br /><code>Kuzzle</code>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h6>What other services does firebase provide other than authentication</h6></Accordion.Header>
                    <Accordion.Body className='text-start'>
                        There are many services which Firebase provides other than authentication.<br /> Some of them are: <br /> <code>Cloud Firestore</code><br /> <code>Cloud Functions</code><br /> <code>Hosting</code><br /> <code> Cloud Storage</code><br /> <code>Google Analytics</code><br /> <code>Predictions</code><br /> <code>Cloud Messaging</code><br /> <code>Dynamic Links</code><br /> <code>Remote Config</code>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blogs;