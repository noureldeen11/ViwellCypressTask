# ViWell_Automation_Task
This is a Simple automation project showing how to log in to the Tradeling e-commerce website, add items to the cart, and Submit RFP form.
The project is really simple and Made with Cypress. Let's get started.


### Table of Contents  
**[Prerequisites & Installation](#prerequisites--installation)**<br>
**[Code and Test Scripts](#code-and-test-scripts)**<br>
**[Report](#report)**<br>

## Prerequisites & Installation
Before starting with the project, you need to install NodeJS on your system.
1) To install NodeJS, open the following link: https://nodejs.org/en.
2) Download the package version suitable for your PC system.
3) After downloading is done, install NodeJS on your system.

When the installation is over, you can check if it is installed correctly on your PC or not by opening the command prompt and running the two lines below:
1) npm -v
2) node -v
Each one should give the correct installed Node version.

After installing Node, install Git from the following link: https://git-scm.com/.

After installing Git, install Visual Studio Code from the following link: https://code.visualstudio.com/download.
After installing the Visual Studio Code IDE, it is time to create a folder for the ViWell project.

1) Create a folder on your PC and give it a name (e.g., "ViWell_Automation").
2) Open Visual Studio Code and click on "Clone Git Repository".
3) Copy the HTTPS code from the project on the GitHub repository and paste it into Visual Studio.
4) After pasting the URL, specify where you want the project to be located, which in our case will be "ViWell_Automation".
Wait until the process is done, and the project will be downloaded to your machine.

Now, to ensure you can run the project, you need to install Cypress.
1) From Visual Studio Code, press (Ctrl + Shift + `) to open a new terminal, or from the top menu, choose "Terminal" and select "New Terminal".
2) After the terminal is opened, write the command below:
```visual Studio Code
npm init -y
```
This command will install the "package.json"

3) Then from the Terminal, we will write the below Command:
```Visual Studio Code
npm install cypress
```
This command will install the latest version of Cypress. to know the exact version, apply the below Command:
```Visual Studio Code
npm cypress -v
```

Now to Open Cypress and start executing the Scripts, Apply the Below Command:
```Visual Studio Code
npm cypress open
```
The Command will open the Cypress application, choose the e2e Configurations as the below screen

After the Configurations are done, you will be asked to choose a browser, let's choose Chrome then click on Start E2E Testing Chrome:


After that, an HTML will be Opened as below screen, Choose the Script you wish to execute:


## Code and Test Scripts
Now Let's Break down the Code, We Will start with a simple login Test:

We import our Functions from the 'login_page' because we are working in POM, At the 'beforeEach()' function we enter the Website URL from a Json file called 'URLs.json' which will be Used to store all the 
URLs that will be used in this solution.

After that in the Main Login test, we first import the main user's info like Mail, Password, and Username and pass them as parameters in the function.
After the User login, we validate that the URL is correct after the login process and that the expected Username is displayed correctly.

*Important Note*
The Current account used is my Email, it is now just used for testing and the website used is a production website. The RFQ FUnction which we will talk about later actually sends a form to the Support,
sp Create your own account when using this Repo. this account will be deleted in a week.


Now to the Add to Cart,

In this function we do not have to login as a registered user, we can simply Open the site, Search for a Product, and add it to the cart. In this script we do not purchase, we just validate that the Items
are added successfully.

The Function starts by allowing the User to enter the name of the Product that he/she will search for, then After the search results are displayed, it will select the First Item and view its Details,
This can also be configured by entering the index number of the item to be selected.

After The Item is viewed, it will be added to the cart and then Navigated to the Cart Page, from there, we Validate that the Item is added correctly by checking its visibility.


Now the QFR:

To submit this form you must be a registered user, so in the beforeEach(), we call the Login Function.

The Function starts with variables that the user will enter to be passed as parameters to the functions, such as the product name and unit price.

## Report

The Report used in this project is the Mochawesome HTML Report.

To Download the Report open a new terminal and Apply the Below Commands:

```Visual Studio Code
npm i mochawesome-report-generator
npm i mochawesome-merge
npm install mochawesome
```

now open the cypress.config.js and copy the below and paste it in it:
    "reporter": "mochawesome",
    "reporterOptions": {
      "charts": true,
      "overwrite": false,
      "html": false,
      "json": true,
      "reportDir": "cypress/reports"
     }

after installing all that is above, execute the below:
```Visual Studio Code
npx cypress run --reporter mochawesome  
```

The Above Command will run the Scripts in headless mode, and after it is done it will make a json report for each script, We should now merege them all so execute the below line:
```Visual Studio Code
npx mochawesome-merge .\cypress\reports\*.json > Report.json
```
Note that the name of the report will be 'fullReport.json' you can name it anything you want.

After that execute the Line Below:
```Visual Studio Code
npx mochawesome-merge .\cypress\reports\*.json | out-file -encoding ascii ./Report.json
```
This will create an HTML report in your repo, open it to see the latest Run Status.

Now to make sure that the report is generated after each run, apply the below:
1) Go to the package.json
2) copy the below and paste it into it:
"scripts": {
    "test":  "npm run cypress-test || npm run posttest",
    "cypress-test": "cypress run",
    "posttest": "npm run merge-reports && npm run generate-htmlreport",
    "merge-reports": "mochawesome-merge ./cypress/reports/*.json > ./fullReport.json",
    "generate-htmlreport": "marge ./fullReport.json --reportDir ./cypress/reports"
  },


And that is a Wrap, Hope you Like the project :D 
