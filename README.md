# Geography Quiz

Link to the project: https://github.com/MariuszKaminski/Milestone-Project-2/

___
## Table of Contents

[Introduction and Purpose](#introduction-and-purpose)

[Problem Statement](#problem-statement)

[Analysis](#analysis)
  * [Feasibility Study](#feasibility-study)
  * [Functional Requirements](#functional-requirements)
  * [Non-functional Requirements](#non-functional-requirements)
  * [User Experience](#user-experience)
    * [Target Audience](#target-audience)
    * [User Stories](#user-stories) 

[Wireframes](#wireframes)

[Design Considerations](#design-considerations)

[Features](#features)

[Implementation and Coding](#implementation-and-coding)

[Testing](#testing)

[Deployment](#deployment)

[Validation](#validation)
  
[Evaluation](#evaluation)

[Credits](#credits)

---

## Introduction and Purpose

This project has been created as Milestone Two project for my Diploma Level 5 in Web Development, a course run by Harlow College in association with Code Institute. 
In this file you will find documentation related to a web application coded in Javascript called 'Geograpy Quiz'. The quiz aplication generates random questions about geographical features of countries such as their capitals, longest rivers, tallest mountains as well as which continent they are situated in. The purpose of 'Geography Quiz' web page is educational as a resource for teachers and students for rehearsing material or for general public that would like check their general knowledge in the field of geography.

## Problem Statement

Design, implement and deploy an online resource that can be recommend by teachers to their pupils/students in the form of a quiz with guestions and multiple choice answers. The questions and answers should be randomized and the set of answers should contain only one correct answer. The web page with the quiz needs to provide their users with feedback
which includes pop up messages informing the user whether the chosen answer is correct or not. In the case of incorrect answer the pop-up should provide the users with a correct answer, so that some learning could occur. Additionally, the quiz web page should count the score for both correct and incorrect answers.

## Analysis

### Feasibility Study:
1.	As teaching and learning increasingly happens online. A custom built web application could provide a safe and hassle free way for the pupils/students to rehearse the material.
2. The quiz could be one of a growing number of online resources that the school would like to offer their students free of charge.	
 
### Functional Requirements
1.	It must be functional on PCs and mobile devices.
2.	It has to be intuitive and easy to navigate.
3.	It has to test general knowlegde in the subject area of Geography.
4.	It needs to provide ceratin variety.
5.	It should facilitate learning and entertain.

### Non-functional Requirements
1.	Website completion deadline: 11th of November, 2021
3.	The application should utilize HTML5, CSS3 and JavaSrcipt technologies.
4.	The application should be easy to modify and expand.
5.	The application should complement school's other online resources.
6.	The web page/application should aesthetically pleasing and provide good user experience.

## User Experience 

### Target Audience
* Pupils/students - 
* General public - 

### User Stories:
* As a pupil/student I can easily interact with the game.
* As a accidental visitor I would like to test my general knowledge in the field of Geography

## Wireframes

### Desktop version
![Desktop version](./assets/images/Desktop-look.png)

### Mobile version

![Desktop version](./assets/images/Small-screen-look.png)

## Design Considerations

### Design ideas:
The design is primarily based on Code Institute’s “Love Maths” tutorial by Anna Greaves. It is true to say that I have used the tutorial as a starting point, however while I was working on it and trying to addapt it to my ideas, I had to introduce extensive changes both to the appearance and the code. I have retained the idea of 4 buttons for different game types and the submit button for checking answers. The whole question area has been remodelled to be textbased with radio buttons to provide ansers instead of input boxes for numbers.  

### Design details

The web application, in its entirety, utilizes Goole Font “Ubuntu”. The colour used for the game area background is ##00FFBF (aquamarine).

## Features

### Game type change buttons
![Navbar desktop version](./assets/img/navbar.PNG)

The buttons are a one of the key application features as they enable the user to change the type of game questions. The default game type that the aplication offers on loading the web page is "Capitals", however swiching to any of the other three reamining game types requires the user to click a corresponding button.

### Question area
![Logo desktop version](./assets/img/gym4u_logo.png)\
This area displays a quiz question relevant to the game type with randomly selected country name. Below the question the user is presented with a choice of three answers, one of which is correct. The user makes their selection by clicking a corresponding radio button.

### Submit button
![Classes section desktop version](./assets/img/classes_section.PNG)
Once clicked, the submit button triggers a number of actions. Firstly, the answer is verified. Secondly, depending on whether the answer is correct or not, the user receives an appropriate pop up message and the score is adjusted. Lastly, a new question and answers of the same game type are generated. 

### Game score area
![Contact us section desktop version](./assets/img/contact_us_section.PNG)
This area keeps track of the user's progress by displaying the current number of correct and incorrect answers.

## Implementation and Coding

The code for the purpose of this project was written and edited in VSC then copied to GitPod. The website’s structure and content is delivered by means of HTML while visual styling and positioning is achieved by means of CSS. I have aimed to write and space the code in orderly neat manner and provide helpful comments, which is a good practice recommended by Code Institute in their learning tutorials. I also applied class names that hint at their own function. All of this to enhance the readability of the code to other people who might be reviewing it.


## Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5) used to provide the site with content.
* [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) used to style the HTML content.
* [Javascript](https://en.wikipedia.org/wiki/JavaScript) used to power the application features.
* [Balsamiq](https://balsamiq.com/) used for the creation of wireframes for the site.
* [Google Chrome Developer tools](https://developer.chrome.com/docs/devtools/) used to test site responsiveness and to test code.
* [Github](https://github.com/) used as the repository hosting service.
* [Gitpod](https://www.gitpod.io/) an online base code editor used for writing code and tracking changes.
* [Code Institute Gitpod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template) used to as a template for the creation of the project repository.
* [W3C Markup](https://validator.w3.org/) used for HTML validation.
* [Jigsaw validation](https://jigsaw.w3.org/) used for CSS validation.

## Testing
1. As a new user I can easily navigate the website.
* Result: PASSED
  * The website has a navbar with links to homepage sections and other website pages that can be accessed from every website page.
2. As a new user I can easily find pricing information.
* Result: PASSED
  * There is an easy to follow extensive pricing offer provided in the form of a table.
3. As a new user I can easily find personal training and classes information.
* Result: PARTIAL PASS
  * There is a weekly class schedule and offered services information provided for everyone, however more detailed information about particular personal trainers is only available after sign up.
4. As a new user I can check the the location of the gym.
* Result: PASSED
  * The website provides both the address and an embedded Google Map showing gym's exact location.
5. As a new user I can contact the gym regarding any questions I have.
* Result: PASSED
  * The website provides contact details for enquiries.
6. As a new user I can find links to the gym's other social media pages that I can visit to gain even more information.
* Result: PASSED
  * The social media links are provided in the footer and can be accessed from every website page
7. As a new user I would like to be able to register as a member once I've made my decision to join the gym.
* Result: PASSED
  * The website has a separate form where a person wishing to join the gym can leave their details to book an induction.
8. As a returning user I can see information about personal trainers working for the gym
* Result: PASSED
  * This function becomes available after joining the gym and can be accessed after logging into a members account in the "Member's area" section.
9. As a returning user I want to be able to book my classes as well as other services provided by the gym.
* Result: PASSED
  * This function becomes available after joining the gym and can be accessed after logging into a members account in the "Member's area" section.
10. As a returning user I want to be able to manage my membership.
* Result: PASSED
  * This function becomes available after joining the gym and can be accessed after logging into a members account in the "Member's area" section.
11. As a returning user I want to be able to leave feedback and get gym related updates.
* Result: PASSED
  * This function becomes available after joining the gym and can be accessed after loging into a members account in the "Member's area" section.

## Validation

### HTML
Pasting the code into W3C Markup Validation Service has returned the following results for each of the pages:
* index.html
![Index.html validation results](./assets/img/html-validation-results-index.PNG)
* gallery.html
![Index.html validation results](./assets/img/html-validation-results-gallery.PNG)
* sign-up.html
![Index.html validation results](./assets/img/html-validation-results-sign-up.PNG)
All the above errors have been correncted. The service's recommendation to introduce h1-h6 elements into the section of "gallery.htm" is not applicable as the only content on the page are photos. 

### CSS
Pasting the code into W3C Markup Validation Service has returned the following results:
* style.css\
![CSS validation results](./assets/img/css-validation-results.PNG)

## Deployment
After final commit to Git via Gipod, the website has been deployed online at Git Pages through a standard GitHub procedure. Below are the steps taken:\
<br>
Enter the Github repository “Project Milestone 1” -> Settings -> Pages ->Source-> (branch) Master-> (folder) /root-> Save 
 
## Evaluation

While reflecting on the achieved outcome, it its present form the website does not provide the functionality required by the customer. The site would benefit from greater responsiveness which can be achieved with Bootstrap library, the inclusion of which was optional in Milestone Project 1. The forms would need to employ appropriate scripts to work, which is currently beyond the developer's skillset. Some of the pages might appear overloaded; therefore the website could also benefit from at least one more page (perhaps a separate page for pricing). These are features that could be included in future updates.\
The work on this project helped to me to realize the importance of early planning stages and good initial design. In my future projects I will be striving to achieve greater simplicity and functionality in order to provide the best possible user experience.

## Credits

### Sources for code solutions:
[BodyActiveGym](http://www.bodyactivegym.co.uk/) -text adapted for “About” and "What do we offer?" sections\
[RippedGym Harlow](https://www.rippedgymharlow.co.uk/) -text adapted for “About” section and “Opening Times” card\
[PureGym](https://www.puregym.com/gyms/harlow/timetable/) -class names in “Classes” section

### Sources for photos:

#### The outside view of the gym building from "About" Section
[gym_outside.jpg](https://1.bp.blogspot.com/-axCdPQ-UPj0/X47-VYIrSaI/AAAAAAAAW9M/9sP8mzMdCdYtBFDWlV__MR6jztnECOl1wCLcBGAsYHQ/s800/40023.jpg) This photo originates from [The Door Industry Journal](https://blog.doorindustryjournal.co.uk)

#### Backgrounds:
[gym-about.jpg](https://unsplash.com/photos/CQfNt66ttZM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[sign_up_background.jpg](https://unsplash.com/photos/wTcD3MwL_VY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[classes-background.jpg](https://unsplash.com/photos/y0SMHt74yqc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[saffron_walden.jpg](https://promotemyplacecdn.azureedge.net/cache/4/b/8/8/5/9/4b8859073357c1d5f901fa61144f97461a861ce5.jpg) This photo originates form [Saffron Walden Initiative](http://www.swinitiative.org/) website.

#### Gallery photos:
[cycle-area.jpg](https://unsplash.com/photos/dDp-6pXrYik?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[treadmill-area.jpg](https://unsplash.com/photos/m27OTMegUyA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[weights-area.jpg](https://unsplash.com/photos/nV7WA07ikI4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[exercise-machinges.jpg](https://unsplash.com/photos/0sa8D74iodI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[exercise1.jpg](https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-2247179.jpg&fm=jpg) (Pexels)\
[exercise2.jpg](https://unsplash.com/photos/wXBK9JrM0iU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[exercise3.jpg](https://images.pexels.com/photos/6551133/pexels-photo-6551133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) (Pexels)\
[classes1.jpg](https://unsplash.com/photos/NbpUM86Jo8Y?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[classes2.jpg](https://unsplash.com/photos/yNPTXNYVfmw?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[classes3.jpg](https://unsplash.com/photos/wy_L8W0zcpI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) (Unsplash)\
[man_lifting.jpg](https://www.pexels.com/pl-pl/zdjecie/osoba-podnoszaca-sztange-w-pomieszczeniu-2261485/) (Pexels)\
[juice_bar.jpg](https://mk0lavidaliverp84l6x.kinstacdn.com/wp-content/uploads/2019/09/TEL7-750x430.jpg) and 
[healty_food.jpg](https://mk0lavidaliverp84l6x.kinstacdn.com/wp-content/uploads/2019/09/TEL2-750x430.jpg) These photos originate from the article [TEL ISLAND: HEALTHY FOOD IN THE HEART OF HESWALL!](https://www.lavidaliverpool.co.uk/tel-island-healthy-food-heart-heswall/) at [la vida liverpool](https://www.lavidaliverpool.co.uk/). 

#### Libraries:
* [Font Awesome](https://fontawesome.com/) -source for the icons
* [Google Fonts](https://fonts.google.com/) -source for the fonts

#### Design ideas:
* [Code Institute](https://codeinstitute.net/) "Love Maths" tutorial.
