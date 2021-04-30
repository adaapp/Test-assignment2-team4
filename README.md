# Test-assignment2-team4

## https://meet.google.com/uhs-uydk-gyh?authuser=0

## Problem Statement

We will be creating a currency converter. The MVP is that the converter would convert pounds to dollars and dollars to pounds.

## Roles

| Names            | Job Roles     |
| ---------------- | ------------- |
| Safiya Abdulaahi | Administrator |
| Keseana Robinson | QA            |
| Augustine Osagie | Developer     |
| James Spencer    | Dev Ops       |

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

## Testing Review

We decided to use JEST because we were comfortable with this testing framework. Our first testing was smoke test (to test the initial testing).

We created a test to throw out an error when a user puts a numerical amount with more than two decimal places. To do this, we checked if the inputted value was a string. This caused the test to fail as it did not check the number of decimals. We then fixed it to ensure that there are only two numbers after the decimal space.

&nbsp;

We decided to work on testing our individual functions before incooperating the HTML/CSS so we can focus on making our functions work. We also discussed the different testing we could include. For example, because this is a currency convertor we have to ensure it is being written in the correct formation (2.d.p)
