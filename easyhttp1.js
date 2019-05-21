class EasyHTTP {
        // Make an HTTP Get request
        get(url){
            return new Promise((resolve, reject) =>{
                fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
            });
        }

        //Make an HTTP Post Request
        post(url, data){
            return new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'POST', 
                     headers: {
                         'Content-type': 'application/json'
                     },
                     body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
            });
        }

    //Make an HTTP Put Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'put',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }
  
    // Make an HTTP Get request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
}

