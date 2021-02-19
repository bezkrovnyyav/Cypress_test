class LoginPage {
	
	navigate() {
        cy.visit('https://spyserp.com/panel/site/signup');
    }
	
	 get loginPageButton() {
        return cy.get('a[href="/panel/signin"]');
    }
	
	 get registerPageButton() {
        return cy.get('a[href="/panel/site/signup"]');
    }
    get emailField() {
        return cy.get('#loginform-email');
    }

    get passwordField() {
        return cy.get('#loginform-password');
    }
	
	get acceptCheckboxTerms(){
		return cy.get('[for="loginform-termsService"]');
	}
	
	get acceptCheckboxEmails(){
		return cy.get('[for="loginform-receiveEmails"]');
	}
	
	get captchaElement(){
		return cy.get('[style="width: 304px; height: 78px;"] > div > iframe');
	}
	
	get registerButton(){
		return cy.get('#gtagTypeRegisterBtn');
	}
	get errorFields(){
		return cy.get('.alert');
	}
	
	get errorEmptyEmail(){
		return 'Email cannot be blank.';
	}
	
	get errorEmptyPassword(){
		return 'Password cannot be blank.';
	}
	
	get errorAcceptTerms(){
		return 'You must agree to the terms of service of our site';
	}
	
	get errorResivedEmail(){
		return 'You have to check agree to receive emails for Sign Up. This option can be disabled in your profile at any time'
	}
	
	get error5SymbolsPassword(){
		return 'Password should contain at least 6 characters.'
	}
	
	get errorInvalidPassword() {
        return 'Email is not a valid email address.'
    }
	
	
	

//----------------

    

    fillUsername(username) {
        this.usernameElement.type(username);
    }

    fillPassword(password) {
        this.passwordElement.type(password);
    }

    submit() {
        this.submitButtonElement.click();
    }
};

export default LoginPage;

