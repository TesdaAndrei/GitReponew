class EasyHTTP {
    // Make an HTTP Get request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData; 
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err));
        // });
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const resData = await response.json();
        return resData;
    }

    async put(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    async delete(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData
        
    }

    
}


