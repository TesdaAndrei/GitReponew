class Github {
    constructor(){
        this.client_id = '865ead9e2871ee6e7532';
        this.client_secret = '211e290e552c60188f7492b1bd1f362655aa43af';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    } 

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}$client_secret${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile, 
            repos
        };
    }

    
}