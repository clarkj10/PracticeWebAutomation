/// <reference types="cypress" />
import {  Then, When, And } from "cypress-cucumber-preprocessor/steps";

beforeEach(()=> {

       cy.visit('https://app.identifi.com/login')
    
 });


Then(`User should see {string}`, (text:string) =>{
   cy.contains(text).should(`exist`)
});

When('User enter email {string}', (email:string) =>{
    cy.get(`[name="email"]`).type(email)
    cy.contains('Sign in').click()
});

Then('User see error message', () => {
    cy.contains('Email address not found.', {timeout:30000}).should('exist')
});

When('User enter email address {string}', (email:string) =>{
    cy.get(`[name="email"]`).type(email)
    cy.contains('Sign in').click()
});

And('User enter password {string}', (password:string) => {
    cy.get('[name="password"]').type(password)
    cy.contains('Sign in').click()
});

Then('User prompt message show', () => {
    cy.contains('Invalid email or password.').should('exist')
});

When('User enter email {string}', (email:string) =>{
    cy.get(`[name="email"]`).type(email)
    cy.contains('Sign in').click()
});

And('User enter password {string}', (password:string) => {
    cy.get('[name="password"]').type(password)
    cy.contains('Sign in').click()
});

Then('user will logged in', () => {
    cy.contains('Clark Dela Cruz', {timeout:20000}).should('exist')
});

