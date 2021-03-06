# Test-assignment2-team4

## https://meet.google.com/uhs-uydk-gyh?authuser=0

## Issues With GitHub

Whilst working on our Assignment we had issues with GitHub as shown below GitHub reported outages with the Actions and Pages, this caused James to have an increased number of commits:
<div class="column">
    <img src="https://i.ibb.co/r0T9JkR/Screenshot-2021-05-16-at-15-20-59.png" alt="Snow" style="width:100%; ">
</div>

## Problem Statement

We will be creating a currency converter. The MVP is that the converter would convert pounds to dollars and dollars to pounds.

## Roles

| Names            | Job Roles     |
| ---------------- | ------------- |
| Safiya Abdulaahi | Administrator |
| Keseana Robinson | QA            |
| Augustine Osagie | Developer     |
| James Spencer    | Dev Ops       |

## Coding Practice

We will also create issues on GitHub to identify what tasks need completing. A coding standard will improve the readability and maintainence of the code, and it will also help us to detect errors quickly. We will achieve this by having standard variable and classes names,

## Testing

We will be running a smoke test as preliminary testing that comprises a set of non-exhaustive tests that verify that the build is stable enough for further testing.

As we are building a currency converter, it is important to check that the mathmematical functions work

## UI Design

We will be using A/B testing to decide the UI will will be choosing for the currecny converter. James will be creating a google form where the team will pick out the better UI out of the two designs.

Below are the two designs that have been created, these will then be placed in a Google Form so that the team can decide on which of the two is most appropriate/beneficial.

### Design 1:

<div class="column">
    <img src="https://i.ibb.co/86Zb50Q/Currency-1.png" alt="Snow" style="width:100%; ">
</div>

### Design 2:

<div class="column">
    <img src="https://i.ibb.co/c1tBGrP/Currency-2.png" alt="Forest" style="width:100%">
</div>

### Google Form Results:

<div class="column">
    <img src="https://i.ibb.co/LxB7FTn/Currency-Results.png" alt="Forest" style="width:100%">
</div>

https://docs.google.com/forms/d/e/1FAIpQLSc7P46kY3y1qZsO-8r04ekQAPc0k2TGqmJHWf1DGV9p-H6hSg/viewform

## UI Design Results

As shown in the results above, the majority votes chose the second option. We chose to use a google form to capture the results as it was a simple way to recieve the feedback from the team. With this A/B testing method, we were able to provide the benefits of each sample. The second sample had a simpler and easy design so this is what we decided to choose.

## Testing Strategy

We decided to use JEST because we were comfortable with this testing framework. Our first testing was smoke test (to test the initial testing).

We created a test to throw out an error when a user puts a numerical amount with more than two decimal places. To do this, we checked if the inputted value was a string. This caused the test to fail as it did not check the number of decimals. We then fixed it to ensure that there are only two numbers after the decimal space.

We have created a describe block to convert pounds to dollars and dollars to pounds. Inside each block, we have created multiple assertions to test the input, output and erros being thrown. For example, we have tested that it returns the data type; number. We also tested that an error is thrown when more than two decimal places is entered. We also tested the basic logic of the currency converter, ensuring the converter converts ??2 into $2.78.
&nbsp;

We decided to work on testing our individual functions before incooperating the HTML/CSS so we can focus on making our functions work. We also discussed the different testing we could include. For example, because this is a currency convertor we have to ensure it is being written in the correct formation (2.d.p)

To ensure good coding practice throughout this project we are going to regularly go through code reviews as a team on pull requests before they are merged into the main branch.

Our workflow is to take it in turns to each work on an issue whilst the other members of the team guide those who are coding. Once the code has been completed, it will be commited to a seperate branch on GitHub to be reviewed by the team and checked for conflicts.

Also added additional testing on both interface and console side to prevent user from entering negative numbers. So did this on test side by not allowing the input currency to be less than 0 and on the user interface we created a minimum of 0. This is important as -5 is not a valid currency.

## Enabling input currency

Initially, our code did not allow the input numbers wiht two decimal places. We used the step button that allowed the number inputted to go up by 1 pence each time. This allows the user to input decimal numbers.

## GitHub Pages & Actions:

We have used GitHub pages which is a site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, and runs the files through a build process, and publishes a website. Here is the link to the GitHub pages: https://adaapp.github.io/Test-assignment2-team4/

We have also setup Github Actions to run our integration tests and make sure that they are passing.

## Accessibility Report

After using GitHub pages to create a webiste containing our currency converter, we were able to run an Accessibility Report using googles Lighthouse feature:

<div class="column">
    <img src="https://i.ibb.co/J7HBDHJ/Lighthouse-Report.png" alt="Forest" style="width:100%">
</div>

From this we were able to gauge that our application is accessible and functions correctly.

## Final Product
<div class="column">
    <a href="https://ibb.co/gr3N2Wj"><img src="https://i.ibb.co/wdRVkQ0/Screenshot-2021-05-21-at-20-14-49.png" alt="Screenshot-2021-05-21-at-20-14-49" border="0"></a>
</div>

We went for option A because most of us agreed on it and was easy to configure and we able to correctly match the styling. However, if we had more time, we could look at changing this to a drop-down list as we begin to add more currencies but it works correctly.  For future, we could also add the currency symbols so it is more useful for the user
