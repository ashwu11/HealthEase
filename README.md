# HealthMate
A web application that uses multiple AI technologies to translate complex medical terminology into simplified explanations, aiming to facilitate user comprehension. Users can choose to input text via typing, image capture, or audio recording on the home page, with an additional option to view their question history if registered.

**Built Using:** Node.js, Express.js, React.js, HTML/CSS, MongoDB, OpenAI, Cohere, Tesseract

## Inspiration

We were inspired by our parents—especially seeing their difficulty in comprehending complicated medical terminology in their day-to-day lives. Unfortunately, many suffer similar issues, including immigrants who do not have strong English-speaking skills. It is additionally difficult when many translation tools are complex and require multiple steps. Therefore, we produced HealthMate, a simple application that interprets medical jargon into simple language via text and photo analysis.

## What it does

This application will take user input in the form of text, image or audio and translate it through the use of multiple AI into simplified explanations that the user can understand. The goal is to allow anyone to be able to understand the difficult medical terms, conditions or drugs that they may encounter through our app. Upon entering the home page, the user will have the options of taking a photo, providing audio, typing an input or viewing their history. If the photo option is chosen, they will be able to take a picture of a body of text that they wish to be translated into a more understandable explanation. If the audio option is chosen, the user will have the opportunity to record the medical terms they are having trouble with and receive a simplified understanding of it. Then, if the typing option is chosen, the user can type out their query and receive a reply giving them a layman's explanation of their question. Lastly, the history option will provide the history of the user's questions if they have an account.

## How we built it

We used React and Node.js to create the front end and back end respectively. Additionally, we used Figma to create and plan the initial visual interface. For the back end, we utilized Cohere AI, OpenAI, and Tesseract.js APIs to translate the various user inputs. For the appearance of the application, we made sure to choose colour blind-friendly colour schemes, include different user input methods for those who may need them and keep in mind the audience that may use our application. For instance, we wanted to make everything look simple, neat and straightforward since this application may be used by the elderly for them to be more medically literate. Additionally, we tried to keep all icons and text larger so that it can be more accessible to those who are farsighted.

## Challenges we ran into

A big challenge we ran into was being too ambitious at the start with the different features we wanted our application to have. We underestimated the amount of work and learning it would take to figure out how to create various functions from utilizing and importing APIs to connecting the front and back ends together. Since we are quite new to using React and Node.js, it was difficult learning within 24 hours and implement everything we wanted to create. Due to this, we were unfortunately unable to create some of the functions that we had originally outlined such as having the user history.

## Accomplishments that we're proud of

We are proud of still being able to create a somewhat working application despite the minimal experience we had with React and Node.js. Additionally, we are proud of being able to use this time to learn a lot about using React, Node.js and working with APIs. Not only that, we are proud that we were able to successfully work together as a team to create an application that we were passionate about making.

## What we learned

Through this experience, we learned a lot about developing a web application from scratch using React and Node.js. We also learned about managing and collaborating through Github and dividing tasks. Additionally, we learned a lot about working with APIs and the different types of functionality that can be accessed through them.

## What's next for HealthMate

We would like to fix the current non-functioning parts such as the audio translation and creating logins so that the history of users can be kept track of. This would be improved upon by connecting the front and back ends as they both work separately. On top of that, we would like the improve the design and look of our application to not only look more aesthetic, but also be more accessible if possible.
