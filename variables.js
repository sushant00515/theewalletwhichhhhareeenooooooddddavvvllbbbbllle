class VariableHandler {
    constructor(username, balance) {
        this.username = username;
        this.balance = balance;
    }

    // This method generates the query string and redirects to page2.html
    redirectToPage() {
        const url = `paymentdone.html?username=${encodeURIComponent(this.username)}&balance=${encodeURIComponent(this.balance)}`;
        window.location.href = url;
    }

    // This method retrieves URL parameters
    getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const username = params.get('username');
        const balance = params.get('balance');
        return { username, balance };
    }
}
