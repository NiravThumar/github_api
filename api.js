const startTime = performance.now();

async function getUserInfo(userArray){
    let url = 'https://api.github.com/users/';
     var found =0 ;
    var  notFound = 0;
    function showme(data){
        if(!data.id){
            notFound +=1;
            // console.log("not found : ",notFound)
        }
        else{
            found +=1;
            // console.log("found : ",found)

        }
        
    }

    userArray.forEach(user => {
        
        
        fetch(url + user,{
            method:"GET",
            headers:{
                Authorization:  'Bearer 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'
            }
        }).then((response)=>{
            return response.json()
        })
        .then((data)=>{
            showme(data)
        })

    })

    setTimeout(()=>{
        console.log("found : ",found,"Not found :",notFound)
        const endTime = performance.now();
        console.log("Script execution time:", endTime - startTime , "milliseconds");

    },500)


}


getUserInfo(['nirav','sagar','vijay','nirav-improwised']);

// /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
