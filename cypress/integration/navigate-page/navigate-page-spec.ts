///<reference types="cypress" />

import {  Then, When, And } from "cypress-cucumber-preprocessor/steps";

beforeEach(()=> {

       cy.visit('https://app.identifi.com/login')
       
        cy.get(`[name="email"]`).type('clarkjay567@gmail.com')
        cy.contains('Sign in').click()
        cy.get('[name="password"]').type('p@ssw0rd!')
        cy.contains('Sign in', {timeout:10000}).click()
    
 });


When('User click feed', () => {
    cy.contains('Feed').click()
});

Then('User will redirect to the feed page', () => {
    cy.get('.chakra-text.css-1xmmf0j').should('exist')
});

When('User click people', () => {
    cy.contains('People').click()
});

Then('User will redirect to the directory page', () => {
    cy.get('.chakra-text.css-1xmmf0j').should('exist')
});

When('User click Daily Review', () => {
    cy.contains('Daily Review').click()
});

Then('User will redirect to the dashboard page', () => {
    cy.get('.chakra-text.css-1xmmf0j').should('exist')
});

When('User click notification', () => {
    cy.contains('Notifications').click()
});

Then('Notification modal should show', () => {
    cy.get('.chakra-text.css-1hq6w49').should('exist')
});

When('User click profile menu', () => {
    cy.get('.chakra-button.chakra-menu__menu-button.css-t3nt4n', {timeout:10000}).click()
});

And('User click my profile', () => {
    cy.get('.chakra-text.css-1732bhx', {timeout:20000}).eq(4).click()
});

Then('User profile page show', () => {
    cy.contains('Timeline').should('exist')
});

