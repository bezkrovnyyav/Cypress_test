import LoginPage from '../page.objects/login.page';
import {env} from '../page.objects/credentials.json';

describe('login user page', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.navigate(env.urls.login);
    });

	it('should login page is displayed', () => {
         loginPage.loginPageButton.should('be.visible');
		 loginPage.registerPageButton.should('be.visible');
		 loginPage.passwordField.should('be.visible');
		 loginPage.acceptCheckboxTerms.should('be.visible');
		 loginPage.acceptCheckboxEmails.should('be.visible');
		 loginPage.captchaElement.should('be.visible');
		 loginPage.registerButton.should('be.visible');
    });

    it('should the error display when all fields & boxes are empty', () => {
        loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyEmail + loginPage.errorEmptyPassword + loginPage.errorAcceptTerms + loginPage.errorResivedEmail)
    });
	
	 it('should the error display when email fields is empty', () => {
		loginPage.passwordField.type(env.user.password);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.acceptCheckboxEmails.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyEmail);
    });
	
	 it('should the error display when password fields is empty', () => {
		loginPage.emailField.type(env.user.username);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.acceptCheckboxEmails.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyPassword);
    });
	
	it('should the error display when "I accept terms of service" box is empty', () => {
		loginPage.emailField.type(env.user.username);
		loginPage.passwordField.type(env.user.password);
		loginPage.acceptCheckboxEmails.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorAcceptTerms);
    });
	
	it('should the error display when "I agree to receive emails from the SpySERP" box is empty', () => {
		loginPage.emailField.type(env.user.username);
		loginPage.passwordField.type(env.user.password);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorResivedEmail);
    });
	
	it('should the error display when email & password fields are empty', () => {
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.acceptCheckboxEmails.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyEmail + loginPage.errorEmptyPassword);
    });
	
	it('should the error display when email field & "I accept terms of service" box are empty', () => {
		loginPage.passwordField.type(env.user.password);
		loginPage.acceptCheckboxEmails.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyEmail + loginPage.errorAcceptTerms);
    });
	
	it('should the error display when email field & "I agree to receive emails from the SpySERP" box are empty', () => {
		loginPage.passwordField.type(env.user.password);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyEmail + loginPage.errorResivedEmail);
    });
	
	it('should the error display when password field & "I agree to receive emails from the SpySERP" box are empty', () => {
		loginPage.emailField.type(env.user.username);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyPassword + loginPage.errorResivedEmail);
    });
	
	it('should the error display when password field & "I accept terms of service" box are empty', () => {
		loginPage.emailField.type(env.user.username);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorEmptyPassword + loginPage.errorResivedEmail);
    });
	
	it('should the error display when boxs are empty', () => {
		loginPage.emailField.type(env.user.username);
		loginPage.passwordField.type(env.user.password);		
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorAcceptTerms + loginPage.errorResivedEmail);
    });
	
		
	 it('should the error display after entering 6 symbols in the "Password" field', () => {
		loginPage.emailField.type(env.user.username);
		loginPage.passwordField.type(env.invalid_user.password);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.acceptCheckboxEmails.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.error5SymbolsPassword);
    });
	
	it('should the error display after entering invalid email in the "Email" field', () => {
		loginPage.emailField.type(env.invalid_user.username);
		loginPage.passwordField.type(env.user.password);
		loginPage.acceptCheckboxTerms.click({force:true});
		loginPage.acceptCheckboxEmails.click({force:true});
		loginPage.captchaElement.click();
		loginPage.registerButton.click();
		loginPage.errorFields.should('contain', loginPage.errorInvalidPassword);
    });
});
