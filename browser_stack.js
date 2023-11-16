// Define a class called BrowserStacks
class BrowserStacks {
    // Constructor to initialize the stacks and current site
    constructor() {
        this.backStack = [];      // Stack for backward navigation
        this.forwardStack = [];   // Stack for forward navigation
        this.currentSite = null;  // Current site being viewed
    }

    // Method to visit a new site
    visitSite(site) {
        // When a new site is visited, push it onto the back stack
        if (this.currentSite !== null) {
            this.backStack.push(this.currentSite);
        }
        this.forwardStack = [];  // Clear forward stack since we are visiting a new site
        this.currentSite = site; // Update the current site
    }

    // Method to go back to the previous site
    goBack() {
        // Move back by popping from the back stack and pushing onto the forward stack
        if (this.backStack.length > 0) {
            this.forwardStack.push(this.currentSite);
            this.currentSite = this.backStack.pop();
        }
    }

    // Method to go forward to the next site
    goForward() {
        // Move forward by popping from the forward stack and pushing onto the back stack
        if (this.forwardStack.length > 0) {
            this.backStack.push(this.currentSite);
            this.currentSite = this.forwardStack.pop();
        }
    }
}

// Example usage:
const browser = new BrowserStacks();  // Create a new instance of the BrowserStacks class

// Visit sites
browser.visitSite("Google");
browser.visitSite("Yahoo");
browser.visitSite("eBay");

// Navigate back and forward
browser.goBack();      // Go back to Yahoo
browser.goForward();   // Go forward to eBay
browser.visitSite("Apple");  // Visit Apple

// Log current site
console.log("Current Site:", browser.currentSite);
