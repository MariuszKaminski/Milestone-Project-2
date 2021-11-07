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

This project has been created as Milestone One project for my Diploma Level 5 in Web Development, a course run by Harlow College in association with Code Institute. 
In this document you will find the documentation, which accompanies a website that I have designed and developed for GYM4U, a fictional gym facility based on real life gym facilities operating in my local area.

## Problem Statement

The customer - “GymForU” is a local independent gym who want to enhance their online presence by means of a custom build website. The page should provide prospective members with information on the offered range of services and establish an online hub for the existing community of members. The customer wants their website up and running within a period of one month. For this purpose they have allocated a budget of £2000.

## Analysis

### Feasibility Study:
1.	The custom built website would certainly be beneficial, as other ways of advertising may prove to be more expensive and not as efficient in the long run as a permanent interactive and responsive website would.
2.	In the face of growing competition from gym chains and other locally run gyms and providing that the customer has at their disposal the funds needed, there is no reason to delay the development and deployment of the website.
3.	The website will bring awareness of the facility and what they can offer helping to attract undecided prospective members from the local area and even further away.
 
### Functional Requirements
1.	It must present introductory information about gym features that set it apart from other gyms in the area. It should include the full range of offered services.
2.	It has to present a detailed weekly class schedule.
3.	It has to provide information about the location, contact details and opening times.
4.	It needs to have a “members area” where classes and other services could be booked and feedback provided.
5.	It needs to have a “sign up” section where new members could express their interest in joining in as a member and book a taster session or induction.
6.	The website should include a gallery which presents the facilities, the range of equipment available and the friendly social atmosphere during classes.
7.	The website should point to all other social media sites that belong to the gym.

### Non-functional Requirements
1.	Website completion deadline: 2nd of July, 2021
2.	The website should comprise of no more than 3 web pages.
3.	The webiste reflects the developer’s current skillset.
4.	The website should promote the brand i.e. the company logo and the company colours (teal, black, grey and white)
5.	The website aesthetically pleasing and provide good user experience.

## User Experience 

### Target Audience
* New users - Individuals or groups of people who are looking for the right gym for them to meet and exercise together (check facilities, equipment, pricing, classes, personal training)
* Returning users - gym members who want to book classes, upgade/downgrade membership, buy passes, leave feedback, get updates

### User Stories:
* As a new user I can easily navigate the website
* As a new user I can easily find pricing information
* As a new user I can easily find personal training and classes information
* As a new user I can check the location of the gym
* As a new user I can contact the gym regarding any questions I have
* As a new user I can find links to the gym's other social media pages that I can visit to gain even more information
* As a new user I would like to be able to register as a member once I've made my decision to join the gym
* As a returning user I can see information about personal trainers working for the gym
* As a returning user I want to be able to book my classes as well as other services provided by the gym.
* As a returning user I want to be able to manage my membership.
* As a returning user I want to be able to leave feedback and get gym related updates.

## Wireframes

### Homepage
![Desktop version](./assets/img/home_page.png)

### Gallery

![Desktop version](./assets/img/gallery.png)

### Sign in / Sign up

![Desktop version](./assets/img/sign-in.png)

## Design Considerations

### Colours
The colours used for the design are in line with Gym4U brand colours which include the following:
* teal (#008080) - for links buttons and backgrounds
* grey (#4a4a4f) - for backgrounds
* black (#000000) - for fonts and backgrounds
* white  (#FFFFFF) - for fonts and logo background

### Fonts
For the text content the website utilizes Goole Font “Noto Sans”. Font size has been consistently maintained as 1.6em for h2 headings, 1.4em for important information and regular font (weight 400) for smaller print.

### Design ideas:
I have reused and adapted the idea of the semi-transparent cards on a photo background that can be found in Code Institute’s “Love Running” tutorial. This design has been applied to “Classes” and “Contact Us” homepage sections. Also the layout of the photographs in the Gallery page follows the example of masonry design principle from the same tutorial.

## Features

### Navbar
![Navbar desktop version](./assets/img/navbar.PNG)

The navbar is displayed on all website pages and containing a small gym logo. It  provides links to “About”, “Classes” and “Contact “ homepage sections as well as to “Gallery” and  “Sign in/Sign up” pages within the website.

### Logo
![Logo desktop version](./assets/img/gym4u_logo.png)\
Large-sized logo is prominently displayed at the homepage page with small-sized logo always visible on the navbar.

### Classes Section
![Classes section desktop version](./assets/img/classes_section.PNG)
The classes section contains weekly class schedule with each day of the week on a separate semi-transparent card on a photo background.

### Contact Us Section
![Contact us section desktop version](./assets/img/contact_us_section.PNG)
This section contains four subsections providing: address, contact details, opening time and iframe with google map showing the gym’s exact location. The subsections are in the form of semi-transparent cards with the town’s photo as a background. All cards in the “Contact Us” section are accompanied with Fontawesome icons. This also applies to all homepage section headings.

### Footer
![Footer desktop version](./assets/img/footer.PNG)
The footer, displayed on all pages, provides a basic copyright information and links to the gym’s social media sites in the form of Fontawesome icons.

### Gallery
![Gallery desktop version](./assets/img/gallery.PNG)
The gallery comprises photos of different sizes grouped in 4 columns. The photos give a preview of gym’s facilities, equipment and available activities. The gallery follows the ‘masonry’ design principle.

### Members Sign in Form
![Sign in form desktop version](./assets/img/members_area.PNG)

The form lists all extra benefits the members are entitled. It enables the members to log in by entering their log in details and pressing the “sign in” button.

### New Members Sing up Form
![Sign up form desktop version](./assets/img/new_members_sign_in.PNG)

The purpose of the sign up form is to help the customers who have made a decision to join the gym to book an introductory session and create their member’s account at the website. For this reason some basic personal details need to be gathered from the form’s input fields.

### Membership/Admission Pricing Table
![Pricing table desktop version](./assets/img/membership_pricing.PNG)

The purpose of the table is to present prospective customers with the whole range of flexible payment options for the gym’s services.

## Implementation and Coding

The code for the purpose of this project was written and edited in VSC then copied to GitPod. The website’s structure and content is delivered by means of HTML while visual styling and positioning is achieved by means of CSS. I have aimed to write and space the code in orderly neat manner and provide helpful comments, which is a good practice recommended by Code Institute in their learning tutorials. I also applied class names that hint at their own function. All of this to enhance the readability of the code to other people who might be reviewing it.


## Technologies Used

* [HTML5](https://en.wikipedia.org/wiki/HTML5) used to provide the site with content
* [CSS3](https://en.wikipedia.org/wiki/CSS#CSS_3) used to style the HTML content
* [Javascript](https://en.wikipedia.org/wiki/JavaScript) powering the Google Map in "Contact Us" Section
* [Balsamiq](https://balsamiq.com/) used for the creation of wireframes for the site
* [FreeLogo Design](https://www.freelogodesign.org/) a free online tool used to create Gym4U logo
* [Google Chrome Developer tools](https://developer.chrome.com/docs/devtools/) used to test site responsiveness and to test code
* [VSC](https://code.visualstudio.com/) for offline code writing
* [Github](https://github.com/) used as the repository hosting service
* [Gitpod](https://www.gitpod.io/) an online base code editor used for writing code and tracking changes
* [Code Institute Gitpod Full Template](https://github.com/Code-Institute-Org/gitpod-full-template) used to as a template for the creation of the project repository
* [W3C Markup](https://validator.w3.org/) used for HTML validation
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

### Sources for content:
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
* [Code Institute](https://codeinstitute.net/) "Coder's Coffeehouse" and "Love Running" tutorials.
