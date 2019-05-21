class UI {
    constructor (){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
// console.log(user);
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3"><img src="${user.avatar_url}" alt="" class="img-fluid mb-2"><a href="${user.html_url}" class="btn btn-primary">View Profile</a></div>
   
        <div class="col-md-9"><span class="badge badge-primary">Public:  ${user.public_gists}</span>
 <span class="badge badge-success">Follower:  ${user.followers_gists}</span>

 <span class="badge badge-info">following:  ${user.following_gists}</span>

<br><br>
<ul class="list-group">
    <li class="list-group-item">Company:${user.Company}</li>
    <li class="list-group-item">Website/Blog:${user.log}</li>
    <li class="list-group-item">Location:${user.Location}</li>
    <li class="list-group-item">Member Since${user.created_at}:</li>
</ul>
</div>
</div>
</div>
<h3 class="page-heading mb-3">Latest Repos</h3>
<div id="repos"></div>

        `;
        
    }

    showRepos(repos){
         let output = '';
        //console.log(repos);

        repos.forEach(repo => {
            output += `
            
            <div class="card card-body mb-2">
        <div class="row">
            <div class="col-md-6">
                <a href="${repos.html_url}" target="blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
                <span class="badge badge-primary">Star: ${repo.stargazers_count}</span></div>
                <span class="badge badge-primary">Watchers: ${repo.Watchers._count}</span></div>
                <span class="badge badge-primary">Forks: ${repo.Forks._count}</span></div>
        </div>
    </div>
              `;
    });
    
        document.getElementById('repos').innerHTML = output;
}
    
      

    //show Alert message
    showAlert(message, className){
        this.clearAlert();
        // Create div 
    const div = document.createElement('div');
        // Add Class
        div.className = className; 
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);

        // Timeout after 3 sec
        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }
    
    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }

    // Clear profile
    clearProfile(){
        this.profile.innerHTML = ``;
    }
}